(() => {
  const setup = () => {
    const toggle = document.getElementById("whatsapp-chat-toggle");
    if (!toggle) return;

    const seenKey = "nayem-whatsapp-chat-seen";
    const canAutoOpen = window.matchMedia("(min-width: 48rem)").matches;

    if (canAutoOpen && !sessionStorage.getItem(seenKey)) {
      window.setTimeout(() => {
        toggle.checked = true;
        sessionStorage.setItem(seenKey, "true");
      }, 5000);
    }

    toggle.addEventListener("change", () => {
      if (toggle.checked) sessionStorage.setItem(seenKey, "true");
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();
