---
layout: default
title: "Free Image Metadata Remover"
description: "Remove image metadata online with this free EXIF remover. Strip GPS location, camera details and hidden data from JPG, PNG and WebP privately in your browser."
excerpt: "Remove image metadata online with this free EXIF remover. Strip GPS location, camera details and hidden data from JPG, PNG and WebP privately in your browser."
permalink: /tools/image-metadata-cleaner/
author_profile: false
---

<div class="ht-cleaner-page">
  <div class="ht-cleaner-container">
    
    <!-- Top Back Link -->
    <div class="ht-cleaner-topbar">
      <a class="ht-cleaner-back" href="{{ '/tools/' | relative_url }}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
        <span>Back to tools</span>
      </a>
    </div>

    <!-- Page Hero Header -->
    <header class="ht-page-hero ht-cleaner-hero">
      <div class="ht-eyebrow">
        <span class="ht-eyebrow-dot"></span>
        <span>FREE, PRIVATE IMAGE TOOL</span>
      </div>
      <h1 class="ht-page-hero__title ht-cleaner-title">Free Image Metadata Remover</h1>
      <p class="ht-page-hero__desc ht-cleaner-subtitle">Remove EXIF data, GPS location and other hidden details from a photo before you share it. Your image is cleaned in this browser and never uploaded.</p>
    </header>

    <!-- Main Tool Box Card -->
    <section class="ht-cleaner-card" aria-labelledby="cleaner-heading">
      <div class="ht-cleaner-card__header">
        <div>
          <h2 id="cleaner-heading" class="ht-cleaner-card__title">Remove image metadata online</h2>
          <p class="ht-cleaner-card__meta">JPG, PNG, or WebP &middot; up to 25 MB</p>
        </div>
        <div class="ht-cleaner-badge">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          <span>Private &bull; runs on this device</span>
        </div>
      </div>

      <div class="ht-cleaner-card__body">
        <!-- Error Banner -->
        <div id="cleaner-error" class="ht-cleaner-alert" style="display: none;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span id="cleaner-error-text">An error occurred</span>
        </div>

        <!-- Dropzone / Upload Area -->
        <div id="cleaner-dropzone" class="ht-cleaner-dropzone">
          <input type="file" id="cleaner-file-input" accept="image/jpeg,image/png,image/webp" class="ht-cleaner-file-hidden">
          <div class="ht-cleaner-dropzone__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"></path><path d="m14 19.5 3-3 3 3"></path><path d="M17 22v-5.5"></path><circle cx="9" cy="9" r="2"></circle></svg>
          </div>
          <span class="ht-cleaner-dropzone__heading">Choose a photo to clean</span>
          <span class="ht-cleaner-dropzone__sub">JPG, PNG, or WebP up to 25 MB. It stays on your device.</span>
        </div>

        <!-- Processing State -->
        <div id="cleaner-processing" class="ht-cleaner-processing" style="display: none;">
          <div class="ht-cleaner-spinner"></div>
          <span class="ht-cleaner-processing__text">Re-rendering clean visible pixels...</span>
        </div>

        <!-- Preview & Download Section -->
        <div id="cleaner-preview-section" class="ht-cleaner-preview-wrap" style="display: none;">
          <div class="ht-cleaner-preview-box">
            <img id="cleaner-preview-img" src="" alt="Cleaned image preview" class="ht-cleaner-preview-img">
          </div>
          <div class="ht-cleaner-preview-info">
            <div class="ht-cleaner-info-item">
              <span class="ht-cleaner-info-label">File name:</span>
              <span id="cleaner-file-name" class="ht-cleaner-info-val">clean-image.png</span>
            </div>
            <div class="ht-cleaner-info-item">
              <span class="ht-cleaner-info-label">Metadata:</span>
              <span id="cleaner-status" class="ht-cleaner-info-val ht-cleaner-status">✓ Removed</span>
            </div>
          </div>
          <div class="ht-cleaner-actions">
            <button type="button" id="cleaner-btn-download" class="ht-cleaner-btn ht-cleaner-btn--primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span>Download cleaned image</span>
            </button>
            <button type="button" id="cleaner-btn-reset" class="ht-cleaner-btn ht-cleaner-btn--secondary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
              <span>Process another</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- 3 Pillars Feature Grid -->
    <div class="ht-cleaner-grid">
      <article class="ht-cleaner-card-feature">
        <div class="ht-cleaner-feature-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
        </div>
        <h3 class="ht-cleaner-feature-title">No upload, no account</h3>
        <p class="ht-cleaner-feature-desc">This online EXIF remover processes your image locally in the browser. The original photo is not sent to a server.</p>
      </article>

      <article class="ht-cleaner-card-feature">
        <div class="ht-cleaner-feature-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="10" cy="12" r="2"></circle><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path></svg>
        </div>
        <h3 class="ht-cleaner-feature-title">Remove hidden photo details</h3>
        <p class="ht-cleaner-feature-desc">The new image copy removes supported EXIF, GPS, IPTC, XMP, and embedded content-credential metadata.</p>
      </article>

      <article class="ht-cleaner-card-feature">
        <div class="ht-cleaner-feature-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <h3 class="ht-cleaner-feature-title">JPG, PNG, and WebP</h3>
        <p class="ht-cleaner-feature-desc">Download a clean copy in the same supported image format, ready to share or post online.</p>
      </article>
    </div>

    <section class="ht-cleaner-seo-content" aria-labelledby="cleaner-how-title">
      <div class="ht-cleaner-copy-block">
        <h2 id="cleaner-how-title">How to remove EXIF and GPS data from a photo</h2>
        <ol class="ht-cleaner-steps">
          <li><strong>Select an image.</strong> Choose a JPG, PNG, or WebP photo from your device.</li>
          <li><strong>Let the browser clean it.</strong> The tool creates a fresh image from its visible pixels and removes supported embedded metadata.</li>
          <li><strong>Download the clean copy.</strong> Save the new file and share that copy instead of the original.</li>
        </ol>
        <p>Photos can contain EXIF metadata such as GPS coordinates, camera and phone details, capture dates, and editing software. Removing this hidden information can help protect your privacy when posting photos online or listing items for sale. It does not remove details that are visible in the picture.</p>
      </div>

      <div class="ht-cleaner-copy-block" aria-labelledby="cleaner-faq-title">
        <h2 id="cleaner-faq-title">Image metadata remover: common questions</h2>
        <div class="ht-cleaner-faq-grid">
          <article>
            <h3>Does this remove EXIF and GPS location data?</h3>
            <p>It removes supported EXIF, GPS, IPTC, XMP, and content-credential metadata from the new JPG, PNG, or WebP file. Location clues visible in the image itself remain.</p>
          </article>
          <article>
            <h3>Is my photo uploaded or stored?</h3>
            <p>No. Image processing happens locally in your browser. The selected image is not uploaded to this website or stored on its server.</p>
          </article>
          <article>
            <h3>Will removing metadata change image quality?</h3>
            <p>The tool re-encodes a fresh copy. PNG remains lossless; JPG and WebP may be recompressed, so small visual or file-size differences are possible.</p>
          </article>
          <article>
            <h3>Can this remove an AI label or watermark?</h3>
            <p>It removes supported metadata embedded in the file. It cannot erase visible or pixel-level watermarks or control AI labels added by social platforms.</p>
          </article>
        </div>
      </div>
    </section>

    <p class="ht-cleaner-disclaimer">Use the downloaded copy when sharing. Some websites may add their own metadata or labels after upload.</p>

  </div>
