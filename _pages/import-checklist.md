---
layout: default
title: "Download: WooCommerce Product Import Checklist"
description: "Your 10-step WooCommerce product import checklist. Download the complete guide for importing products from Alibaba, AliExpress, Shopify to WooCommerce."
permalink: /downloads/import-checklist/
author_profile: false
---

<style>
  .checklist-page { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
  .checklist-header { text-align: center; margin-bottom: 48px; }
  .checklist-header h1 { font-size: 32px; color: var(--ht-text-primary); margin-bottom: 12px; }
  .checklist-header p { font-size: 16px; color: var(--ht-text-secondary); }
  .checklist-step { background: var(--ht-bg-surface); border: 1px solid var(--ht-border); border-radius: 12px; padding: 24px; margin-bottom: 16px; }
  .checklist-step-header { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
  .step-number { width: 32px; height: 32px; background: var(--brand); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; flex-shrink: 0; }
  .step-title { font-size: 18px; font-weight: 600; color: var(--ht-text-primary); }
  .checklist-items { list-style: none; padding: 0; margin: 0; }
  .checklist-items li { padding: 8px 0; padding-left: 28px; position: relative; color: var(--ht-text-secondary); font-size: 15px; line-height: 1.6; }
  .checklist-items li::before { content: "☐"; position: absolute; left: 0; color: var(--brand); font-size: 16px; }
  .download-box { background: linear-gradient(135deg, rgba(0,110,252,0.1), rgba(0,110,252,0.02)); border: 2px solid rgba(0,110,252,0.3); border-radius: 16px; padding: 32px; text-align: center; margin-top: 48px; }
  .download-box h2 { color: var(--ht-text-primary); margin-bottom: 8px; }
  .download-box p { color: var(--ht-text-secondary); margin-bottom: 20px; }
</style>

<div class="checklist-page">

  <div class="checklist-header">
    <div style="display:inline-block;background:rgba(0,110,252,0.15);color:var(--brand);font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:6px 14px;border-radius:20px;margin-bottom:16px;">FREE DOWNLOAD</div>
    <h1>WooCommerce Product Import Checklist</h1>
    <p>The exact 10-step process for importing products from any source to WooCommerce — without errors.</p>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">01</div>
      <div class="step-title">Pre-Import Configuration</div>
    </div>
    <ul class="checklist-items">
      <li>Enable WordPress debug mode to catch import errors early</li>
      <li>Set WooCommerce currency and weight units correctly</li>
      <li>Install and activate Importon Bridge plugin</li>
      <li>Configure your default product category structure</li>
      <li>Set up product image dimensions in WooCommerce settings</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">02</div>
      <div class="step-title">Source File Preparation</div>
    </div>
    <ul class="checklist-items">
      <li>Export CSV from supplier (Alibaba, AliExpress, Shopify, Amazon)</li>
      <li>Open in spreadsheet app — verify column headers are clear</li>
      <li>Remove any merged cells or empty rows</li>
      <li>Ensure image URLs are complete (not relative paths)</li>
      <li>Check price columns use consistent currency and format</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">03</div>
      <div class="step-title">Column Mapping</div>
    </div>
    <ul class="checklist-items">
      <li>Map CSV column "Title" → WooCommerce "Product Name"</li>
      <li>Map CSV column "Description" → WooCommerce "Long Description"</li>
      <li>Map CSV column "Price" → WooCommerce "Regular Price"</li>
      <li>Map CSV column "Images" → WooCommerce "Product Images"</li>
      <li>Map CSV column "SKU" → WooCommerce "SKU" field</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">04</div>
      <div class="step-title">Image Handling</div>
    </div>
    <ul class="checklist-items">
      <li>Verify all image URLs are accessible (not behind firewalls)</li>
      <li>Check image format: JPG, PNG, or WebP supported</li>
      <li>Set featured image from first image in the list</li>
      <li>Enable "Download external images" in Importon Bridge settings</li>
      <li>Test with 5 products first — verify images download correctly</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">05</div>
      <div class="step-title">Category & Tag Setup</div>
    </div>
    <ul class="checklist-items">
      <li>Map CSV category column to WooCommerce "Product Categories"</li>
      <li>Create parent categories before importing (if using hierarchy)</li>
      <li>Map CSV tags column to WooCommerce "Product Tags"</li>
      <li>Use consistent naming (no "Shoes" vs "shoes" vs "Shoe")</li>
      <li>Set default category for products without a category match</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">06</div>
      <div class="step-title">Attributes & Variations</div>
    </div>
    <ul class="checklist-items">
      <li>Map size/color columns to WooCommerce "Attributes"</li>
      <li>Set attribute type: "Select" for dropdowns, "Text" for custom</li>
      <li>Enable "Visible on product page" for each attribute</li>
      <li>For variable products: map "Size" and "Color" columns</li>
      <li>Test with 3-5 variable products before full import</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">07</div>
      <div class="step-title">SEO Optimization</div>
    </div>
    <ul class="checklist-items">
      <li>Map CSV "Title" → SEO meta title (auto-generate if missing)</li>
      <li>Map CSV "Description" → SEO meta description</li>
      <li>Set URL slug from product title (lowercase, hyphens)</li>
      <li>Add alt text to all product images</li>
      <li>Set focus keyword for each product (if using Yoast/RankMath)</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">08</div>
      <div class="step-title">Inventory & Pricing</div>
    </div>
    <ul class="checklist-items">
      <li>Map stock quantity column → WooCommerce "Stock Quantity"</li>
      <li>Set "Manage stock?" to Yes for products with stock data</li>
      <li>Map sale price column → WooCommerce "Sale Price" (if available)</li>
      <li>Verify weight and dimensions for shipping calculations</li>
      <li>Set "In stock" status for products with quantity > 0</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">09</div>
      <div class="step-title">Test Import (50 Products)</div>
    </div>
    <ul class="checklist-items">
      <li>Create a backup of your WooCommerce database first</li>
      <li>Import only 50 products as a test batch</li>
      <li>Check product titles — are they correct?</li>
      <li>Check prices — are they formatted properly?</li>
      <li>Check images — are they downloading and displaying?</li>
      <li>Check categories — are they assigned correctly?</li>
      <li>Run through the checkout process with a test product</li>
    </ul>
  </div>

  <div class="checklist-step">
    <div class="checklist-step-header">
      <div class="step-number">10</div>
      <div class="step-title">Full Import & Verification</div>
    </div>
    <ul class="checklist-items">
      <li>If test import passed: import the full catalog</li>
      <li>Monitor import progress — don't close the browser</li>
      <li>After import: spot-check 10 random products</li>
      <li>Verify search works (search by product name)</li>
      <li>Test product filtering (by category, price, attribute)</li>
      <li>Check mobile responsiveness on 3+ devices</li>
      <li>Run PageSpeed Insights — ensure images load fast</li>
    </ul>
  </div>

  <div class="download-box">
    <h2>Want to Automate All 10 Steps?</h2>
    <p>Importon Bridge does this entire checklist automatically. Import 500+ products in minutes, not hours.</p>
    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
      <a href="/tools/importon-bridge/" style="display:inline-block;background:var(--brand);color:white;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:600;">See Importon Bridge →</a>
      <a href="/free-guide/" style="display:inline-block;background:transparent;border:1px solid var(--ht-border);color:var(--ht-text-primary);padding:14px 32px;border-radius:10px;text-decoration:none;">Back to Free Guide</a>
    </div>
  </div>

</div>
