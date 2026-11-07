// Mobile Touch-Swipeable & Auto-Loop Carousel for Bento Grid & Build Notes (<= 768px)
(() => {
  function initMobileCarousel(containerSelector, itemSelector, intervalMs = 3000) {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    let items = Array.from(container.querySelectorAll(itemSelector));
    if (!items.length) return;

    let timer = null;
    let isTouching = false;
    let resumeTimeout = null;

    function getVisibleItems() {
      // For builds that might be filtered by data-filter-match or display: none
      return items.filter(el => {
        if (el.dataset.filterMatch === "false") return false;
        if (el.offsetParent === null && el.style.display === "none") return false;
        return true;
      });
    }

    function scrollNext() {
      if (window.innerWidth > 768 || isTouching) return;
      const visible = getVisibleItems();
      if (visible.length <= 1) return;

      const currentScroll = container.scrollLeft;
      const containerWidth = container.clientWidth;
      
      // Find current active index
      let currentIndex = 0;
      let minDiff = Infinity;
      visible.forEach((el, idx) => {
        const diff = Math.abs(el.offsetLeft - container.offsetLeft - currentScroll);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = idx;
        }
      });

      let nextIndex = currentIndex + 1;
      if (nextIndex >= visible.length) {
        // Loop back to start smoothly
        nextIndex = 0;
      }

      const targetEl = visible[nextIndex];
      if (targetEl) {
        const targetLeft = targetEl.offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: targetLeft,
          behavior: 'smooth'
        });
      }
    }

    function startTimer() {
      stopTimer();
      if (window.innerWidth <= 768) {
        timer = setInterval(scrollNext, intervalMs);
      }
    }

    function stopTimer() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // Touch & swipe interactions
    container.addEventListener('touchstart', () => {
      isTouching = true;
      stopTimer();
      if (resumeTimeout) clearTimeout(resumeTimeout);
    }, { passive: true });

    container.addEventListener('touchend', () => {
      isTouching = false;
      // Resume auto-scroll 4 seconds after user finishes swipe
      resumeTimeout = setTimeout(() => {
        startTimer();
      }, 4000);
    }, { passive: true });

    // Handle filter changes (e.g. category filter on builds)
    container.addEventListener('portfoliofilterchange', () => {
      container.scrollTo({ left: 0, behavior: 'auto' });
      startTimer();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        if (!timer && !isTouching) startTimer();
      } else {
        stopTimer();
      }
    });

    startTimer();
  }

  function setup() {
    // 1. WHAT I BUILD section (Bento Grid cards)
    initMobileCarousel('.ht-bento-grid', '.bento-card', 3000);

    // 2. CASE STUDIES section (Engineering Logs / Build Notes)
    initMobileCarousel('.home-build-carousel .home-build-grid', '.ht-card-item, .grid__item', 3000);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup, { once: true });
  } else {
    setup();
  }
})();