</div>

<style>
/* Cleaner Page Styling - Perfectly aligned with Nasratul Nayem Design System */
.ht-cleaner-page {
  padding: 40px 16px 80px 16px;
  min-height: calc(100vh - 200px);
}
.ht-cleaner-container {
  max-width: 860px;
  margin: 0 auto;
}
.ht-cleaner-topbar {
  margin-bottom: 24px;
}
.ht-cleaner-back {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--ht-text-secondary);
  text-decoration: none !important;
  transition: all 0.2s ease;
}
.ht-cleaner-back:hover {
  color: var(--ht-text-primary);
  transform: translateX(-3px);
}
.ht-cleaner-page .ht-cleaner-hero {
  width: 100%;
  max-width: 820px;
  margin: 0 auto 32px;
}

/* Card */
.ht-cleaner-card {
  background: var(--ht-bg-surface);
  border: 1px solid var(--ht-border);
  border-radius: var(--ht-radius-lg, 16px);
  overflow: hidden;
  box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.4);
  margin-bottom: 24px;
}
.ht-cleaner-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--ht-border);
}
.ht-cleaner-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--ht-text-primary);
  margin: 0 0 4px 0;
}
.ht-cleaner-card__meta {
  font-size: 0.82rem;
  color: var(--ht-text-secondary);
  margin: 0;
}
.ht-cleaner-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--ht-text-primary);
  font-size: 0.82rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--ht-border);
  padding: 4px 10px;
  border-radius: var(--ht-radius-full, 9999px);
}
.ht-cleaner-card__body {
  padding: 24px;
}

