/* Marrow for Shopify: the template's script (formgong-hq/marrow-template, index.html) with the same motion maths,
   class names with the mw- prefix (state classes on <html>: mwr-), every part guarded so a section can be removed
   or moved, recipes and treats as Shopify products (quick add + cart drawer) instead of the order-request form.
   Forms: thanks only when Formgong answers success: true. */
(function () {
  "use strict";
  var root = document.documentElement, body = document.body;
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var desk = matchMedia("(min-width: 981px)");
  var S = window.MarrowStrings || {};
  var R = (window.Scamper && window.Scamper.routes) || { root: "/", cart: "/cart" };
  var base = (R.root || "/").replace(/\/?$/, "/");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var fill = function (t, map) { return String(t || "").replace(/\[(\w+)\]|\{\{\s*(\w+)\s*\}\}/g, function (m, a, b) { var k = a || b; return k in map ? map[k] : m; }); };
  $$("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });

  // ---------- Image boxes: drop the placeholder colour once the picture is there, hide broken icons ----------
  function watchImg(img) {
    var box = img.parentNode;
    function done() { box.classList.toggle("mw-ok", img.naturalWidth > 0); box.classList.toggle("mw-miss", !img.naturalWidth); }
    if (img.complete && img.getAttribute("src")) done();
    img.addEventListener("load", done);
    img.addEventListener("error", done);
  }
  $$(".mw-ph img").forEach(watchImg);

  // ---------- Hero media: the dog photo; the cat photo loads on the first switch ----------
  var media = $("[data-hero-media]"), dogImg = $('[data-hero-media] [data-still="dog"]'), catImg = $('[data-hero-media] [data-still="cat"]');
  var isImg = function (el) { return el && el.tagName === "IMG"; };
  var loaded = { dog: isImg(dogImg) ? dogImg.complete && dogImg.naturalWidth > 0 : true, cat: !isImg(catImg) };
  if (media) {
    media.classList.add("mw-still-dog");
    if (isImg(dogImg)) dogImg.addEventListener("load", function () { loaded.dog = true; syncMedia(); });
    if (isImg(catImg)) catImg.addEventListener("load", function () { loaded.cat = true; syncMedia(); });
    syncMedia();
  }
  function syncMedia() { if (media) media.classList.toggle("mw-ok", pet === "cat" ? loaded.cat : loaded.dog); }

  // ---------- Pet switch (hero, recipes, footer): one state for the whole page ----------
  var pet = "dog", swapTimer = null, planOpen = false;
  function setPet(p) {
    if (p !== "dog" && p !== "cat") return;
    var changed = p !== pet;
    pet = p;
    root.classList.toggle("mwr-pet-cat", p === "cat");
    $$("[data-pet]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.pet === p)); });
    $$("[data-pet-text], [data-pet-word]").forEach(function (n) { n.textContent = n.getAttribute("data-" + p) || n.textContent; });
    $$("[data-pet-field]").forEach(function (f) { f.value = p; });
    if (planOpen) calc();
    if (!changed || !media) return;
    media.setAttribute("aria-label", media.getAttribute("data-" + p + "-alt") || "");
    if (p === "cat" && isImg(catImg) && !catImg.getAttribute("src")) catImg.src = catImg.dataset.src;
    clearTimeout(swapTimer);
    media.classList.add("mw-fade");
    swapTimer = setTimeout(function () {
      media.classList.toggle("mw-still-cat", p === "cat");
      media.classList.toggle("mw-still-dog", p !== "cat");
      syncMedia();
      media.classList.remove("mw-fade");
    }, still ? 0 : 400);
  }
  $$("[data-pet]").forEach(function (b) { b.addEventListener("click", function () { setPet(b.dataset.pet); }); });
  $$("[data-set-pet]").forEach(function (a) { a.addEventListener("click", function () { setPet(a.dataset.setPet); }); });

  // ---------- Giant wordmark: 89 % of the hero card ----------
  var card = $(".mw-hero-card"), word = $(".mw-hero-word"), wordSpan = $(".mw-hero-word span");
  function fitWord() {
    if (!word || !wordSpan) return;
    word.style.fontSize = "100px";
    var w = wordSpan.offsetWidth;
    if (w) word.style.fontSize = (100 * card.clientWidth * 0.89 / w).toFixed(2) + "px";
  }
  fitWord();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitWord(); request(); });

  // ---------- Menu ----------
  var menuBtn = $("[data-menu]"), menu = $("#mw-menu");
  function setMenu(open) {
    root.classList.toggle("mwr-menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? (S.closeMenu || "Close menu") : (S.menu || "Menu"));
    var first = $("a", menu);
    if (open && first) setTimeout(function () { first.focus({ preventScroll: true }); }, 50);
  }
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () { setMenu(!root.classList.contains("mwr-menu-open")); });
    $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("mwr-menu-open")) { setMenu(false); menuBtn.focus(); }
    });
  }

  // ---------- Scroll motion: one rAF loop, smoothed values settle and then the loop stops ----------
  var heroPin = $("[data-hero-pin]"), next = heroPin ? $("[data-next]") : null, food = $("[data-food]"), cta = $("[data-parallax]"), fadeBg = $("[data-fade-bg]");
  if (!card) { root.classList.add("mwr-solid", "mwr-inner"); }
  var floats = $$("[data-float]").map(function (el) {
    return { el: el, box: el.parentNode, sy: parseFloat(el.dataset.speedY) || .15, sx: parseFloat(el.dataset.speedX) || .03, rot: (Math.random() > .5 ? 1 : -1) * 2, cur: 0, tgt: 0 };
  });
  var waves = $$(".mw-wave canvas").map(function (c) {
    return { c: c, ctx: c.getContext("2d"), color: c.dataset.color || "#eef2fb", w: 0, h: 0, cur: -1, tgt: 0, vis: false, drawn: -1 };
  });
  var nextS = { cur: 0, tgt: 0 }, mScale = { cur: 1, tgt: 1 };
  var solid = root.classList.contains("mwr-solid"), ticking = false, lastT = 0;
  function mix(a, b, t) {
    var r = a.map(function (v, i) { return Math.round(v + (b[i] - v) * t); });
    return "rgb(" + r.join(",") + ")";
  }
  function rgb(v, fb) {
    var m = String(v || "").trim().match(/^#?([0-9a-f]{6})$/i);
    if (!m) { m = String(v || "").match(/\d+/g); return m && m.length >= 3 ? m.slice(0, 3).map(Number) : fb; }
    var n = parseInt(m[1], 16); return [n >> 16 & 255, n >> 8 & 255, n & 255];
  }
  var cs = getComputedStyle(root);
  var WHITE = [255, 255, 255], MIST = rgb(cs.getPropertyValue("--mist"), [238, 242, 251]), CREAM = rgb(cs.getPropertyValue("--cream"), [255, 243, 227]);
  function setSolid(on) { if (on !== solid) { solid = on; root.classList.toggle("mwr-solid", on); } }
  function ease(n) { return function (t) { return 1 - Math.pow(1 - t, n); }; }
  var out3 = ease(3), out4 = ease(4);
  function approach(o, dt, tau) {
    var d = o.tgt - o.cur;
    if (Math.abs(d) < 1e-4) { o.cur = o.tgt; return false; }
    o.cur += d * (1 - Math.exp(-dt / tau));
    return true;
  }
  function sizeWave(wv) {
    var dpr = Math.min(window.devicePixelRatio || 1, 2), w = wv.c.offsetWidth, h = wv.c.offsetHeight;
    if (w === wv.w && h === wv.h) return;
    wv.w = w; wv.h = h; wv.c.width = Math.round(w * dpr); wv.c.height = Math.round(h * dpr);
    wv.ctx.setTransform(dpr, 0, 0, dpr, 0, 0); wv.drawn = -1;
  }
  function drawWave(wv) {
    // the colour above hangs down and turns into a U as you scroll
    var w = wv.w, h = wv.h, y = wv.cur, k = .7, x = wv.ctx;
    if (Math.abs(wv.drawn - y) < 1e-4) return;
    wv.drawn = y;
    x.clearRect(0, 0, w, h);
    x.beginPath();
    x.moveTo(0, 0);
    x.lineTo(0, y * h);
    x.bezierCurveTo(.25 * w, (1 - y) * h * k, .75 * w, (1 - y) * h * k, w, y * h);
    x.lineTo(w, 0);
    x.closePath();
    x.fillStyle = wv.color;
    x.fill();
  }
  function frame(t) {
    ticking = false;
    var dt = lastT ? Math.min(64, t - lastT) : 16; lastT = t;
    var sy = window.scrollY, vh = window.innerHeight, vw = window.innerWidth, moving = false, r, p;
    if (card) {
      body.style.backgroundColor = mix(WHITE, MIST, clamp(sy / 400));
      if (desk.matches) {
        p = clamp(sy / 700);
        if (!still) {
          word.style.transform = "translateY(" + (50 * p).toFixed(2) + "px) scale(" + (1 - .5 * p).toFixed(4) + ")";
          word.style.opacity = String(Math.max(0, 1 - 2 * p));
          if (p >= .5) { card.style.transform = "scale(" + (1 - .5 * (p - .5)).toFixed(4) + ")"; card.style.opacity = String(1 - .2 * (p - .5)); }
          else { card.style.transform = ""; card.style.opacity = ""; }
          if (next) {
            nextS.tgt = p;
            if (nextS.cur < 0) nextS.cur = p;
            if (approach(nextS, dt, 900)) moving = true;
            var e = out3(nextS.cur);
            next.style.transform = "scale(" + (.8 + .2 * e).toFixed(4) + ")";
            next.style.opacity = String(.9 + .1 * e);
            next.style.paddingTop = (400 - 20 * e).toFixed(1) + "px";
          }
        }
        setSolid(p >= .5);
      } else {
        if (!still) {
          mScale.tgt = 1 - .1 * Math.min(sy / 250, 1);
          if (approach(mScale, dt, 250)) moving = true;
          card.style.transform = "scale(" + mScale.cur.toFixed(4) + ")";
        }
        if (sy > 20) setSolid(true); else if (sy <= 10) setSolid(false);
      }
    }

    waves.forEach(function (wv) {
      sizeWave(wv);
      r = wv.c.getBoundingClientRect();
      // start "-10% 100%", end "-30% 0%", progress mapped to 0..0.7
      wv.tgt = still ? .7 : .7 * clamp((vh + .1 * wv.h - r.top) / (vh - .2 * wv.h));
      if (wv.cur < 0) wv.cur = wv.tgt;
      if (approach(wv, dt, 120) && wv.vis) moving = true;
      if (wv.vis || wv.drawn < 0) drawWave(wv);
    });

    if (!still) {
      if (food) {
        r = food.parentNode.getBoundingClientRect();
        p = out3(clamp((vh - (r.top + .1 * r.height)) / (.6 * r.height)));
        food.style.transform = "scale(" + (.9 + .1 * p).toFixed(4) + ")";
        food.style.opacity = String(.7 + .3 * p);
      }
      floats.forEach(function (f) {
        r = f.box.getBoundingClientRect();
        f.tgt = out4(clamp((vh - r.top) / (vh + r.height)));
        if (approach(f, dt, 450)) moving = true;
        f.el.style.transform = "translate(" + (vw * f.sx * f.cur).toFixed(1) + "px," + (-vh * f.sy * f.cur).toFixed(1) + "px) rotate(" + (f.rot * f.cur).toFixed(2) + "deg)";
      });
      if (cta) {
        r = cta.getBoundingClientRect();
        cta.style.backgroundPosition = "50% " + (50 * clamp((vh - r.top) / (vh + r.height))).toFixed(2) + "%";
      }
    }

    if (fadeBg) {
      r = fadeBg.getBoundingClientRect();
      var top0 = vh / 2 - .2 * r.height, top1 = .8 * vh - r.height;
      p = top0 > top1 ? clamp((top0 - r.top) / (top0 - top1)) : (r.top < top0 ? 1 : 0);
      fadeBg.style.backgroundColor = mix(CREAM, WHITE, p);
    }

    if (moving) request(); else lastT = 0;
  }
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  function resetMotion() {
    [word, card, next].forEach(function (el) { if (el) { el.style.transform = ""; el.style.opacity = ""; } });
    if (next) next.style.paddingTop = "";
    nextS.cur = -1; mScale.cur = 1;
  }
  window.addEventListener("scroll", request, { passive: true });
  window.addEventListener("resize", function () { fitWord(); request(); });
  (desk.addEventListener ? desk.addEventListener.bind(desk, "change") : desk.addListener.bind(desk))(function () { resetMotion(); request(); });
  nextS.cur = -1;
  if ("IntersectionObserver" in window) {
    var waveIo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { waves.forEach(function (wv) { if (wv.c === e.target) wv.vis = e.isIntersecting; }); });
      request();
    }, { threshold: .05 });
    waves.forEach(function (wv) { waveIo.observe(wv.c); });
  } else waves.forEach(function (wv) { wv.vis = true; });
  request();

  // ---------- Reveals and drawn strokes (toggle both ways, like the reference) ----------
  var tp = $("[data-ribbon-text]"), ribbon = $("[data-ribbon]");
  if (!still && "IntersectionObserver" in window) {
    $$(".mw-grid, .mw-car-track").forEach(function (g) { $$(".mw-rv", g).forEach(function (el, i) { el.style.transitionDelay = (i * 100) + "ms"; }); });
    var rvIo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle("mw-in", e.isIntersecting); });
    }, { threshold: .2 });
    $$(".mw-rv").forEach(function (el) { rvIo.observe(el); });

    $$("[data-blurbs]").forEach(function (blurbs) {
      new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          $$(".mw-blurb", blurbs).forEach(function (b, i) { b.style.transitionDelay = e.isIntersecting ? (260 * i) + "ms" : "0ms"; });
          blurbs.classList.toggle("mw-in", e.isIntersecting);
        });
      }, { threshold: .2 }).observe(blurbs);
    });

    var dpIo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle("mw-drawn", e.isIntersecting); });
    }, { threshold: .2 });
    $$("svg.mw-dp").forEach(function (s) { dpIo.observe(s); });

    // Running ribbon text, only while it is on screen.
    if (tp && ribbon) {
      var off = -50, ribOn = false, ribRaf = null, ribT = null;
      var ribStep = function (t) {
        if (!ribOn || document.hidden) { ribRaf = null; ribT = null; return; }
        if (ribT === null) ribT = t;
        off += (t - ribT) * .003; ribT = t;
        if (off > 100) off = -50;
        tp.setAttribute("startOffset", off.toFixed(3) + "%");
        ribRaf = requestAnimationFrame(ribStep);
      };
      var ribStart = function () { if (ribRaf === null && ribOn && !document.hidden) ribRaf = requestAnimationFrame(ribStep); };
      new IntersectionObserver(function (es) { es.forEach(function (e) { ribOn = e.isIntersecting; if (ribOn) ribStart(); }); }, { threshold: .1 }).observe(ribbon);
      document.addEventListener("visibilitychange", ribStart);
    }
  } else if (tp) {
    tp.setAttribute("startOffset", "0%");
  }

  // ---------- Treats carousel: next button, pointer drag, the card leaving on the left fades ----------
  var car = $("[data-car]"), track = $("[data-track]"), items = track ? $$(".mw-card", track) : [], idx = 0;
  if (car && track && items.length) {
    var carStep = function () { var g = parseFloat(getComputedStyle(track).columnGap) || 0; return items[0].getBoundingClientRect().width + g; };
    var carVis = function () { return parseFloat(getComputedStyle(car).getPropertyValue("--vis")) || 3.5; };
    var carMax = function () { return Math.max(0, Math.ceil(items.length - carVis())); };
    var carUpdate = function (drag) {
      idx = Math.min(idx, carMax());
      track.style.transform = "translateX(" + (-idx * carStep() + (drag || 0)).toFixed(1) + "px)";
      items.forEach(function (it, i) { it.classList.toggle("mw-gone", i < idx); });
    };
    var nextBtn = $("[data-car-next]", car);
    if (nextBtn) nextBtn.addEventListener("click", function () { idx = idx >= carMax() ? 0 : idx + 1; carUpdate(); });
    track.addEventListener("focusin", function (e) {
      var i = items.indexOf(e.target.closest(".mw-card"));
      if (i < 0) return;
      if (i < idx || i > idx + Math.floor(carVis()) - 1) { idx = Math.min(i, carMax()); carUpdate(); }
    });
    var coarse = matchMedia("(pointer: coarse)").matches || !desk.matches;
    var TH = coarse ? 40 : 20, INTENT = coarse ? 16 : 10, ANGLE = coarse ? 2 : 1.5;
    var dTrack = false, dDrag = false, sx0 = 0, sy0 = 0, dx = 0, dMoved = false;
    track.addEventListener("pointerdown", function (e) {
      if (e.button !== 0) return;
      dTrack = true; dDrag = false; dMoved = false; sx0 = e.clientX; sy0 = e.clientY; dx = 0;
    });
    window.addEventListener("pointermove", function (e) {
      if (!dTrack) return;
      var mx = e.clientX - sx0, my = e.clientY - sy0;
      if (!dDrag) {
        if (Math.abs(mx) < INTENT && Math.abs(my) < INTENT) return;
        if (Math.abs(mx) >= Math.abs(my) * ANGLE) { dDrag = true; track.classList.add("mw-dragging"); }
        else { dTrack = false; return; }
      }
      if (Math.abs(mx) > 5) dMoved = true;
      dx = mx; carUpdate(dx);
    });
    var dEnd = function () {
      if (dDrag) {
        dDrag = false; track.classList.remove("mw-dragging");
        if (Math.abs(dx) > TH) { var m = carMax(); idx = dx < 0 ? (idx < m ? idx + 1 : 0) : (idx > 0 ? idx - 1 : m); }
        carUpdate();
      }
      dTrack = false; dx = 0;
      if (dMoved) setTimeout(function () { dMoved = false; }, 200);
    };
    window.addEventListener("pointerup", dEnd);
    window.addEventListener("pointercancel", dEnd);
    track.addEventListener("click", function (e) { if (dMoved) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
    track.addEventListener("dragstart", function (e) { e.preventDefault(); });
    window.addEventListener("resize", function () { carUpdate(); });
    carUpdate();

    // Cursor follower with "drag" over the carousel (desktop mouse only).
    if (!still && desk.matches && !("ontouchstart" in window) && matchMedia("(hover: hover) and (pointer: fine)").matches) {
      var cur = document.createElement("div"), dot = document.createElement("b");
      cur.className = "mw-cursor"; cur.setAttribute("aria-hidden", "true"); dot.textContent = car.getAttribute("data-drag") || "drag"; cur.appendChild(dot); body.appendChild(cur);
      root.classList.add("mwr-has-cursor");
      var tx = -200, ty = -200, cx = -200, cy = -200, cRaf = null;
      var cStep = function () {
        cx += (tx - cx) / 6; cy += (ty - cy) / 6;
        cur.style.transform = "translate(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px)";
        cRaf = (Math.abs(tx - cx) > .1 || Math.abs(ty - cy) > .1) ? requestAnimationFrame(cStep) : null;
      };
      document.addEventListener("mousemove", function (e) {
        tx = e.clientX; ty = e.clientY;
        if (cx < -100) { cx = tx; cy = ty; }
        var over = e.target.closest && e.target.closest("[data-track]") && !e.target.closest("button, a");
        cur.classList.toggle("mw-on", !!over);
        if (cRaf === null) cRaf = requestAnimationFrame(cStep);
      }, { passive: true });
      document.addEventListener("mouseleave", function () { cur.classList.remove("mw-on"); });
    }
  }

  // ---------- Reviews slider ----------
  var rvTrack = $("[data-rv-track]");
  if (rvTrack) {
    var rvStep = function () { var c = $(".mw-rcard", rvTrack); return c ? c.getBoundingClientRect().width + 24 : 300; };
    var rvNext = $("[data-rv-next]"), rvPrev = $("[data-rv-prev]");
    if (rvNext) rvNext.addEventListener("click", function () {
      if (rvTrack.scrollLeft + rvTrack.clientWidth >= rvTrack.scrollWidth - 4) rvTrack.scrollTo({ left: 0 });
      else rvTrack.scrollBy({ left: rvStep() });
    });
    if (rvPrev) rvPrev.addEventListener("click", function () {
      if (rvTrack.scrollLeft <= 4) rvTrack.scrollTo({ left: rvTrack.scrollWidth });
      else rvTrack.scrollBy({ left: -rvStep() });
    });
  }

  // Approved reviews from Formgong replace the cards (same contract as the template: the key of the review form).
  var keyEl = $("[data-reviews-key]"), key = keyEl ? keyEl.value : "";
  if (rvTrack && /^fk_[A-Za-z0-9_]+$/.test(key) && key.indexOf("your_access") === -1 && window.fetch) {
    fetch("https://formgong.com/reviews/" + key + ".json")
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data || !(data.count > 0) || !data.reviews || !data.reviews.length) return;
        rvTrack.textContent = "";
        data.reviews.forEach(function (rv) {
          var n = Math.max(0, Math.min(5, Math.round(+rv.rating || 0)));
          var li = document.createElement("li"); li.className = "mw-rcard";
          var st = document.createElement("div"); st.className = "mw-stars"; st.setAttribute("aria-label", fill(S.stars || "[count] out of 5 stars", { count: n }));
          for (var i = 0; i < 5; i++) st.insertAdjacentHTML("beforeend", '<svg aria-hidden="true"' + (i >= n ? ' style="opacity:.25"' : "") + '><use href="#mw-i-star"/></svg>');
          var p = document.createElement("p"); p.textContent = rv.body || ""; p.setAttribute("dir", "auto");
          var who = document.createElement("div"); who.className = "mw-who";
          var av = document.createElement("span"); av.className = "mw-av"; av.setAttribute("aria-hidden", "true");
          var name = (rv.author || S.customer || "A customer").trim();
          av.textContent = name.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
          var d = document.createElement("div"), b = document.createElement("b"), s = document.createElement("span");
          b.textContent = name; s.textContent = ago(rv.date);
          d.appendChild(b); d.appendChild(s); who.appendChild(av); who.appendChild(d);
          li.appendChild(st); li.appendChild(p); li.appendChild(who); rvTrack.appendChild(li);
        });
        var avg = (+data.average || 0).toFixed(1).replace(/\.0$/, "");
        var label = $("[data-rv-label]");
        if (label) label.textContent = fill(S.reviewsLabel || "Reviews · [average] out of 5 from [count]", { average: avg, count: data.count });
      })
      .catch(function () {});
  }
  function ago(v) {
    var t = Date.parse(v); if (!t) return v ? String(v) : "";
    var days = Math.max(0, Math.round((Date.now() - t) / 864e5));
    var A = S.ago || {};
    if (days < 1) return A.today || "today";
    if (days < 14) return fill(days === 1 ? (A.day || "[n] day ago") : (A.days || "[n] days ago"), { n: days });
    if (days < 60) return fill(A.weeks || "[n] weeks ago", { n: Math.round(days / 7) });
    if (days < 365) return fill(A.months || "[n] months ago", { n: Math.round(days / 30) });
    var y = Math.round(days / 365); return fill(y === 1 ? (A.year || "[n] year ago") : (A.years || "[n] years ago"), { n: y });
  }

  // Banner photo: load it when the section is about a screen away.
  if (cta) {
    if ("IntersectionObserver" in window) {
      var ctaIo = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { cta.classList.add("mw-near"); ctaIo.disconnect(); } }, { rootMargin: "100% 0px" });
      ctaIo.observe(cta);
    } else cta.classList.add("mw-near");
  }

  // ---------- FAQ accordion: one open at a time; /#faq-<anchor> opens that answer ----------
  var accItems = $$(".mw-acc-item");
  function setAcc(item, open) {
    item.classList.toggle("mw-open", open);
    $(".mw-acc-btn", item).setAttribute("aria-expanded", String(open));
  }
  function openAccFor(id) {
    var panel = id && document.getElementById(id), item = panel && panel.closest(".mw-acc-item");
    if (!item) return false;
    accItems.forEach(function (o) { setAcc(o, false); }); setAcc(item, true); return true;
  }
  accItems.forEach(function (item, i) {
    setAcc(item, i === 0);
    $(".mw-acc-btn", item).addEventListener("click", function () {
      var open = !item.classList.contains("mw-open");
      accItems.forEach(function (o) { setAcc(o, false); });
      setAcc(item, open);
    });
  });
  if (location.hash) openAccFor(decodeURIComponent(location.hash.slice(1)));
  $$('a[href*="#faq-"]').forEach(function (a) { a.addEventListener("click", function () { openAccFor(a.hash.slice(1)); }); });

  // ---------- Dialogs ----------
  function show(d) { if (d && !d.open) d.showModal(); }
  function wireDialog(d) {
    $$("[data-close]", d).forEach(function (b) { b.addEventListener("click", function () { d.close(); }); });
    d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
  }
  $$("dialog.mw-dialog").forEach(wireDialog);
  var dReview = $("#d-review"), dWrite = $("#d-write");
  var fReview = $("#f-review"), fWrite = $("#f-write"), fPlan = $("#f-plan");
  function openWrite(topic) {
    if (!dWrite) return;
    fWrite.classList.remove("mw-is-sent");
    var radios = $$('input[name="topic"]', fWrite);
    radios.forEach(function (r) { r.checked = r.value === topic; });
    if (radios.length && !$('input[name="topic"]:checked', fWrite)) radios[0].checked = true;
    show(dWrite);
  }
  $$("[data-write]").forEach(function (b) { b.addEventListener("click", function () { openWrite(b.dataset.write); }); });
  $$("[data-review-open]").forEach(function (b) { b.addEventListener("click", function () { if (fReview) fReview.classList.remove("mw-is-sent"); show(dReview); }); });

  // ---------- Cart: drawer, quick add, "Order now" ----------
  var cartD = $("#mw-cart"), quickD = $("#mw-quick"), count = +(($("[data-bag-count]") || {}).textContent || 0);
  function setCount(n) { count = n; $$("[data-bag-count]").forEach(function (el) { el.textContent = n; el.hidden = !n; }); }
  function refreshCart() {
    return fetch(base + "?section_id=mw-cart").then(function (r) { return r.text(); }).then(function (html) {
      var doc = new DOMParser().parseFromString(html, "text/html"), fresh = $("[data-cart-body]", doc), old = $("[data-cart-body]", cartD);
      if (fresh && old) { old.innerHTML = fresh.innerHTML; $$("[data-close]", old).forEach(function (b) { b.addEventListener("click", function () { cartD.close(); }); }); $$(".mw-ph img", old).forEach(watchImg); }
    });
  }
  function openCart() { if (!cartD) { location.href = R.cart || "/cart"; return; } show(cartD); }
  function cartJson(path, payload) {
    return fetch(base + path, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(payload) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j && (j.description || j.message) || S.cartError || "Error"); return j; }); });
  }
  function afterChange() {
    return fetch(base + "cart.js").then(function (r) { return r.json(); }).then(function (c) { setCount(c.item_count); return refreshCart(); });
  }
  function addToCart(id, qty, statusEl, button) {
    if (button) button.disabled = true;
    if (statusEl) { statusEl.textContent = ""; statusEl.classList.remove("mw-err"); }
    return cartJson("cart/add.js", { items: [{ id: +id, quantity: qty || 1 }] })
      .then(afterChange)
      .then(function () { if (quickD && quickD.open) quickD.close(); openCart(); })
      .catch(function (err) { if (statusEl) { statusEl.textContent = err.message; statusEl.classList.add("mw-err"); } else alert(err.message); })
      .then(function () { if (button) button.disabled = false; });
  }
  if (cartD) {
    cartD.addEventListener("click", function (e) {
      var b = e.target.closest("[data-line]");
      if (b) {
        b.disabled = true;
        cartJson("cart/change.js", { line: +b.dataset.line, quantity: +b.dataset.qty }).then(afterChange)
          .catch(function (err) { var st = $("[data-status]", cartD); if (st) { st.textContent = err.message; st.classList.add("mw-err"); } });
      }
      if (e.target.closest("[data-close-link]")) cartD.close();
    });
  }
  $$("[data-cart-open]").forEach(function (a) { a.addEventListener("click", function (e) { if (cartD) { e.preventDefault(); openCart(); } }); });
  $$("[data-order]").forEach(function (a) { a.addEventListener("click", function (e) { if (cartD && count > 0) { e.preventDefault(); openCart(); } }); });

  var qForm = quickD && $("[data-q-form]", quickD), qProduct = null;
  function qPick() {
    var r = qForm && $('input[name="id"]:checked', qForm), v = r && qProduct.variants.filter(function (x) { return String(x.id) === r.value; })[0];
    $("[data-q-price]", quickD).textContent = v ? v.price : "";
  }
  function openQuick(p) {
    qProduct = p;
    $("[data-q-title]", quickD).textContent = p.title;
    $("[data-q-option]", quickD).textContent = p.option || $("[data-q-option]", quickD).textContent;
    $("[data-q-link]", quickD).href = p.url;
    var opts = $("[data-q-opts]", quickD), first = null;
    opts.textContent = "";
    p.variants.forEach(function (v) {
      var l = document.createElement("label"), i = document.createElement("input"), s = document.createElement("span");
      i.type = "radio"; i.name = "id"; i.value = v.id; i.disabled = !v.available; s.textContent = v.title;
      if (v.available && !first) { first = i; }
      l.appendChild(i); l.appendChild(s); opts.appendChild(l);
    });
    if (first) first.checked = true;
    qForm.elements.namedItem("quantity").value = 1;
    var st = $("[data-status]", qForm); st.textContent = ""; st.classList.remove("mw-err");
    qPick();
    show(quickD);
  }
  if (qForm) {
    qForm.addEventListener("change", qPick);
    qForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var r = $('input[name="id"]:checked', qForm);
      if (!r) return;
      addToCart(r.value, Math.max(1, +qForm.elements.namedItem("quantity").value || 1), $("[data-status]", qForm), $('button[type="submit"]', qForm));
    });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-quick]");
    if (!b) return;
    var data = $("script[data-product-json]", b.closest(".mw-card"));
    if (!data) return;
    var p = JSON.parse(data.textContent);
    var avail = p.variants.filter(function (v) { return v.available; });
    if ((p.single || p.variants.length === 1 || !quickD) && avail.length) addToCart(avail[0].id, 1, null, b);
    else if (quickD) openQuick(p);
  });

  // ---------- Meal finder ----------
  var res = $("[data-res]"), resTxt = $("[data-res-txt]"), gramsField = $("[data-grams-field]"), suggestField = $("[data-suggest-field]");
  if (fPlan && res) {
    var ageEl = fPlan.elements.namedItem("age_months"), kgEl = fPlan.elements.namedItem("weight_kg");
    var planEmail = fPlan.elements.namedItem("email"), planSubmit = $('button[type="submit"]', fPlan);
    var planFields = function (on) { if (planEmail) planEmail.disabled = !on; if (planSubmit) planSubmit.disabled = !on; };
    planFields(false);
    var PACKS = [250, 500, 750, 1000];
    var packName = function (g) { return g === 1000 ? "1 kg" : g + " g"; };
    var dailyGrams = function (p, age, kg, activity, neutered) {
      var act = { low: 0, medium: 1, high: 2 }[activity] || 0, r;
      if (p === "cat") r = age < 12 ? .06 : [.03, .035, .04][act];
      else r = age < 6 ? .05 : age < 12 ? .04 : [.02, .025, .03][act];
      if (neutered === "yes") r *= .9;
      return Math.round(kg * 1000 * r / 10) * 10;
    };
    window.__mwCalc = function () {
      var age = parseFloat(ageEl.value), kg = parseFloat(String(kgEl.value).replace(",", "."));
      var g = dailyGrams(pet, age, kg, fPlan.elements.namedItem("activity").value, fPlan.elements.namedItem("neutered").value);
      var recipe = fPlan.getAttribute("data-suggest-" + pet) || "", url = fPlan.getAttribute("data-suggest-" + pet + "-url"), pack = null;
      for (var i = 0; i < PACKS.length; i++) if (PACKS[i] >= g) { pack = PACKS[i]; break; }
      gramsField.value = String(g);
      if (suggestField) suggestField.value = recipe + (pack ? " · " + packName(pack) : " · 1 kg");
      resTxt.textContent = "";
      resTxt.appendChild(document.createTextNode((fPlan.getAttribute("data-about") || "About") + " "));
      var b = document.createElement("b"); b.textContent = g + " g"; resTxt.appendChild(b);
      var text = pack ? fill(fPlan.getAttribute("data-one"), { pack: packName(pack) }) : fill(fPlan.getAttribute("data-many"), { count: Math.ceil(g / 1000) });
      var parts = (" " + text).split("[recipe]");
      resTxt.appendChild(document.createTextNode(parts[0]));
      if (parts.length > 1) {
        var r = document.createElement(url ? "a" : "span"); r.textContent = recipe; if (url) r.href = url;
        resTxt.appendChild(r); resTxt.appendChild(document.createTextNode(parts.slice(1).join(recipe)));
      }
    };
    var see = $("[data-see]", fPlan);
    see.addEventListener("click", function () {
      if (!ageEl.reportValidity() || !kgEl.reportValidity()) return;
      calc();
      planOpen = true; planFields(true);
      res.classList.add("mw-open");
    });
    [ageEl, kgEl].forEach(function (el) {
      el.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); see.click(); } });
    });
    $$("input, select", $(".mw-bar", fPlan)).forEach(function (el) {
      el.addEventListener("change", function () { if (planOpen && ageEl.checkValidity() && kgEl.checkValidity()) calc(); });
    });
  }
  function calc() { if (window.__mwCalc) window.__mwCalc(); }

  // ---------- Forms: thanks only when Formgong answers success: true ----------
  function wire(f, afterSent, afterAgain) {
    if (!f || !f.elements.namedItem("access_key")) return;
    var button = $('button[type="submit"]', f), label = button.textContent, status = $("[data-status]", f);
    $$("[data-name]", f).forEach(function (n) { n.dataset.fallback = n.textContent; });
    function say(text, bad) { status.textContent = text; status.classList.toggle("mw-err", !!bad); }
    f.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!f.checkValidity()) { f.reportValidity(); return; }
      var data = new FormData(f);
      button.disabled = true; button.textContent = S.sending || "Sending…"; say("");
      fetch(f.action, { method: "POST", headers: { Accept: "application/json" }, body: data })
        .then(function (res) { return res.json().catch(function () { return null; }); })
        .then(function (result) {
          if (result && result.success === true) {
            var nm = f.elements.namedItem("name"), first = nm && nm.value ? nm.value.trim().split(/\s+/)[0] : "";
            $$("[data-name]", f).forEach(function (n) { n.textContent = first || n.dataset.fallback; });
            if (afterSent) afterSent(); else f.reset();
            f.classList.add("mw-is-sent");
            $(".mw-thanks", f).focus();
          } else {
            say((result && result.message) || S.formError || "Could not send. Please try again.", true);
          }
        })
        .catch(function () { say(S.formOffline || "Could not send. Check your connection and try again.", true); })
        .then(function () { button.disabled = false; button.textContent = label; });
    });
    $("[data-again]", f).addEventListener("click", function () {
      f.classList.remove("mw-is-sent"); say("");
      if (afterAgain) afterAgain();
      var first = $("input:not([type=hidden]):not([tabindex='-1']), select, textarea", f);
      if (first) first.focus();
    });
  }
  wire(fPlan, function () {
    var mail = $("[data-mail]", fPlan), em = fPlan.elements.namedItem("email");
    if (mail) mail.textContent = em.value || mail.textContent;
    em.value = "";
  });
  wire(fReview);
  wire(fWrite, function () { var t = $('input[name="topic"]:checked', fWrite); var v = t && t.value; fWrite.reset(); if (v) $$('input[name="topic"]', fWrite).forEach(function (r) { r.checked = r.value === v; }); });
})();
