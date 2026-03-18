/**
 * Paddle Server-Side Client Configuration
 * ========================================
 *
 * WHAT YOU NEED FROM YOUR PADDLE DASHBOARD (app.paddle.com)
 * ----------------------------------------------------------
 * 1. PADDLE_API_KEY
 *    Developer Tools → Authentication → API Keys
 *    Create a key with Read + Write permissions.
 *    Example: pdl_live_apikey_...
 *
 * 2. PADDLE_WEBHOOK_SECRET_KEY
 *    Developer Tools → Webhooks → Add Destination
 *    Register a webhook endpoint pointing to:
 *      https://<your-domain>/api/paddle/webhook
 *    Enable at minimum:
 *      - subscription.created
 *      - subscription.updated
 *      - subscription.canceled
 *      - transaction.completed
 *      - transaction.payment_failed
 *    Copy the generated secret key (starts with pdl_ntfset_...).
 *
 * 3. Product & Price IDs  (Catalog → Products)
 *    Create two products: "Pro" and "Enterprise".
 *    For each product add two prices:
 *      - Monthly recurring price
 *      - Annual recurring price
 *    Copy the generated Price IDs (start with pri_...) and add them to .env.local:
 *      PADDLE_PRO_MONTHLY_PRICE_ID
 *      PADDLE_PRO_ANNUAL_PRICE_ID
 *      PADDLE_ENTERPRISE_MONTHLY_PRICE_ID
 *      PADDLE_ENTERPRISE_ANNUAL_PRICE_ID
 *
 * 4. NEXT_PUBLIC_PADDLE_CLIENT_TOKEN  (for client-side Paddle.js overlay checkout)
 *    Developer Tools → Authentication → Client-side tokens
 *    Create a token and note it (starts with live_...).
 *
 * 5. PADDLE_ENVIRONMENT
 *    Set to "sandbox" during development/testing (use app.sandbox.paddle.com for sandbox).
 *    Set to "production" when going live.
 *
 * All of the above must be stored in .env.local (never committed to source control).
 * See the .env file in the project root for the full list of required variables.
 */

import { Paddle, Environment } from "@paddle/paddle-node-sdk";

/**
 * Returns a singleton Paddle server-side client.
 * The function throws at call-time (not module load time) so that
 * Next.js pages/components that do NOT use Paddle are not affected by
 * a missing API key during SSR/ISR.
 */
function createPaddleClient(): Paddle {
  const apiKey = process.env.PADDLE_API_KEY;

  if (!apiKey) {
    throw new Error(
      "PADDLE_API_KEY is not set. " +
        "Add it to .env.local — see src/lib/paddle.ts for full setup instructions."
    );
  }

  const environment =
    process.env.PADDLE_ENVIRONMENT === "production"
      ? Environment.production
      : Environment.sandbox;

  return new Paddle(apiKey, { environment });
}

// Module-level singleton (created lazily on first use)
let _paddle: Paddle | undefined;

export function getPaddleClient(): Paddle {
  if (!_paddle) {
    _paddle = createPaddleClient();
  }
  return _paddle;
}

export { Environment };
