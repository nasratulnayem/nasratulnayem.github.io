---
layout: plugin
title: "Software & Plugins Hub"
permalink: /tools/
description: "Focused WordPress & WooCommerce software tools by Nasratul Nayem built to eliminate manual work."
---

<div class="ht-page-hero">
  <div class="ht-eyebrow">
    <span class="ht-eyebrow-dot"></span>
    <span>PROVEN SOFTWARE TOOLS</span>
  </div>
  <h1 class="ht-page-hero__title">Focused tools for workflows that should never be manual.</h1>
  <p class="ht-page-hero__desc">Production-grade WordPress plugins built around specific workflow problems. Each product includes full documentation, secure licensing via Freemius, automatic updates, and a 14-day refund window.</p>
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

          <ul class="ht-product-highlights">
            {% for highlight in product.highlights %}
              <li><i class="fas fa-check" aria-hidden="true"></i> {{ highlight }}</li>
            {% endfor %}
          </ul>

          <div class="ht-product-pricing-bar">
            <div class="ht-product-price">
              <strong>{{ product.price }}</strong>
              <span>{{ product.billing }}</span>
            </div>
            <div class="ht-product-cta-group">
              <a class="ht-btn-secondary" href="{{ product.url | relative_url }}">See Full Workflow →</a>
              <a class="ht-btn-primary ht-btn--glow" href="{{ product.checkout_url }}" target="_blank" rel="nofollow noopener noreferrer">Buy Pro License ↗</a>
            </div>
          </div>
        </div>
      </div>
    </article>
  {% endfor %}
</div>



