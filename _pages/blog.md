---
layout: archive
title: "Blog"
permalink: /blog/
author_profile: true
---

Practical build notes on WordPress, WooCommerce, custom plugins, Python automation, and tools that remove manual work.

<div class="grid__wrapper">
{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}
</div>
