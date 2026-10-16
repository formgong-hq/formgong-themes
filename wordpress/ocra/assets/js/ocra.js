/* Ocra: the template's script, adapted for WordPress (see build_ocra.py). */
/* Forms: every form on the page sends to Formgong and shows "thank you" only when the answer is success: true. */
(function () {
  function setup(form) {
    var button = form.querySelector('button[type="submit"]');
    var status = form.querySelector("[data-status]");
    var steps = Array.prototype.slice.call(form.querySelectorAll("[data-step]"));
    var at = 0;
    function say(text, bad) { if (!status) return; status.textContent = text; status.classList.toggle("err", !!bad); }
    function fields(root) { return Array.prototype.slice.call(root.querySelectorAll("input, select, textarea")).filter(function (f) { return f.type !== "hidden" && f.name !== "botcheck" && f.willValidate; }); }

    var areas = Array.prototype.slice.call(form.querySelectorAll("textarea[data-autosize]"));
    function fit(area) {
      area.style.height = "auto";
      area.style.height = area.scrollHeight + 2 + "px";
      var counter = form.querySelector('[data-count="' + area.name + '"]');
      if (counter) counter.textContent = area.value.length + " / " + area.maxLength;
    }
    areas.forEach(function (area) { area.addEventListener("input", function () { fit(area); }); fit(area); });

    form.querySelectorAll("[data-min-today]").forEach(function (input) { input.min = new Date().toISOString().slice(0, 10); });
    form.querySelectorAll("[data-step-by]").forEach(function (b) {
      b.addEventListener("click", function () {
        var input = b.parentNode.querySelector("input");
        input.value = Math.min(Number(input.max), Math.max(Number(input.min), (Number(input.value) || 1) + Number(b.dataset.stepBy)));
      });
    });

    function show(index) {
      at = index;
      steps.forEach(function (step, k) { step.hidden = k !== index; });
      form.style.setProperty("--fgk-progress", String((index + 1) / steps.length));
      var label = form.querySelector("[data-step-label]");
      if (label) label.textContent = "Step " + (index + 1) + " of " + steps.length;
    }
    if (steps.length) {
      show(0);
      form.addEventListener("click", function (event) {
        var next = event.target.closest("[data-next]"), back = event.target.closest("[data-back]");
        if (next && fields(steps[at]).every(function (f) { return f.reportValidity(); })) { show(at + 1); var first = fields(steps[at])[0]; if (first) first.focus(); }
        if (back) show(at - 1);
      });
      form.addEventListener("keydown", function (event) {
        var next = steps[at].querySelector("[data-next]");
        if (event.key === "Enter" && next && event.target.tagName !== "TEXTAREA" && event.target.tagName !== "BUTTON") { event.preventDefault(); next.click(); }
      });
    }

    var zone = form.querySelector("[data-drop]");
    var list = form.querySelector("[data-files]");
    function listFiles(input) {
      if (!list) return;
      list.textContent = "";
      Array.prototype.forEach.call(input.files, function (file) {
        var item = document.createElement("li");
        item.textContent = file.name + " · " + (file.size / 1048576).toFixed(1) + " MB";
        list.appendChild(item);
      });
    }
    if (zone) {
      var input = zone.querySelector('input[type="file"]');
      var max = Number(zone.dataset.max || 3), mb = Number(zone.dataset.mb || 5);
      input.addEventListener("change", function () {
        var files = Array.prototype.slice.call(input.files);
        var bad = files.filter(function (f) { return !f.size || f.size > mb * 1048576; })[0];
        if (files.length > max) { input.value = ""; say("Up to " + max + " files, please.", true); }
        else if (bad) { input.value = ""; say(bad.name + (bad.size ? " is over " + mb + " MB." : " is empty."), true); }
        else say("");
        listFiles(input);
      });
      ["dragenter", "dragover"].forEach(function (type) { zone.addEventListener(type, function () { zone.classList.add("is-over"); }); });
      ["dragleave", "drop"].forEach(function (type) { zone.addEventListener(type, function () { zone.classList.remove("is-over"); }); });
    }

    function clear() {
      form.reset();
      areas.forEach(fit);
      if (zone) listFiles(zone.querySelector('input[type="file"]'));
      if (steps.length) show(0);
    }

    var firstName = "";
    form.addEventListener("formgong:sending", function () {
      form.dataset.state = "sending";
      if (button) button.disabled = true;
      say(form.hasAttribute("data-keep") ? "" : "Sending…");
      var nameField = form.querySelector('[name="name"]');
      firstName = nameField ? nameField.value.trim().split(/\s+/)[0] : "";
    });
    form.addEventListener("formgong:sent", function () {
      form.querySelectorAll("[data-sent-name]").forEach(function (node) { node.textContent = firstName || "there"; });
      form.dataset.state = "sent";
      say("");
      clear();
      if (form.hasAttribute("data-keep")) {
        say("Sent. The price list is on its way to your inbox.");
        setTimeout(function () { if (form.dataset.state === "sent") form.dataset.state = "idle"; }, 3200);
      } else {
        form.classList.add("is-sent");
        var sent = form.querySelector(".fgk-sent");
        if (sent) sent.focus();
      }
      if (button) button.disabled = false;
    });
    form.addEventListener("formgong:error", function (event) {
      form.dataset.state = "error";
      var detail = event.detail || {};
      say(detail.network ? "Could not send. Check your connection and try again." : (detail.message || "Could not send. Please try again."), true);
      if (button) button.disabled = false;
    });

    form.querySelectorAll("[data-again]").forEach(function (again) {
      again.addEventListener("click", function () {
        form.classList.remove("is-sent");
        form.dataset.state = "idle";
        var first = fields(form)[0];
        if (first) first.focus();
      });
    });
  }
  document.querySelectorAll("form.fgk").forEach(setup);
})();

