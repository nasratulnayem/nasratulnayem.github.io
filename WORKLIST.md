# Portfolio delivery worklist

This file is the source of truth for the remaining work. New requests are
recorded here, but they do **not** interrupt an older unfinished item. An item
is only complete after source review, responsive screenshots, and live-site
verification where applicable.

## Working rule

- Finish the active older item first.
- Test it in light and dark mode, at narrow phone, tablet, laptop, and desktop
  widths before moving to the next item.
- Do not publish a visual change that creates clipping, horizontal scrolling,
      overlapping content, unreadable contrast, or wrapped action-button labels.

## Immediate: local review and controlled publishing dashboard

- [x] Build a local-only dashboard that shows current work, build status, and
      the exact files that differ from the live GitHub branch.
- [x] Provide side-by-side local and live previews, with automatic local
      rebuilds after a source change.
- [x] Provide a readable source browser/editor and changed-file popup so every
      proposed change can be reviewed before it is released.
- [x] Provide detachable local preview, live preview, and editor windows for
      multi-monitor review.
- [x] Provide one explicit confirmation-based Publish action that commits only
      local files that differ from the GitHub branch, then reports Pages
      deployment status. Never expose publishing credentials in the public site.

## Source brief audit

- [ ] Re-read the original “ChatGPT-Google Maps to Upwork” brief if it becomes
      available in the workspace. It was not present at the provided path
      during this audit, so the requirements recorded below are taken from the
      conversation and current site source.

## Active: shared site shell and layout system

- [x] Replace the narrow desktop/laptop page canvas with one shared wide,
      responsive content frame for every page.
- [x] Make the header a full-width site header on every device, rather than a
      floating boxed/pill container.
- [x] Keep the header content, every page’s content start/end, and the footer
      content on the same horizontal alignment system.
- [x] Establish consistent responsive gutters: especially a reliable 10px+
      safe reading gutter on phones, with no text/card/button cut-offs.
- [x] Remove the unwanted header-bottom border/divider.
- [x] Make desktop, laptop, tablet, Android, iPhone, and narrow-phone layouts
      fluid with no horizontal scrolling, accidental zoom-like composition,
      overlap, or squeezed grids.
- [x] Ensure every component has intentional spacing, padding, border, shadow,
      hover, and animation behavior at every breakpoint.
- [x] Ensure button labels remain single-line or deliberately adapt without
      breaking layout.

## Active: shared navigation, identity, and footer

- [x] Keep one clear navigation set: Services, Ecommerce, Automation & AI,
      Plugins, Work, Contact; no duplicate Work/Blog destination or Business
      Sites navigation page.
- [x] Ensure the mobile menu alone contains the navigation links; do not crowd
      the middle of the compact mobile header.
- [x] Align the mobile profile image, name, role, Follow button, and menu icon
      on one intentional horizontal row with no overlap.
- [x] Use the supplied portrait consistently where profile imagery is shown.
- [x] Use the current role copy consistently: “Web developer & automation
      expert.”
- [x] Keep the name/role header treatment readable without an unwanted
      underline, border, clipping, or mistimed typewriter decoration.
- [x] Remove “SYSTEM STATUS: READY FOR NEW CONTRACTS & BUILDS” from the footer.
- [x] Finish the footer as a responsive, useful page ending: correct height,
      no unexplained blank scroll area, working links, and content aligned to
      the shared frame.

## Active: global readability, theming, and interaction QA

- [x] Audit light and dark modes across every page. No dark text on dark
      backgrounds, white text on white backgrounds, or low-contrast code,
      card, form, button, or chat content.
- [x] Repair the WhatsApp widget in dark mode, including its message bubble,
      action row, close state, and contrast.
- [x] Verify the WhatsApp number/link is `+880 1962-351470` and the chat opens
      a usable WhatsApp conversation.
- [x] Verify theme toggle, search/menu behavior, keyboard focus, and card/button
      click targets are usable.

## Active: page-by-page structure and sales content

- [ ] Home: rebuild/verify a premium, personal, client-focused introduction
      that clearly explains who Nayem is, Bangladesh/remote availability, what
      he can do, how he listens and acts on business needs, proof/work, and a
      clear next step. It must use the same shell/design language as the other
      pages.
- [ ] Services, Ecommerce, Automation & AI, Work, Contact, About, legal, and
      support pages: apply the exact shared outer layout and verify their grids
      stay readable at all breakpoints.
