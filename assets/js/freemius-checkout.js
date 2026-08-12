(function () {
  "use strict";

  function openHostedCheckout(button) {
    if (button && button.href) {
      window.location.assign(button.href);
    }
  }

  function getCheckout(button) {
    var productId = button.getAttribute("data-freemius-product-id");
    var planId = button.getAttribute("data-freemius-plan-id");
    var publicKey = button.getAttribute("data-freemius-public-key");

    if (!window.FS || typeof window.FS.Checkout !== "function" || !productId) {
      return null;
    }

    return new window.FS.Checkout({
      product_id: productId,
      plan_id: planId,
      public_key: publicKey || undefined,
      title: button.getAttribute("data-freemius-title") || undefined,
      language: "auto",
      currency: "auto",
    });
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-freemius-checkout]");
    if (!button) {
      return;
    }

    var checkout = getCheckout(button);
    if (!checkout) {
      return;
    }

    event.preventDefault();

    try {
      var opened = checkout.open({
        plan_id: button.getAttribute("data-freemius-plan-id"),
        licenses: Number(button.getAttribute("data-freemius-licenses") || 1),
        billing_cycle:
          button.getAttribute("data-freemius-billing-cycle") || "annual",
        language: "auto",
        currency: "auto",
      });

      if (opened && typeof opened.catch === "function") {
        opened.catch(function () {
          openHostedCheckout(button);
        });
      }
    } catch (error) {
      openHostedCheckout(button);
    }
  });
})();
