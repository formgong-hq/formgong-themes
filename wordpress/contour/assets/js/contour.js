/* Contour: the template's script (js/main.js), adapted for WordPress (see build_contour.py). */
/* Contour — Formgong template script.
   Works without GSAP; with GSAP + ScrollTrigger + SplitText + Lenis it runs the full motion layer. */
(function () {
  "use strict";
  var doc = document, root = doc.documentElement;
  // The skip link's target: tabindex set here, not in the block markup, so core/group stays valid in the editor.
  (function () { var m = document.getElementById("main"); if (m && !m.hasAttribute("tabindex")) m.setAttribute("tabindex", "-1"); })();
  var $ = function (s, c) { return (c || doc).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || doc).querySelectorAll(s)); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var EMAIL = (($("a[href^='mailto:']") || {}).href || "").replace("mailto:", "");
  var store = { get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} } };
  var ACCENTS = ["blue", "orange", "lime"];

  /* ---------- theme, accent, grid ---------- */
  function themeColor() { var m = $("meta[name=theme-color]"); if (m) m.setAttribute("content", getComputedStyle(root).getPropertyValue("--bg").trim()); }
  function toggleTheme() { var t = root.dataset.theme === "dark" ? "light" : "dark"; root.dataset.theme = t; store.set("ct-theme", t); themeColor(); }
  function nextAccent() { var a = ACCENTS[(ACCENTS.indexOf(root.dataset.accent || "blue") + 1) % ACCENTS.length]; root.dataset.accent = a; store.set("ct-accent", a); }
  function toggleGrid() { root.dataset.grid = root.dataset.grid === "on" ? "off" : "on"; }
  themeColor();

  /* ---------- command palette (it is also the phone menu) ---------- */
  var pal, palItems = [], palShown = [], palSel = 0;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function go(a) {
    return function () {
      pal.close();
      var same = a.hash && a.pathname === location.pathname, t = same && doc.getElementById(decodeURIComponent(a.hash.slice(1)));
      if (!t) { location.href = a.href; return; }
      if (window.__lenis) window.__lenis.scrollTo(t); else t.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    };
  }
  function buildPalette() {
    pal = doc.createElement("dialog");
    pal.className = "palette"; pal.setAttribute("aria-label", "Command palette");
    pal.innerHTML = '<div class="palette__box"><div class="palette__search"><span class="note" aria-hidden="true">⌘K</span>' +
      '<input type="text" role="combobox" aria-label="Search sections and actions" aria-expanded="true" aria-autocomplete="list" aria-controls="palette-list" placeholder="Search sections, actions…" autocomplete="off" spellcheck="false">' +
      '<button type="button" class="note palette__close" aria-label="Close (Esc)">Esc</button></div>' +
      '<ul class="palette__list" id="palette-list" role="listbox" aria-label="Results"></ul><p class="sr-only" role="status" data-palette-count></p></div>';
    doc.body.appendChild(pal);
    var seen = {};
    $$(".nav a[href], [data-palette-link]").forEach(function (a) {
      if (seen[a.href]) return; seen[a.href] = 1;
      palItems.push({ group: "Go to", label: (a.querySelector(".nav__label, .wp-block-navigation-item__label") || a).textContent.trim(), hint: a.hash || a.pathname, run: go(a) });
    });
    var ct = doc.getElementById("contact");
    if (ct && !$$(".nav a[href]").some(function (a) { return a.hash === "#contact"; })) { var fake = doc.createElement("a"); fake.href = "#contact"; palItems.push({ group: "Go to", label: "Contact", hint: "#contact", run: go(fake) }); }
    palItems.push({ group: "Do", label: "Toggle light / dark", hint: "theme", run: toggleTheme });
    palItems.push({ group: "Do", label: "Next accent colour", hint: "accent", run: nextAccent });
    palItems.push({ group: "Do", label: "Show the grid", hint: "G", run: function () { toggleGrid(); pal.close(); } });
    if (EMAIL) palItems.push({ group: "Do", label: "Copy email address", hint: EMAIL, run: function () { if (navigator.clipboard) navigator.clipboard.writeText(EMAIL); pal.close(); } });
    var input = $("input", pal);
    input.addEventListener("input", function () { palSel = 0; filter(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { palSel = Math.min(palSel + 1, palShown.length - 1); e.preventDefault(); mark(); }
      else if (e.key === "ArrowUp") { palSel = Math.max(palSel - 1, 0); e.preventDefault(); mark(); }
      else if (e.key === "Enter" && palShown[palSel]) palShown[palSel].run();
    });
    $(".palette__close", pal).addEventListener("click", function () { pal.close(); });
    pal.addEventListener("click", function (e) { if (e.target === pal) pal.close(); });
    var list = $(".palette__list", pal);
    list.addEventListener("mousedown", function (e) { e.preventDefault(); });
    list.addEventListener("click", function (e) { var li = e.target.closest("[data-i]"); if (li && palShown[+li.dataset.i]) palShown[+li.dataset.i].run(); });
    pal.addEventListener("close", function () { if (window.__lenis) window.__lenis.start(); });
  }
  function filter(q) {
    q = q.trim().toLowerCase();
    palShown = q ? palItems.filter(function (i) { return (i.label + " " + i.hint + " " + i.group).toLowerCase().indexOf(q) > -1; }) : palItems;
    var g = "", html = palShown.map(function (it, i) {
      var head = it.group === g ? "" : '<li class="note palette__group" role="presentation">' + (g = it.group) + "</li>";
      return head + '<li role="option" id="palette-opt-' + i + '" data-i="' + i + '"><span>' + esc(it.label) + '</span><span class="note">' + esc(it.hint) + "</span></li>";
    }).join("");
    $(".palette__list", pal).innerHTML = html || '<li class="palette__empty note" role="presentation">Nothing found. Try “work” or “theme”.</li>';
    $("[data-palette-count]", pal).textContent = q ? palShown.length + " result" + (palShown.length === 1 ? "" : "s") : "";
    mark();
  }
  function mark() {
    var input = $("input", pal); input.removeAttribute("aria-activedescendant");
    $$("[data-i]", pal).forEach(function (li) { var on = +li.dataset.i === palSel; li.setAttribute("aria-selected", on); if (on) { input.setAttribute("aria-activedescendant", li.id); li.scrollIntoView({ block: "nearest" }); } });
  }
  function openPalette() {
    if (!pal) buildPalette();
    if (pal.open) return pal.close();
    palSel = 0; var input = $("input", pal); input.value = ""; filter("");
    if (window.__lenis) window.__lenis.stop();
    pal.showModal(); input.focus();
  }

  doc.addEventListener("click", function (e) {
    var t = e.target.closest("[data-action]"); if (!t) return;
    var a = t.dataset.action;
    if (a === "theme") toggleTheme(); else if (a === "accent") nextAccent(); else if (a === "palette") openPalette(); else if (a === "grid") toggleGrid();
  });
  doc.addEventListener("keydown", function (e) {
    var tag = (e.target.tagName || "");
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openPalette(); return; }
    if (!e.metaKey && !e.ctrlKey && e.code === "KeyG" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "SELECT") { e.preventDefault(); toggleGrid(); }
  });

  /* ---------- header: compact band, ruler draw, progress tag ---------- */
  var hd = $(".site-header"), tag = hd && $(".hd-rule__tag", hd);
  if (hd) {
    var ticking = false, clamp = function (v) { return Math.max(0, Math.min(1, v)); };
    var upd = function () {
      var y = scrollY, max = Math.max(1, root.scrollHeight - innerHeight), p = clamp(y / max);
      hd.classList.toggle("is-compact", y > 80);
      hd.style.setProperty("--band", clamp(y / 80).toFixed(3)); hd.style.setProperty("--draw", clamp((y - 40) / 240).toFixed(3));
      hd.style.setProperty("--prog", p.toFixed(4)); hd.style.setProperty("--tag", y > 200 ? 1 : 0);
      if (tag) tag.textContent = String(Math.round(p * 100)).padStart(2, "0") + "%";
      ticking = false;
    };
    addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
    addEventListener("resize", upd); upd();
  }

  /* ---------- preloader counter (the curtain itself is pure CSS) ---------- */
  var pc = $(".preloader__count");
  if (pc && !root.dataset.preloaded && getComputedStyle($(".preloader")).display !== "none") {
    var t0 = performance.now(), io = function (t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; };
    (function tick(now) { var t = Math.min(1, (now - t0) / 1100); pc.textContent = Math.round(io(t) * 100) + "%"; if (t < 1) requestAnimationFrame(tick); })(t0);
  }

  /* ---------- footer title block: 9 → 0 as each cell enters ---------- */
  function tbCount() {
    if (!("IntersectionObserver" in window)) return;
    $$(".tb__val").forEach(function (v, i) {
      var span = $("span", v) || v, end = span.textContent, done = false;
      new IntersectionObserver(function (es, ob) {
        if (!es[0].isIntersecting || done) return; done = true; ob.disconnect();
        var n = 9, step = function () { span.textContent = String(n); if (n-- > +end) setTimeout(step, 70); };
        setTimeout(step, i * 150);
      }, { threshold: 1 }).observe(v);
    });
  }
  if (!reduce) tbCount();

  if (!root.dataset.preloaded) { try { sessionStorage.setItem("ct-preloaded", "1"); } catch (e) {} }

  formInit();

  var G = window.gsap, ST = window.ScrollTrigger, Split = window.SplitText;
  if (!G || !ST || reduce) { root.classList.add("motion-ready"); return; }
  G.registerPlugin(ST); if (Split) G.registerPlugin(Split);

  /* ---------- smooth scroll ---------- */
  var lenis = null;
  if (window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); } });
    window.__lenis = lenis;
    lenis.on("scroll", ST.update);
    G.ticker.add(function (t) { lenis.raf(t * 1000); });
    G.ticker.lagSmoothing(0);
    doc.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest("a[href^='#']"); if (!a || a.classList.contains("skip")) return;
      var id = a.getAttribute("href").slice(1), t = id && doc.getElementById(id); if (!t) return;
      e.preventDefault(); lenis.scrollTo(t); history.replaceState(history.state, "", "#" + id);
      if (!t.matches("a[href],button,input,select,textarea,[tabindex]")) t.setAttribute("tabindex", "-1");
      t.focus({ preventScroll: true });
    }, true);
  }

  var EXPO = "expo.out", P4 = "power4.inOut";
  var idle = function (fn) { return "requestIdleCallback" in window ? requestIdleCallback(fn, { timeout: 1500 }) : setTimeout(fn, 200); };
  var maskPad = function (s) { (s.masks || []).forEach(function (m) { m.style.paddingBottom = "0.12em"; m.style.marginBottom = "-0.12em"; }); };

  /* ---------- crosshair cursor + magnetic buttons ---------- */
  (function cursor() {
    if (!matchMedia("(pointer: fine)").matches) return;
    var c = doc.createElement("div"); c.className = "cursor"; c.setAttribute("aria-hidden", "true");
    c.innerHTML = '<span class="cursor__h"></span><span class="cursor__v"></span><span class="cursor__pt"><span class="cursor__ring"></span><span class="cursor__label note"></span></span>';
    doc.body.appendChild(c); root.classList.add("has-cursor");
    var h = $(".cursor__h", c), v = $(".cursor__v", c), pt = $(".cursor__pt", c), lab = $(".cursor__label", c);
    var o = { duration: .12, ease: "power3.out" }, o2 = { duration: .2, ease: "power3.out" };
    var sy = G.quickTo(h, "y", o), sx = G.quickTo(v, "x", o), px = G.quickTo(pt, "x", o2), py = G.quickTo(pt, "y", o2);
    var hover = null, mag = null, pad = function (n) { return String(Math.round(n)).padStart(4, "0"); };
    addEventListener("pointermove", function (e) {
      c.classList.add("is-visible"); sy(e.clientY); sx(e.clientX); px(e.clientX); py(e.clientY);
      if (!hover) lab.textContent = "x " + pad(e.clientX) + " · y " + pad(e.clientY);
      var m = e.target.closest(".btn, .tool");
      if (m !== mag) { if (mag) G.to(mag, { x: 0, y: 0, duration: .6, ease: "elastic.out(1, 0.4)" }); mag = m; }
      if (mag) { var r = mag.getBoundingClientRect(); G.to(mag, { x: (e.clientX - (r.left + r.width / 2)) * .25, y: (e.clientY - (r.top + r.height / 2)) * .35, duration: .4, ease: "power3.out" }); }
    }, { passive: true });
    doc.addEventListener("pointerover", function (e) {
      var n = e.target.closest("a, button, summary, select, input, textarea, [data-cursor]");
      if (n === hover) return; hover = n; c.classList.toggle("is-hover", !!n);
      if (n) lab.textContent = n.dataset.cursor || (n.tagName === "A" && n.href.indexOf("mailto:") === 0 ? "write" : n.tagName === "A" && n.origin !== location.origin ? "visit ↗" : n.tagName === "A" ? "open →" : /INPUT|TEXTAREA|SELECT/.test(n.tagName) ? "type" : "click");
    }, { passive: true });
    root.addEventListener("pointerleave", function () { c.classList.remove("is-visible"); });
    addEventListener("pointerdown", function () { c.classList.add("is-down"); });
    addEventListener("pointerup", function () { c.classList.remove("is-down"); });
  })();

  /* ---------- ink fill on service rows follows the pointer, not the scroll ---------- */
  (function fill() {
    var hot = null, set = function (el) { if (el === hot) return; if (hot) hot.removeAttribute("data-hot"); hot = el; if (hot) hot.setAttribute("data-hot", ""); };
    root.classList.add("fill-js");
    addEventListener("pointermove", function (e) { if (e.pointerType !== "touch" && (e.movementX || e.movementY)) set(e.target.closest("[data-fill]")); }, { passive: true });
    addEventListener("pointerout", function (e) { if (hot && !hot.contains(e.relatedTarget)) set(null); }, { passive: true });
    if (lenis) lenis.on("scroll", function () { if (hot && !hot.matches(":hover")) set(null); });
  })();

  /* ---------- hero intro: blueprint boxes, outline → ink headline, generated subline ---------- */
  var TYPE = "01<>/_#*+=-xyz";
  function scramble(el, d) {
    var txt = el.dataset.text || "", o = { p: 0 }; el.textContent = "";
    return G.to(o, { p: 1, duration: d || .5, ease: "none", onUpdate: function () { var n = Math.floor(o.p * txt.length), r = ""; for (var i = 0; i < Math.min(4, txt.length - n); i++) r += TYPE[Math.random() * 14 | 0]; el.textContent = txt.slice(0, n) + r; }, onComplete: function () { el.textContent = txt; } });
  }
  function blueprint(hero) {
    var layer = doc.createElement("div"); layer.className = "bp"; layer.setAttribute("aria-hidden", "true"); hero.appendChild(layer);
    var hr = hero.getBoundingClientRect(), boxes = [], labels = [], ys = {}, xs = {};
    $$("[data-bp]", hero).forEach(function (el) {
      var r = el.getBoundingClientRect(), b = doc.createElement("div"), l = doc.createElement("span");
      b.className = "bp__box"; b.style.cssText = "left:" + (r.left - hr.left) + "px;top:" + (r.top - hr.top) + "px;width:" + r.width + "px;height:" + r.height + "px";
      l.className = "bp__label note"; l.dataset.text = el.dataset.bp + " · " + Math.round(r.width) + "×" + Math.round(r.height);
      b.appendChild(l); layer.appendChild(b); boxes.push(b); labels.push(l);
      ys[Math.round(r.top - hr.top)] = 1; ys[Math.round(r.bottom - hr.top)] = 1; xs[Math.round(r.right - hr.left)] = 1;
    });
    var mk = function (cls, prop, v) { var s = doc.createElement("span"); s.className = "bp__guide " + cls; s.style[prop] = v + "px"; layer.appendChild(s); return s; };
    return { layer: layer, boxes: boxes, labels: labels, gh: Object.keys(ys).map(function (y) { return mk("bp__guide--h", "top", y); }), gv: Object.keys(xs).map(function (x) { return mk("bp__guide--v", "left", x); }) };
  }
  function heroIntro(delay) {
    var hero = $("[data-hero]"), human = $("[data-hero-human]"), gen = $("[data-hero-generate]");
    var tl = G.timeline({ delay: delay }), bp = hero && innerWidth >= 768 ? blueprint(hero) : null;
    if (bp) {
      G.set(bp.gh, { scaleX: 0 }); G.set(bp.gv, { scaleY: 0 }); G.set(bp.boxes, { opacity: 0 });
      tl.to(bp.gh, { scaleX: 1, duration: 1, ease: "expo.inOut", stagger: .04 }, 0)
        .to(bp.gv, { scaleY: 1, duration: 1, ease: "expo.inOut", stagger: .06 }, .1)
        .to(bp.boxes, { opacity: 1, duration: .3, stagger: .07 }, .35);
      bp.labels.forEach(function (l, i) { tl.add(scramble(l), .4 + i * .07); });
    }
    if (human && Split) {
      var s = Split.create(human, { type: "lines", mask: "lines", aria: "none" }); maskPad(s);
      var ink = getComputedStyle(root).getPropertyValue("--ink").trim();
      G.set(human, { color: "rgba(0,0,0,0)", webkitTextStroke: "1.5px " + ink });
      tl.from(s.lines, { yPercent: 110, duration: 1.1, ease: EXPO, stagger: .08 }, bp ? .55 : 0)
        .to(human, { color: ink, webkitTextStroke: "0px " + ink, duration: .7, ease: "power2.inOut", clearProps: "color,webkitTextStroke" }, bp ? 1.35 : .8);
    }
    if (gen && Split) {
      var words = Split.create(gen, { type: "words", wordsClass: "gen-word", tag: "span", aria: "none" }).words;
      var caret = doc.createElement("span"); caret.className = "gen-caret"; caret.setAttribute("aria-hidden", "true"); gen.appendChild(caret);
      var tok = $("[data-gen-tokens]"), ms = $("[data-gen-ms]"), at = 0, g = G.timeline();
      G.set(words, { opacity: 0, filter: "blur(8px)", yPercent: 20 });
      words.forEach(function (w, i) {
        g.to(w, { opacity: 1, filter: "blur(0px)", yPercent: 0, duration: .5, ease: EXPO, onStart: function () { w.after(caret); if (tok) tok.textContent = String(Math.round((i + 1) * 1.33)); } }, at);
        at += G.utils.random(.03, .12) + (/[.,:]$/.test(w.textContent) ? .22 : 0);
      });
      var m = { v: 0 };
      g.to(m, { v: Math.round(at * 1000), duration: at, ease: "none", onUpdate: function () { if (ms) ms.textContent = String(Math.round(m.v)); } }, 0);
      g.add(function () { caret.classList.add("is-idle"); });
      tl.add(g, bp ? 1.6 : "-=0.7");
    }
    // The lead and the buttons rise while the subline types, so the call to action is there within ~3.5 s.
    tl.from("[data-hero-fade]", { clipPath: "inset(0% 0% 100% 0%)", y: 16, duration: 1, ease: EXPO, stagger: .08, clearProps: "clipPath" }, bp ? 1.9 : 1.1);
    if (bp) tl.to(bp.labels, { opacity: 0, duration: .4, stagger: .03 }, "+=0.2")
      .to(bp.boxes, { opacity: 0, duration: .6, stagger: .04 }, "<0.1")
      .to(bp.gh, { scaleX: 0, transformOrigin: "right center", duration: .9, ease: "expo.inOut", stagger: .03 }, "<")
      .to(bp.gv, { scaleY: 0, transformOrigin: "center bottom", duration: .9, ease: "expo.inOut" }, "<")
      .add(function () { bp.layer.remove(); });
    return tl;
  }

  /* ---------- scroll reveals ---------- */
  function reveals() {
    if (Split) $$('[data-reveal="lines"]').forEach(function (el) {
      Split.create(el, { type: "lines", mask: "lines", aria: "none", autoSplit: true, onSplit: function (s) { maskPad(s); return G.from(s.lines, { yPercent: 110, duration: 1.1, ease: EXPO, stagger: .07, scrollTrigger: { trigger: el, start: "top 85%", once: true } }); } });
    });
    var up = $$('[data-reveal="up"]').filter(function (el) { return el.getBoundingClientRect().top > innerHeight * .88; });
    if (up.length) {
      G.set(up, { autoAlpha: 0, y: 48, force3D: true });
      ST.batch(up, { start: "top 88%", once: true, onEnter: function (els) { G.to(els, { autoAlpha: 1, y: 0, duration: 1.3, ease: "power3.out", stagger: .09, overwrite: true, clearProps: "transform,opacity,visibility" }); } });
    }
    $$("[data-wireframe]").forEach(function (sec) {
      var tl = G.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: sec, start: "top 65%", end: "bottom 60%", scrub: true } });
      tl.fromTo($$("[data-wf-solid]", sec), { clipPath: "inset(-0.35em 100% -0.45em 0em)" }, { clipPath: "inset(-0.35em 0% -0.45em 0em)", stagger: .6 });
      tl.to($$("[data-wf-note]", sec), { opacity: .15 }, .4);
    });
    $$("[data-draw]").forEach(function (el) { G.fromTo(el, { scaleX: 0 }, { scaleX: 1, transformOrigin: "left center", ease: P4, scrollTrigger: { trigger: el, start: "top 90%", end: "top 45%", scrub: true } }); });
  }

  /* ---------- work stage: sketch → build → launch, pinned on wide screens ---------- */
  function hills(x, lift) {
    var out = [];
    for (var r = 0; r < 9; r++) { var d = ""; for (var n = 0; n <= 800; n += 20) { var y = 330 + r * 16 - Math.exp(-((n - x) * (n - x)) / 9000) * (90 - r * 6) * lift + Math.sin(n / 60 + r) * 4; d += (n ? "L" : "M") + n + " " + y.toFixed(1); } out.push(d); }
    return out;
  }
  function stageTl(item) {
    var q = function (s) { return $$(s, item); }, tl = G.timeline({ paused: true, defaults: { ease: "power1.inOut" } });
    var per = function (n, t) { return t / Math.max(n, 1); };
    var draw = q("[data-p-draw]"), pin = q("[data-p-in]");
    tl.fromTo(draw, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: .75, stagger: per(draw.length, .3), ease: "power2.inOut" }, 0);
    tl.fromTo(pin, { opacity: 0 }, { opacity: 1, duration: .45, stagger: per(pin.length, .5) }, .1);
    tl.fromTo(q("[data-b-dim]"), { opacity: 1 }, { opacity: .2, duration: .6, immediateRender: false }, .9);
    tl.fromTo(q("[data-b-wipe]"), { clipPath: "inset(0 100% 0 0)" }, { clipPath: "inset(0 0% 0 0)", duration: .9, ease: "power2.inOut" }, 1.05);
    tl.fromTo(q(".plot"), { opacity: 1 }, { opacity: 0, duration: .5, immediateRender: false }, 1.6);
    tl.fromTo(q("[data-live]"), { opacity: 0 }, { opacity: 1, duration: .5 }, 2);
    tl.fromTo(q("[data-live-clip]"), { attr: { width: 0 } }, { attr: { width: 800 }, duration: .9, ease: "power3.inOut" }, 2);
    tl.set({}, {}, 3);
    return tl;
  }
  function workStage() {
    var ws = $("[data-work-stage]"); if (!ws) return;
    var items = $$("[data-ws-item]", ws), arts = items.map(function (i) { return $(".ws__art", i); });
    var CURSOR = { angle: "next slide →", names: "rename ↻", relief: "lift the ground" };
    var setCursor = function (i, on) { var a = arts[i], c = CURSOR[items[i].dataset.wsItem]; if (a && c) { if (on) a.dataset.cursor = c; else delete a.dataset.cursor; } };
    $$("[data-ws-try]", ws).forEach(function (b) { b.hidden = false; });
    /* per-case interactions */
    items.forEach(function (it) {
      var kind = it.dataset.wsItem, art = $(".ws__art", it), btn = $("[data-ws-try]", it);
      if (kind === "angle") {
        var k = 0, prog = $("[data-ws-progress]", it), cnt = $("[data-ws-counter]", it), img = $(".ws__photo", it);
        var step = function (d) { k = (k + d + 3) % 3; if (prog) G.to(prog, { attr: { width: 73.3 * (k + 1) }, duration: .6, ease: "power3.out" }); if (cnt) cnt.textContent = "0" + (k + 1) + " / 03"; G.fromTo(img, { xPercent: 6 * d, opacity: .4 }, { xPercent: 0, opacity: 1, duration: 1, ease: "expo.inOut" }); G.set(img, { filter: "hue-rotate(" + (k * 40) + "deg)" }); };
        var sx = null;
        if (btn) btn.addEventListener("click", function () { step(1); });
        art.addEventListener("pointerdown", function (e) { sx = e.clientX; });
        art.addEventListener("pointerup", function (e) { if (sx === null) return; var d = e.clientX - sx; sx = null; step(d > 30 ? -1 : 1); });
      } else if (kind === "names") {
        var names = ["speckled-stoneware-mug-front.webp", "speckled-stoneware-mug-glaze-detail.webp", "speckled-stoneware-mug-on-table.webp"], ni = 0, f = $("[data-ws-f=name]", it);
        var ren = function () { ni = (ni + 1) % names.length; if (f) { f.dataset.text = names[ni]; scramble(f, .45); } };
        if (btn) btn.addEventListener("click", ren); art.addEventListener("click", ren);
      } else if (kind === "relief") {
        var paths = $$("[data-ws-hill]", it), st = { x: 560, lift: 1 };
        var render = function () { hills(st.x, st.lift).forEach(function (d, i) { if (paths[i]) paths[i].setAttribute("d", d); }); };
        render();
        if (matchMedia("(pointer: fine)").matches) {
          var qx = G.quickTo(st, "x", { duration: .8, ease: "power3.out", onUpdate: render }), ql = G.quickTo(st, "lift", { duration: .8, ease: "power3.out", onUpdate: render });
          art.addEventListener("pointermove", function (e) { var r = art.getBoundingClientRect(); qx((e.clientX - r.left) / r.width * 800); ql(1.6 - (e.clientY - r.top) / r.height * .8); });
          art.addEventListener("pointerleave", function () { qx(560); ql(1); });
        }
      }
    });
    var STEP = 4, SHOW = 2.85, mm = G.matchMedia();
    mm.add("(min-width: 1024px) and (min-height: 600px)", function () {
      ws.classList.add("is-pinned");
      var n = items.length, num = $("[data-ws-n]", ws), stages = $$("[data-ws-stage]", ws), dots = $$("[data-ws-dot]", ws);
      var parts = items.map(function (i) { return [$(".ws__text", i), $(".ws__art", i)]; });
      var scroll = parseFloat(getComputedStyle(root).scrollPaddingTop) || 88;
      var tl = G.timeline({ defaults: { ease: "none" } });
      items.forEach(function (it, i) {
        var s = stageTl(it); s.paused(false); tl.add(s, i * STEP);
        if (i > 0) {
          var a = parts[i - 1], b = parts[i], t = i * STEP - .8;
          tl.fromTo(a[0], { opacity: 1, y: 0 }, { opacity: 0, y: -24, duration: .6, ease: "power2.in", immediateRender: false }, t)
            .fromTo(a[1], { opacity: 1, scale: 1 }, { opacity: 0, scale: .97, duration: .7, ease: "power2.inOut", immediateRender: false }, t)
            .fromTo(b[0], { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: .8, ease: "power3.out" }, t + .45)
            .fromTo(b[1], { opacity: 0, scale: 1.03 }, { opacity: 1, scale: 1, duration: .9, ease: "power2.out" }, t + .35);
        }
      });
      tl.set({}, {}, (n - 1) * STEP + 3.6);
      var total = tl.duration(), cur = -1, curStage = -1;
      var upd = function (time) {
        var i = Math.min(n - 1, Math.max(0, Math.floor((time + .3) / STEP))), local = G.utils.clamp(0, 3, time - i * STEP);
        if (i !== cur) {
          items.forEach(function (it, j) { it.toggleAttribute("data-current", j === i); });
          dots.forEach(function (d, j) { d.toggleAttribute("data-on", j <= i); });
          if (num && cur >= 0) { var dir = i > cur ? 1 : -1, nn = i; G.timeline().to(num, { yPercent: -40 * dir, opacity: 0, duration: .2, ease: "power2.in", overwrite: true }).add(function () { num.textContent = String(nn + 1).padStart(2, "0"); }).fromTo(num, { yPercent: 40 * dir, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .45, ease: "power3.out" }); }
          cur = i;
        }
        var k = Math.min(2, Math.floor(local));
        stages.forEach(function (s, j) { s.style.setProperty("--p", String(G.utils.clamp(0, 1, local - j))); });
        if (k !== curStage) { stages.forEach(function (s, j) { s.toggleAttribute("data-on", j === k); }); curStage = k; }
        items.forEach(function (it, j) { setCursor(j, j === i && local >= SHOW); });
      };
      var trig = ST.create({ trigger: ws, start: "top top+=" + scroll, end: function () { return "+=" + innerHeight * 1.6 * n; }, pin: true, scrub: true, animation: tl, onUpdate: function (s) { upd(s.progress * total); } });
      upd(0);
      var focus = function (e) { var j = items.findIndex(function (it) { return it.contains(e.target); }); if (j < 0 || j === cur) return; var y = trig.start + (j * STEP + 3) / total * (trig.end - trig.start); if (lenis) lenis.scrollTo(y, { immediate: true }); else scrollTo(0, y); };
      ws.addEventListener("focusin", focus);
      return function () { ws.removeEventListener("focusin", focus); ws.classList.remove("is-pinned"); items.forEach(function (it, j) { it.removeAttribute("data-current"); setCursor(j, false); }); };
    });
    mm.add("(max-width: 1023.98px), (max-height: 599.98px)", function () {
      items.forEach(function (it, j) { ST.create({ trigger: arts[j] || it, start: "top 85%", end: "bottom 30%", scrub: true, animation: stageTl(it), onUpdate: function (s) { setCursor(j, s.progress > .95); } }); });
    });
    ST.sort(); ST.refresh();
  }

  /* ---------- hero relief: WebGL contour map, the pointer raises a hill ---------- */
  function heroGL(hero) {
    var cv = doc.createElement("canvas"); cv.className = "hero-gl"; cv.setAttribute("aria-hidden", "true");
    var gl = cv.getContext("webgl2", { premultipliedAlpha: true, antialias: false, alpha: true }); if (!gl) return;
    hero.insertBefore(cv, hero.firstChild);
    var sh = function (type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
    var pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, "#version 300 es\nin vec2 p;void main(){gl_Position=vec4(p,0.,1.);}"));
    gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, [
      "#version 300 es", "precision highp float;",
      "uniform vec2 uRes;uniform float uTime;uniform vec2 uMouse;uniform float uLift;uniform vec3 uInk;uniform vec3 uAcc;out vec4 o;",
      "float h(vec2 p){return fract(sin(dot(p,vec2(41.3,289.1)))*45758.31);}",
      "float n(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),u.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),u.x),u.y);}",
      "float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+7.9;a*=.5;}return v;}",
      "float iso(float k,float w){float f=abs(fract(k+.5)-.5);return 1.-smoothstep(0.,fwidth(k)*w,f);}",
      "void main(){vec2 uv=gl_FragCoord.xy/uRes.y,m=uMouse/uRes.y;float d=distance(uv,m);float b=exp(-d*d*5.)*uLift;",
      "float e=fbm(uv*1.35+vec2(uTime*.018,uTime*.011))+b*.55;float k=e*18.;float mi=iso(k,1.2),ma=iso(k/5.,2.);float band=step(.5,fract(k/2.));",
      "float vg=(smoothstep(.25,.85,gl_FragCoord.x/uRes.x)*.85+.15)*smoothstep(0.,.3,gl_FragCoord.y/uRes.y);",
      "float a=(mi*.34+ma*.62+b*mi*.5+band*b*.1)*vg;vec3 c=mix(uInk,uAcc,clamp(b*1.8,0.,1.));o=vec4(c*a,a);}"
    ].join("\n")));
    gl.linkProgram(pr); if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.remove(); return; }
    gl.useProgram(pr);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var U = function (k) { return gl.getUniformLocation(pr, k); }, uRes = U("uRes"), uTime = U("uTime"), uMouse = U("uMouse"), uLift = U("uLift"), uInk = U("uInk"), uAcc = U("uAcc");
    var rgb = function (v) { var s = doc.createElement("span"); s.style.color = v; doc.body.appendChild(s); var c = getComputedStyle(s).color.match(/\d+(\.\d+)?/g).map(Number); s.remove(); return [c[0] / 255, c[1] / 255, c[2] / 255]; };
    var colors = function () { var cs = getComputedStyle(root); gl.uniform3fv(uInk, rgb(cs.getPropertyValue("--ink").trim())); gl.uniform3fv(uAcc, rgb(cs.getPropertyValue("--accent").trim())); };
    colors(); new MutationObserver(function () { colors(); kick(); }).observe(root, { attributes: true, attributeFilter: ["data-theme", "data-accent"] });
    var dpr = Math.min(devicePixelRatio || 1, 1.5);
    var size = function () { var r = hero.getBoundingClientRect(); cv.width = Math.round(r.width * dpr); cv.height = Math.round(r.height * dpr); gl.viewport(0, 0, cv.width, cv.height); gl.uniform2f(uRes, cv.width, cv.height); };
    size(); new ResizeObserver(function () { size(); kick(); }).observe(hero);
    var M = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4, lift: 0, target: 0 }, raf = 0, last = performance.now(), awake = last + 4000, time = 0, vis = true;
    hero.addEventListener("pointermove", function (e) { var r = cv.getBoundingClientRect(); M.tx = (e.clientX - r.left) * dpr; M.ty = (r.bottom - e.clientY) * dpr; if (M.x < -1000) { M.x = M.tx; M.y = M.ty; } M.target = 1; awake = Math.max(awake, performance.now() + 1500); kick(); }, { passive: true });
    hero.addEventListener("pointerleave", function () { M.target = 0; kick(); });
    new IntersectionObserver(function (es) { vis = es[0].isIntersecting; if (vis) kick(); }).observe(hero);
    function frame(now) {
      raf = 0; if (!vis || doc.hidden) return;
      var dt = Math.min(now - last, 50) / 1000; last = now;
      var f = Math.pow(Math.min(1, Math.max(0, (awake + 1000 - now) / 1000)), 2);
      time += dt * f; M.x += (M.tx - M.x) * .08; M.y += (M.ty - M.y) * .08; M.lift += (M.target - M.lift) * .04;
      gl.uniform1f(uTime, time); gl.uniform2f(uMouse, M.x, M.y); gl.uniform1f(uLift, M.lift); gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!(f === 0 && Math.abs(M.target - M.lift) < .002 && Math.abs(M.tx - M.x) < .5 && Math.abs(M.ty - M.y) < .5)) kick();
    }
    function kick() { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }
    doc.addEventListener("visibilitychange", kick); kick();
    requestAnimationFrame(function () { cv.classList.add("is-on"); hero.classList.add("has-terrain"); });
  }

  /* ---------- boot ---------- */
  var delay = root.dataset.preloaded ? .1 : 1.45;
  (doc.fonts && doc.fonts.ready ? doc.fonts.ready : Promise.resolve()).then(function () {
    var intro = heroIntro(delay);
    root.classList.add("motion-ready");
    idle(function () { reveals(); workStage(); ST.refresh(); });
    var hero = $("[data-hero]");
    if (hero && matchMedia("(pointer: fine) and (min-width: 900px)").matches) {
      var start = function () { idle(function () { heroGL(hero); }); };
      intro.eventCallback("onComplete", start);
    }
  });

  /* ---------- Formgong form: success only when the server answers success: true ---------- */
  function formInit() {
    $$("form.fg").forEach(function (form) {
      var send = $("button[type=submit]", form), label = $("[data-label]", form), status = $("[data-status]", form), text = label ? label.textContent : "";
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        send.disabled = true; if (label) label.textContent = "Sending…"; status.textContent = ""; status.classList.remove("err");
        var first = ((form.elements.namedItem("name") || {}).value || "").trim().split(/\s+/)[0];
        fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) })
          .then(function (r) { return r.json().catch(function () { return null; }); })
          .then(function (res) {
            if (res && res.success === true) { var nm = $("[data-name]", form); if (nm) nm.textContent = first || "there"; form.reset(); form.classList.add("is-sent"); var s = $(".fg-sent", form); if (s) s.focus(); }
            else { status.textContent = (res && res.message) || "Could not send. Please try again."; status.classList.add("err"); }
          })
          .catch(function () { status.textContent = "Could not send. Check your connection and try again."; status.classList.add("err"); })
          .finally(function () { send.disabled = false; if (label) label.textContent = text; });
      });
      var again = $("[data-again]", form);
      if (again) again.addEventListener("click", function () { form.classList.remove("is-sent"); form.elements.namedItem("name").focus(); });
    });
  }
})();
