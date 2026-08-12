---
title: "Import Products from Browser Pages to WooCommerce"
date: "2026-02-21 12:28:01 +0000"
permalink: "/blog/importon-bridge-product-import-workflow/"
excerpt: "Importon Bridge is a lightweight WordPress plugin that connects a browser companion with WooCommerce. It lets you capture product data..."
layout: post
author_profile: false
read_time: true
comments: false
share: false
related: false
header:
  teaser: "work/importon-bridge-by-nasratul-nayem.webp"
  image: "work/importon-bridge-by-nasratul-nayem.webp"
categories:
  - "Custom Plugins"
---

{% raw %}
<section class="codex-block">
  <p>Importon Bridge is a lightweight WordPress plugin that connects a browser companion with WooCommerce. It captures permitted product data from supported supplier pages and sends it directly into your WordPress store through a clean, authenticated workflow.</p>

  <p>The goal is simple. Instead of copying product titles, descriptions, prices, images, attributes, and variations by hand, Importon Bridge gives you a faster way to move product data from the browser into WooCommerce.</p>

  <p>It is built for store owners and developers who want control. No bloated import dashboard. No complicated SaaS layer. Just a focused bridge between the product page you are viewing and the WooCommerce store you manage.</p>

  <p>You can view the project here: <a href="https://github.com/nasratulnayem/importon-bridge" target="_blank" rel="noopener noreferrer">Importon Bridge on GitHub</a>.</p>
</section>

<section class="codex-block">
  <h2>What Importon Bridge does</h2>
  <p>Importon Bridge is designed around a practical WooCommerce import workflow. The browser companion captures product information from the page, then the WordPress plugin receives it through a secured REST API and creates or updates the product inside WooCommerce.</p>

  <ul>
    <li>Imports product title, description, price, images, attributes, and variations.</li>
    <li>Supports simple and variable WooCommerce products.</li>
    <li>Creates or updates products through authenticated REST API endpoints.</li>
    <li>Adds product video support when a video URL is available.</li>
    <li>Stores import history and failed-item logs for review.</li>
    <li>Includes a batch URL queue for importing multiple product links.</li>
    <li>Supports optional AI rewriting through OpenAI or Google Gemini.</li>
  </ul>

  <p>Importon Bridge is an independent browser-assisted product workflow. Store owners are responsible for importing only data they are permitted to use.</p>
</section>

<section class="codex-block">
  <h2>Why I rebuilt it as Importon Bridge</h2>
  <p>The original idea was narrowly focused on importing supplier product data into WooCommerce. But the plugin grew into something broader. It now works more like a bridge between a browser-based product capture flow and a WordPress-powered store.</p>

  <p>That is why the new name makes more sense. Importon Bridge describes the actual purpose of the tool better. It connects the browser companion, the WooCommerce product system, the REST API, import monitoring, batch URLs, and optional AI rewriting in one focused workflow.</p>

  <p>I also cleaned up the branding, moved more of the setup flow into the plugin admin page, and made the connection process easier. The goal is to make the tool feel more complete without making it heavy.</p>
</section>

<section class="codex-block">
  <h2>How the workflow works</h2>
  <p>The system has two main parts. The first part is the browser companion. It runs in Chrome or any Chromium-based browser and captures product data from the page you are already viewing.</p>

  <p>The second part is the WordPress plugin. It adds the admin screen, connection settings, REST API endpoints, product import logic, history logs, batch URL import tools, and optional AI rewrite settings.</p>

  <ol>
    <li>Open a supported product page in your browser.</li>
    <li>Use the Importon Bridge browser companion to capture the product data.</li>
    <li>Send the product data to WordPress through the authenticated REST API.</li>
    <li>Create or update the WooCommerce product.</li>
    <li>Review import logs, failed items, and optional AI rewrite results inside WordPress.</li>
  </ol>
</section>

<section class="codex-block">
  <h2>REST API endpoints</h2>
  <p>Importon Bridge exposes authenticated endpoints under <code>importonbridge/v1</code>. These endpoints handle connection testing, settings, categories, and product import requests.</p>

  <div class="codex-codebox">
    <div class="codex-codebox-header">
      <div class="codex-codebox-left">
        <div class="codex-codebox-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="codex-codebox-title">REST API · Importon Bridge endpoints</div>
      </div>


    </div>

    <pre><code>POST  /wp-json/importonbridge/v1/import      Create or update a WooCommerce product
GET   /wp-json/importonbridge/v1/ping        Confirm authentication
GET   /wp-json/importonbridge/v1/categories  List WooCommerce product categories
GET   /wp-json/importonbridge/v1/settings    Read connection settings
POST  /wp-json/importonbridge/v1/settings    Save connection settings
POST  /wp-json/importonbridge/v1/connect     Return connection details for the browser companion</code></pre>
  </div>
</section>

