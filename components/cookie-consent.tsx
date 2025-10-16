// components/cookie-consent.tsx
"use client";
import { useEffect, useState } from "react";
import { useLocale } from 'next-intl';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const ok = typeof window !== "undefined" && localStorage.getItem("cookie-consent") === "true";
    if (!ok) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 max-w-xl w-[92%] rounded-xl border p-4 shadow bg-white text-gray-900">
      <p className="text-sm">
        We use cookies to improve experience and analytics. See our <a className="underline" href={`/${locale}/legal/privacy`}>Privacy Policy</a>.
      </p>
      <div className="mt-3 flex gap-2">
        <button
          onClick={() => { localStorage.setItem("cookie-consent", "true"); setVisible(false); }}
          className="rounded-md border px-3 py-1.5 text-sm"
          aria-label="Accept cookies"
        >
          Accept
        </button>
        <a href={`/${locale}/legal/privacy`} className="rounded-md border px-3 py-1.5 text-sm" aria-label="View privacy policy">
          Learn more
        </a>
      </div>
    </div>
  );
}