/* Dropzone */
.ht-cleaner-dropzone {
  border: 2px dashed var(--ht-border);
  border-radius: var(--ht-radius-md, 12px);
  padding: 50px 20px;
  text-align: center;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.22s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.ht-cleaner-dropzone:hover,
.ht-cleaner-dropzone.is-dragover {
  border-color: rgba(255, 255, 255, 0.42);
  background: rgba(255, 255, 255, 0.035);
  transform: translateY(-2px);
}
.ht-cleaner-file-hidden {
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 10;
}
.ht-cleaner-dropzone__icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: var(--ht-bg-elevated);
  border: 1px solid var(--ht-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ht-text-primary);
  margin-bottom: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.2);
}
.ht-cleaner-dropzone__heading {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--ht-text-primary);
  margin-bottom: 4px;
}
.ht-cleaner-dropzone__sub {
  font-size: 0.85rem;
  color: var(--ht-text-secondary);
}

/* Processing Spinner */
.ht-cleaner-processing {
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.ht-cleaner-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.18);
  border-top-color: var(--ht-text-primary);
  border-radius: 50%;
  animation: htSpin 0.8s linear infinite;
}
@keyframes htSpin {
  to { transform: rotate(360deg); }
}
.ht-cleaner-processing__text {
  font-size: 0.95rem;
  color: var(--ht-text-secondary);
}

/* Alert */
.ht-cleaner-alert {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--ht-border);
  color: var(--ht-text-primary);
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 0.88rem;
  margin-bottom: 18px;
}

/* Preview */
.ht-cleaner-preview-wrap {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.ht-cleaner-preview-box {
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  max-height: 520px;
  overflow: hidden;
}
.ht-cleaner-preview-img {
  max-width: 100%;
  max-height: 480px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: none;
}
.ht-cleaner-preview-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 14px;
  background: var(--ht-bg-elevated);
  border-radius: 8px;
  border: 1px solid var(--ht-border);
  font-size: 0.85rem;
}
.ht-cleaner-info-item {
  display: flex;
  align-items: center;
  gap: 6px;
}
.ht-cleaner-info-label {
  color: var(--ht-text-secondary);
}
.ht-cleaner-info-val {
  font-weight: 600;
  color: var(--ht-text-primary);
}
.ht-cleaner-status {
  color: var(--ht-text-primary) !important;
}

/* Buttons */
.ht-cleaner-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.ht-cleaner-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: var(--ht-radius-full, 9999px);
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  flex: 1;
}
.ht-cleaner-btn--primary {
  background: #f4f4f5;
  color: #09090b;
  box-shadow: none;
}
.ht-cleaner-btn--primary:hover {
  background: #ffffff;
  transform: translateY(-2px);
  box-shadow: none;
}
.ht-cleaner-btn--secondary {
  background: var(--ht-bg-elevated);
  color: var(--ht-text-primary);
  border-color: var(--ht-border);
}
.ht-cleaner-btn--secondary:hover {
  border-color: var(--ht-border-hover);
  background: var(--ht-bg-surface);
  transform: translateY(-2px);
}

