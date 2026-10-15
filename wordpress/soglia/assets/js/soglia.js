/* Soglia: the template's script, adapted for WordPress (see build_soglia.py). */
(function () {
  "use strict";
  var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }

  // The slider. Edit these for your own work; img is the index of the photo in .stage, in the same order.
  var CATS = [
    { cat: "Projects", more: "All projects", items: [{ title: "Villa Aster\nTicino", img: 0 }, { title: "Birch House\nBled", img: 1 }] },
    { cat: "Windows", more: "All windows", items: [{ title: "Oak Windows\nand Doors", img: 2 }, { title: "Slim Sliding\nSystems", img: 3 }] },
    { cat: "Ateliers", more: "All ateliers", items: [{ title: "Atelier\nMilano", img: 4 }, { title: "The Workshop\nComo", img: 5 }] }
  ];
  var LOADER_WORDS = ["Light", "Calm", "View", "Orlo"];
  var AUTOPLAY = 7000;   // ms per slide; 0 turns autoplay off

  /* Letters */
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function textOf(el) {
    return Array.prototype.map.call(el.childNodes, function (n) { return n.nodeName === "BR" ? "\n" : n.textContent; }).join("").replace(/[ \t\r]+/g, " ").trim();
  }
  function letters(text) {
    var i = 0;
    return text.split("\n").map(function (line) {
      return '<span class="ln">' + Array.from(line).map(function (c) { return '<span class="ch" style="--i:' + (i++) + '">' + esc(c) + "</span>"; }).join("") + "</span>";
    }).join("");
  }
  // Change a label: the old letters roll out, the new ones roll in (dir -1 reverses both)
  function roll(el, text, dir) {
    var rw = $(".rw", el);
    if (!rw) {
      el.innerHTML = '<span class="sr"></span><span class="rw" aria-hidden="true"><span class="ly">' + letters(text) + "</span></span>";
      el.firstChild.textContent = text.replace(/\n/g, " ");
      return;
    }
    el.firstChild.textContent = text.replace(/\n/g, " ");
    if (RM) { rw.innerHTML = '<span class="ly">' + letters(text) + "</span>"; return; }
    $$(".ly.out", rw).forEach(function (l) { l.remove(); });
    var old = $(".ly", rw), nu = document.createElement("span");
    nu.className = "ly in" + (dir < 0 ? " rev" : "");
    nu.style.setProperty("--d", ".12s");
    nu.innerHTML = letters(text);
    rw.appendChild(nu);
    void nu.offsetWidth;
    nu.classList.remove("in");
    if (old) {
      old.classList.add("out");
      old.classList.toggle("rev", dir < 0);
      setTimeout(function () { old.remove(); }, 1500);
    }
  }
  function hover(el, text) {
    el.innerHTML = '<span class="sr"></span><span class="hv" aria-hidden="true">' + Array.from(text).map(function (c, i) { return '<span class="ch" style="--i:' + i + '">' + esc(c) + "</span>"; }).join("") + "</span>";
    el.firstChild.textContent = text;
  }
  $$("[data-hover]").forEach(function (el) { hover(el, textOf(el)); });
  $$("[data-rise]").forEach(function (el) {
    var text = textOf(el);
    el.innerHTML = '<span class="sr"></span><span class="rw" aria-hidden="true"><span class="ly">' + letters(text) + "</span></span>";
    el.firstChild.textContent = text.replace(/\n/g, " ");
    el.classList.add("rise");
  });
  var countEl = $("[data-count]"), catEl = $("[data-cat-label]"), numEl = $("[data-num]"), titleEl = $("[data-title]");
  var moreEl = $("[data-more]");
  [countEl, catEl, numEl, titleEl].forEach(function (el) { if (el) roll(el, textOf(el), 1); });
  var FRONT = root.classList.contains("on-home") || root.classList.contains("on-contacts");
  var year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* Slider */
  var slides = $$(".slide"), barEl = $(".c-bar i"), c = 0, i = 0, z = 1, elapsed = 0, hold = 0, last = performance.now();
  var HOME = !!($(".home") && slides.length && barEl && countEl && catEl && numEl && titleEl && moreEl && $(".cap") && $(".nav .prev") && $(".nav .next"));
  if (HOME) slides[0].style.zIndex = 1;
  function pad(v, n) { return String(v).padStart(n || 2, "0"); }
  function show(c2, i2, axis, dir) {
    var from = slides[CATS[c].items[i].img], to = slides[CATS[c2].items[i2].img];
    if (c2 !== c) {
      roll(countEl, pad(c2 + 1) + " . " + pad(CATS.length), dir);
      roll(catEl, CATS[c2].cat, dir);
      hover($("[data-hover]", moreEl), CATS[c2].more);
    }
    roll(numEl, "N°" + pad(i2 + 1, 3), dir);
    roll(titleEl, CATS[c2].items[i2].title, dir);
    c = c2; i = i2; elapsed = 0;
    if (to === from) return;
    to.style.zIndex = ++z;
    if (RM) return;
    var img = to.firstElementChild, oimg = from.firstElementChild, y = axis === "y";
    var start = y ? (dir > 0 ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)") : (dir > 0 ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)");
    var shift = function (v) { return y ? "translateY(" + v + "%)" : "translateX(" + v + "%)"; };
    to.style.transition = img.style.transition = "none";
    to.style.clipPath = start;
    img.style.transform = shift(dir * 16) + " scale(1.08)";
    void to.offsetWidth;
    to.style.transition = "clip-path 1.2s var(--ease)";
    img.style.transition = "transform 1.6s var(--ease)";
    to.style.clipPath = "inset(0)";
    img.style.transform = "none";
    oimg.style.transition = "transform 1.2s var(--ease)";
    oimg.style.transform = shift(dir * -12);
  }
  function stepCat(d) { show((c + d + CATS.length) % CATS.length, 0, "y", d); }
  function stepItem(d) {
    var n = CATS[c].items.length, i2 = i + d;
    if (i2 >= n) return stepCat(1);
    if (i2 < 0) return show((c - 1 + CATS.length) % CATS.length, 0, "y", -1);
    show(c, i2, "x", d);
  }
  if (HOME) $(".nav .prev").addEventListener("click", function () { stepItem(-1); });
  if (HOME) $(".nav .next").addEventListener("click", function () { stepItem(1); });

  // Autoplay with the bar under "Discover more"; it waits while the pointer or focus is on the caption, and off-screen
  var cap = $(".cap"), nav = $(".nav");
  if (HOME) [cap, nav].forEach(function (el) {
    el.addEventListener("pointerenter", function () { hold++; });
    el.addEventListener("pointerleave", function () { hold = Math.max(0, hold - 1); });
  });
  if (HOME) (function tick(now) {
    var dt = Math.min(100, now - last);
    last = now;
    var paused = !AUTOPLAY || hold || document.hidden || !root.classList.contains("ready") || !root.classList.contains("on-home") || root.classList.contains("menu-open") || cap.contains(document.activeElement) || nav.contains(document.activeElement);
    if (!paused) {
      elapsed += dt;
      if (elapsed >= AUTOPLAY) stepItem(1);
    }
    barEl.style.setProperty("--p", AUTOPLAY ? Math.min(1, elapsed / AUTOPLAY).toFixed(4) : 0);
    requestAnimationFrame(tick);
  })(last);

  // Wheel, swipe and keys move the slider while home is on screen
  var lastWheel = 0, lockAt = 0;
  function homeActive() { return HOME && root.classList.contains("on-home") && !root.classList.contains("menu-open") && root.classList.contains("ready"); }
  addEventListener("wheel", function (e) {
    if (!homeActive()) return;
    e.preventDefault();
    var now = performance.now(), gap = now - lastWheel, d = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    lastWheel = now;
    if (Math.abs(d) < 4) return;
    // A new gesture starts after a pause; one gesture moves one slide, however long the trackpad keeps scrolling
    if ((gap > 180 || now - lockAt > 1600) && now - lockAt > 800) {
      lockAt = now;
      stepCat(d > 0 ? 1 : -1);
    }
  }, { passive: false });
  var tx = 0, ty = 0;
  if (HOME) $(".home").addEventListener("touchstart", function (e) { tx = e.touches[0].clientX; ty = e.touches[0].clientY; }, { passive: true });
  if (HOME) $(".home").addEventListener("touchend", function (e) {
    if (!homeActive()) return;
    var dx = e.changedTouches[0].clientX - tx, dy = e.changedTouches[0].clientY - ty;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 50) return;
    if (Math.abs(dy) > Math.abs(dx)) stepCat(dy < 0 ? 1 : -1);
    else stepItem(dx < 0 ? 1 : -1);
  }, { passive: true });
  addEventListener("keydown", function (e) {
    if (!homeActive() || /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || "")) return;
    var k = e.key;
    if (k === "ArrowDown" || k === "PageDown" || (k === " " && document.activeElement === document.body)) { e.preventDefault(); stepCat(1); }
    else if (k === "ArrowUp" || k === "PageUp") { e.preventDefault(); stepCat(-1); }
    else if (k === "ArrowRight") stepItem(1);
    else if (k === "ArrowLeft") stepItem(-1);
  });

  /* Views: home and contacts live in this one file; a slate curtain passes between them */
  var curtain = $(".curtain"), busy = false;
  function firstField() { return $("#fg-form input:not([type=hidden]), #fg-form textarea"); }
  function viewFor(hash) { return hash === "#contacts" || hash === "#contact-form" ? "contacts" : "home"; }
  function apply(view, hash) {
    root.classList.toggle("on-home", view === "home");
    root.classList.toggle("on-contacts", view === "contacts");
    markCurrent(view);
    if (view === "contacts") {
      var target = hash === "#contact-form" ? $("#fg-form") : null;
      scrollTo(0, target ? target.getBoundingClientRect().top + scrollY - 140 : 0);
      var fe = hash === "#contact-form" ? firstField() : $("#ct-h");
      if (fe) fe.focus({ preventScroll: true });
      observe();
    } else {
      scrollTo(0, 0);
      elapsed = 0;
    }
  }
  function markCurrent(view) {
    $$(".sg-nav li.sg-mlink").forEach(function (li) {
      var a = $("a", li);
      if (!a || !/\bsg-route-/.test(li.className)) return;
      if (li.classList.contains("sg-route-" + view)) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }
  if (FRONT) markCurrent(root.classList.contains("on-contacts") ? "contacts" : "home");
  function route(hash) {
    if (!FRONT) return;
    var view = viewFor(hash), now = root.classList.contains("on-contacts") ? "contacts" : "home";
    if (view === now) {
      var f = $("#fg-form"), ff = firstField();
      if (hash === "#contact-form" && f) { scrollTo({ top: f.getBoundingClientRect().top + scrollY - 140, behavior: RM ? "auto" : "smooth" }); if (ff) ff.focus({ preventScroll: true }); }
      return;
    }
    if (RM || busy) return apply(view, hash);
    busy = true;
    curtain.className = "curtain in";
    setTimeout(function () {
      apply(view, hash);
      curtain.className = "curtain out";
      setTimeout(function () { curtain.className = "curtain"; busy = false; }, 820);
    }, 720);
  }
  addEventListener("hashchange", function () { route(location.hash); });
  $$("[data-cat], .sg-nav li[class*=sg-cat-] > a").forEach(function (a) {
    a.addEventListener("click", function () {
      var k = a.dataset.cat != null ? +a.dataset.cat : +(/sg-cat-(\d+)/.exec(a.parentNode.className) || [0, 0])[1];
      if (!HOME || !CATS[k]) return;
      setTimeout(function () { if (k !== c) show(k, 0, "y", k > c ? 1 : -1); }, location.hash === "#home" || !location.hash ? 0 : 800);
    });
  });

  /* Contacts: hairlines draw and blocks rise as they come into view */
  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); e.target.classList.add("in"); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function observe() {
    $$(".contacts .reveal, .contacts .row, .contacts .fr, .contacts .fr-end, .contacts .rise").forEach(function (el) {
      if (el.classList.contains("in")) return;
      if (io && !RM) io.observe(el); else el.classList.add("in");
    });
  }

  /* Menu */
  function label(btn, text) {
    if (!btn || btn.dataset.sg) return;
    btn.dataset.sg = "1";
    var s = document.createElement("span");
    btn.appendChild(s);
    hover(s, text);
  }
  label($(".sg-nav .wp-block-navigation__responsive-container-open"), "Menu");
  label($(".sg-nav .wp-block-navigation__responsive-container-close"), "Close");
  $$(".sg-nav li.sg-mlink > a .wp-block-navigation-item__label, .sg-nav li.sg-write li .wp-block-navigation-item__label, .sg-nav li.sg-view .wp-block-navigation-item__label").forEach(function (el) { hover(el, textOf(el)); });
  var navBox = $(".sg-nav .wp-block-navigation__responsive-container");
  function menuOpen() { return !!(navBox && navBox.classList.contains("is-menu-open")); }
  if (navBox && "MutationObserver" in window) new MutationObserver(function () {
    root.classList.toggle("menu-open", menuOpen());
  }).observe(navBox, { attributes: true, attributeFilter: ["class"] });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".sg-nav .is-menu-open a[href]");
    if (!a || a.origin !== location.origin || a.pathname !== location.pathname) return;
    var close = a.closest(".is-menu-open").querySelector(".wp-block-navigation__responsive-container-close");
    if (close) close.click();
  });

  /* Loader, then the home entrance */
  function ready() {
    root.classList.add("ready");
    $$(".home .rise").forEach(function (el) { el.classList.add("in"); });
    if (root.classList.contains("on-contacts")) apply("contacts", location.hash);
  }
  var loader = $(".loader");
  if (loader && root.classList.contains("loading")) {
    var word = $("[data-word]"), pct = $("[data-pct]"), t0 = performance.now(), gone = false, STEP = 650, TOTAL = STEP * LOADER_WORDS.length + 450;
    var leave = function () {
      if (gone) return;
      gone = true;
      loader.classList.add("out");
      try { sessionStorage.setItem("soglia-loader", "1"); } catch (e) {}
      setTimeout(ready, 250);
      setTimeout(function () { root.classList.remove("loading"); loader.remove(); }, 1150);
    };
    loader.addEventListener("click", leave);
    roll(word, "", 1);
    LOADER_WORDS.forEach(function (w, k) { setTimeout(function () { if (!gone) roll(word, w, 1); }, 120 + k * STEP); });
    (function count() {
      var p = Math.min(1, (performance.now() - t0) / TOTAL);
      pct.textContent = Math.round(p * 100);
      if (p < 1 && !gone) requestAnimationFrame(count);
      else leave();
    })();
  } else {
    root.classList.remove("loading");
    if (loader) loader.remove();
    requestAnimationFrame(function () { requestAnimationFrame(ready); });
  }

})();
