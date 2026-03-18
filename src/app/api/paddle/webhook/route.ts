/**
 * Paddle Webhook Handler
 * ======================
 * Receives event notifications from Paddle and processes subscription/payment changes.
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
 *
 * NOTE: Paddle sends webhooks with a signature header. This handler verifies
 * the signature before processing any event to prevent spoofing.
 */

import { NextRequest, NextResponse } from "next/server";
import { getPaddleClient } from "@/lib/paddle";
import { EventName } from "@paddle/paddle-node-sdk";

export async function POST(req: NextRequest): Promise<NextResponse> {
  const webhookSecret = process.env.PADDLE_WEBHOOK_SECRET_KEY;

  if (!webhookSecret) {
    console.error(
      "PADDLE_WEBHOOK_SECRET_KEY is not set — " +
        "see src/app/api/paddle/webhook/route.ts for setup instructions."
    );
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  // Read the raw body (needed for signature verification)
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
      case EventName.SubscriptionCreated:
        /**
         * TODO: A new subscription was created.
         * - Save the subscription ID and customer ID in Sanity (or your DB).
         * - Grant the user the features of their chosen plan.
         * event.data contains: id, customerId, status, items (priceId, quantity), etc.
         */
        console.log("Subscription created:", event.data.id);
        break;

      case EventName.SubscriptionUpdated:
        /**
         * TODO: Subscription was changed (plan upgrade/downgrade, renewal, pause, etc.)
         * - Update the stored subscription record.
         * - Adjust feature access accordingly.
         */
        console.log("Subscription updated:", event.data.id);
        break;

      case EventName.SubscriptionCanceled:
        /**
         * TODO: Subscription was cancelled.
         * - Mark the subscription as cancelled in your DB.
         * - Revoke premium feature access (optionally after the current period ends).
         */
        console.log("Subscription cancelled:", event.data.id);
        break;

      case EventName.TransactionCompleted:
        /**
         * TODO: A payment was successfully completed.
         * - This fires for every successful charge (initial and renewals).
         * - Optionally store invoice data or trigger a "payment successful" email.
         */
        console.log("Transaction completed:", event.data.id);
        break;

      case EventName.TransactionPaymentFailed:
        /**
         * TODO: A payment attempt failed.
         * - Notify the user so they can update their payment method.
         * - Paddle will automatically retry; you may want to flag the account.
         */
        console.log("Transaction payment failed:", event.data.id);
        break;

      default:
        // Unhandled event type — safe to ignore
        console.log("Unhandled Paddle event type:", event.eventType);
    }
  } catch (err) {
    console.error("Error processing Paddle webhook event:", err);
    return NextResponse.json(
      { error: "Internal error processing event" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
