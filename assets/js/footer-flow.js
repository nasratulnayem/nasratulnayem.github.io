/* Keep the footer in normal document flow.
 *
 * Older cached copies of the theme bundle can write the footer height into
 * body.style.marginBottom. That creates a duplicate, empty scroll area below
 * the actual footer. Clear only that legacy inline value whenever it appears.
 */
(function () {
  function clearLegacyFooterOffset() {
    if (document.body && document.body.style.marginBottom) {
      document.body.style.removeProperty("margin-bottom");
    }
  }

  function start() {
    clearLegacyFooterOffset();

    new MutationObserver(clearLegacyFooterOffset).observe(document.body, {
      attributes: true,
      attributeFilter: ["style"]
    });

    window.addEventListener("resize", clearLegacyFooterOffset);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
}());
