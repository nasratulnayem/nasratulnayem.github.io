---
layout: home
permalink: /
title: "Websites, ecommerce, and automation that reduce manual work"
author_profile: true
---

<section class="home-hero" aria-labelledby="home-intro-title">
  <div class="home-hero__copy">
    <p class="home-eyebrow">Nasratul Nayem · Web developer &amp; automation expert</p>
    <h1 id="home-intro-title">When work gets stuck, I help turn it into a <span>system that moves.</span></h1>
    <p class="home-hero__lead">I’m Nayem, a web developer based in Bangladesh and working remotely with business owners and teams. I build websites, ecommerce experiences, custom tools, and automations that make everyday work clearer, faster, and easier to manage.</p>
    <div class="home-hero__actions">
      <a class="home-button home-button--primary" href="{{ '/contact/' | relative_url }}">Tell me what you need <span aria-hidden="true">→</span></a>
      <a class="home-button home-button--secondary" href="{{ '/portfolio/' | relative_url }}">See selected work</a>
    </div>
  </div>

</section>

<section class="home-section home-services" aria-labelledby="home-services-title">
  <div class="home-section__heading">
    <p class="home-eyebrow">What I can do for your business</p>
    <h2 id="home-services-title">Useful systems, not just a good-looking page.</h2>
    <p>Whether you need a new website, a stronger online store, a custom feature, or a task automated, I focus on the work behind the screen: customers finding what they need, teams updating content, and processes that should not need repeating by hand.</p>
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
    <p class="home-eyebrow">From first message to useful result</p>
    <h2 id="home-process-title">You bring the business knowledge. I bring the technical path.</h2>
    <p>I work best when a project starts with the real problem—not a list of tools. That keeps the solution focused, understandable, and useful long after launch.</p>
  </div>
  <ol class="home-process__steps">
    <li><span>01</span><div><h3>Listen and understand</h3><p>You show me the current site, workflow, or goal. I learn what is happening now and what needs to change.</p></div></li>
    <li><span>02</span><div><h3>Choose the right approach</h3><p>We use the simplest reliable mix of WordPress, Shopify, PHP, JavaScript, Python, APIs, or AI—only where it helps.</p></div></li>
    <li><span>03</span><div><h3>Build something you can run</h3><p>The result is clear, maintainable, and shaped around the people who will use it every day.</p></div></li>
  </ol>
</section>

<section class="home-fit" aria-labelledby="home-fit-title">
  <div class="home-fit__copy">
    <p class="home-eyebrow">Where I can help</p>
    <h2 id="home-fit-title">A practical web partner for growing businesses.</h2>
    <p>I can support local services, online stores, restaurants, clinics, dentists, schools, professional services, and teams that need their website or daily workflow to do more useful work.</p>
  </div>
  <ul class="home-fit__list">
    <li><strong>Website</strong><span>Clear pages, contact flows, content, and custom features.</span></li>
    <li><strong>Ecommerce</strong><span>Shopify and WooCommerce storefronts, products, cart journeys, and imports.</span></li>
    <li><strong>Automation</strong><span>Python tools, APIs, AI-assisted tasks, data workflows, and internal helpers.</span></li>
  </ul>
</section>

<section class="home-section home-work" aria-labelledby="home-work-title">
  <div class="home-section__heading home-section__heading--work">
    <div>
      <p class="home-eyebrow">Selected build notes</p>
      <h2 id="home-work-title">Real projects. Clear technical choices.</h2>
    </div>
    <p>These are practical builds and write-ups—not mock portfolio screenshots. Open a note to see how I think through a problem and turn it into something useful.</p>
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
    <p>A checkout issue, manual product import, slow WordPress feature, unreliable contact flow, or daily task that should be automated is enough to start. Tell me what is happening; I’ll listen carefully and help you find the best next move.</p>
  </div>
  <a class="home-button home-button--light" href="{{ '/contact/' | relative_url }}">Start a conversation <span aria-hidden="true">→</span></a>
</section>