<section class="codex-block">
  <h2>AI rewriting support</h2>
  <p>AI rewriting is optional. It only runs when the administrator enables it from the plugin settings. This keeps the plugin useful for normal imports without forcing AI into every workflow.</p>

  <ul>
    <li>Supports OpenAI and Google Gemini.</li>
    <li>Stores API keys server-side in WordPress options.</li>
    <li>Allows provider order and model selection from the settings screen.</li>
    <li>Can rewrite titles and descriptions before saving product content.</li>
  </ul>
</section>

<section class="codex-block">
  <h2>Security choices</h2>
  <p>Because this plugin creates and updates WooCommerce products, the security layer matters. Importon Bridge uses WordPress-native protections instead of trying to invent its own system.</p>

  <ul>
    <li>Admin actions use WordPress nonces.</li>
    <li>REST endpoints check authentication and user capabilities.</li>
    <li>User input is sanitized before storage or processing.</li>
    <li>Output is escaped before rendering in the admin or frontend.</li>
    <li>External AI calls only run when an administrator configures them.</li>
  </ul>
</section>

<section class="codex-block">
  <h2>Requirements</h2>
  <p>Importon Bridge is built for modern WooCommerce stores and a Chromium-based browser workflow.</p>

  <ul>
    <li>WordPress 6.0 or higher.</li>
    <li>WooCommerce 8.0 or higher.</li>
    <li>PHP 7.4 or higher.</li>
    <li>Google Chrome or another Chromium-based browser for the browser companion.</li>
  </ul>
</section>

<section class="codex-block">
  <h2>How to install</h2>
  <p>The setup has two parts: the WordPress plugin and the browser companion. The plugin handles the WooCommerce side. The browser companion handles product capture from supported product pages.</p>

  <h3>WordPress side</h3>
  <ol>
    <li>Download the latest release from the <a href="https://github.com/nasratulnayem/importon-bridge/releases" target="_blank" rel="noopener noreferrer">Importon Bridge releases page</a>.</li>
    <li>Upload the plugin to <code>/wp-content/plugins/</code>.</li>
    <li>Activate the plugin from the WordPress dashboard.</li>
    <li>Make sure WooCommerce is installed and active.</li>
    <li>Open Importon Bridge in the WordPress admin.</li>
  </ol>

  <h3>Browser side</h3>
  <ol>
    <li>Download the browser companion from the Importon Bridge settings page.</li>
    <li>Open <code>chrome://extensions</code> in Chrome.</li>
    <li>Turn on Developer Mode.</li>
    <li>Click Load unpacked and select the browser companion folder.</li>
    <li>Create a WordPress Application Password from your user profile.</li>
    <li>Paste your Site URL, username, and Application Password into the connection panel.</li>
    <li>Use the Test Connection option before importing products.</li>
  </ol>
</section>

<section class="codex-block">
  <h2>File structure</h2>
  <p>The plugin is organized into a small set of focused files. The main plugin file loads the system, while the includes folder handles admin screens, REST API logic, frontend behavior, and batch URL importing.</p>

  <div class="codex-codebox">
    <div class="codex-codebox-header">
      <div class="codex-codebox-left">
        <div class="codex-codebox-dots">
          <span></span><span></span><span></span>
        </div>
        <div class="codex-codebox-title">Project structure · Importon Bridge</div>
      </div>


    </div>

    <pre><code>importon-bridge/
├── importon-bridge.php
├── README.txt
├── README.md
├── license.txt
├── assets/
│   └── url-import-admin.js
└── includes/
    ├── class-importonbridge-admin.php
    ├── class-importonbridge-frontend.php
    ├── class-importonbridge-rest.php
    └── class-importonbridge-url-import.php</code></pre>
  </div>
</section>

<section class="codex-block">
  <h2>Who this is for</h2>
  <p>Importon Bridge is for WooCommerce store owners, product upload teams, and developers who want a faster import workflow without relying on a heavy subscription tool.</p>

  <p>It is especially useful when you need to move product data from browser-based supplier pages into WooCommerce, but you still want control over what gets imported, rewritten, reviewed, and published.</p>
</section>

<section class="codex-block">
  <h2>What changed in version 0.1.0</h2>
  <p>The first release focuses on the core bridge between the browser companion and WooCommerce.</p>

  <ul>
    <li>Browser companion product import flow.</li>
    <li>WooCommerce product creation and update support.</li>
    <li>Simple and variable product handling.</li>
    <li>Optional AI rewriting.</li>
    <li>Batch URL import queue.</li>
    <li>Failed-run logging and admin monitoring.</li>
    <li>Clean Importon Bridge branding and connection flow.</li>
  </ul>
</section>

<section class="codex-block">
  <h2>Why this plugin matters</h2>
  <p>Importing products should not feel like a full-time data entry job. Importon Bridge makes the process faster by connecting the product page, the browser, and WooCommerce in one direct workflow.</p>

  <p>It does not try to be a giant dropshipping platform. It focuses on the part that actually slows people down: collecting product data, sending it into WooCommerce, reviewing it, and improving the copy when needed.</p>

  <p>That focus is what makes the plugin useful. It is a practical bridge for people who want a cleaner product import process without giving up control of their WordPress store.</p>
</section>
{% endraw %}
