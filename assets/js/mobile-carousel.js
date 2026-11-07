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

    // Inject subtle navigation indicator bar with small arrows and dots
    let navWrap = null;
    let prevBtn = null;
    let nextBtn = null;
    let dotsWrap = null;

    function buildNavIndicators() {
      // Find or create wrapper outside the scroll container so it stays fixed in place
      const parent = container.parentElement;
      if (!parent) return;

      let existing = parent.querySelector('.ht-mobile-carousel-nav');
      if (existing) existing.remove();

      navWrap = document.createElement('div');
      navWrap.className = 'ht-mobile-carousel-nav';
      navWrap.setAttribute('aria-hidden', 'true');

      // Left small arrow button
      prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'ht-carousel-arrow ht-carousel-arrow--prev';
      prevBtn.setAttribute('aria-label', 'Previous slide');
      prevBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>';

      // Dots indicator
      dotsWrap = document.createElement('div');
      dotsWrap.className = 'ht-carousel-dots';

      // Right small arrow button
      nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'ht-carousel-arrow ht-carousel-arrow--next';
      nextBtn.setAttribute('aria-label', 'Next slide');
      nextBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>';

      navWrap.appendChild(prevBtn);
      navWrap.appendChild(dotsWrap);
      navWrap.appendChild(nextBtn);

      // Insert right after container
      container.parentNode.insertBefore(navWrap, container.nextSibling);

      // Click arrow events
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollStep(-1);
      });

      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        scrollStep(1);
      });

      updateDots();
    }

    function getVisibleItems() {
      return items.filter(el => {
        if (el.dataset.filterMatch === "false") return false;
        if (el.offsetParent === null && el.style.display === "none") return false;
        return true;
      });
    }

    function getCurrentIndex() {
      const visible = getVisibleItems();
      if (!visible.length) return 0;
      const currentScroll = container.scrollLeft;
      let currentIndex = 0;
      let minDiff = Infinity;
      visible.forEach((el, idx) => {
        const diff = Math.abs(el.offsetLeft - container.offsetLeft - currentScroll);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = idx;
        }
      });
      return currentIndex;
    }

    function updateDots() {
      if (!dotsWrap) return;
      const visible = getVisibleItems();
      dotsWrap.innerHTML = '';
      if (visible.length <= 1) {
        if (navWrap) navWrap.style.display = 'none';
        return;
      }
      if (navWrap) navWrap.style.display = '';

      const currentIndex = getCurrentIndex();
      visible.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'ht-carousel-dot' + (idx === currentIndex ? ' is-active' : '');
        dot.addEventListener('click', () => {
          scrollToIndex(idx);
        });
        dotsWrap.appendChild(dot);
      });
    }

    function scrollToIndex(targetIndex) {
      const visible = getVisibleItems();
      if (!visible.length) return;
      if (targetIndex < 0) targetIndex = visible.length - 1;
      if (targetIndex >= visible.length) targetIndex = 0;

      const targetEl = visible[targetIndex];
      if (targetEl) {
        const targetLeft = targetEl.offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: targetLeft,
          behavior: 'smooth'
        });
        setTimeout(updateActiveDot, 250);
      }
    }

    function updateActiveDot() {
      if (!dotsWrap) return;
      const current = getCurrentIndex();
      const dots = dotsWrap.querySelectorAll('.ht-carousel-dot');
      dots.forEach((dot, idx) => {
        if (idx === current) {
          dot.classList.add('is-active');
        } else {
          dot.classList.remove('is-active');
        }
      });
    }

    function scrollStep(direction) {
      stopTimer();
      const visible = getVisibleItems();
      if (visible.length <= 1) return;
      const current = getCurrentIndex();
      scrollToIndex(current + direction);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(startTimer, 5000);
    }

    function scrollNext() {
      if (window.innerWidth > 768 || isTouching) return;
      const visible = getVisibleItems();
      if (visible.length <= 1) return;

      const current = getCurrentIndex();
      let nextIndex = current + 1;
      if (nextIndex >= visible.length) {
        nextIndex = 0;
      }
      scrollToIndex(nextIndex);
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
      setTimeout(updateActiveDot, 200);
      resumeTimeout = setTimeout(() => {
        startTimer();
      }, 4000);
    }, { passive: true });

    // Update active dot while scrolling
    let scrollDebounce = null;
    container.addEventListener('scroll', () => {
      if (scrollDebounce) clearTimeout(scrollDebounce);
      scrollDebounce = setTimeout(updateActiveDot, 80);
    }, { passive: true });

    // Handle filter changes (e.g. category filter on builds)
    container.addEventListener('portfoliofilterchange', () => {
      container.scrollTo({ left: 0, behavior: 'auto' });
      updateDots();
      startTimer();
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        if (!timer && !isTouching) startTimer();
      } else {
        stopTimer();
      }
    });

    buildNavIndicators();
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
