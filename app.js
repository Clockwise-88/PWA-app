document.addEventListener("DOMContentLoaded", event => {
   // we can move only if we are not in a browser's tab
   isBrowser = matchMedia("(display-mode: browser)").matches;
   if (!isBrowser) {
      window.moveTo(16, 16);
      window.resizeTo(800, 600);
   }
});
