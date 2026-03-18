/**
 * Paddle Webhook Handler
 * ======================
 * Receives event notifications from Paddle and processes subscription/payment changes.
 * Persists subscription state to Sanity so the app can gate features accordingly.
 *
 * WHAT YOU NEED TO DO IN THE PADDLE DASHBOARD
 * --------------------------------------------
 * 1. Go to Developer Tools → Webhooks → Add Destination
 * 2. Set the URL to: https://<your-domain>/api/paddle/webhook
 * 3. Enable at minimum:
 *      - subscription.created
 *      - subscription.updated
 *      - subscription.canceled
 *      - transaction.completed
 *      - transaction.payment_failed
 * 4. Copy the "Secret key" (starts with pdl_ntfset_...) into
 *    PADDLE_WEBHOOK_SECRET_KEY in your .env.local file.
 */

import { NextRequest, NextResponse } from "next/server";
import { getPaddleClient } from "@/lib/paddle";
import { EventName } from "@paddle/paddle-node-sdk";
import { createClient } from "next-sanity";

const sanity = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2023-05-03",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

/** Map a Paddle price ID to a human-readable plan name */
function resolvePlan(priceId: string): string {
  const map: Record<string, string> = {
    [process.env.NEXT_PUBLIC_PADDLE_PRO_MONTHLY_PRICE_ID ?? ""]: "pro_monthly",
    [process.env.NEXT_PUBLIC_PADDLE_PRO_ANNUAL_PRICE_ID ?? ""]: "pro_annual",
    [process.env.NEXT_PUBLIC_PADDLE_ENTERPRISE_MONTHLY_PRICE_ID ?? ""]: "enterprise_monthly",
    [process.env.NEXT_PUBLIC_PADDLE_ENTERPRISE_ANNUAL_PRICE_ID ?? ""]: "enterprise_annual",
  };
  return map[priceId] ?? "unknown";
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET_KEY;

  if (!webhookSecret) {
    console.error("PADDLE_WEBHOOK_SECRET_KEY is not set.");
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("paddle-signature") ?? "";

  let event;
  try {
    const paddle = getPaddleClient();
    event = await paddle.webhooks.unmarshal(rawBody, webhookSecret, signature);
  } catch (err) {
    console.error("Paddle webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.eventType) {
      case EventName.SubscriptionCreated: {
        const sub = event.data;
        const priceId = sub.items?.[0]?.price?.id ?? "";
        const email = sub.customData && typeof sub.customData === 'object' && 'email' in sub.customData
          ? String(sub.customData.email)
          : undefined;

        await sanity.createOrReplace({
          _type: "subscription",
          _id: `subscription-${sub.id}`,
          paddleSubscriptionId: sub.id,
          paddleCustomerId: sub.customerId,
          customerEmail: email,
          priceId,
          plan: resolvePlan(priceId),
          status: sub.status,
          currentPeriodEnd: sub.currentBillingPeriod?.endsAt
            ? new Date(sub.currentBillingPeriod.endsAt).toISOString()
            : null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });

        console.log("Subscription created and saved:", sub.id);
        break;
      }

      case EventName.SubscriptionUpdated: {
        const sub = event.data;
        const priceId = sub.items?.[0]?.price?.id ?? "";

        await sanity
          .patch(`subscription-${sub.id}`)
          .set({
            status: sub.status,
            priceId,
            plan: resolvePlan(priceId),
            currentPeriodEnd: sub.currentBillingPeriod?.endsAt
              ? new Date(sub.currentBillingPeriod.endsAt).toISOString()
              : null,
            updatedAt: new Date().toISOString(),
          })
          .commit();

        console.log("Subscription updated:", sub.id, "→", sub.status);
        break;
      }

      case EventName.SubscriptionCanceled: {
        const sub = event.data;

        await sanity
          .patch(`subscription-${sub.id}`)
          .set({ status: "canceled", updatedAt: new Date().toISOString() })
          .commit();

        console.log("Subscription canceled:", sub.id);
        break;
      }

      case EventName.TransactionCompleted:
        console.log("Transaction completed:", event.data.id);
        break;

      case EventName.TransactionPaymentFailed:
        console.log("Transaction payment failed:", event.data.id);
        break;

      default:
        console.log("Unhandled Paddle event type:", event.eventType);
    }
  } catch (err) {
    console.error("Error processing Paddle webhook event:", err);
    return NextResponse.json({ error: "Internal error processing event" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
