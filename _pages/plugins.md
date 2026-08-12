---
layout: plugin
title: "Plugins"
permalink: /plugins/
description: "Focused WordPress tools by Nasratul Nayem for ecommerce work that should not stay manual."
---

<section class="plugin-catalog-hero" aria-labelledby="plugins-title">
  <p class="plugin-eyebrow">Tools made for the work after launch</p>
  <div class="plugin-catalog-hero__grid">
    <div>
      <h1 id="plugins-title">Useful plugins for ecommerce work that should not stay manual.</h1>
      <p>I build focused WordPress tools around specific bottlenecks: moving product data, reducing repeat work, and making a store easier to operate. Each product is documented clearly, licensed through Freemius, and backed by direct email support.</p>
    </div>
    <aside class="plugin-catalog-hero__promise" aria-label="What every plugin purchase includes">
      <span>Every purchase includes</span>
      <ul>
        <li>Secure checkout and licensing</li>
        <li>Plugin updates through Freemius</li>
        <li>14-day refund window</li>
      </ul>
    </aside>
  </div>
</section>

<section class="plugin-catalog" aria-labelledby="available-products-title">
  <div class="plugin-section-heading">
    <div>
      <p class="plugin-eyebrow">Available now</p>
      <h2 id="available-products-title">One clear tool. One practical workflow.</h2>
    </div>
    <p>Start with the bottleneck that is costing you the most time. More focused tools will be added when they are ready to be useful—not simply to fill a catalog.</p>
  </div>

  {% for product in site.data.plugins.products %}
    <article class="plugin-product-card">
      <a class="plugin-product-card__visual" href="{{ product.url | relative_url }}" aria-label="See {{ product.name }}">
        <img src="{{ product.image | relative_url }}" alt="{{ product.name }} workflow preview" loading="lazy">
        <span class="plugin-product-card__status">{{ product.status }}</span>
      </a>
      <div class="plugin-product-card__body">
        <div class="plugin-product-card__topline">
          <span>{{ product.category }}</span>
          <span>{{ product.plan }}</span>
        </div>
        <h2><a href="{{ product.url | relative_url }}">{{ product.name }}</a></h2>
        <p>{{ product.summary }}</p>
        <ul class="plugin-product-card__highlights">
          {% for highlight in product.highlights %}<li>{{ highlight }}</li>{% endfor %}
        </ul>
        <div class="plugin-product-card__footer">
          <div class="plugin-product-card__price"><strong>{{ product.price }}</strong><span>{{ product.billing }}</span></div>
          <div class="plugin-product-card__actions">
            <a class="plugin-text-link" href="{{ product.url | relative_url }}">See the workflow <span aria-hidden="true">→</span></a>
            <a class="plugin-buy-link" href="{{ product.checkout_url }}" target="_blank" rel="nofollow noopener noreferrer">Buy Pro <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
    </article>
  {% endfor %}

</section>

<section class="plugin-catalog-note" aria-labelledby="plugin-help-title">
  <div>
    <p class="plugin-eyebrow">Need a different workflow?</p>
    <h2 id="plugin-help-title">A product cannot cover every business process.</h2>
  </div>
  <p>If you need a custom importer, a store integration, or an automation built around your own workflow, I can build it with you. <a href="{{ '/contact/' | relative_url }}">Tell me what needs to work better.</a></p>
</section>
