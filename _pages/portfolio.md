---
layout: archive
title: "Selected work"
permalink: /portfolio/
author_profile: false
---

These are real build notes from my WordPress site. They show the technical decisions behind WordPress plugins, WooCommerce improvements, product-import tooling, and automation systems.

<div class="work-grid">
{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>

## Open-source work

- [Effortless WebP Converter for WordPress](https://github.com/nasratulnayem/effortless-webp-converter)
- [Video Automation](https://github.com/nasratulnayem/VideoAutomation)
