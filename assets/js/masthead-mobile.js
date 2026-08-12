(() => {
  const MOBILE_BREAKPOINT = 600;

  const setup = () => {
    const nav = document.getElementById("site-nav");
    if (!nav) return;

    const visible = nav.querySelector(".visible-links");
    const hidden = nav.querySelector(".hidden-links");
    const button = nav.querySelector("button");
    const brand = visible && visible.querySelector(".masthead__menu-item--lg");
    if (!visible || !hidden || !button || !brand) return;

    const initialItems = Array.from(nav.querySelectorAll(".masthead__menu-item"))
      .filter((item) => item !== brand);
    const themeToggle = initialItems.find((item) => item.id === "theme-toggle");
    const orderedItems = initialItems.filter((item) => item !== themeToggle);
    if (themeToggle) orderedItems.push(themeToggle);

    orderedItems.forEach((item, index) => {
      item.dataset.mobileNavOrder = String(index);
    });

    const menuItems = () => Array.from(nav.querySelectorAll(".masthead__menu-item"))
      .filter((item) => item !== brand)
      .sort((first, second) => Number(first.dataset.mobileNavOrder) - Number(second.dataset.mobileNavOrder));

    let mobileLayout = false;

    const sync = () => {
      const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

      if (isMobile) {
        menuItems().forEach((item) => hidden.appendChild(item));
        hidden.classList.add("hidden");
        button.classList.remove("hidden");
        mobileLayout = true;
        return;
      }

      if (!mobileLayout) return;

      menuItems().forEach((item) => visible.appendChild(item));
      hidden.classList.add("hidden");
      mobileLayout = false;

      window.requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));
    };

    sync();
    window.addEventListener("resize", sync);
    window.addEventListener("orientationchange", sync);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();
