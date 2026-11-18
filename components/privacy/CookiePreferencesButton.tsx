"use client";

export default function CookiePreferencesButton() {
  const openPreferences = () => {
    window.dispatchEvent(new Event("open-cookie-preferences"));
  };

  return (
    <button
      type="button"
      onClick={openPreferences}
      className="text-sm text-slate-400 transition-colors hover:text-white"
    >
      Cookie Preferences
    </button>
  );
}