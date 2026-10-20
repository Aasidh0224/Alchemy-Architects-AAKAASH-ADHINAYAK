/** Register the app-shell service worker only in production builds. */
export function registerPwa(): void {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return;
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', { scope: '/' }).catch((error: unknown) => {
      console.warn('[AAKAASH PWA] Service worker registration failed:', error);
    });
  });
}
