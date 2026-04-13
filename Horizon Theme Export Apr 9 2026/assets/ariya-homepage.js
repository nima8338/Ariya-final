/* ============================================
   ARIYA SUPPLEMENTS — Homepage Animations
   ============================================ */

(function () {
  'use strict';

  // ---- Scroll Reveal via IntersectionObserver ----
  function initReveal() {
    var selectors = '.ariya-reveal, .ariya-reveal-left, .ariya-reveal-right, .ariya-reveal-scale';
    var elements = document.querySelectorAll(selectors);
    if (!elements.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ---- Hero heading fade in (CSS-driven, preserves gradient spans) ----
  function initHeroAnimation() {
    var heading = document.querySelector('.ariya-hero__heading');
    if (!heading || heading.dataset.animated) return;
    heading.dataset.animated = 'true';

    heading.style.opacity = '0';
    heading.style.transform = 'translateY(24px)';
    heading.style.transition = 'opacity 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s, transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94) 0.15s';

    setTimeout(function () {
      heading.style.opacity = '1';
      heading.style.transform = 'translateY(0)';
    }, 50);
  }

  // ---- Hero sub text fade ----
  function initHeroSub() {
    var sub = document.querySelector('.ariya-hero__sub');
    if (sub) {
      sub.style.opacity = '0';
      sub.style.transform = 'translateY(16px)';
      sub.style.transition = 'opacity 0.7s ease 0.8s, transform 0.7s ease 0.8s';
      setTimeout(function () {
        sub.style.opacity = '1';
        sub.style.transform = 'translateY(0)';
      }, 100);
    }

    var btns = document.querySelector('.ariya-hero__btns');
    if (btns) {
      btns.style.opacity = '0';
      btns.style.transform = 'translateY(16px)';
      btns.style.transition = 'opacity 0.7s ease 1.1s, transform 0.7s ease 1.1s';
      setTimeout(function () {
        btns.style.opacity = '1';
        btns.style.transform = 'translateY(0)';
      }, 100);
    }

    var trust = document.querySelector('.ariya-hero__trust');
    if (trust) {
      trust.style.opacity = '0';
      trust.style.transition = 'opacity 0.7s ease 1.5s';
      setTimeout(function () {
        trust.style.opacity = '1';
      }, 100);
    }
  }

  // ---- Init all ----
  function init() {
    initHeroAnimation();
    initHeroSub();
    initReveal();
  }

  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Shopify Theme Editor re-render support
  document.addEventListener('shopify:section:load', function () {
    setTimeout(init, 100);
  });
})();
