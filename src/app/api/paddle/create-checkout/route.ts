/**
 * Paddle Create-Checkout Endpoint
 * ================================
 * Creates a Paddle checkout transaction and returns the checkout URL
 * (or transaction ID for the overlay checkout flow).
 *
 * WHAT YOU NEED TO DO FIRST
 * --------------------------
 * 1. Create your products and prices in the Paddle dashboard:
 *    Catalog → Products → New Product (create "Pro" and "Enterprise")
 *    For each product add prices:
 *      - Monthly   (e.g. $12/mo for Pro)
 *      - Annual    (e.g. $8/mo × 12 = $96/year for Pro)
 *    Copy the Price IDs (start with pri_...) into .env.local:
 *      PADDLE_PRO_MONTHLY_PRICE_ID=pri_...
 *      PADDLE_PRO_ANNUAL_PRICE_ID=pri_...
 *      PADDLE_ENTERPRISE_MONTHLY_PRICE_ID=pri_...
 *      PADDLE_ENTERPRISE_ANNUAL_PRICE_ID=pri_...
 *
 * 2. Make sure PADDLE_API_KEY is set in .env.local.
 *
 * Request body (JSON):
 *   { priceId: string, userEmail?: string }
 *
 * Response (JSON):
 *   { checkoutUrl: string }  — redirect the user to this URL, or
 *   use NEXT_PUBLIC_PADDLE_CLIENT_TOKEN + Paddle.js overlay instead.
 */

import { NextRequest, NextResponse } from "next/server";
import { getPaddleClient } from "@/lib/paddle";

export async function POST(req: NextRequest): Promise<NextResponse> {
  let priceId: string;
  let userEmail: string | undefined;

  try {
    const body = await req.json();
    priceId = body.priceId;
    userEmail = body.userEmail;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!priceId) {
    return NextResponse.json(
      { error: "priceId is required" },
      { status: 400 }
    );
  }

  try {
    const paddle = getPaddleClient();

    // Create a one-time checkout transaction.
    // Paddle will redirect the user to its hosted checkout page.
    const transaction = await paddle.transactions.create({
      items: [{ priceId, quantity: 1 }],
      // Optional: pre-fill the customer's email to speed up checkout
      ...(userEmail ? { customer: { email: userEmail } } : {}),
    });

    // The hosted checkout URL is available at transaction.checkout?.url
    const checkoutUrl = transaction.checkout?.url;

    if (!checkoutUrl) {
      console.error("Paddle transaction created but checkout URL is missing. Transaction ID:", transaction.id);
      return NextResponse.json(
        { error: "Could not retrieve checkout URL from Paddle" },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    console.error("Failed to create Paddle checkout:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
