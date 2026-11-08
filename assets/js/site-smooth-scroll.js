/**
 * Global Smooth Scroll Engine (Powered by Lenis)
 * Tuned with ultra-smooth luxury momentum glide matching jisun.online physics
 */

(function () {
  'use strict';

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  function initSmoothScroll() {
    if (typeof window.Lenis === 'undefined') {
      return;
    }

    // Ultra-smooth glide parameters matching jisun.online
    var lenis = new window.Lenis({
      duration: 1.5,
      easing: function (t) {
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.25,
      touchMultiplier: 2.0,
      infinite: false
    });

    window.siteLenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Anchor interception
    document.addEventListener('click', function (e) {
      var target = e.target.closest('a[href^="#"]');
      if (!target) return;

      var hash = target.getAttribute('href');
      if (!hash || hash === '#') return;

      var targetElem = document.querySelector(hash);
      if (targetElem) {
        e.preventDefault();
        lenis.scrollTo(targetElem, {
          offset: -20,
          duration: 1.5
        });
        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          location.hash = hash;
        }
      }
    });

    window.addEventListener('load', function () {
      lenis.resize();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSmoothScroll);
  } else {
    initSmoothScroll();
  }
})();
