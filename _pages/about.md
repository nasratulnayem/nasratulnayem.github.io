---
layout: home
permalink: /
title: "Websites, ecommerce, and automation that reduce manual work"
author_profile: false
---

<section class="home-hero" aria-labelledby="home-intro-title">
  <div class="home-hero__copy">
    <p class="home-eyebrow">Web developer &amp; automation expert</p>
    <h1 id="home-intro-title">Build a site that works <span>after it launches.</span></h1>
    <p class="home-hero__lead">I build business websites, ecommerce experiences, custom tools, and automations that replace manual work with reliable systems.</p>
    <div class="home-hero__actions">
      <a class="home-button home-button--primary" href="{{ '/contact/' | relative_url }}">Start a project <span aria-hidden="true">→</span></a>
      <a class="home-button home-button--secondary" href="{{ '/portfolio/' | relative_url }}">See selected work</a>
    </div>
  </div>

  <aside class="home-hero__panel" aria-label="Nasratul Nayem profile">
    <div class="home-hero__profile">
      <img src="{{ '/images/profile.png' | relative_url }}" alt="Nasratul Nayem">
      <div>
        <strong>Nasratul Nayem</strong>
        <span>Web developer &amp; automation expert</span>
      </div>
    </div>
    <div class="home-hero__rule"></div>
    <p class="home-hero__panel-title">Built around the real bottleneck</p>
    <ul class="home-hero__specialties">
      <li><span>01</span> Websites &amp; web apps</li>
      <li><span>02</span> Ecommerce systems</li>
      <li><span>03</span> Automation &amp; AI workflows</li>
    </ul>
  </aside>
</section>

<section class="home-section home-services" aria-labelledby="home-services-title">
  <div class="home-section__heading">
    <p class="home-eyebrow">What I build</p>
    <h2 id="home-services-title">Useful systems, not just a good-looking page.</h2>
    <p>Every build is shaped around the work behind it: customers finding what they need, teams updating content, and the processes that should not need repeating by hand.</p>
  </div>

  <div class="home-service-grid">
    <a class="home-service-card" href="{{ '/services/' | relative_url }}">
      <span class="home-service-card__number">01</span>
      <h3>WordPress &amp; custom PHP</h3>
      <p>Custom features, plugins, site fixes, admin improvements, and content workflows that fit the way the business already works.</p>
      <span class="home-service-card__link">Explore services <span aria-hidden="true">→</span></span>
    </a>
    <a class="home-service-card" href="{{ '/ecommerce/' | relative_url }}">
      <span class="home-service-card__number">02</span>
      <h3>Shopify &amp; WooCommerce</h3>
      <p>Storefronts, product pages, carts, checkout journeys, catalog imports, and the tools that keep ecommerce moving.</p>
      <span class="home-service-card__link">Explore ecommerce <span aria-hidden="true">→</span></span>
    </a>
    <a class="home-service-card" href="{{ '/automation/' | relative_url }}">
      <span class="home-service-card__number">03</span>
      <h3>Automation &amp; AI</h3>
      <p>Python tools, APIs, reporting, product-import workflows, internal bots, and practical AI connected to real business tasks.</p>
      <span class="home-service-card__link">Explore automation <span aria-hidden="true">→</span></span>
    </a>
    <a class="home-service-card" href="{{ '/services/' | relative_url }}">
      <span class="home-service-card__number">04</span>
      <h3>Business websites &amp; web apps</h3>
      <p>Clear, mobile-friendly websites and focused web tools for local services, teams, restaurants, clinics, schools, and growing businesses.</p>
      <span class="home-service-card__link">See what fits <span aria-hidden="true">→</span></span>
    </a>
  </div>
</section>

<section class="home-process" aria-labelledby="home-process-title">
  <div class="home-process__intro">
    <p class="home-eyebrow">How I approach a build</p>
    <h2 id="home-process-title">Start with the friction. End with a system people can use.</h2>
    <p>A useful project does not need unnecessary complexity. It needs a clear problem, the right technical decision, and a result that stays maintainable.</p>
  </div>
  <ol class="home-process__steps">
    <li><span>01</span><div><h3>Find the bottleneck</h3><p>Identify the page, workflow, or repetitive task that costs time or loses momentum.</p></div></li>
    <li><span>02</span><div><h3>Build the right layer</h3><p>Use the simplest reliable mix of WordPress, Shopify, PHP, JavaScript, Python, APIs, or AI.</p></div></li>
    <li><span>03</span><div><h3>Make it easy to run</h3><p>Leave behind a workflow the business can understand, update, and build on.</p></div></li>
  </ol>
</section>

<section class="home-section home-work" aria-labelledby="home-work-title">
  <div class="home-section__heading home-section__heading--work">
    <div>
      <p class="home-eyebrow">Selected build notes</p>
      <h2 id="home-work-title">Real projects. Clear technical choices.</h2>
    </div>
    <p>These are practical builds and write-ups—not mock portfolio screenshots. Open a note to see the problem, the approach, and the result.</p>
  </div>

  <div class="home-build-carousel" data-post-carousel aria-label="Browse build notes">
    <div class="work-grid home-build-grid">
      {% for post in site.posts %}
        {% include archive-single.html type="grid" %}
      {% endfor %}
    </div>

    <div class="home-build-carousel__controls" aria-label="Build note carousel controls">
      <button class="home-build-carousel__button" type="button" data-carousel-previous aria-label="Show previous build notes">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
      <button class="home-build-carousel__button" type="button" data-carousel-next aria-label="Show next build notes">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</section>

<section class="home-closing" aria-labelledby="home-closing-title">
  <div>
    <p class="home-eyebrow">Start with the bottleneck</p>
    <h2 id="home-closing-title">Tell me what is getting in the way.</h2>
    <p>A checkout issue, manual product import, slow WordPress feature, unreliable contact flow, or daily task that should be automated is enough to start.</p>
  </div>
  <a class="home-button home-button--light" href="{{ '/contact/' | relative_url }}">Start a conversation <span aria-hidden="true">→</span></a>
</section>
