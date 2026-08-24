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
  <div class="ht-trial-pill" style="display:inline-flex;align-items:center;gap:8px;margin-top:14px;padding:8px 14px;border-radius:9999px;font-size:12px;"><span style="width:7px;height:7px;background:#f59e0b;border-radius:50%;display:inline-block;"></span> Try Importon Bridge free for 7 days → <a href="https://checkout.freemius.com/plugin/28475/plan/46909/?trial=paid" target="_blank" rel="nofollow" style="font-weight:700;text-decoration:none;">Start Trial</a></div>
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
              <a class="ht-btn-primary ht-btn--glow" href="{{ product.trial_url }}" target="_blank" rel="nofollow noopener noreferrer">Start 7-Day Trial ↗</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  {% endfor %}
</div>



