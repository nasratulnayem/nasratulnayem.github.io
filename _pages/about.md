---
layout: home
permalink: /
title: "Websites, ecommerce, and automation that reduce manual work"
author_profile: true
---

<section class="home-introduction" aria-labelledby="home-intro-title">
  <div class="home-introduction__portrait">
    <img src="{{ '/images/profile.png' | relative_url }}" alt="Nasratul Nayem, web developer and automation expert">
    <p class="home-introduction__location"><span>Bangladesh</span><span aria-hidden="true">•</span><span>Working remotely</span></p>
  </div>

  <div class="home-introduction__copy">
    <p class="home-kicker">Hi, I’m Nayem</p>
    <h1 id="home-intro-title">I build websites and automations that make <span>business work feel lighter.</span></h1>
    <p class="home-introduction__lead">I’m a web developer from Bangladesh, working remotely with people who care about their business. I create useful websites, ecommerce experiences, custom tools, and automations that help a team move with more clarity and less manual work.</p>
    <p class="home-introduction__thought">I do not start with a stack of tools. I start by understanding what is slow, confusing, or getting in the way—then I turn that into something practical your business can keep using.</p>
    <div class="home-introduction__actions">
      <a class="home-button home-button--primary" href="{{ '/contact/' | relative_url }}">Tell me what you need <span aria-hidden="true">→</span></a>
      <a class="home-text-link" href="{{ '/portfolio/' | relative_url }}">See selected work <span aria-hidden="true">→</span></a>
    </div>
    <ul class="home-introduction__skills" aria-label="Core skills">
      <li>WordPress</li>
      <li>Shopify &amp; WooCommerce</li>
      <li>Custom code</li>
      <li>Automation &amp; AI</li>
    </ul>
  </div>
</section>

<section class="home-statement" aria-labelledby="home-statement-title">
  <p class="home-kicker">What matters to me</p>
  <div class="home-statement__grid">
    <h2 id="home-statement-title">A website should not only look professional. It should make the next step easier.</h2>
    <div>
      <p>That can mean a clearer service page, a product flow that customers understand, a checkout that stops losing sales, or an internal task that no longer takes hours every week.</p>
      <p>My job is to listen closely, understand the business behind the request, and make the technical side feel simpler—not heavier.</p>
    </div>
  </div>
</section>

<section class="home-capabilities" aria-labelledby="home-capabilities-title">
  <div class="home-editorial-heading">
    <p class="home-kicker">How I can help</p>
    <h2 id="home-capabilities-title">One person for the website, the store, and the work behind it.</h2>
  </div>

  <div class="home-capability-grid">
    <a class="home-capability-card" href="{{ '/services/' | relative_url }}">
      <span class="home-capability-card__index">01</span>
      <h3>Websites that feel clear</h3>
      <p>Business sites, landing pages, contact flows, WordPress themes, custom PHP, CSS, JavaScript, and features shaped around the people using them.</p>
      <span>Explore web development <b aria-hidden="true">→</b></span>
    </a>
    <a class="home-capability-card" href="{{ '/ecommerce/' | relative_url }}">
      <span class="home-capability-card__index">02</span>
      <h3>Stores that do more work</h3>
      <p>Shopify and WooCommerce product pages, cart journeys, product imports, custom functionality, and store improvements that support sales and operations.</p>
      <span>Explore ecommerce <b aria-hidden="true">→</b></span>
    </a>
    <a class="home-capability-card" href="{{ '/automation/' | relative_url }}">
      <span class="home-capability-card__index">03</span>
      <h3>Automation that returns time</h3>
      <p>Python tools, APIs, AI-assisted workflows, reporting, content helpers, and practical automations connected to the real work your team already does.</p>
      <span>Explore automation <b aria-hidden="true">→</b></span>
    </a>
  </div>
</section>

<section class="home-product-spotlight" aria-labelledby="home-product-title">
  <div class="home-product-spotlight__intro">
    <p class="home-kicker">A tool you can use now</p>
    <h2 id="home-product-title">When the same ecommerce task keeps repeating, a focused tool can be the better answer.</h2>
    <p>Importon Bridge is the first product I am releasing from the workflows I build: a browser-assisted route for moving supported product details into a WooCommerce store.</p>
    <a class="home-text-link" href="{{ '/plugins/' | relative_url }}">Browse plugins <span aria-hidden="true">→</span></a>
  </div>
  <a class="home-product-spotlight__card" href="{{ '/plugins/importon-bridge/' | relative_url }}">
    <img src="{{ '/images/work/importon-bridge-by-nasratul-nayem.webp' | relative_url }}" alt="Importon Bridge workflow preview" loading="lazy">
    <span class="home-product-spotlight__card-meta">WooCommerce product workflow · Pro</span>
    <strong>Importon Bridge</strong>
    <span>See the product <b aria-hidden="true">→</b></span>
  </a>
</section>

<section class="home-partner" aria-labelledby="home-partner-title">
  <div class="home-partner__quote">
    <p class="home-kicker">A practical partnership</p>
    <h2 id="home-partner-title">You know your business. I bring the web and automation side into focus.</h2>
  </div>
  <div class="home-partner__details">
    <p>You do not need to know the perfect technical words before you get in touch. Show me the current website, explain the awkward process, or tell me what customers keep struggling with.</p>
    <ul>
      <li>Local businesses and professional services</li>
      <li>Restaurants, clinics, schools, and growing teams</li>
      <li>Online stores that need a stronger customer journey</li>
      <li>Teams ready to reduce repeated manual work</li>
    </ul>
  </div>
</section>

<section class="home-section home-work" aria-labelledby="home-work-title">
  <div class="home-editorial-heading home-editorial-heading--work">
    <div>
      <p class="home-kicker">Selected build notes</p>
      <h2 id="home-work-title">Real work, with the thinking behind it.</h2>
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

<section class="home-closing home-closing--new" aria-labelledby="home-closing-title">
  <div>
    <p class="home-kicker">Let’s make the next step clearer</p>
    <h2 id="home-closing-title">Tell me what your business needs to work better.</h2>
    <p>A slow website, a difficult product workflow, a missing feature, or a repeated daily task is enough to begin. I’ll listen, understand the situation, and help you choose a useful next step.</p>
  </div>
  <a class="home-button home-button--light" href="{{ '/contact/' | relative_url }}">Start a conversation <span aria-hidden="true">→</span></a>
</section>
