// This runs in the main browser window, NOT the service worker
window.addEventListener('DOMContentLoaded', () => {
  // Only resize if running as an installed PWA (standalone)
  if (window.matchMedia('(display-mode: standalone)').matches) {
    const w = window.screen.availWidth * 0.8;
    const h = window.screen.availHeight * 0.8;
    window.resizeTo(w, h);
    window.moveTo((window.screen.availWidth - w) / 2, (window.screen.availHeight - h) / 2);
  }
});
