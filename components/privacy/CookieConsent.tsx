"use client";

import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const GA_MEASUREMENT_ID = "G-P659S0649K";
const CONSENT_STORAGE_KEY = "christeck-cookie-consent";

type ConsentChoice = "accepted" | "rejected";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function updateAnalyticsConsent(choice: ConsentChoice) {
  window.gtag?.("consent", "update", {
    analytics_storage: choice === "accepted" ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export default function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const savedChoice = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (savedChoice === "accepted" || savedChoice === "rejected") {
      setChoice(savedChoice);
      updateAnalyticsConsent(savedChoice);
    } else {
      setShowBanner(true);
    }

    const handleOpenPreferences = () => {
      setShowBanner(true);
    };

    window.addEventListener(
      "open-cookie-preferences",
      handleOpenPreferences
    );

    return () => {
      window.removeEventListener(
        "open-cookie-preferences",
        handleOpenPreferences
      );
    };
  }, []);

  const saveChoice = (newChoice: ConsentChoice) => {
    localStorage.setItem(CONSENT_STORAGE_KEY, newChoice);

    updateAnalyticsConsent(newChoice);

    setChoice(newChoice);
    setShowBanner(false);

    // Reload after withdrawing consent so GA4 is not loaded
    // again on the next page session.
    if (newChoice === "rejected" && choice === "accepted") {
      window.location.reload();
    }
  };

  return (
    <>
      {choice === "accepted" && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      )}

      {showBanner && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-200 bg-white p-5 shadow-2xl sm:p-7"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#176C73]">
                CHRISTECK Privacy
              </p>

              <h2
                id="cookie-consent-title"
                className="mb-2 text-lg font-semibold text-slate-900"
              >
                Your privacy matters to us
              </h2>

              <p className="text-sm leading-6 text-slate-600">
                We use analytics cookies to understand how visitors use
                our website and improve your experience. You can accept
                or reject analytics tracking. Your choice can be changed
                at any time.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => saveChoice("rejected")}
                className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Reject All
              </button>

              <button
                type="button"
                onClick={() => saveChoice("accepted")}
                className="rounded-lg bg-[#176C73] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12565C]"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}