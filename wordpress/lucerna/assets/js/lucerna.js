/* Lucerna: the template's script (js/main.js), adapted for WordPress (see build_lucerna.py). */
/* Lucerna — page script. GSAP 3.13 + ScrollTrigger + ScrollSmoother (self-hosted, js/vendor).
   Timings, eases and offsets follow the reference site one for one. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isPhone = function () { return window.matchMedia("(max-width: 768px)").matches; };
  var html = document.documentElement;
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger, ScrollSmoother = window.ScrollSmoother;
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  var smoother = null;

  /* ---------- Preloader: 7s minimum, then opacity 0 over .8s (power2.out) ---------- */
  var PRE_MIN = 7000, HOLD = 8000; // hero intro waits for the 8s first-load hold, like the reference
  var pre = $(".preloader");
  function preloaderDone() {
    html.classList.remove("no-scroll");
    window.__PRELOADER_DONE__ = true;
    window.dispatchEvent(new Event("preloader:done"));
  }
  if (reduce || !pre) { if (pre) pre.remove(); preloaderDone(); }
  else {
    var dim = $(".pre-dim", pre), on = $(".pre-on", pre);
    var tl = gsap.timeline();
    // a dim light sweeps across the wordmark (0.5s → 3.6s), peaking at ~35% brightness around 2.2s
    tl.set(dim, { opacity: 0 })
      .to(dim, { opacity: .24, duration: 1.1, ease: "sine.in" }, .5)
      .fromTo(dim, { maskPosition: "100% 0", webkitMaskPosition: "100% 0" }, { maskPosition: "0% 0", webkitMaskPosition: "0% 0", duration: 2.6, ease: "none" }, .5)
      .to(dim, { opacity: .35, duration: .55, ease: "sine.inOut" }, 1.65)
      .to(dim, { opacity: 0, duration: 1.4, ease: "sine.out" }, 2.25)
      // dark until 4.2s, then the whole wordmark switches on (4.2s → 5.65s)
      .to(on, { opacity: 1, duration: 1.45, ease: "power2.out" }, 4.2);
    setTimeout(function () {
      gsap.to(pre, { opacity: 0, duration: .8, ease: "power2.out", onStart: preloaderDone, onComplete: function () { pre.remove(); } });
    }, PRE_MIN);
  }

  /* ---------- Smooth scroll: ScrollSmoother, smooth 1.5, created when the preloader ends ---------- */
  function makeSmoother() {
    if (reduce || smoother) return;
    smoother = ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1.5, effects: true });
    ScrollTrigger.refresh();
  }
  if (window.__PRELOADER_DONE__) makeSmoother(); else window.addEventListener("preloader:done", makeSmoother, { once: true });
  function scrollToEl(el) {
    if (!el) return;
    if (smoother) smoother.scrollTo(el, true, "top top"); else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[href]"); if (!a || a.origin !== location.origin || a.pathname !== location.pathname || a.hash.length < 2) return;
    if (a.hash === "#contact" && $("#contact")) { e.preventDefault(); openDrawer(a); return; }
    var el = document.getElementById(decodeURIComponent(a.hash.slice(1))); if (!el) return;
    e.preventDefault(); closeMega(); closeMenu(); scrollToEl(el);
  });

  /* ---------- 1. Hero slider ---------- */
  var navItems = $$(".nav-item"), hl = $(".nav-hl"), cur = 0, busy = false;
  var slideSel = function (i) { return "#slide-" + i; };
  var textSel = function (i) { return slideSel(i) + " h1, " + slideSel(i) + " .h1, " + slideSel(i) + " p"; };
  function hlLeft(i) { var r = navItems[i].getBoundingClientRect(); return r.left + r.width / 2 - hl.offsetWidth / 2; }
  function heroFinal() {
    gsap.set(slideSel(0), { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)" });
    gsap.set(textSel(0), { opacity: 1, yPercent: 0, y: 0 });
    gsap.set(navItems, { opacity: 1, y: 0 });
    gsap.set(hl, { left: hlLeft(0), autoAlpha: 1 });
  }
  function heroIntro() {
    gsap.set(slideSel(0), { autoAlpha: 0, clipPath: "inset(0% 0% 0% 100%)" });
    gsap.set(textSel(0), { opacity: 0, yPercent: 100, y: 0 });
    gsap.set(navItems, { opacity: 0, y: 20 });
    var t = gsap.timeline();
    t.to(slideSel(0), { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", duration: .8, ease: "power3.out" })
     .to(textSel(0), { yPercent: 0, opacity: 1, stagger: .1, duration: .6, ease: "power3.out" }, "-=0.3")
     .to(navItems, { y: 0, opacity: 1, stagger: .1, duration: .4, ease: "power3.out" }, "-=0.4");
    gsap.set(hl, { left: hlLeft(0) });
    gsap.to(hl, { autoAlpha: 1, duration: .25, delay: 1 });
  }
  if (hl && navItems.length) { if (reduce) heroFinal(); else setTimeout(heroIntro, HOLD); }
  navItems.forEach(function (b, n) {
    b.addEventListener("click", function () {
      if (n === cur || busy) return;
      busy = true;
      var t = gsap.timeline({ onComplete: function () { busy = false; } });
      t.to(slideSel(cur), { autoAlpha: 0, clipPath: "inset(0% 100% 0% 0%)", duration: reduce ? 0 : .6, ease: "power3.inOut" })
       .fromTo(slideSel(n), { autoAlpha: 0, clipPath: "inset(0% 0% 0% 100%)" }, { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", duration: reduce ? 0 : .6, ease: "power3.inOut" }, "-=0.3")
       .fromTo(textSel(n), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: .1, duration: reduce ? 0 : .6, ease: "power3.out" }, "-=0.2");
      t.to(hl, { left: hlLeft(n), duration: .25, ease: "power2.out" }, 0);
      navItems.forEach(function (o, k) { o.classList.toggle("is-on", k === n); o.setAttribute("aria-selected", k === n); });
      cur = n;
    });
  });
  window.addEventListener("resize", function () { if (hl && navItems.length && gsap.getProperty(hl, "opacity") > 0) gsap.set(hl, { left: hlLeft(cur) }); });

  /* ---------- 2. Highlights: text rises, cards tilt up from the edges ---------- */
  (function () {
    var sec = $(".sec2"), txt = $$(".sec2-text p, .sec2-text h2"), cards = $$(".grid > *");
    if (!sec) return;
    function reset() {
      if (reduce) { gsap.set(txt, { yPercent: 0, opacity: 1, clearProps: "transform" }); gsap.set(cards, { y: 0, opacity: 1, rotateX: 0, clearProps: "transform" }); return; }
      gsap.set(txt, { yPercent: 100, opacity: 0 });
      gsap.set(cards, { y: 40, opacity: 0, rotateX: 8, transformOrigin: "top center" });
    }
    function play() {
      if (reduce) return;
      var t = gsap.timeline();
      t.to(txt, { yPercent: 0, opacity: 1, stagger: .08, ease: "power4.out", duration: 1.1, clearProps: "transform" })
       .to(cards, { y: 0, opacity: 1, rotateX: 0, transformOrigin: "top center", stagger: { amount: .6, from: "edges" }, duration: 1, ease: "power3.out", clearProps: "transform" }, "-=0.6");
    }
    reset();
    ScrollTrigger.create({ trigger: sec, start: "top center", onEnter: play, onEnterBack: play });
    ScrollTrigger.create({ trigger: sec, start: "top bottom", end: "bottom top", onToggle: function (s) { if (!s.isActive) reset(); } });
  })();

  /* Card hovers: text slides up 1s power2.out, description fades in; back .8s power1.out */
  $$(".card-img").forEach(function (c) {
    var ct = $(".ct", c), d = $(".ct-desc", c), off = c.classList.contains("dealers") ? 35 : 20, arr = $(".arrow-btn", c), ic = $(".ic", arr);
    c.addEventListener("mouseenter", function () { gsap.to(ct, { y: 0, duration: 1, ease: "power2.out" }); gsap.to(d, { autoAlpha: 1, duration: 1, ease: "power2.out" }); });
    c.addEventListener("mouseleave", function () { gsap.to(ct, { y: off, duration: .8, ease: "power1.out" }); gsap.to(d, { autoAlpha: 0, duration: .8, ease: "power1.out" }); });
    gsap.set(ct, { y: off });
    arr.addEventListener("mouseenter", function () { gsap.to(arr, { background: "#ffffff", duration: .8, ease: "power1.out" }); gsap.to(ic, { rotate: 45, duration: .4, ease: "power1.out" }); gsap.to(arr, { color: "#000000", duration: .8, ease: "power1.out" }); });
    arr.addEventListener("mouseleave", function () { gsap.to(arr, { background: "rgba(255,255,255,0)", duration: .8, ease: "power1.out" }); gsap.to(ic, { rotate: 0, duration: .4, ease: "power1.out" }); gsap.to(arr, { color: "#ffffff", duration: .8, ease: "power1.out" }); });
  });
  $$(".prod").forEach(function (c) {
    var pt = $(".pt", c), d = $(".pt-desc", c);
    c.addEventListener("mouseenter", function () { if (isPhone()) return; gsap.to(pt, { y: 0, duration: 1, ease: "power2.out" }); gsap.to(d, { autoAlpha: 1, duration: 1, ease: "power2.out" }); });
    c.addEventListener("mouseleave", function () { if (isPhone()) return; gsap.to(pt, { y: 20, duration: .8, ease: "power1.out" }); gsap.to(d, { autoAlpha: 0, duration: .8, ease: "power1.out" }); });
  });

  /* ---------- 3. Projects ---------- */
  (function () {
    var sec = $(".sec4"), track = $("#track"), arrowSvg = $(".circ-text");
    if (!sec || !track || !arrowSvg) return;
    var parts = [$(".info-text"), track, arrowSvg].filter(Boolean);
    function reset() { if (reduce) gsap.set(parts, { autoAlpha: 1, y: 0, clearProps: "transform" }); else gsap.set(parts, { autoAlpha: 0, y: 24 }); }
    function play() { if (!reduce) gsap.to(parts, { autoAlpha: 1, y: 0, duration: .9, ease: "power3.out", stagger: .12, overwrite: true, clearProps: "transform" }); }
    reset();
    ScrollTrigger.create({ trigger: sec, start: "top center-=200px", onEnter: play, onEnterBack: play });
    ScrollTrigger.create({ trigger: sec, start: "top bottom", end: "bottom top", onToggle: function (s) { if (!s.isActive) reset(); } });

    // circular text turns once every 10s
    if (!reduce) gsap.to(".circ-rot", { rotation: -360, svgOrigin: "75 75", duration: 10, repeat: -1, ease: "none" });

    var animating = false, drag = { on: false, sx: 0, cx: 0, moved: false };
    function next() {
      if (animating || isPhone()) return;
      animating = true;
      var kids = Array.prototype.slice.call(track.children), first = kids[0], rest = kids.slice(1), w = first.offsetWidth;
      gsap.timeline({ onComplete: function () { gsap.set(kids, { clearProps: "all" }); track.appendChild(first); animating = false; } })
        .to(first, { opacity: 0, scale: .9, duration: .5, ease: "power2.inOut" }, 0)
        .to(rest, { x: "-=" + (w + 60), duration: 1, ease: "power2.out" }, 0);
    }
    arrowSvg.addEventListener("click", next);
    arrowSvg.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); next(); } });

    track.addEventListener("pointerdown", function (e) {
      if (animating || isPhone() || e.target.closest("[data-stop-drag] button")) return;
      drag = { on: true, sx: e.clientX, cx: e.clientX, moved: false, id: e.pointerId };
      track.setPointerCapture(e.pointerId); track.classList.add("is-drag");
    });
    track.addEventListener("pointermove", function (e) {
      if (!drag.on) return;
      drag.cx = e.clientX; if (Math.abs(drag.cx - drag.sx) > 4) drag.moved = true;
      var o = drag.cx - drag.sx; if (o >= 0) return;
      var kids = Array.prototype.slice.call(track.children), first = kids[0], rest = kids.slice(1), w = first.offsetWidth + 60;
      o = Math.max(o, -w); var p = Math.min(1, Math.abs(o) / w);
      gsap.set(first, { opacity: 1 - p, scale: 1 - .1 * p }); gsap.set(rest, { x: o });
    });
    function up() {
      if (!drag.on) return;
      track.classList.remove("is-drag");
      var o = drag.cx - drag.sx; drag.on = false;
      var kids = Array.prototype.slice.call(track.children), first = kids[0], rest = kids.slice(1), w = first.offsetWidth + 60;
      var p = Math.min(1, Math.abs(Math.min(0, o)) / w);
      if (p >= .5) {
        animating = true;
        var d = .4 * (1 - p);
        gsap.timeline({ onComplete: function () { gsap.set(kids, { clearProps: "all" }); track.appendChild(first); animating = false; } })
          .to(first, { opacity: 0, scale: .9, duration: Math.max(.1, d), ease: "power2.out" }, 0)
          .to(rest, { x: -w, duration: Math.max(.2, 1.5 * d), ease: "power2.out" }, 0);
      } else {
        gsap.to(first, { opacity: 1, scale: 1, duration: .3, ease: "power2.out" });
        gsap.to(rest, { x: 0, duration: .3, ease: "power2.out" });
      }
    }
    track.addEventListener("pointerup", up); track.addEventListener("pointercancel", up); track.addEventListener("pointerleave", up);

    // hotspots: one tooltip open at a time
    $$(".ptr", track).forEach(function (p) {
      p.addEventListener("click", function (e) {
        e.stopPropagation();
        var was = p.classList.contains("is-on");
        $$(".ptr.is-on").forEach(function (o) { o.classList.remove("is-on"); });
        if (!was) p.classList.add("is-on");
      });
    });
    // phone: progress bar under the native scroll-snap strip
    var bar = $(".track-progress span");
    track.addEventListener("scroll", function () {
      var m = track.scrollWidth - track.clientWidth; var k = m ? track.scrollLeft / m : 0;
      bar.style.transform = "scaleX(" + Math.max(.0001, .25 + .75 * k) + ")";
    }, { passive: true });
  })();

  /* ---------- 4. About: text rises; the picture grows from 70% while scrolling (scrub) ---------- */
  (function () {
    var sec = $(".sec5"), kids = $$(".sec5-text > *"), wrap = $(".img-wrap"), inner = $(".img-inner"), controls = $(".controls");
    if (!sec || !wrap || !controls) return;
    function reset() { if (reduce) gsap.set(kids, { autoAlpha: 1, y: 0, clearProps: "transform" }); else gsap.set(kids, { autoAlpha: 0, y: 24 }); }
    function play() { if (!reduce) gsap.to(kids, { autoAlpha: 1, y: 0, duration: .9, ease: "power3.out", stagger: .12, overwrite: true, clearProps: "transform" }); }
    reset();
    ScrollTrigger.create({ trigger: sec, start: "top center", onEnter: play, onEnterBack: play });
    ScrollTrigger.create({ trigger: sec, start: "top bottom", end: "bottom top", onToggle: function (s) { if (!s.isActive) reset(); } });
    function showControls(v) {
      controls.setAttribute("aria-hidden", !v);
      gsap.to(controls, { y: v ? 0 : 10, autoAlpha: v ? 1 : 0, duration: v ? .5 : .25, ease: v ? "power2.out" : "power2.in" });
    }
    if (reduce) { gsap.set(controls, { autoAlpha: 1, y: 0 }); controls.setAttribute("aria-hidden", "false"); }
    else {
      gsap.set(controls, { y: 10 });
      gsap.timeline({ scrollTrigger: { trigger: wrap, start: "top bottom", end: "center-=100 center", scrub: true,
        onUpdate: function () { var s = gsap.getProperty(wrap, "scale") || 1; gsap.set(inner, { scale: 1 / s }); },
        onLeave: function () { showControls(true); }, onEnterBack: function () { showControls(false); } } })
        .fromTo(wrap, { scale: .7 }, { scale: 1, ease: "none" });
    }
    $$(".toggle").forEach(function (t) {
      t.addEventListener("click", function () {
        var on = !t.classList.contains("on"); t.classList.toggle("on", on); t.setAttribute("aria-checked", on);
        t.nextElementSibling.classList.toggle("on", on);
        gsap.to('.layer[data-z="' + t.dataset.z + '"]', { opacity: on ? 1 : 0, duration: reduce ? 0 : .5, ease: "power2.out" });
      });
    });
  })();

  /* ---------- 5. Values: earlier cards slide up (y = -section height, .8s power2.inOut) ---------- */
  (function () {
    var sec = $(".sec3"), tabs = $$(".tab"), nav = $(".top-nav"), n = tabs.length, at = 0, tweens = [];
    if (!sec || !nav || !n) return;
    function build() {
      tweens.forEach(function (t) { if (t) t.kill(); });
      var h = sec.offsetHeight;
      tweens = tabs.map(function (t, i) { return i === n - 1 ? null : gsap.to(t, { y: -h, duration: reduce ? .01 : .8, ease: "power2.inOut", paused: true }); });
      for (var i = 0; i < at; i++) tweens[i].progress(1);
    }
    function drawNav(show) {
      nav.innerHTML = ""; nav.hidden = at === 0;
      for (var i = 0; i < at; i++) {
        var b = document.createElement("button"); b.type = "button";
        b.innerHTML = "<span>0" + (i + 1) + ".</span><span>" + $(".tab-bottom b", tabs[i]).textContent + "</span>";
        b.addEventListener("click", go.bind(null, i)); nav.appendChild(b);
      }
      nav.classList.toggle("visible", !!show);
    }
    function go(k) {
      if (k === at) return;
      if (k > at) {
        for (var i = at; i < k; i++) tweens[i] && tweens[i].play();
        var last = tweens[k - 1]; at = k; drawNav(false);
        if (last) last.eventCallback("onComplete", function () { nav.classList.add("visible"); }); else nav.classList.add("visible");
      } else {
        for (var j = k; j < at; j++) tweens[j] && tweens[j].reverse();
        at = k; drawNav(k > 0);
      }
    }
    tabs.forEach(function (t, i) { $(".tab-bottom", t).addEventListener("click", function () { go(i); }); });
    build(); window.addEventListener("resize", build);
  })();

  /* ---------- Header: mega menu ---------- */
  var hdr = $("#hdr"), megaBtn = $(".lc-menu .lc-mega > a") || document.createElement("a"), mega = $("#mega"), backdrop = $(".mega-backdrop"), megaOpen = false;
  megaBtn.setAttribute("role", "button"); megaBtn.setAttribute("aria-expanded", "false"); megaBtn.setAttribute("aria-controls", "mega");
  megaBtn.addEventListener("click", function (e) { e.preventDefault(); });
  var cats = [
    ["Indoor lighting", ["Downlights", "Tracklights", "Decorative", "Panels", "Battens"]],
    ["Outdoor lighting", ["Street lights", "Floodlights", "Bollards", "Wall lights", "In-ground"]],
    ["Strips & Neon", ["24 V strips", "COB strips", "Neon flex", "Profiles", "Drivers"]],
    ["Lamps & Trims", ["GU10 lamps", "E27 bulbs", "Fixed trims", "Tilting trims"]],
    ["Industry & Emergency", ["High-bays", "Linear IP65", "Exit signs", "Emergency kits"]],
    ["Smart Control", ["Wi-Fi drivers", "Remotes", "Sensors", "DALI"]]
  ];
  var megaParts = [$("[data-mega-body]"), $("[data-mega-feat]")];
  function openMega() {
    megaOpen = true; megaBtn.setAttribute("aria-expanded", "true");
    var d = reduce ? 0 : 1;
    gsap.to(mega, { autoAlpha: 1, duration: .4 * d, ease: "power2.out", overwrite: "auto" });
    gsap.to(backdrop, { autoAlpha: 1, duration: .3 * d, ease: "none", overwrite: "auto" });
    gsap.to(hdr, { "--mm-bg": 1, duration: .45 * d, ease: "power2.out" });
    gsap.fromTo(megaParts, { autoAlpha: 0, y: 6 }, { autoAlpha: 1, y: 0, duration: .35 * d, ease: "power2.out", overwrite: "auto" });
  }
  function closeMega() {
    if (!megaOpen) return; megaOpen = false; megaBtn.setAttribute("aria-expanded", "false");
    var d = reduce ? 0 : 1;
    gsap.to(mega, { autoAlpha: 0, duration: .3 * d, ease: "power2.in", overwrite: "auto" });
    gsap.to(backdrop, { autoAlpha: 0, duration: .3 * d, ease: "power2.in", overwrite: "auto" });
    gsap.to(hdr, { "--mm-bg": 0, duration: .35 * d, ease: "power2.in" });
  }
  megaBtn.addEventListener("click", function (e) { e.stopPropagation(); megaOpen ? closeMega() : openMega(); });
  backdrop.addEventListener("click", closeMega);
  $$(".mega-cat").forEach(function (b) {
    b.addEventListener("click", function () {
      if (b.classList.contains("is-on")) return;
      var c = cats[+b.dataset.cat];
      gsap.timeline({ defaults: { duration: reduce ? 0 : .25, ease: "power2.out" } })
        .to(megaParts, { y: 6, autoAlpha: 0, overwrite: "auto" })
        .add(function () {
          $$(".mega-cat").forEach(function (o) { o.classList.toggle("is-on", o === b); });
          $("[data-mega-h]").textContent = c[0]; $("[data-mega-name]").textContent = b.textContent;
          $("[data-mega-a]").innerHTML = c[1].map(function (t) { return '<li><a href="#projects">' + t + "</a></li>"; }).join("");
        })
        .fromTo(megaParts, { y: 6, autoAlpha: 0 }, { y: 0, autoAlpha: 1, overwrite: "auto" });
    });
  });

  /* Search: the input grows out of the circle (.5s) */
  var sBar = $("#searchBar"), sBtn = $("#searchBtn"), q = $("#q"), res = $("#results");
  var products = ["VEGA 3CCT linear profile", "VEGA T connector", "NOVA 13 W recessed line", "ORB pendant", "ARGO high-bay", "TERA 3CCT floodlight", "CIRA 3CCT IP54 panel", "HALO 3CCT ring pendant", "Strip 24 V COB 130 lm/W", "Neon flex 24 V", "4-wire track"];
  function renderRes() {
    var t = q.value.trim().toLowerCase();
    if (!t) { res.hidden = true; return; }
    var list = products.filter(function (p) { return p.toLowerCase().indexOf(t) > -1; }).slice(0, 6);
    res.innerHTML = list.length ? list.map(function (p) { return '<li><a href="#projects">' + p + " <small>View</small></a></li>"; }).join("") : '<li><a href="#highlights">No match <small>See all</small></a></li>';
    res.hidden = false;
  }
  function setSearch(open) {
    sBar.classList.toggle("is-open", open); sBtn.classList.toggle("is-on", open); sBtn.setAttribute("aria-expanded", open);
    q.tabIndex = open ? 0 : -1;
    if (open) { setLogin(false); setTimeout(function () { q.focus(); }, 60); } else { q.value = ""; res.hidden = true; }
  }
  sBtn.addEventListener("click", function () { setSearch(!sBar.classList.contains("is-open")); });
  q.addEventListener("input", renderRes);
  res.addEventListener("click", function () { setSearch(false); });

  /* Trade area: the circle widens into a bar and the form drops down */
  var lBtn = $("#loginBtn"), lWrap = $("#tradeWrap");
  function setLogin(open) {
    lBtn.classList.toggle("is-collapsed", !open); lBtn.setAttribute("aria-expanded", open); lWrap.classList.toggle("is-open", open);
    if (open) setSearch(false);
  }
  lBtn.addEventListener("click", function () { setLogin(lBtn.classList.contains("is-collapsed")); });
  document.addEventListener("mousedown", function (e) {
    if (!e.target.closest("#login")) setLogin(false);
    if (!e.target.closest("#searchBar")) { if (sBar.classList.contains("is-open")) setSearch(false); }
    if (megaOpen && !e.target.closest(".mega,.lc-mega")) closeMega();
  });

  /* ---------- Phone menu: overlay .25s, panel drops 1s power2.out; closing plays it back ---------- */
  var mm = $("#mmenu"), burger = $(".burger"), mmTl = gsap.timeline({ paused: true });
  mm.setAttribute("aria-hidden", "true");
  (function (p) { p.setAttribute("role", "dialog"); p.setAttribute("aria-modal", "true"); p.setAttribute("aria-label", "Menu"); })($(".mm-panel"));
  mmTl.to(".mm-overlay", { autoAlpha: 1, duration: .25, ease: "none" })
      .to(".mm-panel", { autoAlpha: 1, yPercent: 0, duration: 1, ease: "power2.out" }, "-=0.1");
  gsap.set(".mm-panel", { y: 0, yPercent: -100, autoAlpha: 0 });
  mmTl.eventCallback("onReverseComplete", function () { mm.classList.remove("is-open"); });
  function openMenu() { mm.classList.add("is-open"); mm.setAttribute("aria-hidden", "false"); burger.setAttribute("aria-expanded", "true"); if (reduce) mmTl.progress(1); else mmTl.timeScale(1).play(); $(".mm-close").focus(); }
  function closeMenu() { if (!mm.classList.contains("is-open")) return; mm.setAttribute("aria-hidden", "true"); burger.setAttribute("aria-expanded", "false"); if (reduce) { mmTl.progress(0); mm.classList.remove("is-open"); } else mmTl.timeScale(1).reverse(); }
  burger.addEventListener("click", openMenu);
  $(".mm-close").addEventListener("click", function () { closeMenu(); burger.focus(); });
  $(".mm-overlay").addEventListener("click", closeMenu);

  /* ---------- Contact drawer: scrim .25s, drawer slides in .35s power3.out; out .28s power3.in ---------- */
  var drawer = $("#contact"), scrim = $(".scrim"), opener = null;
  function openDrawer(from) {
    opener = from; closeMenu(); closeMega();
    gsap.set(scrim, { display: "block" }); gsap.set(drawer, { display: "flex" });
    gsap.to(scrim, { opacity: 1, duration: .25, ease: "power2.out" });
    gsap.to(drawer, { x: 0, duration: reduce ? 0 : .35, ease: "power3.out" });
    drawer.setAttribute("aria-hidden", "false"); if (smoother) smoother.paused(true); else html.classList.add("no-scroll");
    setTimeout(function () { var f = $('input[name="name"]', drawer) || $(".drawer-x"); f.focus(); }, 80);
  }
  function closeDrawer() {
    gsap.to(scrim, { opacity: 0, duration: .2, ease: "power2.in" });
    gsap.to(drawer, { x: "100%", duration: reduce ? 0 : .28, ease: "power3.in", onComplete: function () { gsap.set([drawer, scrim], { display: "none" }); } });
    drawer.setAttribute("aria-hidden", "true"); if (smoother) smoother.paused(false); else html.classList.remove("no-scroll");
    if (opener) opener.focus();
  }
  $$('[data-open="contact"]').forEach(function (b) { b.addEventListener("click", function () { openDrawer(b); }); });
  $(".drawer-x").addEventListener("click", closeDrawer); scrim.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (drawer.getAttribute("aria-hidden") === "false") closeDrawer(); else if (mm.classList.contains("is-open")) closeMenu(); else { closeMega(); setLogin(false); setSearch(false); }
  });

  /* ---------- Footer accordions (height tween) ---------- */
  $$(".acc").forEach(function (a) {
    var btn = $(".acc-btn", a), panel = $(".acc-panel", a);
    btn.addEventListener("click", function () {
      var open = !a.classList.contains("is-open"); a.classList.toggle("is-open", open); btn.setAttribute("aria-expanded", open);
      gsap.to(panel, { height: open ? "auto" : 0, duration: reduce ? 0 : .35, ease: open ? "power2.out" : "power2.in", onComplete: function () { ScrollTrigger.refresh(); } });
    });
  });

  /* ---------- Silk backgrounds (footer, number card): a small WebGL shader of drifting satin light ---------- */
  var PALETTES = { ink: [[.078, .141, .31], [.43, .55, .86]], sun: [[1, .62, .05], [1, .93, .62]] };
  $$("canvas.silk").forEach(function (cv) {
    var gl = cv.getContext("webgl", { antialias: false, premultipliedAlpha: false });
    var pal = PALETTES[cv.dataset.silk] || PALETTES.ink;
    if (!gl) { cv.style.background = "rgb(" + pal[0].map(function (v) { return Math.round(v * 255); }).join(",") + ")"; return; }
    var vs = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
    var fs = "precision mediump float;uniform vec2 r;uniform float t;uniform vec3 a;uniform vec3 b;" +
      "void main(){vec2 u=gl_FragCoord.xy/r.y;float s=t*.18;" +
      "float w=sin(u.x*1.6+sin(u.y*2.1+s*1.3)*1.4+s)*.5+.5;" +
      "float v=sin(u.y*2.4+sin(u.x*1.7-s*1.1)*1.6-s*.8)*.5+.5;" +
      "float f=smoothstep(.15,1.,w*v);f=pow(f,1.6);" +
      "float g=smoothstep(.55,.98,sin((u.x+u.y)*2.2+sin(u.x*3.-s)*.9+s*1.4)*.5+.5)*.35;" +
      "vec3 c=mix(a,b,clamp(f*.75+g,0.,1.));gl_FragColor=vec4(c,1.);}";
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
    var pr = gl.createProgram(); gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(pr); gl.useProgram(pr);
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var ur = gl.getUniformLocation(pr, "r"), ut = gl.getUniformLocation(pr, "t");
    gl.uniform3fv(gl.getUniformLocation(pr, "a"), pal[0]); gl.uniform3fv(gl.getUniformLocation(pr, "b"), pal[1]);
    var visible = false, t0 = performance.now();
    function size() { var d = Math.min(window.devicePixelRatio || 1, 1.5) * .5; cv.width = Math.max(1, cv.clientWidth * d); cv.height = Math.max(1, cv.clientHeight * d); gl.viewport(0, 0, cv.width, cv.height); }
    function draw(now) { gl.uniform2f(ur, cv.width, cv.height); gl.uniform1f(ut, reduce ? 3 : (now - t0) / 1000); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); }
    function loop(now) { if (!visible) return; draw(now); requestAnimationFrame(loop); }
    size(); draw(t0 + 3000); window.addEventListener("resize", function () { size(); draw(performance.now()); });
    if (!reduce && "IntersectionObserver" in window) new IntersectionObserver(function (es) { var v = es[0].isIntersecting; if (v && !visible) { visible = true; requestAnimationFrame(loop); } visible = v; }).observe(cv);
  });

  /* ---------- Formgong forms: success only when the server answers success: true ---------- */
  $$("form.fg").forEach(function (form) {
    var send = $("button[type=submit]", form), label = $("[data-label]", form), status = $("[data-status]", form), text = label.textContent;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      send.disabled = true; label.textContent = "Sending…"; status.textContent = ""; status.classList.remove("err");
      var first = ((form.elements.namedItem("name") || {}).value || "").trim().split(/\s+/)[0];
      fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
        .then(function (r) { return r.json().catch(function () { return null; }); })
        .then(function (res) {
          if (res && res.success === true) { $("[data-name]", form).textContent = first || "there"; form.reset(); form.classList.add("is-sent"); $(".fg-sent", form).focus(); }
          else { status.textContent = (res && res.message) || "Could not send. Please try again."; status.classList.add("err"); }
        })
        .catch(function () { status.textContent = "Could not send. Check your connection and try again."; status.classList.add("err"); })
        .finally(function () { send.disabled = false; label.textContent = text; });
    });
    $("[data-again]", form).addEventListener("click", function () { form.classList.remove("is-sent"); form.elements.namedItem("name").focus(); });
  });
})();
