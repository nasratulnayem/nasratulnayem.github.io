---
layout: default
title: "ChatGPT Agent Bridge — Open-Source AI Agent MCP for ChatGPT Web"
description: "Free and open-source Model Context Protocol (MCP) bridge connecting Antigravity Cortex, Claude Desktop & Cursor to your active ChatGPT Web session."
permalink: /tools/chatgpt-agent-bridge/
keywords: "chatgpt agent bridge, bypass chatgpt api, local mcp server, antigravity cortex, dalle web automation, ai agent browser bridge"
author_profile: false
---

<style>
  .ht-bridge-tool-page {
    padding: 32px 16px 64px 16px;
    min-height: calc(100vh - 200px);
  }
  .ht-bridge-tool-container {
    max-width: 860px;
    margin: 0 auto;
  }
  .ht-bridge-topbar {
    margin-bottom: 24px;
  }
  .ht-bridge-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.88rem;
    color: var(--ht-text-secondary);
    text-decoration: none !important;
    transition: all 0.2s ease;
  }
  .ht-bridge-back:hover {
    color: var(--ht-text-primary);
    transform: translateX(-3px);
  }
  
  .ht-bridge-hero {
    text-align: center;
    margin-bottom: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .ht-bridge-hero .ht-eyebrow {
    justify-content: center !important;
    margin: 0 auto !important;
  }
  .ht-bridge-hero .ht-eyebrow::after {
    display: none !important;
  }
  .ht-bridge-hero h1 {
    font-size: clamp(1.8rem, 3.2vw, 2.4rem);
    font-weight: 800;
    color: var(--ht-text-primary);
    margin: 8px 0 10px;
    letter-spacing: -0.02em;
  }
  .ht-bridge-hero p {
    font-size: 1.05rem;
    color: var(--ht-text-secondary);
    line-height: 1.6;
    max-width: 720px;
    margin: 0 auto;
  }

  /* Main Tool Box Card - Uses exact site variables and card elevation */
  .ht-bridge-card {
    background: var(--ht-bg-card, #1c1c1c);
    border: 1px solid var(--ht-border);
    border-radius: var(--ht-radius-lg, 20px);
    overflow: hidden;
    box-shadow: var(--ht-shadow-md);
    margin-bottom: 24px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ht-bridge-card:hover {
    border-color: var(--ht-border-hover);
  }
  .ht-bridge-card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
    padding: 20px 24px;
    border-bottom: 1px solid var(--ht-border);
    background: rgba(255, 255, 255, 0.02);
  }
  .ht-bridge-card__title {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--ht-text-primary);
    margin: 0 0 4px 0;
  }
  .ht-bridge-card__meta {
    font-size: 0.84rem;
    color: var(--ht-text-secondary);
    margin: 0;
  }
  .ht-bridge-card-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #34d399;
    font-size: 0.78rem;
    font-weight: 600;
    font-family: var(--ht-font-mono, monospace);
    background: rgba(16, 185, 129, 0.1);
    border: 1px solid rgba(16, 185, 129, 0.25);
    padding: 4px 10px;
    border-radius: var(--ht-radius-full, 9999px);
  }
  .ht-bridge-card__body {
    padding: 24px;
  }

  /* The Personal Story Callout - Clean, high contrast */
  .ht-bridge-story-box {
    background: var(--ht-bg-surface, #1c1c1c);
    border: 1px solid var(--ht-border);
    border-radius: var(--ht-radius-md, 14px);
    padding: 20px 22px;
    margin-bottom: 22px;
    line-height: 1.7;
    color: var(--ht-text-secondary);
    font-size: 0.96rem;
  }
  .ht-bridge-story-box strong {
    color: var(--ht-text-primary);
  }

  /* Code Terminal Display */
  .ht-code-panel {
    background: #0d1117;
    border: 1px solid var(--ht-border);
    border-radius: var(--ht-radius-md, 14px);
    overflow: hidden;
    margin: 10px 0 16px 0;
    box-shadow: var(--ht-shadow-sm);
  }
  .ht-code-panel__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 14px;
    background: rgba(255, 255, 255, 0.03);
    border-bottom: 1px solid var(--ht-border);
  }
  .ht-code-panel__dots {
    display: flex;
    gap: 6px;
  }
  .ht-code-panel__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .ht-code-panel__dot--red { background: #ff5f56; }
  .ht-code-panel__dot--yellow { background: #ffbd2e; }
  .ht-code-panel__dot--green { background: #27c93f; }
  .ht-code-panel__title {
    font-family: var(--ht-font-mono, monospace);
    font-size: 0.72rem;
    font-weight: 600;
    color: var(--ht-text-muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .ht-code-copy-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 9px;
    font-family: var(--ht-font-mono, monospace);
    font-size: 0.72rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--ht-border);
    border-radius: 6px;
    color: var(--ht-text-secondary);
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .ht-code-copy-btn:hover {
    color: var(--ht-text-primary);
    border-color: var(--ht-border-hover);
    background: rgba(255, 255, 255, 0.1);
  }
  .ht-code-panel__body {
    padding: 16px 18px;
    margin: 0;
    overflow-x: auto;
    font-family: var(--ht-font-mono, 'JetBrains Mono', monospace);
    font-size: 0.88rem;
    line-height: 1.65;
    color: #e2e8f0;
  }
  .ht-code-panel__body code {
    background: transparent !important;
    border: 0 !important;
    padding: 0 !important;
    color: inherit !important;
    font-size: inherit !important;
  }

  /* Code Syntax Highlighting Spans */
  .ck-key { color: #38bdf8; }
  .ck-str { color: #a7f3d0; }
  .ck-cmd { color: #f8fafc; font-weight: 600; }
  .ck-dim { color: #64748b; }

  /* High-Tech Global Buttons matching site system */
  .ht-bridge-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 22px;
  }
  .ht-bridge-btn-primary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 46px;
    padding: 0 22px;
    border-radius: var(--ht-radius-full, 9999px);
    background: #f8fafc;
    color: #09090b !important;
    font-weight: 700;
    font-size: 0.92rem;
    text-decoration: none !important;
    border: 0;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .ht-bridge-btn-primary:hover {
    background: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(255, 255, 255, 0.15);
  }
  .ht-bridge-btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 46px;
    padding: 0 20px;
    border-radius: var(--ht-radius-full, 9999px);
    background: var(--ht-bg-elevated, #242424);
    border: 1px solid var(--ht-border);
    color: var(--ht-text-primary) !important;
    font-weight: 600;
    font-size: 0.92rem;
    text-decoration: none !important;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .ht-bridge-btn-secondary:hover {
    border-color: var(--ht-border-hover);
    background: rgba(255, 255, 255, 0.08);
    transform: translateY(-1px);
  }

  /* 3-Pillar Clean Features Grid - Matches Global Bento Card standard */
  .ht-bridge-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  @media (max-width: 768px) {
    .ht-bridge-grid {
      grid-template-columns: 1fr;
    }
  }
  .ht-bridge-feature-card {
    background: var(--ht-bg-card, #1c1c1c);
    border: 1px solid var(--ht-border);
    border-radius: var(--ht-radius-lg, 16px);
    padding: 22px;
    display: flex;
    flex-direction: column;
    box-shadow: var(--ht-shadow-sm);
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ht-bridge-feature-card:hover {
    border-color: var(--ht-border-hover);
    transform: translateY(-3px);
    box-shadow: var(--ht-shadow-md);
  }
  .ht-bridge-feature-icon-wrap {
    width: 38px;
    height: 38px;
    border-radius: var(--ht-radius-md, 10px);
    background: var(--ht-bg-elevated, #242424);
    border: 1px solid var(--ht-border);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
    color: var(--ht-text-primary);
  }
  .ht-bridge-feature-title {
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--ht-text-primary);
    margin: 0 0 8px 0;
  }
  .ht-bridge-feature-desc {
    font-size: 0.88rem;
    color: var(--ht-text-secondary);
    line-height: 1.6;
    margin: 0;
  }
</style>

<div class="ht-bridge-tool-page">
  <div class="ht-bridge-tool-container">
    
    <!-- Top Back Link -->
    <div class="ht-bridge-topbar">
      <a class="ht-bridge-back" href="{{ '/tools/' | relative_url }}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
        <span>Back to tools</span>
      </a>
    </div>

    <!-- Header Hero -->
    <header class="ht-bridge-hero">
      <div class="ht-eyebrow">
        <span class="ht-eyebrow-dot"></span>
        <span>FREE OPEN-SOURCE DEVELOPER TOOL</span>
      </div>
      <h1>ChatGPT Agent Bridge</h1>
      <p>Connect Antigravity Cortex, Claude Desktop, and Cursor directly to your live ChatGPT Web session. No OpenAI API invoices, no manual copy-pasting.</p>
    </header>

    <!-- Main Tool Container Box -->
    <section class="ht-bridge-card">
      <div class="ht-bridge-card__header">
        <div>
          <h2 class="ht-bridge-card__title">Direct Browser MCP Bridge</h2>
          <p class="ht-bridge-card__meta">Zero Cloud Relays &bull; Open-Source Developer Companion</p>
        </div>
      </div>

      <div class="ht-bridge-card__body">
        
        <!-- The Real Story -->
        <div class="ht-bridge-story-box">
          <strong style="display:block; margin-bottom: 8px; font-size: 1.05rem;">Why I built this:</strong>
          I already pay $20 a month for ChatGPT Plus. Yet whenever my AI coding agent needed to test prompts or generate a 16-frame video storyboard, I was forced into an annoying loop: opening ChatGPT in Chrome, typing prompts, right-clicking images, renaming files, and dragging them into projects. Paying per-token OpenAI API invoices made no sense when I already had an active web subscription.
          <br><br>
          So I built this bridge. Now, my agent types prompts into ChatGPT Web itself, verifies visual character continuity, and downloads the original raw PNGs straight into my project directory.
        </div>

        <!-- Terminal Quickstart -->
        <div style="margin-bottom: 20px;">
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--ht-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Run the Bridge Locally:</span>
          <pre><code class="language-bash">npx @codex.nayem/chatgpt-agent-bridge</code></pre>
        </div>

        <!-- MCP Config Box -->
        <div>
          <span style="font-size: 0.8rem; font-weight: 700; color: var(--ht-text-muted); text-transform: uppercase; letter-spacing: 0.05em;">Add to Antigravity / Claude Desktop MCP Config:</span>
          <pre><code class="language-json">{
  "mcpServers": {
    "chatgpt-bridge": {
      "command": "npx",
      "args": ["-y", "@codex.nayem/chatgpt-agent-bridge"]
    }
  }
}</code></pre>
        </div>

        <!-- Global High-End Action Buttons -->
        <div class="ht-bridge-actions">
          <a class="ht-bridge-btn-primary" href="https://github.com/nasratulnayem/chatgpt-agent-bridge" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>Star &amp; Clone on GitHub</span>
          </a>
          <a class="ht-bridge-btn-secondary" href="https://www.instagram.com/codex.nayem/" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <span>Follow on Instagram</span>
          </a>
        </div>
      </div>
    </section>

    <!-- 3 Pillars Feature Grid with Exact Site Cards & Reactions -->
    <div class="ht-bridge-grid">
      <article class="ht-bridge-feature-card">
        <div class="ht-bridge-feature-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h3 class="ht-bridge-feature-title">Zero API bills</h3>
        <p class="ht-bridge-feature-desc">Harness your personal ChatGPT Plus or Team web subscription without burning per-token OpenAI API credits.</p>
      </article>

      <article class="ht-bridge-feature-card">
        <div class="ht-bridge-feature-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
        </div>
        <h3 class="ht-bridge-feature-title">Hands-off agent control</h3>
        <p class="ht-bridge-feature-desc">Antigravity Cortex or Claude writes prompts, evaluates character continuity across frames, and auto-corrects shots.</p>
      </article>

      <article class="ht-bridge-feature-card">
        <div class="ht-bridge-feature-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        </div>
        <h3 class="ht-bridge-feature-title">Raw uncompressed PNGs</h3>
        <p class="ht-bridge-feature-desc">Traps the full uncompressed image generated in the tab and auto-saves directly to your local project disk.</p>
      </article>
    </div>

  </div>
</div>