- [x] Contact: fix the narrow desktop/laptop cards and any CTA/text overlap;
      provide a clear client path to email, WhatsApp, and a useful project
      brief.
- [x] Work/blog archive: use rich, fully clickable cards with feature images,
      compact aligned date/read-time metadata, consistent card heights,
      sensible excerpt truncation with an ellipsis, and browse arrows that work
      on 2-card desktop/laptop and 1-card phone/tablet views.
- [ ] Individual posts: preserve readable article width while sharing the outer
      frame; title, metadata, feature image, and content must align cleanly;
      remove duplicate post-author/profile blocks from the body; fix code-block
      colors in both themes and remove needless whitespace below feature images.
- [ ] Plugins hub: create/verify premium product cards that build trust and
      guide a buyer to the right product.
- [ ] Importon Bridge landing page: make it a rich, modern sales page using the
      approved product-comparison/import-flow hero, clear benefits, feature
      proof, pricing/checkout path, support/refund expectations, FAQ, and
      strong conversion CTAs without sacrificing content quality.
- [ ] Ensure the plugin page matches the same shared site system while retaining
      an intentional product-sales feel—not a disconnected or childlike layout.

## Active: product identity and purchase delivery

- [x] Use “Importon Bridge” everywhere in the website’s public titles, slugs,
      menus, product pages, cards, and documentation. Do not expose legacy
      product names; describe capabilities only in feature copy where
      appropriate.
- [x] Inspect the current GitHub plugin repository and website source for stale
      product-identity strings; remove or rename appropriate public references.
- [x] Verify the current GitHub plugin source and Freemius SDK configuration
      agree on product ID `28475`, slug `importon-bridge`, paid/premium
      settings, and version `0.2.2`.
- [ ] Verify the Freemius account-side product title and customer-email
      templates also use Importon Bridge before the next customer purchase.
- [x] Verify the buyer-facing GitHub release package is v0.2.2, branded
      Importon Bridge, contains the WordPress plugin, Freemius SDK, and browser
      companion, rather than using the outdated local Documents copy.
- [x] Verify the public Freemius checkout resolves to Importon Bridge product
      `28475`, Pro plan `46909`, one annual license at $49, with a 14-day
      refund period.
- [ ] Verify post-purchase download delivery, license flow, order emails,
      refunds, and support links in the live customer account. Record any
      platform-side step that genuinely requires account-owner action.
- [ ] Verify the buyer journey can sell a product rather than merely display a
      portfolio item.

## Required final verification before the next feature work

- [ ] Build the site successfully.
- [ ] Capture and review every public route at 320, 390, 430, 768, 1024, 1280,
      1440, and a large desktop width in both themes where relevant.
- [ ] Test header/menu, footer, chat, buttons, cards, carousels, post links,
      checkout/support links, and no-overflow rules on those views.
- [ ] Publish to GitHub Pages only after the checks pass; then re-test the live
      site rather than assuming a local build is enough.

## Queued later work — do not start until everything above is verified

- [ ] Adopt the supplied Uiverse-style animated primary button for primary
      conversion actions only, using the site’s own design system and avoiding
      wrapped labels or noisy overuse.
- [ ] Add the supplied light-mode Contact button interaction for primary
      contact actions, adapted strictly to the approved site palette and with
      its label kept on one line at every breakpoint.
- [ ] Restrict the entire visual palette to **only** these colors:
      `#022B3A`, `#1F7A8C`, `#BFDBF7`, `#E1E5F2`, and `#FFFFFF`.
      Audit light/dark contrast and every generated/inline color after the
      existing layout work is complete.
- [ ] Replace animated-dot/status badges with one quiet rounded inline badge
      treatment based on the supplied reference. Apply it consistently,
      including the “AVAILABLE FOR WEB & AUTOMATION CONTRACTS · REMOTE
      WORLDWIDE” availability message.
- [ ] Add and validate rich-result structured data for Nasratul Nayem and
      eligible site pages, using accurate Schema.org types, canonical URLs,
      social/profile links, and testable Google-friendly markup.
- [ ] Run a full international SEO pass: map real buyer search intent to each
      page, improve titles/meta descriptions/headings/internal links, preserve
      honest claims, and validate technical SEO without keyword stuffing.
