"use client";

/**
 * PaddleProvider
 * ==============
 * Initialises the Paddle.js client-side SDK so that any component can
 * open the overlay checkout without a full-page redirect.
 *
 * WHAT YOU NEED
 * -------------
 * 1. NEXT_PUBLIC_PADDLE_CLIENT_TOKEN
 *    Paddle Dashboard → Developer Tools → Authentication → Client-side tokens
 *    Create a token and copy it here (starts with "live_" for production
 *    or "test_" for the sandbox environment).
 *    Add it to .env.local:
 *      NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=live_...
 *
 * 2. NEXT_PUBLIC_PADDLE_ENVIRONMENT
 *    Set to "sandbox" for local development/testing (default).
 *    Set to "production" when going live.
 *    Add to .env.local:
 *      NEXT_PUBLIC_PADDLE_ENVIRONMENT=sandbox
 *
 * Usage
 * -----
 * Wrap your app (or the pricing page) with <PaddleProvider>.
 * In any child component use the usePaddle() hook to access the Paddle instance
 * and open a checkout:
 *
 *   const paddle = usePaddle();
 *   paddle?.Checkout.open({ items: [{ priceId: "pri_...", quantity: 1 }] });
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { initializePaddle, Paddle } from "@paddle/paddle-js";

const PaddleContext = createContext<Paddle | undefined>(undefined);

interface PaddleProviderProps {
  children: ReactNode;
}

export function PaddleProvider({ children }: PaddleProviderProps) {
  const [paddle, setPaddle] = useState<Paddle | undefined>(undefined);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;

    if (!token) {
      // During the free promotional period (or local dev without credentials)
      // the checkout is disabled — this is expected and non-fatal.
      console.warn(
        "NEXT_PUBLIC_PADDLE_CLIENT_TOKEN is not set. " +
          "Paddle checkout will be unavailable. " +
          "See src/components/PaddleProvider.tsx for setup instructions."
      );
      return;
    }

    const environment =
      process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT === "production"
        ? "production"
        : "sandbox";

    initializePaddle({
      environment,
      token,
      eventCallback(event) {
        if (event.name === 'checkout.error') {
          console.error('[Paddle] checkout.error event:', JSON.stringify(event, null, 2));
        }
      },
    })
      .then((instance) => {
        if (instance) setPaddle(instance);
      })
      .catch((err) => {
        console.error("Paddle.js failed to initialise:", err);
      });
  }, []);

  return (
    <PaddleContext.Provider value={paddle}>{children}</PaddleContext.Provider>
  );
}

/**
 * Returns the initialised Paddle instance (or undefined if not yet ready /
 * not configured). Check for undefined before calling checkout methods.
 */
export function usePaddle(): Paddle | undefined {
  return useContext(PaddleContext);
}
