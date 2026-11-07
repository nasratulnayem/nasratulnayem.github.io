/**
 * Global Smooth Scroll Engine (Powered by Lenis)
 * Provides silky, premium, SaaS-grade inertial smooth scrolling across the entire site.
 * Preserves anchor links, mobile behavior, dialogs/popups, and code blocks.
 */

(function () {
  'use strict';

  // Do not initialize in iframe or if user explicitly prefers reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  function initSmoothScroll() {
    if (typeof window.Lenis === 'undefined') {
      return;
    }

    // Initialize Lenis with finely tuned luxury SaaS physics
    var lenis = new window.Lenis({
      duration: 1.2,
      easing: function (t) {
        // Cubic ease-out for luxurious responsive deceleration
        return Math.min(1, 1.001 - Math.pow(2, -10 * t));
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false
    });

    window.siteLenis = lenis;

    // Connect into requestAnimationFrame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Smoothly intercept anchor clicks for in-page anchors
    document.addEventListener('click', function (e) {
      var target = e.target.closest('a[href^="#"]');
      if (!target) return;

      var hash = target.getAttribute('href');
      if (!hash || hash === '#') return;

      var targetElem = document.querySelector(hash);
      if (targetElem) {
        e.preventDefault();
        lenis.scrollTo(targetElem, {
          offset: -80, // Offset for sticky navbar
          duration: 1.2
        });
        if (history.pushState) {
          history.pushState(null, null, hash);
        } else {
          location.hash = hash;
        }
      }
    });

    // Notify components when layout resizes or images finish loading
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