/* Page motion: wordmark, reveals, the floating order button. */
(function () {
  var root = document.documentElement;
  var still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  root.classList.add("js");
  document.querySelectorAll("[data-year]").forEach(function (node) { node.textContent = new Date().getFullYear(); });

  // Both wordmarks fill the width.
  var marks = document.querySelectorAll("[data-fit]");
  function fitMarks() {
    marks.forEach(function (mark) {
      mark.style.fontSize = "";
      var range = document.createRange();
      range.selectNodeContents(mark);
      var width = range.getBoundingClientRect().width;
      mark.style.fontSize = Math.floor(parseFloat(getComputedStyle(mark).fontSize) * mark.clientWidth / width * 0.97) + "px";
    });
  }
  fitMarks();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitMarks);
  window.addEventListener("resize", fitMarks);

  // "Order this" on a piece fills in the order form.
  var pick = document.querySelector("[data-piece-select]");
  document.querySelectorAll("[data-piece]").forEach(function (link) {
    link.addEventListener("click", function () { if (pick) pick.value = link.dataset.piece; });
  });

  // Reveal sections as they scroll in.
  var targets = document.querySelectorAll(".item, .row .info, .row .card, .split > *, .visit > *, .letter");
  if (!still && "IntersectionObserver" in window) {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add("in"); seen.unobserve(entry.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    targets.forEach(function (el, i) { el.classList.add("rv"); if (el.classList.contains("item")) el.style.transitionDelay = (i % 4) * 0.08 + "s"; seen.observe(el); });
  }

  // On scroll: the slices turn, the hero photo drifts, the order button shows after the hero.
  var hero = document.querySelector("[data-float]"), slices = document.querySelectorAll(".slice"), orderButton = document.querySelector("[data-float-order]");
  var order = document.getElementById("order"), ticking = false;
  function onScroll() {
    var y = window.scrollY;
    if (!still) {
      slices.forEach(function (slice, i) { slice.style.setProperty("--turn", y * (i % 2 ? -0.09 : 0.12) + "deg"); });
      if (hero) hero.style.setProperty("--float", Math.min(y, 900) * -0.04 + "px");
    }
    if (orderButton) {
      var box = order ? order.getBoundingClientRect() : { top: 0, bottom: 0 };
      orderButton.classList.toggle("on", y > window.innerHeight * 0.9 && (box.bottom < 0 || box.top > window.innerHeight));
    }
    ticking = false;
  }
  window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
})();