/* Features Grid */
.ht-cleaner-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}
.ht-cleaner-card-feature {
  background: var(--ht-bg-surface);
  border: 1px solid var(--ht-border);
  border-radius: var(--ht-radius-md, 12px);
  padding: 20px;
  transition: border-color 0.2s ease;
}
.ht-cleaner-card-feature:hover {
  border-color: var(--ht-border-hover);
}
.ht-cleaner-feature-icon {
  color: var(--ht-text-primary);
  margin-bottom: 12px;
}
.ht-cleaner-feature-title {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--ht-text-primary);
  margin: 0 0 6px 0;
}
.ht-cleaner-feature-desc {
  font-size: 0.84rem;
  color: var(--ht-text-secondary);
  line-height: 1.5;
  margin: 0;
}
.ht-cleaner-disclaimer {
  font-size: 0.78rem;
  color: var(--ht-text-secondary);
  text-align: center;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

.ht-cleaner-seo-content {
  display: grid;
  gap: 20px;
  margin: 0 0 22px;
}
.ht-cleaner-copy-block {
  padding: 24px;
  background: var(--ht-bg-surface);
  border: 1px solid var(--ht-border);
  border-radius: var(--ht-radius-lg, 16px);
}
.ht-cleaner-copy-block h2 {
  margin: 0 0 14px;
  color: var(--ht-text-primary);
  font-family: var(--ht-font-heading);
  font-size: clamp(1.25rem, 2.5vw, 1.6rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
}
.ht-cleaner-copy-block p,
.ht-cleaner-steps {
  color: var(--ht-text-secondary);
  font-size: 0.94rem;
  line-height: 1.7;
}
.ht-cleaner-copy-block p:last-child {
  margin-bottom: 0;
}
.ht-cleaner-steps {
  display: grid;
  gap: 8px;
  margin: 0 0 14px;
  padding-left: 1.4rem;
}
.ht-cleaner-steps strong,
.ht-cleaner-faq-grid h3 {
  color: var(--ht-text-primary);
}
.ht-cleaner-faq-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 24px;
}
.ht-cleaner-faq-grid article {
  min-width: 0;
}
.ht-cleaner-faq-grid h3 {
  margin: 0 0 6px;
  font-size: 0.98rem;
  line-height: 1.4;
}
.ht-cleaner-faq-grid p {
  margin: 0;
  font-size: 0.88rem;
}

/* Keep the mobile tool calm, legible, and touch-friendly. */
@media (max-width: 640px) {
  .ht-cleaner-page {
    padding: 24px 14px calc(52px + env(safe-area-inset-bottom));
    min-height: 0;
  }
  .ht-cleaner-container {
    width: 100%;
    max-width: 520px;
  }
  .ht-cleaner-topbar {
    margin-bottom: 24px;
  }
  .ht-cleaner-page .ht-cleaner-hero {
    margin-bottom: 26px;
  }
  .ht-cleaner-card {
    margin-bottom: 18px;
    border-radius: 20px;
  }
  .ht-cleaner-card__header {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding: 18px 18px 16px;
  }
  .ht-cleaner-card__title {
    font-size: 1.05rem;
  }
  .ht-cleaner-card__meta {
    font-size: 0.8rem;
  }
  .ht-cleaner-badge {
    max-width: 100%;
    padding: 6px 10px;
    font-size: 0.75rem;
    white-space: nowrap;
  }
  .ht-cleaner-card__body {
    padding: 16px;
  }
  .ht-cleaner-dropzone {
    min-height: 228px;
    padding: 28px 16px;
    border-radius: 16px;
  }
  .ht-cleaner-dropzone__heading {
    max-width: 20ch;
    font-size: 1rem;
    line-height: 1.35;
    text-wrap: balance;
  }
  .ht-cleaner-dropzone__sub {
    max-width: 27ch;
    font-size: 0.82rem;
    line-height: 1.45;
  }
  .ht-cleaner-preview-wrap {
    gap: 12px;
  }
  .ht-cleaner-preview-box {
    max-height: 48svh;
  }
  .ht-cleaner-preview-img {
    max-height: 44svh;
  }
  .ht-cleaner-preview-info {
    align-items: stretch;
    flex-direction: column;
    gap: 10px;
    padding: 13px;
  }
  .ht-cleaner-info-item {
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
  }
  .ht-cleaner-info-item:first-child .ht-cleaner-info-label {
    flex: 0 0 auto;
    white-space: nowrap;
  }
  .ht-cleaner-info-item:first-child .ht-cleaner-info-val {
    min-width: 0;
    max-width: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1 auto;
    text-align: right;
  }
  .ht-cleaner-actions {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 10px;
  }
  .ht-cleaner-btn {
    width: 100%;
    min-height: 54px;
    padding: 0 16px;
    font-size: 0.94rem;
    white-space: nowrap;
    flex: none;
  }
  .ht-cleaner-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    margin-bottom: 22px;
  }
  .ht-cleaner-card-feature {
    padding: 17px;
  }
  .ht-cleaner-copy-block {
    padding: 18px;
  }
  .ht-cleaner-faq-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 16px;
  }
  .ht-cleaner-disclaimer {
    padding-inline: 2px;
    font-size: 0.78rem;
    text-align: left;
  }
  .ht-cleaner-alert {
    padding: 12px;
    font-size: 0.85rem;
  }
}

