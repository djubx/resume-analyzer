'use client';
import * as amplitude from '@amplitude/unified';

let isInitialized = false;

function initAmplitude() {
  if (typeof window !== 'undefined' && !isInitialized) {
    amplitude.initAll('ce035ba578cad02863ca59fc01a21ce', {
      analytics: { autocapture: true },
      sessionReplay: { sampleRate: 1 },
    });
    isInitialized = true;
  }
}

initAmplitude();

// Export the Amplitude component for layout
export const Amplitude = () => null;

// Export tracking functions for easy use throughout the app
export const trackEvent = (eventName: string, eventProperties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    amplitude.track(eventName, eventProperties);
  }
};

// Alias for modules that import `track` directly
export const track = trackEvent;

export const trackPageView = (pageName: string, pageProperties?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    amplitude.track('Page Viewed', {
      page_name: pageName,
      ...pageProperties,
    });
  }
};

// Resume-specific events
export const trackResumeUpload = (tool: string, fileSize: number, fileType: string) => {
  trackEvent('Resume Uploaded', {
    tool,
    file_size_kb: Math.round(fileSize / 1024),
    file_type: fileType,
  });
};

export const trackAnalysisComplete = (
  tool: string,
  score: number,
  duration: number,
  cached: boolean
) => {
  trackEvent('Analysis Completed', {
    tool,
    score,
    duration_ms: duration,
    from_cache: cached,
  });
};

export const trackAnalysisError = (tool: string, errorType: string, errorMessage: string) => {
  trackEvent('Analysis Error', {
    tool,
    error_type: errorType,
    error_message: errorMessage,
  });
};

// Export default amplitude for custom tracking
export default amplitude;
