(() => {
  const DESKTOP_BREAKPOINT = 1100;

  const setup = () => {
    const carousel = document.querySelector("[data-post-carousel]");
    if (!carousel) return;

    const cards = Array.from(carousel.querySelectorAll(".grid__item"));
    const previous = carousel.querySelector("[data-carousel-previous]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    if (!cards.length || !previous || !next) return;

    let firstVisible = 0;
    let visibleCount = window.innerWidth >= DESKTOP_BREAKPOINT ? 2 : 1;

    const availableCards = () => cards.filter((card) => card.dataset.filterMatch !== "false");
    const lastStart = () => Math.max(availableCards().length - visibleCount, 0);

    const render = () => {
      const available = availableCards();
      firstVisible = Math.min(firstVisible, Math.max(available.length - visibleCount, 0));

      cards.forEach((card) => {
        const index = available.indexOf(card);
        card.hidden = index < firstVisible || index >= firstVisible + visibleCount;
      });

      const hasMore = available.length > visibleCount;
      previous.disabled = !hasMore;
      next.disabled = !hasMore;

      if (status) {
        const end = Math.min(firstVisible + visibleCount, available.length);
        status.textContent = available.length
          ? `Showing ${firstVisible + 1}–${end} of ${available.length} build notes`
          : "No build notes match this filter";
      }
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

    carousel.querySelector(".home-build-grid")?.addEventListener("portfoliofilterchange", () => {
      firstVisible = 0;
      render();
    });

    render();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setup, { once: true });
  } else {
    setup();
  }
})();
