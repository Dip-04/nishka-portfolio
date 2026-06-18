'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';

const DISMISS_KEY = 'nishka-pwa-install-dismissed-at';
const DISMISS_MS = 1000 * 60 * 60 * 24 * 3;

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
};

export default function ClientShell({
  children
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isAndroidChrome, setIsAndroidChrome] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1400);
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const next = max > 0 ? (window.scrollY / max) * 100 : 0;
      setProgress(next);
    };
    const onMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };
    const isStandalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
    const isAndroid = /Android/i.test(navigator.userAgent);
    const isChrome =
      /Chrome/i.test(navigator.userAgent) && !/Edg|OPR|SamsungBrowser/i.test(navigator.userAgent);
    setIsAndroidChrome(isAndroid && isChrome && !isStandalone);

    const storedDismissal = window.localStorage.getItem(DISMISS_KEY);
    if (storedDismissal) {
      const dismissedAt = Number(storedDismissal);
      if (Number.isFinite(dismissedAt) && Date.now() - dismissedAt < DISMISS_MS) {
        setShowInstallPrompt(false);
      } else {
        window.localStorage.removeItem(DISMISS_KEY);
      }
    }

    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      const promptEvent = event as BeforeInstallPromptEvent;
      setInstallPrompt(promptEvent);

      const dismissedAt = window.localStorage.getItem(DISMISS_KEY);
      const recentlyDismissed =
        dismissedAt && Number.isFinite(Number(dismissedAt))
          ? Date.now() - Number(dismissedAt) < DISMISS_MS
          : false;

      if (!recentlyDismissed) {
        setShowInstallPrompt(true);
      }
    };

    const onAppInstalled = () => {
      setInstallPrompt(null);
      setShowInstallPrompt(false);
      window.localStorage.removeItem(DISMISS_KEY);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMove);
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);
    onScroll();
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPrompt) return;
    setShowInstallPrompt(false);
    await installPrompt.prompt();
    const choice = await installPrompt.userChoice;

    if (choice.outcome === 'dismissed') {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    }

    setInstallPrompt(null);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
  };

  return (
    <>
      <AnimatePresence mode="wait">{loading ? <LoadingScreen key="loading" /> : null}</AnimatePresence>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-1 bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-[#66f7ff] via-[#ff5bd6] to-[#f7c96e]"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div
        className="pointer-events-none fixed z-[70] hidden h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(102,247,255,0.18)_0%,rgba(255,91,214,0.08)_35%,transparent_70%)] blur-3xl md:block"
        style={{ left: cursor.x, top: cursor.y }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
      <AnimatePresence>
        {showInstallPrompt && isAndroidChrome ? (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed inset-x-0 bottom-0 z-[90] p-4 sm:p-6"
          >
            <div className="mx-auto flex w-full max-w-xl items-center gap-4 rounded-[1.75rem] border border-white/10 bg-[rgba(7,9,20,0.88)] px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#66f7ff] via-[#ff5bd6] to-[#f7c96e] text-[0.7rem] font-extrabold uppercase tracking-[0.3em] text-[#050616]">
                N
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white">Install Nishka</p>
                <p className="mt-1 text-xs leading-5 text-white/70">
                  Add the app to your Android home screen for faster access and a more native feel.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={handleDismiss}
                  className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-white/75 transition hover:border-white/20 hover:text-white"
                >
                  Not now
                </button>
                <button
                  type="button"
                  onClick={handleInstall}
                  className="rounded-full bg-gradient-to-r from-[#66f7ff] via-[#ff5bd6] to-[#f7c96e] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#050616] transition hover:brightness-110"
                >
                  Install
                </button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
