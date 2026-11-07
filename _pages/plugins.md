---
layout: default
title: "Software Tools & Developer Utilities"
permalink: /tools/
description: "Production software tools, browser bridges, and privacy utilities engineered by Nasratul Nayem."
---

<style>
  .ht-tools-page {
    padding: 2.5rem 1rem 5rem 1rem;
    max-width: 1240px;
    margin: 0 auto;
    font-family: var(--ht-font-sans);
  }
  .ht-tools-hero {
    text-align: center;
    max-width: 760px;
    margin: 1.5rem auto 3.5rem auto;
  }
  .ht-tools-hero .ht-eyebrow {
    margin: 0 auto 1.25rem auto !important;
  }
  .ht-tools-title {
    font-family: var(--ht-font-heading);
    font-size: clamp(2.2rem, 3.8vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.025em;
    color: var(--ht-text-primary);
    margin: 0 0 1rem 0;
    line-height: 1.15;
  }
  .ht-tools-desc {
    color: var(--ht-text-secondary);
    font-size: 1.1rem;
    line-height: 1.65;
    margin: 0;
  }

  /* 3-Column Grid on Desktop, 1-Column on Phone */
  .ht-tools-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  @media (max-width: 900px) {
    .ht-tools-grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  /* Simple, Clean Card without pricing, bullet points, or buttons */
  .ht-tool-card {
    background: var(--ht-bg-card, #1c1c1c);
    border: 1px solid var(--ht-border);
    border-radius: var(--ht-radius-lg, 18px);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-decoration: none !important;
    color: inherit !important;
    box-shadow: var(--ht-shadow-sm);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ht-tool-card:hover {
    border-color: var(--ht-border-hover);
    transform: translateY(-4px);
    box-shadow: var(--ht-shadow-md);
  }

  .ht-tool-card__visual {
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #11141a;
    border-bottom: 1px solid var(--ht-border);
  }
  .ht-tool-card__visual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .ht-tool-card:hover .ht-tool-card__visual img {
    transform: scale(1.03);
  }

  .ht-tool-card__body {
    padding: 22px 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  .ht-tool-card__tag {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: #38bdf8;
    background: rgba(56, 189, 248, 0.08);
    border: 1px solid rgba(56, 189, 248, 0.2);
    padding: 3px 9px;
    border-radius: 9999px;
    margin-bottom: 12px;
  }
  .ht-tool-card__title {
    font-family: var(--ht-font-heading);
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--ht-text-primary);
    margin: 0 0 10px 0;
    line-height: 1.3;
  }
  .ht-tool-card__summary {
    font-family: var(--ht-font-sans);
    font-size: 0.92rem;
    color: var(--ht-text-secondary);
    line-height: 1.6;
    margin: 0;
  }
</style>

<div class="ht-tools-page">
  <header class="ht-tools-hero">
    <div class="ht-eyebrow">
      <span class="ht-eyebrow-dot"></span>
      <span>PROVEN SOFTWARE TOOLS</span>
    </div>
    <h1 class="ht-tools-title">Focused tools for workflows that should never be manual.</h1>
    <p class="ht-tools-desc">Production-grade software tools and workflow engines built to eliminate repetitive bottlenecks and connect local developer agents directly to browser workflows.</p>
  </header>

  <div class="ht-tools-grid">
    {% for product in site.data.plugins.products %}
      <a class="ht-tool-card" href="{{ product.url | relative_url }}">
        <div class="ht-tool-card__visual">
          <img src="{{ product.image | relative_url }}" alt="{{ product.name }}" loading="lazy">
        </div>
        <div class="ht-tool-card__body">
          <span class="ht-tool-card__tag">{{ product.category }}</span>
          <h2 class="ht-tool-card__title">{{ product.name }}</h2>
          <p class="ht-tool-card__summary">{{ product.summary }}</p>
        </div>
      </a>
    {% endfor %}
  </div>
</div>
