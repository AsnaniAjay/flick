import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import posthog from "posthog-js";
import mixpanel from "mixpanel-browser";

import HomePage from "./pages/HomePage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import RefundPage from "./pages/RefundPage";
import ContactPage from "./pages/Contact";

// Initialize PostHog
const initializePostHog = () => {
  // Code remains the same
  const posthogKey = import.meta.env.VITE_POSTHOG_KEY;
  const posthogHost = import.meta.env.VITE_POSTHOG_HOST;

  if (!posthogKey || !posthogHost) return;

  if (typeof window !== "undefined") {
    try {
      posthog.init(posthogKey, { api_host: posthogHost });
    } catch (error) {
      console.error("PostHog initialization error:", error);
    }
  }
};

// Initialize Mixpanel
const initializeMixpanel = () => {
  // Code remains the same
  const mixpanelToken = import.meta.env.VITE_MIXPANEL_TOKEN;

  if (!mixpanelToken) return;

  if (typeof window !== "undefined") {
    try {
      mixpanel.init(mixpanelToken, {
        debug: import.meta.env.MODE === "production",
      });
      mixpanel.register({ program_type: "flick-website" });
    } catch (error) {
      console.error("Mixpanel initialization error:", error);
    }
  }
};

// Component to track page views
const TrackPageView = () => {
  // Code remains the same
  const location = useLocation();
  const [isTrackingInitialized, setTrackingInitialized] = useState(false);

  // Initialize tracking tools once
  useEffect(() => {
    if (!isTrackingInitialized) {
      initializePostHog();
      initializeMixpanel();
      setTrackingInitialized(true);
    }
  }, [isTrackingInitialized]);

  // Track page views on route changes
  useEffect(() => {
    const metadata = {
      page: location.pathname || "unknown",
      referrer: document.referrer || "direct",
    };

    if (
      import.meta.env.MODE === "production" ||
      import.meta.env.VITE_TRACK_IN_DEVELOPMENT === "true"
    ) {
      try {
        posthog.capture("$pageview", metadata);
      } catch (error) {
        console.error("PostHog capture error:", error);
      }

      try {
        mixpanel.track("Page View", metadata);
      } catch (error) {
        console.error("Mixpanel track error:", error);
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <>
      {/* No Router here - it'll be provided by server-entry.jsx or main.jsx */}
      {typeof window !== "undefined" && <TrackPageView />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/terms-and-conditions" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/refund-policy" element={<RefundPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </>
  );
};

export default App;