(() => {
  const setup = () => {
    const toggle = document.getElementById("whatsapp-chat-toggle");
    const panel = document.getElementById("whatsapp-chat-panel");
    const launcher = document.querySelector(".whatsapp-chat__launcher label");
    if (!toggle || !panel || !launcher) return;

    const setOpenState = () => {
      panel.classList.toggle("is-open", toggle.checked);
      launcher.setAttribute("aria-expanded", String(toggle.checked));
      launcher.setAttribute("aria-label", toggle.checked ? "Close WhatsApp chat" : "Open WhatsApp chat");
    };

    const seenKey = "nayem-whatsapp-chat-seen";
    const canAutoOpen = window.matchMedia("(min-width: 48rem)").matches;

    if (canAutoOpen && !sessionStorage.getItem(seenKey)) {
      window.setTimeout(() => {
        toggle.checked = true;
        setOpenState();
        sessionStorage.setItem(seenKey, "true");
      }, 5000);
    }

    toggle.addEventListener("change", () => {
      setOpenState();
      if (toggle.checked) sessionStorage.setItem(seenKey, "true");
    });

    setOpenState();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();
