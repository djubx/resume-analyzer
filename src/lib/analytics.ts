/**
 * Amplitude Analytics Wrapper
 * 
 * This module provides a simple interface for tracking events with Amplitude.
 * It handles initialization and provides type-safe event tracking.
 */

import * as amplitude from '@amplitude/analytics-browser';

/**
 * Initialize Amplitude with your API key
 * Call this once when your app starts
 */
export function initAnalytics() {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  
  if (!apiKey) {
    console.warn('Amplitude API key not found. Analytics will not be tracked.');
    return;
  }

  amplitude.init(apiKey, undefined, {
    defaultTracking: {
      sessions: true,
      pageViews: true,
      formInteractions: false,
      fileDownloads: false,
    },
  });
}

/**
 * Track a custom event
 * @param eventName - Name of the event to track
 * @param eventProperties - Additional properties to include with the event
 */
export function track(eventName: string, eventProperties?: Record<string, any>) {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  
  if (!apiKey) {
    // In development, log events to console instead
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Analytics Event:', eventName, eventProperties);
    }
    return;
  }

  amplitude.track(eventName, eventProperties);
}

/**
 * Identify a user
 * @param userId - Unique identifier for the user
 * @param userProperties - Additional properties about the user
 */
export function identify(userId: string, userProperties?: Record<string, any>) {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  
  if (!apiKey) {
    return;
  }

  amplitude.setUserId(userId);
  
  if (userProperties) {
    const identifyEvent = new amplitude.Identify();
    Object.entries(userProperties).forEach(([key, value]) => {
      identifyEvent.set(key, value);
    });
    amplitude.identify(identifyEvent);
  }
}

/**
 * Reset user identity (for logout)
 */
export function resetIdentity() {
  const apiKey = process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY;
  
  if (!apiKey) {
    return;
  }

  amplitude.reset();
}