@media (hover: none) {
  .ht-cleaner-dropzone:hover,
  .ht-cleaner-btn--primary:hover,
  .ht-cleaner-btn--secondary:hover {
    transform: none;
  }
}

.ht-cleaner-dropzone:focus-within,
.ht-cleaner-btn:focus-visible,
.ht-cleaner-back:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.78);
  outline-offset: 3px;
}

html:not([data-theme="dark"]) .ht-cleaner-card,
html:not([data-theme="dark"]) .ht-cleaner-card-feature,
html:not([data-theme="dark"]) .ht-cleaner-copy-block {
  background: #ffffff;
  border-color: rgba(0,0,0,0.08);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
html:not([data-theme="dark"]) .ht-cleaner-dropzone {
  background: #fafafa;
  border-color: rgba(15, 23, 42, 0.16);
}
html:not([data-theme="dark"]) .ht-cleaner-dropzone:hover,
html:not([data-theme="dark"]) .ht-cleaner-dropzone.is-dragover {
  background: #f4f4f5;
  border-color: rgba(15, 23, 42, 0.42);
}
html:not([data-theme="dark"]) .ht-cleaner-dropzone__icon {
  color: #09090b;
  background: #f4f4f5;
  border-color: rgba(15, 23, 42, 0.12);
  box-shadow: none;
}
html:not([data-theme="dark"]) .ht-cleaner-feature-icon {
  color: #09090b;
}
html:not([data-theme="dark"]) .ht-cleaner-badge {
  color: #18181b;
  background: rgba(15, 23, 42, 0.035);
  border-color: rgba(15, 23, 42, 0.12);
}
html:not([data-theme="dark"]) .ht-cleaner-spinner {
  border-color: rgba(15, 23, 42, 0.14);
  border-top-color: #09090b;
}
html:not([data-theme="dark"]) .ht-cleaner-preview-info {
  background: #f4f4f5;
  border-color: rgba(15, 23, 42, 0.1);
}
html:not([data-theme="dark"]) .ht-cleaner-btn--primary {
  background: #09090b;
  color: #ffffff;
}
html:not([data-theme="dark"]) .ht-cleaner-btn--primary:hover {
  background: #27272a;
}
html:not([data-theme="dark"]) .ht-cleaner-btn--secondary {
  background: #ffffff;
  border-color: rgba(15, 23, 42, 0.16);
  color: #09090b;
}
html:not([data-theme="dark"]) .ht-cleaner-btn--secondary:hover {
  background: #f4f4f5;
  border-color: rgba(15, 23, 42, 0.28);
}
html:not([data-theme="dark"]) .ht-cleaner-dropzone:focus-within,
html:not([data-theme="dark"]) .ht-cleaner-btn:focus-visible,
html:not([data-theme="dark"]) .ht-cleaner-back:focus-visible {
  outline-color: rgba(9, 9, 11, 0.72);
}
</style>

<script>
(function() {
  const allowedTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);
  const maxBytes = 25 * 1024 * 1024; /* 25 MB */

  const dropzone = document.getElementById('cleaner-dropzone');
  const fileInput = document.getElementById('cleaner-file-input');
  const processingEl = document.getElementById('cleaner-processing');
  const previewSection = document.getElementById('cleaner-preview-section');
  const previewImg = document.getElementById('cleaner-preview-img');
  const fileNameEl = document.getElementById('cleaner-file-name');
  const errorBox = document.getElementById('cleaner-error');
  const errorText = document.getElementById('cleaner-error-text');
  const statusEl = document.getElementById('cleaner-status');
  const btnDownload = document.getElementById('cleaner-btn-download');
  const btnReset = document.getElementById('cleaner-btn-reset');

  let cleanedBlob = null;
  let cleanDownloadName = 'clean-image.png';

  function showError(msg) {
    errorText.textContent = msg;
    errorBox.style.display = 'flex';
    processingEl.style.display = 'none';
    dropzone.style.display = 'flex';
    previewSection.style.display = 'none';
  }

  function hideError() {
    errorBox.style.display = 'none';
  }

  function resetCleaner() {
    if (previewImg.src && previewImg.src.startsWith('blob:')) {
      URL.revokeObjectURL(previewImg.src);
    }
    cleanedBlob = null;
    fileInput.value = '';
    previewImg.src = '';
    hideError();
    previewSection.style.display = 'none';
    processingEl.style.display = 'none';
    dropzone.style.display = 'flex';
  }

  function getExt(type) {
    if (type === 'image/png') return 'png';
    if (type === 'image/webp') return 'webp';
    return 'jpg';
  }

  function getImageType(file) {
    const type = (file.type || '').toLowerCase();
    if (allowedTypes.has(type)) return type;

    const extension = file.name.split('.').pop().toLowerCase();
    if (extension === 'jpg' || extension === 'jpeg') return 'image/jpeg';
    if (extension === 'png') return 'image/png';
    if (extension === 'webp') return 'image/webp';
    return '';
  }

  function joinBytes(parts) {
    const size = parts.reduce(function(total, part) { return total + part.length; }, 0);
    const result = new Uint8Array(size);
    let offset = 0;
    parts.forEach(function(part) {
      result.set(part, offset);
      offset += part.length;
    });
    return result;
  }

  function readUint32BE(bytes, offset) {
    return bytes[offset] * 0x1000000 + (bytes[offset + 1] << 16) + (bytes[offset + 2] << 8) + bytes[offset + 3];
  }

  function readUint32LE(bytes, offset) {
    return bytes[offset] + (bytes[offset + 1] << 8) + (bytes[offset + 2] << 16) + bytes[offset + 3] * 0x1000000;
  }

  function writeUint32LE(bytes, offset, value) {
    bytes[offset] = value & 0xff;
    bytes[offset + 1] = (value >>> 8) & 0xff;
    bytes[offset + 2] = (value >>> 16) & 0xff;
    bytes[offset + 3] = (value >>> 24) & 0xff;
  }

  function readAscii(bytes, start, length) {
    let value = '';
    for (let i = start; i < start + length; i++) value += String.fromCharCode(bytes[i]);
    return value;
  }

  function stripJpegMetadata(bytes) {
    if (bytes.length < 4 || bytes[0] !== 0xff || bytes[1] !== 0xd8) {
      throw new Error('The JPEG copy could not be verified.');
    }

    const parts = [bytes.subarray(0, 2)];
    let offset = 2;
    let foundImageData = false;

    while (offset < bytes.length) {
      const markerStart = offset;
      if (bytes[offset] !== 0xff) throw new Error('The JPEG copy could not be verified.');
      while (bytes[offset] === 0xff) offset++;
      if (offset >= bytes.length) throw new Error('The JPEG copy could not be verified.');

      const marker = bytes[offset++];
      if (marker === 0xd9 || marker === 0x01 || (marker >= 0xd0 && marker <= 0xd7)) {
        parts.push(bytes.subarray(markerStart, offset));
        if (marker === 0xd9) break;
        continue;
      }

      if (offset + 2 > bytes.length) throw new Error('The JPEG copy could not be verified.');
      const segmentLength = (bytes[offset] << 8) + bytes[offset + 1];
      const segmentEnd = offset + segmentLength;
      if (segmentLength < 2 || segmentEnd > bytes.length) throw new Error('The JPEG copy could not be verified.');

      if (marker === 0xda) {
        parts.push(bytes.subarray(markerStart, segmentEnd));
        foundImageData = true;
        let scanOffset = segmentEnd;
        let scan = segmentEnd;

        while (scan < bytes.length) {
          if (bytes[scan] !== 0xff) {
            scan++;
            continue;
          }

          const markerStartInScan = scan;
          let markerOffset = scan + 1;
          while (bytes[markerOffset] === 0xff) markerOffset++;
          if (markerOffset >= bytes.length) throw new Error('The JPEG copy could not be verified.');

          const scanMarker = bytes[markerOffset];
          if (scanMarker === 0x00 || (scanMarker >= 0xd0 && scanMarker <= 0xd7)) {
            scan = markerOffset + 1;
            continue;
          }

          parts.push(bytes.subarray(scanOffset, markerStartInScan));
          offset = markerStartInScan;
          break;
        }

        if (scan >= bytes.length) {
          parts.push(bytes.subarray(scanOffset));
          break;
        }
        continue;
      }

      const isMetadata = (marker >= 0xe0 && marker <= 0xef) || marker === 0xfe;
      if (!isMetadata) parts.push(bytes.subarray(markerStart, segmentEnd));
      offset = segmentEnd;
    }

    if (!foundImageData) throw new Error('The JPEG copy could not be verified.');
    return joinBytes(parts);
  }

  function stripPngMetadata(bytes) {
    const signature = [137, 80, 78, 71, 13, 10, 26, 10];
    if (bytes.length < 20 || !signature.every(function(value, index) { return bytes[index] === value; })) {
      throw new Error('The PNG copy could not be verified.');
    }

    const parts = [bytes.subarray(0, 8)];
    let offset = 8;
    let foundEnd = false;

    while (offset + 12 <= bytes.length) {
      const length = readUint32BE(bytes, offset);
      const type = readAscii(bytes, offset + 4, 4);
      const end = offset + 12 + length;
      if (end > bytes.length) throw new Error('The PNG copy could not be verified.');

      /* Keep critical image chunks and tRNS, which carries pixel transparency. */
      const isCritical = type.charCodeAt(0) >= 65 && type.charCodeAt(0) <= 90;
      if (isCritical || type === 'tRNS') parts.push(bytes.subarray(offset, end));
      offset = end;
      if (type === 'IEND') {
        foundEnd = true;
        break;
      }
    }

    if (!foundEnd) throw new Error('The PNG copy could not be verified.');
    return joinBytes(parts);
  }

  function stripWebpMetadata(bytes) {
    if (bytes.length < 20 || readAscii(bytes, 0, 4) !== 'RIFF' || readAscii(bytes, 8, 4) !== 'WEBP') {
      throw new Error('The WebP copy could not be verified.');
    }

    const riffEnd = readUint32LE(bytes, 4) + 8;
    if (riffEnd > bytes.length || riffEnd < 12) throw new Error('The WebP copy could not be verified.');

    const chunks = [];
    let offset = 12;
    while (offset + 8 <= riffEnd) {
      const type = readAscii(bytes, offset, 4);
      const size = readUint32LE(bytes, offset + 4);
      const dataEnd = offset + 8 + size;
      const chunkEnd = dataEnd + (size & 1);
      if (chunkEnd > riffEnd) throw new Error('The WebP copy could not be verified.');

      if (type === 'VP8X' || type === 'VP8 ' || type === 'VP8L' || type === 'ALPH') {
        const chunk = bytes.slice(offset, chunkEnd);
        if (type === 'VP8X') {
          if (size < 10) throw new Error('The WebP copy could not be verified.');
          /* Clear ICC, EXIF, XMP, and animation flags after dropping those chunks. */
          chunk[8] = chunk[8] & ~0x2e;
        }
        chunks.push(chunk);
      }
      offset = chunkEnd;
    }

    if (!chunks.some(function(chunk) {
      const type = readAscii(chunk, 0, 4);
      return type === 'VP8 ' || type === 'VP8L';
    })) throw new Error('The WebP copy could not be verified.');

    const result = joinBytes([bytes.subarray(0, 12), ...chunks]);
    writeUint32LE(result, 4, result.length - 8);
    return result;
  }

  async function createMetadataFreeBlob(blob) {
    const bytes = new Uint8Array(await blob.arrayBuffer());
    let cleanBytes;
    if (blob.type === 'image/jpeg') cleanBytes = stripJpegMetadata(bytes);
    else if (blob.type === 'image/png') cleanBytes = stripPngMetadata(bytes);
    else if (blob.type === 'image/webp') cleanBytes = stripWebpMetadata(bytes);
    else throw new Error('This browser returned an unsupported image format.');

    return new Blob([cleanBytes], { type: blob.type });
  }

  function processImage(file) {
    hideError();

    const inputType = getImageType(file);

    if (!inputType) {
      showError('Please choose a JPG, PNG, or WebP image file.');
      return;
    }

    if (file.size > maxBytes) {
      showError('File exceeds 25 MB limit. Please select a smaller image.');
      return;
    }

    dropzone.style.display = 'none';
    processingEl.style.display = 'flex';

    const objUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = function() {
      URL.revokeObjectURL(objUrl);

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        showError('Your browser canvas could not process this image.');
        return;
      }

      const outputType = inputType === 'image/png' || inputType === 'image/webp' ? inputType : 'image/jpeg';

      if (outputType === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(async function(blob) {
        if (!blob) {
          showError('Failed to create cleaned copy. Try another image.');
          return;
        }

        try {
          cleanedBlob = await createMetadataFreeBlob(blob);
        } catch (error) {
          showError('The cleaned copy could not be verified. Please try another image or browser.');
          return;
        }

        const cleanExt = getExt(cleanedBlob.type);
        const baseName = file.name.replace(/\.[^/.]+$/, '') || 'image';
        cleanDownloadName = 'clean-' + baseName + '.' + cleanExt;
        statusEl.textContent = '✓ Removed';

        fileNameEl.textContent = cleanDownloadName;
        fileNameEl.title = cleanDownloadName;
        previewImg.src = URL.createObjectURL(cleanedBlob);

        processingEl.style.display = 'none';
        previewSection.style.display = 'flex';
      }, outputType, 0.95);
    };

    img.onerror = function() {
      URL.revokeObjectURL(objUrl);
      showError('Could not decode this image file. Please try another.');
    };

    img.src = objUrl;
  }

  /* Events */
  fileInput.addEventListener('change', function(e) {
    const file = e.target.files && e.target.files[0];
    if (file) processImage(file);
  });

  dropzone.addEventListener('click', function(e) {
    if (e.target !== fileInput) {
      fileInput.click();
    }
  });

  dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
    dropzone.classList.add('is-dragover');
  });

  dropzone.addEventListener('dragleave', function() {
    dropzone.classList.remove('is-dragover');
  });

  dropzone.addEventListener('drop', function(e) {
    e.preventDefault();
    dropzone.classList.remove('is-dragover');
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (file) processImage(file);
  });

  btnDownload.addEventListener('click', function() {
    if (!cleanedBlob) return;
    const url = URL.createObjectURL(cleanedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = cleanDownloadName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function() { URL.revokeObjectURL(url); }, 1500);
  });

  btnReset.addEventListener('click', resetCleaner);
})();
</script>
