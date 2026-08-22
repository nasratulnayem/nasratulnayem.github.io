/**
 * High-Tech Interactive Engine for Nasratul Nayem Portfolio
 * Provides: Interactive Particle Canvas, Live Terminal Emulator, Command Palette (Ctrl+K),
 * Bento Grid Spotlight Glow, Project Scope Estimator, Dynamic Portfolio Filtering, Code Copy Buttons,
 * Reading Progress Tracker, and HUD Toast System.
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Toast Notification System
     ========================================================================== */
  function showToast(message, icon = '✓') {
    let toast = document.getElementById('ht-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ht-toast';
      toast.className = 'ht-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="ht-toast__icon">${icon}</span> <span class="ht-toast__text">${message}</span>`;
    toast.classList.add('is-visible');

    if (window._toastTimeout) clearTimeout(window._toastTimeout);
    window._toastTimeout = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 3200);
  }
  window.showToast = showToast;

  /* ==========================================================================
     2. Clipboard Copy Helper
     ========================================================================== */
  function copyToClipboard(text, successMsg = 'Copied to clipboard!') {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(successMsg, '⚡');
      }).catch(() => {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }
  window.copyToClipboard = copyToClipboard;

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(successMsg, '⚡');
    } catch (err) {
      showToast('Could not copy automatically', '⚠️');
    }
    document.body.removeChild(textArea);
  }

  /* ==========================================================================
     3. High-Tech Particle Mesh Canvas Background
     ========================================================================== */
  function initParticleCanvas() {
    const canvas = document.getElementById('bg-mesh-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: null, y: null, radius: 140 };
    const particles = [];
    const numParticles = Math.min(Math.floor((width * height) / 18000), 75);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.radius = Math.random() * 1.6 + 0.8;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            let force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }
      draw() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
          (!document.documentElement.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.45)' : 'rgba(14, 116, 144, 0.35)';
        ctx.fill();
      }
    }

    for (let i = 0; i < numParticles; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
        (!document.documentElement.getAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      const lineColor = isDark ? 'rgba(56, 189, 248,' : 'rgba(14, 116, 144,';

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `${lineColor} ${(1 - dist / 110) * 0.18})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    animate();
  }

  /* ==========================================================================
     4. Interactive Terminal Emulator
     ========================================================================== */
  function initTerminal() {
    const terminal = document.querySelector('.hero-terminal');
    if (!terminal) return;

    const outputEl = terminal.querySelector('.hero-terminal__body');
    const inputEl = terminal.querySelector('.hero-terminal__input');
    const tabBtns = terminal.querySelectorAll('.hero-terminal__tab-btn');
    const quickBtns = terminal.querySelectorAll('.hero-terminal__chip');

    const COMMANDS = {
      help: () => `
<span class="ht-term-cyan">Available commands:</span>
  • <span class="ht-term-green">stack</span>       - View core technologies & engineering tools
  • <span class="ht-term-green">services</span>    - Explore services (WordPress, Ecommerce, Python)
  • <span class="ht-term-green">flagship</span>    - Details on Importon Bridge WooCommerce tool
  • <span class="ht-term-green">status</span>      - Check availability & SLA response time
  • <span class="ht-term-green">contact</span>     - Get direct email & WhatsApp connection
  • <span class="ht-term-green">clear</span>       - Reset terminal display
`,
      stack: () => `
<span class="ht-term-cyan">⚡ Engineering & Technology Stack:</span>
  • <span class="ht-term-yellow">Web & CMS:</span>       WordPress Core, PHP 8+, Custom Plugins, Shopify Liquid, WooCommerce
  • <span class="ht-term-yellow">Frontend:</span>        Modern Vanilla JS / ES6+, Responsive CSS, Tailwind, Web Components
  • <span class="ht-term-yellow">Automation & AI:</span> Python, Playwright/Selenium, LLM Orchestration, REST APIs, CRON
  • <span class="ht-term-yellow">Software:</span>        Freemius SDK, Chrome Companion Extensions, Webhooks, Git
`,
      services: () => `
<span class="ht-term-cyan">🛠 Specialized Services:</span>
  [1] <span class="ht-term-green">High-Speed Web Development:</span> Custom WordPress themes, plugins, high-performance sites.
  [2] <span class="ht-term-green">Ecommerce Engineering:</span> Shopify & WooCommerce store optimization, product flows.
  [3] <span class="ht-term-green">Autonomous Automation:</span> Python bots, scraping, data pipelines & AI workflows.
  <a class="ht-term-link" href="/services/">➔ View full services breakdown</a>
`,
      flagship: () => `
<span class="ht-term-cyan">🚀 Flagship Software: Importon Bridge (v0.2.2)</span>
  • A browser-assisted workflow engine moving product data to WooCommerce in seconds.
  • Secure REST connection · Freemius Licensing · 14-day money-back guarantee.
  <a class="ht-term-link" href="/plugins/importon-bridge/">➔ Explore Importon Bridge</a>
`,
      status: () => `
<span class="ht-term-green">● SYSTEM STATUS: ONLINE & AVAILABLE</span>
  • <span class="ht-term-yellow">Location:</span>      Bangladesh (Remote Worldwide)
  • <span class="ht-term-yellow">Capacity:</span>      Accepting new custom development & automation contracts
  • <span class="ht-term-yellow">Response SLA:</span>  Guaranteed within 24 hours (Email / WhatsApp)
`,
      contact: () => `
<span class="ht-term-cyan">📬 Connect with Nayem:</span>
  • <span class="ht-term-yellow">Email:</span>    <a class="ht-term-link" href="mailto:devnayem30@gmail.com">devnayem30@gmail.com</a>
  • <span class="ht-term-yellow">GitHub:</span>   <a class="ht-term-link" href="https://github.com/nasratulnayem" target="_blank">github.com/nasratulnayem</a>
  • <span class="ht-term-yellow">WhatsApp:</span> Instant messaging available via widget
`,
      clear: () => {
        if (autoScroll.track) { autoScroll.track.innerHTML = ''; } else { outputEl.innerHTML = ''; }
        return '';
      }
    };

    /* ---- Lightweight auto-scroll engine ----------------------------------
       GPU-only transform drift (no layout thrash), pauses off-screen & on
       hidden tabs, hands over to the reader on interaction and quietly
       resumes drifting after a long idle period. */
    var autoScroll = (function () {
      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var track = null, rafId = null, idleTimer = null, offscreen = false;
      var offset = 0, dir = -1, lastTs = 0;
      var SPEED = 26;            // px/s — calm cinematic drift
      var RESUME_DELAY = 12000;  // resume drift 12s after last interaction

      function maxOffset() {
        return Math.max(0, track.scrollHeight - outputEl.clientHeight);
      }
      function apply() {
        track.style.transform = 'translate3d(0,' + offset.toFixed(2) + 'px,0)';
      }
      function stop() {
        if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
        clearTimeout(idleTimer);
      }
      function step(ts) {
        if (offscreen || document.hidden) { rafId = null; return; }
        var dt = Math.min(64, ts - lastTs); lastTs = ts;
        offset += dir * SPEED * dt / 1000;
        var max = maxOffset();
        if (offset <= -max && dir < 0) { offset = -max; apply(); rafId = null; resume(3200); return; }
        if (offset >= 0 && dir > 0)   { offset = 0;    apply(); rafId = null; resume(4200); return; }
        apply();
        rafId = requestAnimationFrame(step);
      }
      function resume(delay) {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function () {
          if (maxOffset() > 4 && !offscreen && !document.hidden) {
            if (offset <= -maxOffset()) dir = 1; else dir = -1;
            lastTs = performance.now();
            if (!rafId) rafId = requestAnimationFrame(step);
          }
        }, delay);
      }
      function snapToBottom() {
        stop();
        offset = -maxOffset();
        if (!reduceMotion) {
          track.style.transition = 'transform 480ms cubic-bezier(.22,.61,.36,1)';
          apply();
          setTimeout(function () { track.style.transition = ''; }, 520);
        } else {
          apply();
        }
        resume(RESUME_DELAY);
      }

      return {
        track: null,
        mount: function () {
          if (reduceMotion) return;
          track = document.createElement('div');
          track.className = 'hero-terminal__track';
          while (outputEl.firstChild) track.appendChild(outputEl.firstChild);
          outputEl.appendChild(track);
          this.track = track;
          if ('IntersectionObserver' in window) {
            new IntersectionObserver(function (entries) {
              offscreen = !entries[0].isIntersecting;
              if (offscreen) { stop(); } else { resume(1200); }
            }, { threshold: 0.05 }).observe(terminal);
          } else {
            resume(2500);
          }
          document.addEventListener('visibilitychange', function () {
            if (document.hidden) stop(); else resume(2000);
          });
        },
        activity: function (toBottom) {
          stop();
          if (toBottom) snapToBottom(); else resume(RESUME_DELAY);
        },
        reset: function () {
          stop(); offset = 0; dir = -1; apply();
          if ('IntersectionObserver' in window) resume(1200); else resume(2500);
        }
      };
    })();
    autoScroll.mount();

    function executeCommand(cmdStr) {
      const cleanCmd = cmdStr.trim().toLowerCase();
      if (!cleanCmd) return;

      const line = document.createElement('div');
      line.className = 'hero-terminal__line';
      line.innerHTML = `<span class="hero-terminal__prompt">nayem@dev:~$</span> <span class="hero-terminal__cmd">${escapeHtml(cmdStr)}</span>`;
      autoScroll.track.appendChild(line);

      const resp = document.createElement('div');
      resp.className = 'hero-terminal__response';

      if (COMMANDS[cleanCmd]) {
        const out = COMMANDS[cleanCmd]();
        if (cleanCmd !== 'clear') {
          resp.innerHTML = out;
          autoScroll.track.appendChild(resp);
        }
      } else {
        resp.innerHTML = `<span class="ht-term-red">Command not recognized: "${escapeHtml(cmdStr)}".</span> Type <span class="ht-term-green">help</span> for a list of available commands.`;
        autoScroll.track.appendChild(resp);
      }

      if (cleanCmd === 'clear') { autoScroll.reset(); } else { autoScroll.activity(true); }
    }

    if (inputEl) {
      inputEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          executeCommand(inputEl.value);
          inputEl.value = '';
        }
      });
    }

    quickBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const cmd = btn.getAttribute('data-cmd');
        if (cmd) {
          executeCommand(cmd);
          if (inputEl) inputEl.focus();
        }
      });
    });

    // Tab switching if terminal has multi-view tabs
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        const view = btn.getAttribute('data-view');
        if (view && COMMANDS[view]) {
          executeCommand(view);
        }
      });
    });
  }

  function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  /* ==========================================================================
     5. Bento Grid Spotlight Mouse Glow
     ========================================================================== */
  function initSpotlightGlow() {
    const cards = document.querySelectorAll('.bento-card, .glow-card, .home-capability-card, .plugin-product-card');
    cards.forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  /* ==========================================================================
     6. Command Palette (Ctrl+K)
     ========================================================================== */
  function initCommandPalette() {
    const palette = document.getElementById('ht-command-palette');
    if (!palette) return;

    const input = palette.querySelector('.ht-palette__input');
    const items = palette.querySelectorAll('.ht-palette__item');
    const openBtns = document.querySelectorAll('[data-open-palette]');
    const closeBtns = palette.querySelectorAll('[data-close-palette]');

    function openPalette() {
      palette.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      if (input) {
        input.value = '';
        input.focus();
        filterItems('');
      }
    }

    function closePalette() {
      palette.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    openBtns.forEach(btn => btn.addEventListener('click', openPalette));
    closeBtns.forEach(btn => btn.addEventListener('click', closePalette));

    palette.addEventListener('click', e => {
      if (e.target === palette) closePalette();
    });

    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        palette.classList.contains('is-open') ? closePalette() : openPalette();
      } else if (e.key === 'Escape' && palette.classList.contains('is-open')) {
        closePalette();
      }
    });

    function filterItems(query) {
      const q = query.toLowerCase().trim();
      items.forEach(item => {
        const text = item.textContent.toLowerCase();
        const keywords = item.getAttribute('data-keywords') || '';
        if (text.includes(q) || keywords.toLowerCase().includes(q)) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      });
    }

    if (input) {
      input.addEventListener('input', () => filterItems(input.value));
      input.addEventListener('keydown', e => {
        const visibleItems = Array.from(items).filter(i => i.style.display !== 'none');
        let activeIdx = visibleItems.findIndex(i => i.classList.contains('is-focused'));

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (activeIdx >= 0) visibleItems[activeIdx].classList.remove('is-focused');
          activeIdx = (activeIdx + 1) % visibleItems.length;
          if (visibleItems[activeIdx]) {
            visibleItems[activeIdx].classList.add('is-focused');
            visibleItems[activeIdx].scrollIntoView({ block: 'nearest' });
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (activeIdx >= 0) visibleItems[activeIdx].classList.remove('is-focused');
          activeIdx = (activeIdx - 1 + visibleItems.length) % visibleItems.length;
          if (visibleItems[activeIdx]) {
            visibleItems[activeIdx].classList.add('is-focused');
            visibleItems[activeIdx].scrollIntoView({ block: 'nearest' });
          }
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (activeIdx >= 0 && visibleItems[activeIdx]) {
            visibleItems[activeIdx].click();
          } else if (visibleItems.length > 0) {
            visibleItems[0].click();
          }
        }
      });
    }

    // Item click actions
    items.forEach(item => {
      item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        const href = item.getAttribute('data-href');
        closePalette();

        if (action === 'copy-email') {
          copyToClipboard('devnayem30@gmail.com', 'Copied devnayem30@gmail.com to clipboard!');
        } else if (action === 'toggle-theme') {
          if (window.toggleTheme) window.toggleTheme();
          else {
            const toggle = document.getElementById('theme-toggle');
            if (toggle) toggle.click();
          }
        } else if (href) {
          window.location.href = href;
        }
      });
    });
  }

  /* ==========================================================================
     7. Interactive Project Scope & ROI Estimator
     ========================================================================== */
  function initProjectEstimator() {
    const container = document.getElementById('project-scope-estimator');
    if (!container) return;

    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    const timelineRadios = container.querySelectorAll('input[name="timeline"]');
    const hoursDisplay = container.querySelector('.estimator-hours');
    const timelineDisplay = container.querySelector('.estimator-timeline');
    const ctaBtn = container.querySelector('.estimator-submit-btn');

    function calculate() {
      let totalHours = 0;
      const selectedServices = [];

      checkboxes.forEach(cb => {
        if (cb.checked) {
          totalHours += parseInt(cb.getAttribute('data-hours') || '10', 10);
          selectedServices.push(cb.getAttribute('data-name') || cb.value);
        }
      });

      let timelineMultiplier = 1;
      let timelineLabel = '2-3 Weeks';
      timelineRadios.forEach(radio => {
        if (radio.checked) {
          timelineMultiplier = parseFloat(radio.getAttribute('data-multiplier') || '1');
          timelineLabel = radio.getAttribute('data-label') || '2-3 Weeks';
        }
      });

      const finalHours = Math.max(totalHours, totalHours > 0 ? 15 : 0);

      if (hoursDisplay) hoursDisplay.textContent = `${finalHours} hrs`;
      if (timelineDisplay) timelineDisplay.textContent = totalHours > 0 ? timelineLabel : 'Select features';

      if (ctaBtn) {
        const subject = encodeURIComponent(`Project Inquiry: ${selectedServices.slice(0, 2).join(' + ')}${selectedServices.length > 2 ? '...' : ''}`);
        const body = encodeURIComponent(
          `Hi Nayem,\n\nI configured a project scope with the following requirements:\n` +
          `• Selected Services: ${selectedServices.length ? selectedServices.join(', ') : 'Custom Scope'}\n` +
          `• Target Timeline: ${timelineLabel}\n` +
          `• Estimated Scope: ~${finalHours} Hours\n\n` +
          `Here is more context about my business and project:\n[Please describe your goals here]\n\nBest regards,\n[Your Name]`
        );
        ctaBtn.href = `mailto:devnayem30@gmail.com?subject=${subject}&body=${body}`;
      }
    }

    checkboxes.forEach(cb => cb.addEventListener('change', calculate));
    timelineRadios.forEach(r => r.addEventListener('change', calculate));
    calculate();
  }

  /* ==========================================================================
     8. Portfolio / Build Notes Category Filter & Search
     ========================================================================== */
  function initPortfolioFilter() {
    const filterContainer = document.querySelector('.portfolio-filter-hud');
    const searchInput = document.querySelector('.portfolio-search-input');
    const grid = document.querySelector('.work-grid, .portfolio-grid, .home-build-grid');
    if (!grid) return;

    // Filter the outer card only. Filtering nested links/articles as well caused
    // conflicting display states and made a matching build disappear.
    const cards = grid.querySelectorAll('.ht-card-item, .grid__item');

    const categoryAliases = {
      wordpress: ['wordpress', 'woocommerce', 'php', 'plugin'],
      ecommerce: ['ecommerce', 'woocommerce', 'shopify', 'storefront', 'product import'],
      automation: ['automation', 'automated', 'python', 'playwright', 'ai']
    };

    function applyFilter() {
      const activeBtn = filterContainer ? filterContainer.querySelector('.filter-chip.is-active') : null;
      const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
      const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const cardCategory = (card.getAttribute('data-category') || '').toLowerCase();
        const searchable = `${cardCategory} ${text}`;
        const terms = categoryAliases[category] || [category.toLowerCase()];
        const matchesCat = category === 'all' || terms.some(term => searchable.includes(term));
        const matchesQuery = !query || text.includes(query);
        const matches = matchesCat && matchesQuery;

        card.dataset.filterMatch = String(matches);

        if (matches) {
          card.style.display = '';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
        }
      });

      grid.dispatchEvent(new CustomEvent('portfoliofilterchange'));
    }

    if (filterContainer) {
      const chips = filterContainer.querySelectorAll('.filter-chip');
      chips.forEach(chip => {
        chip.addEventListener('click', () => {
          chips.forEach(c => c.classList.remove('is-active'));
          chip.classList.add('is-active');
          applyFilter();
        });
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', applyFilter);
    }
  }

  /* ==========================================================================
     9. Reading Progress Bar & Code Block Enhancements
     ========================================================================== */
  function initArticleEnhancements() {
    // Reading Progress Bar
    const progressBar = document.getElementById('reading-progress-bar');
    if (progressBar) {
      window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
        progressBar.style.width = `${Math.min(scrolled, 100)}%`;
      }, { passive: true });
    }

    // Code Blocks: Add Mac-style title bar & copy button
    const codeBlocks = document.querySelectorAll('pre > code');
    codeBlocks.forEach(code => {
      const pre = code.parentElement;
      if (!pre || pre.closest('.ht-code-wrapper')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'ht-code-wrapper';
      
      const header = document.createElement('div');
      header.className = 'code-header-bar';
      
      const lang = Array.from(code.classList)
        .find(c => c.startsWith('language-'))
        ?.replace('language-', '') || 'code';

      header.innerHTML = `
        <div class="code-dots"><span class="dot-red"></span><span class="dot-yellow"></span><span class="dot-green"></span></div>
        <span class="code-lang-label">${lang}</span>
        <button class="code-copy-btn" type="button" aria-label="Copy code">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <span>Copy</span>
        </button>
      `;

      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);

      const copyBtn = header.querySelector('.code-copy-btn');
      copyBtn.addEventListener('click', () => {
        const codeText = code.innerText;
        copyToClipboard(codeText, 'Code copied to clipboard!');
        copyBtn.classList.add('is-copied');
        copyBtn.querySelector('span').textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.classList.remove('is-copied');
          copyBtn.querySelector('span').textContent = 'Copy';
        }, 2000);
      });
    });
  }

  /* ==========================================================================
     10. Quick Action Clipboard Buttons (.btn-copy-email)
     ========================================================================== */
  function initQuickCopyTriggers() {
    document.querySelectorAll('[data-copy-email]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        copyToClipboard('devnayem30@gmail.com', 'Copied devnayem30@gmail.com to clipboard!');
      });
    });
  }

  /* ==========================================================================
     DOM Ready Initialization
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    initParticleCanvas();
    initTerminal();
    initSpotlightGlow();
    initCommandPalette();
    initProjectEstimator();
    initPortfolioFilter();
    initArticleEnhancements();
    initQuickCopyTriggers();
  });

})();
