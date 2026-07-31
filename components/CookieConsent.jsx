'use client';

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const choice = localStorage.getItem('foodie-cookie-consent');
    if (!choice) {
      setVisible(true);
    }
  }, []);

  const saveChoice = (choice) => {
    const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `foodie_cookie_consent=${choice}; path=/; max-age=31536000; SameSite=Lax; expires=${expires}`;
    localStorage.setItem('foodie-cookie-consent', choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className='fixed bottom-4 left-4 right-4 z-[60] md:left-auto md:right-4 md:max-w-md'>
      <div className='rounded-2xl border border-orange-100 bg-white/95 p-4 shadow-2xl backdrop-blur'>
        <p className='text-sm font-semibold text-slate-800'>We use cookies to keep you signed in and improve your experience.</p>
        <p className='mt-2 text-sm text-slate-600'>This app uses cookies for authentication, cart session handling, and preference storage.</p>
        <div className='mt-4 flex flex-wrap gap-2'>
          <button
            onClick={() => saveChoice('accepted')}
            className='rounded-lg bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700'
          >
            Accept
          </button>
          <button
            onClick={() => saveChoice('declined')}
            className='rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100'
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
