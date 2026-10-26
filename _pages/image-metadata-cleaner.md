---
layout: default
title: "Image Metadata Cleaner — Free Private Image Sanitizer"
description: "Remove EXIF, GPS, camera model, and hidden metadata from JPG, PNG, and WebP images directly in your browser. 100% private, zero uploads."
permalink: /tools/image-metadata-cleaner/
keywords: "image metadata cleaner, remove exif, strip metadata, privacy tool, local image cleaner"
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
    <header class="ht-cleaner-hero">
      <div class="ht-cleaner-pill">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ht-cleaner-pill__icon"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
        <span>Local image tool</span>
      </div>
      <h1 class="ht-cleaner-title">Create a clean image copy.</h1>
      <p class="ht-cleaner-subtitle">Make a fresh copy from visible pixels. Your image stays in this browser and is never uploaded to any server.</p>
    </header>

    <!-- Main Tool Box Card -->
    <section class="ht-cleaner-card" aria-labelledby="cleaner-heading">
      <div class="ht-cleaner-card__header">
        <div>
          <h2 id="cleaner-heading" class="ht-cleaner-card__title">Image metadata cleaner</h2>
          <p class="ht-cleaner-card__meta">JPG, PNG, or WebP &middot; up to 25 MB</p>
        </div>
        <div class="ht-cleaner-badge">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          <span>No upload &bull; 100% Client-side</span>
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
          <span class="ht-cleaner-dropzone__heading">Click or drag an image here</span>
          <span class="ht-cleaner-dropzone__sub">Nothing leaves your device.</span>
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
              <span class="ht-cleaner-info-label">Clean File Name:</span>
              <span id="cleaner-file-name" class="ht-cleaner-info-val">clean-image.png</span>
            </div>
            <div class="ht-cleaner-info-item">
              <span class="ht-cleaner-info-label">Status:</span>
              <span class="ht-cleaner-info-val ht-text-emerald">✓ Metadata Stripped</span>
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
        <h3 class="ht-cleaner-feature-title">Private by design</h3>
        <p class="ht-cleaner-feature-desc">The processing runs 100% locally in your browser memory. No data or image ever touches a remote server.</p>
      </article>

      <article class="ht-cleaner-card-feature">
        <div class="ht-cleaner-feature-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle cx="10" cy="12" r="2"></circle><path d="m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"></path></svg>
        </div>
        <h3 class="ht-cleaner-feature-title">Fresh file</h3>
        <p class="ht-cleaner-feature-desc">The output is freshly re-rendered from the visible pixels, ensuring EXIF, GPS location, device serials, and timestamps are stripped.</p>
      </article>

      <article class="ht-cleaner-card-feature">
        <div class="ht-cleaner-feature-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <h3 class="ht-cleaner-feature-title">Your format</h3>
        <p class="ht-cleaner-feature-desc">PNG, JPEG, and WebP formats are seamlessly supported and preserved with optimal visual quality.</p>
      </article>
    </div>

    <!-- Bottom Disclaimer -->
    <p class="ht-cleaner-disclaimer">
      This tool creates a new image file from visible pixels; it does not alter the visible image content. Platform-specific labels or external detection algorithms remain outside this tool's control.
    </p>

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
  color: var(--ht-cyan);
  transform: translateX(-3px);
}
.ht-cleaner-hero {
  margin-bottom: 32px;
}
.ht-cleaner-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(0, 245, 160, 0.08);
  border: 1px solid rgba(0, 245, 160, 0.25);
  color: var(--ht-emerald);
  padding: 4px 14px;
  border-radius: var(--ht-radius-full, 9999px);
  font-size: 0.78rem;
  font-weight: 600;
  margin-bottom: 16px;
}
.ht-cleaner-pill__icon {
  color: var(--ht-emerald);
}
.ht-cleaner-title {
  font-size: clamp(2rem, 4vw, 2.85rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--ht-text-primary);
  line-height: 1.15;
  margin: 0 0 12px 0;
}
.ht-cleaner-subtitle {
  font-size: 1.05rem;
  color: var(--ht-text-secondary);
  line-height: 1.6;
  max-width: 600px;
  margin: 0;
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
  color: var(--ht-emerald);
  font-size: 0.82rem;
  font-weight: 600;
  background: rgba(0, 245, 160, 0.08);
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
  border-color: var(--ht-cyan);
  background: rgba(0, 210, 255, 0.04);
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
  color: var(--ht-cyan);
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
  border: 3px solid rgba(0, 210, 255, 0.15);
  border-top-color: var(--ht-cyan);
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
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.25);
  color: #f87171;
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
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid var(--ht-border);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 240px;
  max-height: 520px;
  overflow: hidden;
}
.ht-cleaner-preview-img {
  max-width: 100%;
  max-height: 480px;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
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
.ht-text-emerald {
  color: var(--ht-emerald) !important;
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
  background: var(--ht-cyan);
  color: #080b10;
  box-shadow: 0 4px 18px var(--ht-cyan-glow);
}
.ht-cleaner-btn--primary:hover {
  background: #38bdf8;
  transform: translateY(-2px);
  box-shadow: 0 6px 22px var(--ht-cyan-glow);
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
  color: var(--ht-cyan);
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

[data-theme="light"] .ht-cleaner-card,
[data-theme="light"] .ht-cleaner-card-feature {
  background: #ffffff;
  border-color: rgba(0,0,0,0.08);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}
[data-theme="light"] .ht-cleaner-preview-box {
  background: #f8fafc;
}
[data-theme="light"] .ht-cleaner-dropzone {
  background: #fafafa;
}
[data-theme="light"] .ht-cleaner-preview-info {
  background: #f1f5f9;
}
[data-theme="light"] .ht-cleaner-btn--primary {
  color: #ffffff;
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

  function processImage(file) {
    hideError();

    if (!allowedTypes.has(file.type)) {
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

      const outputType = (file.type === 'image/png' || file.type === 'image/webp') ? file.type : 'image/jpeg';

      if (outputType === 'image/jpeg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      canvas.toBlob(function(blob) {
        if (!blob) {
          showError('Failed to create cleaned copy. Try another image.');
          return;
        }

        cleanedBlob = blob;
        const cleanExt = getExt(blob.type);
        const baseName = file.name.replace(/\.[^/.]+$/, '');
        cleanDownloadName = 'clean-' + baseName + '.' + cleanExt;

        fileNameEl.textContent = cleanDownloadName;
        previewImg.src = URL.createObjectURL(blob);

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
