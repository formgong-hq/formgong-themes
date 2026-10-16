/* Stilla for Shopify: menu, filter drawer, grid density, variant picker, add to bag, Formgong forms, scroll reveal.
   No dependencies. Everything works without it too: forms post, links link, filters submit. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var strings = window.StillaStrings || {};

  // Mobile menu
  var burger = $(".s-burger"), nav = $("#s-nav");
  if (burger && nav) burger.addEventListener("click", function () {
    var open = burger.getAttribute("aria-expanded") !== "true";
    burger.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("s-open", open);
  });

  // Toast
  var toast = $(".s-toast");
  function say(msg) { if (!toast) return; toast.textContent = msg; toast.classList.add("s-show"); clearTimeout(say.t); say.t = setTimeout(function () { toast.classList.remove("s-show"); }, 2400); }

  // Bag count in the header
  function setCount(n) { $$("[data-bag-count]").forEach(function (el) { el.textContent = n; el.hidden = !n; }); }

  // Add to bag: product forms and quick add buttons, through the Ajax Cart API
  function add(id, quantity, button) {
    if (button) button.disabled = true;
    return fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : "/") + "cart/add.js", {
      method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ items: [{ id: +id, quantity: quantity || 1 }] })
    }).then(function (r) { return r.json().then(function (j) { return { ok: r.ok, body: j }; }); })
      .then(function (res) {
        if (!res.ok) { say(res.body && res.body.description || strings.cartError || "Could not add to bag"); return; }
        return fetch((window.Shopify && Shopify.routes ? Shopify.routes.root : "/") + "cart.js").then(function (r) { return r.json(); })
          .then(function (cart) { setCount(cart.item_count); say(strings.added || "Added to bag"); });
      })
      .catch(function () { say(strings.cartError || "Could not add to bag"); })
      .then(function () { if (button) button.disabled = false; });
  }
  $$("form[data-s-add]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var id = form.querySelector('[name="id"]').value;
      var qty = form.querySelector('[name="quantity"]');
      add(id, qty ? +qty.value : 1, form.querySelector('[type="submit"]'));
    });
  });
  $$("[data-quick-add]").forEach(function (b) {
    b.addEventListener("click", function (e) { e.preventDefault(); add(b.getAttribute("data-quick-add"), 1, b); });
  });

  // Product page: options to variant
  $$("[data-s-product]").forEach(function (root) {
    var data = $("script[data-variants]", root);
    if (!data) return;
    var variants = JSON.parse(data.textContent);
    var form = $("form[data-s-add]", root), idInput = form && form.querySelector('[name="id"]');
    var button = form && form.querySelector('[type="submit"]');
    var price = $("[data-price]", root);
    function chosen() { return $$("[data-option-index]", root).map(function (g) { var c = $("input:checked", g); return c ? c.value : null; }); }
    function update() {
      var opts = chosen();
      $$("[data-option-index]", root).forEach(function (g, i) { var out = $("#" + g.getAttribute("data-pick")); if (out) out.textContent = opts[i] || out.getAttribute("data-empty"); });
      var v = variants.filter(function (x) { return x.options.every(function (o, i) { return o === opts[i]; }); })[0];
      if (!v) { if (button) { button.disabled = true; button.textContent = strings.unavailable || "Unavailable"; } return; }
      if (idInput) idInput.value = v.id;
      if (price) price.innerHTML = v.price_html;
      if (button) { button.disabled = !v.available; button.textContent = v.available ? (strings.addToBag || "Add to bag") : (strings.soldOut || "Sold out"); }
      var url = new URL(location.href); url.searchParams.set("variant", v.id); history.replaceState(null, "", url);
      var size = $('.s-ask [name="size"]', root);
      var sizeIndex = +root.getAttribute("data-size-index");
      if (size && sizeIndex >= 0 && opts[sizeIndex]) size.value = opts[sizeIndex];
      var product = $('.s-ask [name="product"]', root);
      if (product) product.value = product.getAttribute("data-title") + " (" + v.title + ")";
    }
    root.addEventListener("change", function (e) { if (e.target.closest("[data-option-index]")) update(); });
  });

  // Grid density
  var grid = $("#s-grid");
  $$("[data-view]").forEach(function (b) {
    b.addEventListener("click", function () {
      $$("[data-view]").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
      if (grid) grid.classList.toggle("s-dense", b.getAttribute("data-view") === "dense");
    });
  });

  // Filter drawer (Shopify storefront filtering: the form submits as a normal GET)
  var drawer = $("#s-filters"), opener = $("[data-open-filters]"), last;
  function openD() { last = document.activeElement; drawer.classList.add("s-open"); drawer.removeAttribute("inert"); opener.setAttribute("aria-expanded", "true"); var f = $("button, input, select", drawer); if (f) f.focus(); }
  function closeD() { drawer.classList.remove("s-open"); drawer.setAttribute("inert", ""); opener.setAttribute("aria-expanded", "false"); if (last) last.focus(); }
  if (drawer && opener) {
    opener.addEventListener("click", openD);
    $$("[data-close-filters]").forEach(function (b) { b.addEventListener("click", closeD); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("s-open")) closeD(); });
  }
  $$("[data-sort-auto]").forEach(function (sel) { sel.addEventListener("change", function () { sel.form.submit(); }); });

  // Formgong forms: thank-you text only when Formgong answers success: true
  $$("form.s-fg:not(.s-native)").forEach(function (form) {
    var status = $(".s-status", form), button = $('button[type="submit"]', form);
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (button) button.disabled = true;
      status.className = "s-status"; status.textContent = strings.sending || "Sending…";
      fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
        .then(function (r) { return r.json().catch(function () { return null; }); })
        .then(function (res) {
          if (res && res.success === true) { form.reset(); status.textContent = ""; form.classList.add("s-is-sent"); var ok = $(".s-ok", form); if (ok) ok.focus(); }
          else { status.className = "s-status s-err"; status.textContent = (res && res.message) || strings.formError || "Could not send. Please try again."; }
        })
        .catch(function () { status.className = "s-status s-err"; status.textContent = strings.formOffline || "Could not send. Check your connection and try again."; })
        .then(function () { if (button) button.disabled = false; });
    });
  });

  // Scroll reveal: fade up text, stagger cards, settle large photos. Off with reduced motion or in the theme editor.
  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches || (window.Shopify && Shopify.designMode);
  var sel = ".s-intro>*,.s-split-tx>*,.s-row-head>*,.s-quote>*,.s-faq>*,.s-faq details,.s-news-tx>*,.s-foot-grid>*,.s-card,.s-split-img,.s-tile";
  var targets = $$(sel).filter(function (t) { return !t.closest(".s-col-hero"); });
  if (still || !("IntersectionObserver" in window)) { targets.forEach(function (t) { t.classList.add("s-is-in"); }); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.filter(function (e) { return e.isIntersecting; }).forEach(function (e, n) {
      var t = e.target;
      t.style.transitionDelay = Math.min(n, 6) * 80 + "ms";
      t.classList.add("s-is-in");
      io.unobserve(t);
      setTimeout(function () { t.style.transitionDelay = ""; }, 1800);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  targets.forEach(function (t) { io.observe(t); });
})();
