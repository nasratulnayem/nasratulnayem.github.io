---
layout: default
title: "Engineering Portfolio & Build Notes"
description: "Selected engineering portfolio and build notes by Nasratul Nayem — websites, ecommerce systems, and automation projects with real outcomes."
permalink: /portfolio/
author_profile: false
---

<div class="ht-page-hero">
  <div class="ht-eyebrow">
    <span class="ht-eyebrow-dot"></span>
    <span>ENGINEERING BUILDS &amp; CASE STUDIES</span>
  </div>
  <h1 class="ht-page-hero__title">From rough idea to shipped production software.</h1>
  <p class="ht-page-hero__desc">Real build notes from the systems I design: high-conversion storefronts, custom WordPress tools, and Python automations that give teams their time back.</p>
</div>

<div class="ht-work-section">
  <div class="ht-work-controls ht-work-controls--page">
    <div class="portfolio-filter-hud" role="tablist" aria-label="Filter case studies">
      <button type="button" class="filter-chip is-active" data-category="all">All Systems ({{ site.posts.size }})</button>
      <button type="button" class="filter-chip" data-category="wordpress">WordPress</button>
      <button type="button" class="filter-chip" data-category="ecommerce">Ecommerce</button>
      <button type="button" class="filter-chip" data-category="automation">Automation &amp; AI</button>
      <button type="button" class="filter-chip" data-category="case study">Case Studies</button>
    </div>
    <div class="ht-search-wrap">
      <input type="text" class="portfolio-search-input" placeholder="Search case studies &amp; tools..." aria-label="Search build notes">
    </div>
  </div>

  <div class="work-grid portfolio-grid">
    {% for post in site.posts %}
      {% include archive-single.html type="grid" %}
    {% endfor %}
  </div>
</div>

<!-- Open Source Repositories Section -->
<section class="ht-oss-section">
  <div class="ht-section-header">
    <div class="ht-eyebrow">
      <span class="ht-eyebrow-dot"></span>
      <span>OPEN SOURCE SOFTWARE</span>
    </div>
    <h2 class="ht-section-title">Open-Source Repositories &amp; Utilities</h2>
  </div>

  <div class="ht-oss-grid">
    <a class="bento-card glow-card ht-oss-card" href="https://github.com/nasratulnayem/effortless-webp-converter" target="_blank" rel="noopener noreferrer">
      <div class="bento-card__badge-row">
        <span class="ht-badge ht-badge--cyan">WordPress Plugin</span>
        <span class="ht-badge"><i class="fab fa-github"></i> Open Source</span>
      </div>
      <h3 class="bento-card__title">Effortless WebP Converter</h3>
      <p class="bento-card__desc">Automatic lightweight converter converting uploaded media to modern WebP format in WordPress on the fly without external cloud API dependencies.</p>
      <span class="ht-oss-link">View on GitHub ↗</span>
    </a>

    <a class="bento-card glow-card ht-oss-card" href="https://github.com/nasratulnayem/VideoAutomation" target="_blank" rel="noopener noreferrer">
      <div class="bento-card__badge-row">
        <span class="ht-badge ht-badge--green">Python Engine</span>
        <span class="ht-badge"><i class="fab fa-github"></i> Open Source</span>
      </div>
      <h3 class="bento-card__title">VideoAutomation Pipeline</h3>
      <p class="bento-card__desc">Automated video compilation, subtitle rendering, and scheduled publishing pipeline built in Python.</p>
      <span class="ht-oss-link">View on GitHub ↗</span>
    </a>
  </div>
</section>

