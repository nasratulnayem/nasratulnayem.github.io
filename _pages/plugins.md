---
layout: plugin
title: "WordPress Plugins & Software Tools"
permalink: /tools/
description: "WordPress and WooCommerce tools I've built to solve specific workflow problems. Free trials available."
---

<div class="ht-page-hero">
  <div class="ht-eyebrow">
    <span class="ht-eyebrow-dot"></span>
    <span>PROVEN SOFTWARE TOOLS</span>
  </div>
  <h1 class="ht-page-hero__title">Focused tools for workflows that should never be manual.</h1>
  <p class="ht-page-hero__desc">Production-grade WordPress plugins built around specific workflow problems. Start with a <strong>7-day free trial</strong> — card saved at checkout, auto-charges after 7 days, cancel anytime. Secure licensing via Freemius, automatic updates, and a 14-day refund window.</p>
  <style>.ht-trial-pill{background:rgba(31,122,140,0.08);border:1px solid rgba(31,122,140,0.18);color:#0f172a}.ht-trial-pill a{color:#1F7A8C}html[data-theme="dark"] .ht-trial-pill{background:rgba(31,122,140,0.22);border-color:rgba(31,122,140,0.38);color:#e0f2f1}html[data-theme="dark"] .ht-trial-pill a{color:#5eead4}</style>
  <div class="ht-trial-pill" style="display:inline-flex;align-items:center;gap:8px;margin-top:14px;padding:8px 14px;border-radius:9999px;font-size:12px;"><span style="width:7px;height:7px;background:#f59e0b;border-radius:50%;display:inline-block;"></span> Try Importon Bridge free for 7 days → <a href="#" onclick="openTrialPopup(event)" style="font-weight:700;text-decoration:none;cursor:pointer;">Start Trial</a></div>
</div>

<div class="ht-catalog-grid">
  {% for product in site.data.plugins.products %}
    <article class="bento-card bento-card--featured glow-card ht-product-showcase">
      <div class="ht-product-showcase__grid">
        <div class="ht-product-showcase__visual">
          <img src="{{ product.image | relative_url }}" alt="{{ product.name }} workflow" loading="lazy">
        </div>
        <div class="ht-product-showcase__info">
          <div class="bento-card__badge-row">
            <span class="ht-badge ht-badge--cyan">{{ product.category }}</span>
            <span class="ht-badge">{{ product.plan }}</span>
          </div>
          <h2 class="ht-product-title"><a href="{{ product.url | relative_url }}">{{ product.name }}</a></h2>
          <p class="ht-product-summary">{{ product.summary }}</p>

          {% if product.highlights.size > 0 %}
          <ul class="ht-product-highlights">
            {% for highlight in product.highlights %}
              <li><i class="fas fa-check" aria-hidden="true"></i> {{ highlight }}</li>
            {% endfor %}
          </ul>
          {% endif %}

          <div class="ht-product-pricing-bar">
            <div class="ht-product-price">
              <strong>{{ product.price }}</strong>
              <span>{{ product.billing }}</span>
            </div>
            <div class="ht-product-cta-group">
              <a class="ht-btn-secondary" href="{{ product.url | relative_url }}">See Full Workflow →</a>
              <a class="ht-btn-primary ht-btn--glow" href="#" onclick="openTrialPopup(event)">Start 7-Day Trial ↗</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  {% endfor %}
</div>

<!-- Trial Popup Modal -->
<style>
  .trial-modal-overlay{display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:9999;backdrop-filter:blur(8px)}
  .trial-modal-card{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:500px;width:92%}
  .trial-modal-card .bento-card{padding:2.5rem}
  .trial-modal-card .bento-card:hover{transform:translateY(-4px)}
  .trial-modal-card .ht-btn-primary{width:100%;height:48px;font-size:15px;border-radius:var(--ht-radius-full)}
  .trial-modal-card input[type="email"]{width:100%;padding:14px 18px;background:var(--ht-bg-base);border:1px solid var(--ht-border);border-radius:var(--ht-radius-md);color:var(--ht-text-primary);font-size:15px;margin-bottom:14px;box-sizing:border-box;font-family:inherit;transition:border-color 0.2s}
  .trial-modal-card input[type="email"]:focus{outline:none;border-color:var(--ht-cyan)}
  .trial-modal-card input[type="email"]::placeholder{color:var(--ht-text-muted)}
</style>
<div id="trialPopup" class="trial-modal-overlay">
  <div class="trial-modal-card">
    <article class="bento-card glow-card">
      <button onclick="closeTrialPopup()" style="position:absolute;top:14px;right:14px;background:none;border:none;color:var(--ht-text-muted);font-size:22px;cursor:pointer;line-height:1;padding:0;z-index:10;">&times;</button>
      <div style="text-align:center;margin-bottom:24px;">
        <h2 style="color:var(--ht-text-primary);font-size:22px;font-weight:700;margin:0 0 8px;text-decoration:none;border:none;">Start Importing from Alibaba</h2>
        <p style="color:var(--ht-text-secondary);font-size:14px;margin:0;">Get your trial link sent to your email.</p>
      </div>
      <form id="trialForm" onsubmit="return handleTrialSubmit(event)">
        <input type="email" id="trialEmail" placeholder="your@email.com" required>
        <button type="submit" id="trialBtn" class="ht-btn-primary">Start Trial</button>
      </form>
      <p id="trialSuccess" style="display:none;text-align:center;color:var(--ht-green);font-size:14px;margin-top:12px;">Check your inbox!</p>
    </article>
  </div>
</div>
<script>
function openTrialPopup(e) {
  e.preventDefault();
  document.getElementById('trialPopup').style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function closeTrialPopup() {
  document.getElementById('trialPopup').style.display = 'none';
  document.body.style.overflow = '';
}
document.getElementById('trialPopup').addEventListener('click', function(e) {
  if (e.target === this) closeTrialPopup();
});
function handleTrialSubmit(e) {
  e.preventDefault();
  var btn = document.getElementById('trialBtn');
  var email = document.getElementById('trialEmail').value;
  btn.textContent = 'Sending...';
  btn.disabled = true;
    fetch('https://script.google.com/macros/s/AKfycbwg3SW0h7sOIhBn45dX4Iaa6ubCKuXlfObXJmtm8vGftPJ5vnhHUHa61NLNcdL96Egw/exec', {
    method: 'POST',
    mode: 'no-cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email: email, source: 'plugins'})
  }).then(function() {
    document.getElementById('trialSuccess').style.display = 'block';
    btn.textContent = 'Sent!';
    setTimeout(function() { closeTrialPopup(); }, 2000);
  }).catch(function() {
    btn.textContent = 'Start Trial';
    btn.disabled = false;
  });
  return false;
}
</script>
