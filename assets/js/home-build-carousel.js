(() => {
  const DESKTOP_BREAKPOINT = 1100;

  const setup = () => {
    const carousel = document.querySelector("[data-post-carousel]");
    if (!carousel) return;

    const cards = Array.from(carousel.querySelectorAll(".grid__item"));
    const previous = carousel.querySelector("[data-carousel-previous]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    if (!cards.length || !previous || !next || !status) return;

    let firstVisible = 0;
    let visibleCount = window.innerWidth >= DESKTOP_BREAKPOINT ? 2 : 1;

    const lastStart = () => Math.max(cards.length - visibleCount, 0);

    const render = () => {
      cards.forEach((card, index) => {
        card.hidden = index < firstVisible || index >= firstVisible + visibleCount;
      });

      const lastVisible = Math.min(firstVisible + visibleCount, cards.length);
      status.textContent = `${firstVisible + 1}–${lastVisible} of ${cards.length}`;
    };

    previous.addEventListener("click", () => {
      firstVisible = firstVisible === 0 ? lastStart() : Math.max(firstVisible - visibleCount, 0);
      render();
    });

    next.addEventListener("click", () => {
      firstVisible = firstVisible >= lastStart() ? 0 : Math.min(firstVisible + visibleCount, lastStart());
      render();
    });

    window.addEventListener("resize", () => {
      const nextVisibleCount = window.innerWidth >= DESKTOP_BREAKPOINT ? 2 : 1;
      if (nextVisibleCount === visibleCount) return;

      visibleCount = nextVisibleCount;
      firstVisible = Math.min(firstVisible, lastStart());
      render();
    });

    render();
  };

  window.addEventListener("load", setup, { once: true });
})();
