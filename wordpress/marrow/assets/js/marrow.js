/* Marrow: the template's script, adapted for WordPress (see build_marrow.py). */
(function () {
  "use strict";
  var root = document.documentElement, body = document.body;
  var still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var desk = matchMedia("(min-width: 981px)");
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  // WordPress: a missing part (removed in the Site Editor, or not on this page) gets a detached stand-in.
  var spare = document.createElement("div");
  var need = function (el, tag) { if (el) return el; var n = document.createElement(tag || "div"); spare.appendChild(n); return n; };
  $$("[data-year]").forEach(function (n) { n.textContent = new Date().getFullYear(); });

  // ---------- Image boxes: drop the placeholder colour once the picture is there, hide broken icons ----------
  $$(".ph img").forEach(function (img) {
    var box = img.parentNode;
    function done() { box.classList.toggle("ok", img.naturalWidth > 0); box.classList.toggle("miss", !img.naturalWidth); }
    if (img.complete && img.getAttribute("src")) done();
    img.addEventListener("load", done);
    img.addEventListener("error", done);
  });

  // ---------- Hero media: a still photo of the dog; the cat photo loads on the first switch ----------
  var media = need($("[data-hero-media]")), dogImg = need($('[data-still="dog"]'), "img"), catImg = need($('[data-still="cat"]'), "img");
  var loaded = { dog: dogImg.complete && dogImg.naturalWidth > 0, cat: false };
  media.classList.add("still-dog");
  dogImg.addEventListener("load", function () { loaded.dog = true; syncMedia(); });
  catImg.addEventListener("load", function () { loaded.cat = true; syncMedia(); });
  function syncMedia() { media.classList.toggle("ok", pet === "cat" ? loaded.cat : loaded.dog); }

  // ---------- Pet switch (hero, recipes, footer): one state for the whole page ----------
  var pet = "dog", swapTimer = null;
  function setPet(p) {
    if (p !== "dog" && p !== "cat") return;
    var changed = p !== pet;
    pet = p;
    root.classList.toggle("pet-cat", p === "cat");
    $$("[data-pet]").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.pet === p)); });
    $$("[data-pet-text]").forEach(function (n) { n.textContent = "Raw meals for " + p + "s"; });
    $$("[data-pet-word]").forEach(function (n) { n.textContent = p; });
    need($("[data-pet-field]"), "input").value = p;
    if (planOpen) calc();
    if (!changed) return;
    media.setAttribute("aria-label", p === "cat" ? "A cat waiting for dinner" : "A happy dog waiting for dinner");
    if (p === "cat" && !catImg.getAttribute("src")) catImg.src = catImg.dataset.src;
    clearTimeout(swapTimer);
    media.classList.add("fade");
    swapTimer = setTimeout(function () {
      media.classList.toggle("still-cat", p === "cat");
      media.classList.toggle("still-dog", p !== "cat");
      syncMedia();
      media.classList.remove("fade");
    }, still ? 0 : 400);
  }
  $$("[data-pet]").forEach(function (b) { b.addEventListener("click", function () { setPet(b.dataset.pet); }); });
  $$("[data-set-pet]").forEach(function (a) { a.addEventListener("click", function () { setPet(a.dataset.setPet); }); });

  // ---------- Giant wordmark: 89 % of the hero card ----------
  var card = need($(".hero-card")), word = need($(".hero-word")), wordSpan = need($(".hero-word span"));
  function fitWord() {
    word.style.fontSize = "100px";
    var w = wordSpan.offsetWidth;
    if (w) word.style.fontSize = (100 * card.clientWidth * 0.89 / w).toFixed(2) + "px";
  }
  fitWord();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { fitWord(); request(); });

  // ---------- Menu ----------
  var menuBtn = $("[data-menu]"), menu = $("#menu");
  function setMenu(open) {
    root.classList.toggle("menu-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Menu");
    if (open) setTimeout(function () { $("a", menu).focus({ preventScroll: true }); }, 50);
  }
  menuBtn.addEventListener("click", function () { setMenu(!root.classList.contains("menu-open")); });
  $$("a", menu).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && root.classList.contains("menu-open")) { setMenu(false); menuBtn.focus(); }
  });

  // ---------- Scroll motion: one rAF loop, smoothed values settle and then the loop stops ----------
  var heroPin = need($(".hero-pin")), next = need($("[data-next]")), food = need($("[data-food]")), cta = need($("[data-parallax]")), fadeBg = need($("[data-fade-bg]"));
  var floats = $$("[data-float]").map(function (el) {
    return { el: el, box: el.parentNode, sy: parseFloat(el.dataset.speedY) || .15, sx: parseFloat(el.dataset.speedX) || .03, rot: (Math.random() > .5 ? 1 : -1) * 2, cur: 0, tgt: 0 };
  });
  var waves = $$(".wave canvas").map(function (c) {
    return { c: c, ctx: c.getContext("2d"), color: c.dataset.color || "#eef2fb", w: 0, h: 0, cur: -1, tgt: 0, vis: false, drawn: -1 };
  });
  var nextS = { cur: 0, tgt: 0 }, mScale = { cur: 1, tgt: 1 };
  var solid = false, ticking = false, lastT = 0;
  function mix(a, b, t) {
    var r = a.map(function (v, i) { return Math.round(v + (b[i] - v) * t); });
    return "rgb(" + r.join(",") + ")";
  }
  var WHITE = [255, 255, 255], MIST = [238, 242, 251], CREAM = [255, 243, 227];
  function setSolid(on) { if (on !== solid) { solid = on; root.classList.toggle("solid", on); } }
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
    // initWaveCanvas from the reference: the colour above hangs down and turns into a U as you scroll.
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
    body.style.backgroundColor = mix(WHITE, MIST, clamp(sy / 400));

    if (desk.matches) {
      p = clamp(sy / 700);
      if (!still) {
        word.style.transform = "translateY(" + (50 * p).toFixed(2) + "px) scale(" + (1 - .5 * p).toFixed(4) + ")";
        word.style.opacity = String(Math.max(0, 1 - 2 * p));
        if (p >= .5) { card.style.transform = "scale(" + (1 - .5 * (p - .5)).toFixed(4) + ")"; card.style.opacity = String(1 - .2 * (p - .5)); }
        else { card.style.transform = ""; card.style.opacity = ""; }
        nextS.tgt = p;
        if (nextS.cur < 0) nextS.cur = p;
        if (approach(nextS, dt, 900)) moving = true;
        var e = out3(nextS.cur);
        next.style.transform = "scale(" + (.8 + .2 * e).toFixed(4) + ")";
        next.style.opacity = String(.9 + .1 * e);
        next.style.paddingTop = (400 - 20 * e).toFixed(1) + "px";
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
      r = food.parentNode.getBoundingClientRect();
      p = out3(clamp((vh - (r.top + .1 * r.height)) / (.6 * r.height)));
      food.style.transform = "scale(" + (.9 + .1 * p).toFixed(4) + ")";
      food.style.opacity = String(.7 + .3 * p);

      floats.forEach(function (f) {
        r = f.box.getBoundingClientRect();
        f.tgt = out4(clamp((vh - r.top) / (vh + r.height)));
        if (approach(f, dt, 450)) moving = true;
        f.el.style.transform = "translate(" + (vw * f.sx * f.cur).toFixed(1) + "px," + (-vh * f.sy * f.cur).toFixed(1) + "px) rotate(" + (f.rot * f.cur).toFixed(2) + "deg)";
      });

      r = cta.getBoundingClientRect();
      cta.style.backgroundPosition = "50% " + (50 * clamp((vh - r.top) / (vh + r.height))).toFixed(2) + "%";
    }

    r = fadeBg.getBoundingClientRect();
    var top0 = vh / 2 - .2 * r.height, top1 = .8 * vh - r.height;
    p = top0 > top1 ? clamp((top0 - r.top) / (top0 - top1)) : (r.top < top0 ? 1 : 0);
    fadeBg.style.backgroundColor = mix(CREAM, WHITE, p);

    if (moving) request(); else lastT = 0;
  }
  function request() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  function resetMotion() {
    [word, card, next].forEach(function (el) { el.style.transform = ""; el.style.opacity = ""; });
    next.style.paddingTop = "";
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
  if (!still && "IntersectionObserver" in window) {
    $$(".grid, .car-track").forEach(function (g) { $$(".rv", g).forEach(function (el, i) { el.style.transitionDelay = (i * 100) + "ms"; }); });
    var rvIo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle("in", e.isIntersecting); });
    }, { threshold: .2 });
    $$(".rv").forEach(function (el) { rvIo.observe(el); });

    var blurbs = need($("[data-blurbs]"));
    new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        $$(".blurb", blurbs).forEach(function (b, i) { b.style.transitionDelay = e.isIntersecting ? (260 * i) + "ms" : "0ms"; });
        blurbs.classList.toggle("in", e.isIntersecting);
      });
    }, { threshold: .2 }).observe(blurbs);

    var dpIo = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target.classList.toggle("drawn", e.isIntersecting); });
    }, { threshold: .2 });
    $$("svg.dp").forEach(function (s) { dpIo.observe(s); });

    // Running ribbon text, only while it is on screen.
    var tp = need($("[data-ribbon-text]")), ribbon = need($("[data-ribbon]")), off = -50, ribOn = false, ribRaf = null, ribT = null;
    function ribStep(t) {
      if (!ribOn || document.hidden) { ribRaf = null; ribT = null; return; }
      if (ribT === null) ribT = t;
      off += (t - ribT) * .003; ribT = t;
      if (off > 100) off = -50;
      tp.setAttribute("startOffset", off.toFixed(3) + "%");
      ribRaf = requestAnimationFrame(ribStep);
    }
    function ribStart() { if (ribRaf === null && ribOn && !document.hidden) ribRaf = requestAnimationFrame(ribStep); }
    new IntersectionObserver(function (es) { es.forEach(function (e) { ribOn = e.isIntersecting; if (ribOn) ribStart(); }); }, { threshold: .1 }).observe(ribbon);
    document.addEventListener("visibilitychange", ribStart);
  } else {
    need($("[data-ribbon-text]")).setAttribute("startOffset", "0%");
  }

  // ---------- Treats carousel: next button, pointer drag, the card leaving on the left fades ----------
  var car = need($("[data-car]")), track = need($("[data-track]")), items = $$(".card", track), idx = 0;
  function carStep() { if (!items.length) return 0; var g = parseFloat(getComputedStyle(track).columnGap) || 0; return items[0].getBoundingClientRect().width + g; }
  function carVis() { return parseFloat(getComputedStyle(car).getPropertyValue("--vis")) || 3.5; }
  function carMax() { return Math.max(0, Math.ceil(items.length - carVis())); }
  function carUpdate(drag) {
    idx = Math.min(idx, carMax());
    track.style.transform = "translateX(" + (-idx * carStep() + (drag || 0)).toFixed(1) + "px)";
    items.forEach(function (it, i) { it.classList.toggle("gone", i < idx); });
  }
  need($("[data-car-next]")).addEventListener("click", function () { idx = idx >= carMax() ? 0 : idx + 1; carUpdate(); });
  track.addEventListener("focusin", function (e) {
    var i = items.indexOf(e.target.closest(".card"));
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
      if (Math.abs(mx) >= Math.abs(my) * ANGLE) { dDrag = true; track.classList.add("dragging"); }
      else { dTrack = false; return; }
    }
    if (Math.abs(mx) > 5) dMoved = true;
    dx = mx; carUpdate(dx);
  });
  function dEnd() {
    if (dDrag) {
      dDrag = false; track.classList.remove("dragging");
      if (Math.abs(dx) > TH) { var m = carMax(); idx = dx < 0 ? (idx < m ? idx + 1 : 0) : (idx > 0 ? idx - 1 : m); }
      carUpdate();
    }
    dTrack = false; dx = 0;
    if (dMoved) setTimeout(function () { dMoved = false; }, 200);
  }
  window.addEventListener("pointerup", dEnd);
  window.addEventListener("pointercancel", dEnd);
  track.addEventListener("click", function (e) { if (dMoved) { e.preventDefault(); e.stopImmediatePropagation(); } }, true);
  track.addEventListener("dragstart", function (e) { e.preventDefault(); });
  window.addEventListener("resize", function () { carUpdate(); });
  carUpdate();

  // Cursor follower with "drag" over the carousel (desktop mouse only).
  if (!still && desk.matches && !("ontouchstart" in window) && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    var cur = document.createElement("div"), dot = document.createElement("b");
    cur.className = "cursor"; cur.setAttribute("aria-hidden", "true"); dot.textContent = "drag"; cur.appendChild(dot); body.appendChild(cur);
    root.classList.add("has-cursor");
    var tx = -200, ty = -200, cx = -200, cy = -200, cRaf = null;
    function cStep() {
      cx += (tx - cx) / 6; cy += (ty - cy) / 6;
      cur.style.transform = "translate(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px)";
      cRaf = (Math.abs(tx - cx) > .1 || Math.abs(ty - cy) > .1) ? requestAnimationFrame(cStep) : null;
    }
    document.addEventListener("mousemove", function (e) {
      tx = e.clientX; ty = e.clientY;
      if (cx < -100) { cx = tx; cy = ty; }
      var over = e.target.closest && e.target.closest("[data-track]") && !e.target.closest("button, a");
      cur.classList.toggle("on", !!over);
      if (cRaf === null) cRaf = requestAnimationFrame(cStep);
    }, { passive: true });
    document.addEventListener("mouseleave", function () { cur.classList.remove("on"); });
  }

  // ---------- Reviews slider ----------
  var rvTrack = need($("[data-rv-track]"));
  function rvStep() { var c = $(".rcard", rvTrack); return c ? c.getBoundingClientRect().width + 24 : 300; }
  need($("[data-rv-next]")).addEventListener("click", function () {
    if (rvTrack.scrollLeft + rvTrack.clientWidth >= rvTrack.scrollWidth - 4) rvTrack.scrollTo({ left: 0 });
    else rvTrack.scrollBy({ left: rvStep() });
  });
  need($("[data-rv-prev]")).addEventListener("click", function () {
    if (rvTrack.scrollLeft <= 4) rvTrack.scrollTo({ left: rvTrack.scrollWidth });
    else rvTrack.scrollBy({ left: -rvStep() });
  });

  // Approved reviews from Formgong replace the sample cards (same contract as the Goldleaf template).
  // The Formgong plugin loads them (the review form's block asks for them) and fires formgong:reviews.
  function showReviews(data) {
        if (!data || !(data.count > 0) || !data.reviews || !data.reviews.length) return;
        rvTrack.textContent = "";
        data.reviews.forEach(function (rv) {
          var n = Math.max(0, Math.min(5, Math.round(+rv.rating || 0)));
          var li = document.createElement("li"); li.className = "rcard";
          var st = document.createElement("div"); st.className = "stars"; st.setAttribute("aria-label", n + " out of 5 stars");
          for (var i = 0; i < 5; i++) st.insertAdjacentHTML("beforeend", '<svg aria-hidden="true"' + (i >= n ? ' style="opacity:.25"' : "") + '><use href="#i-star"/></svg>');
          var p = document.createElement("p"); p.textContent = rv.body || ""; p.setAttribute("dir", "auto");
          var who = document.createElement("div"); who.className = "who";
          var av = document.createElement("span"); av.className = "av"; av.setAttribute("aria-hidden", "true");
          var name = (rv.author || "A customer").trim();
          av.textContent = name.split(/\s+/).map(function (w) { return w.charAt(0); }).join("").slice(0, 2).toUpperCase();
          var d = document.createElement("div"), b = document.createElement("b"), s = document.createElement("span");
          b.textContent = name; s.textContent = ago(rv.date);
          d.appendChild(b); d.appendChild(s); who.appendChild(av); who.appendChild(d);
          li.appendChild(st); li.appendChild(p); li.appendChild(who); rvTrack.appendChild(li);
        });
        var avg = (+data.average || 0).toFixed(1).replace(/\.0$/, "");
        need($("[data-rv-label]")).textContent = "Reviews · " + avg + " out of 5 from " + data.count + (data.count === 1 ? " owner" : " owners");
  }
  document.addEventListener("formgong:reviews", function (e) { showReviews(e.detail && e.detail.data); });
  var rvForm = $("form[data-formgong-reviews]");
  if (rvForm && rvForm.formgongReviews) showReviews(rvForm.formgongReviews);
  function ago(v) {
    var t = Date.parse(v); if (!t) return v ? String(v) : "";
    var days = Math.max(0, Math.round((Date.now() - t) / 864e5));
    if (days < 1) return "today";
    if (days < 14) return days + (days === 1 ? " day ago" : " days ago");
    if (days < 60) return Math.round(days / 7) + " weeks ago";
    if (days < 365) return Math.round(days / 30) + " months ago";
    var y = Math.round(days / 365); return y + (y === 1 ? " year ago" : " years ago");
  }

  // CTA photo: load it when the section is about a screen away.
  if ("IntersectionObserver" in window) {
    var ctaIo = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { cta.classList.add("near"); ctaIo.disconnect(); } }, { rootMargin: "100% 0px" });
    ctaIo.observe(cta);
  } else cta.classList.add("near");

  // ---------- FAQ accordion: one open at a time ----------
  var accItems = $$(".acc-item");
  function setAcc(item, open) {
    item.classList.toggle("open", open);
    $(".acc-btn", item).setAttribute("aria-expanded", String(open));
  }
  accItems.forEach(function (item, i) {
    setAcc(item, i === 0);
    $(".acc-btn", item).addEventListener("click", function () {
      var open = !item.classList.contains("open");
      accItems.forEach(function (o) { setAcc(o, false); });
      setAcc(item, open);
    });
  });
  if (location.hash === "#faq-5") setAcc(accItems[4], true);
  $$('a[href$="#faq-5"]').forEach(function (a) { a.addEventListener("click", function () { accItems.forEach(function (o) { setAcc(o, false); }); setAcc(accItems[4], true); }); });

  // ---------- Dialogs ----------
  var dOrder = $("#d-order"), dReview = $("#d-review"), dWrite = $("#d-write");
  var fOrder = $("#f-order"), fReview = $("#f-review"), fWrite = $("#f-write"), fPlan = $("#f-plan");
  $$("dialog").forEach(function (d) {
    $("[data-close]", d).addEventListener("click", function () { d.close(); });
    d.addEventListener("click", function (e) { if (e.target === d) d.close(); });
  });
  function show(d) { if (d && !d.open) d.showModal(); }
  var syncOrder;
  if (fOrder) {
  var itemSel = $("[data-item]", fOrder), postcode = fOrder.elements.namedItem("postcode"), pcLabel = $("[data-postcode-label]", fOrder);
  syncOrder = function () {
    var opt = itemSel.options[itemSel.selectedIndex], treat = !!(opt && opt.hasAttribute("data-treat"));
    $$("[data-gram]", fOrder).forEach(function (l) { l.hidden = treat; });
    $("[data-pouch]", fOrder).hidden = !treat;
    var checked = $('input[name="pack"]:checked', fOrder);
    if (treat) $('[data-pouch] input', fOrder).checked = true;
    else if (!checked || checked.value === "One pouch") $('input[name="pack"][value="500 g"]', fOrder).checked = true;
    var del = $('input[name="delivery"]:checked', fOrder), local = !del || del.value === "Local delivery";
    postcode.required = local;
    pcLabel.textContent = local ? "Postcode" : "Postcode (optional for pick-up)";
  }
  itemSel.addEventListener("change", syncOrder);
  $$('input[name="delivery"]', fOrder).forEach(function (r) { r.addEventListener("change", syncOrder); });
  }
  function openOrder(item) {
    if (fOrder) {
      fOrder.classList.remove("is-sent");
      if (item) itemSel.value = item;
      syncOrder();
    }
    show(dOrder);
  }
  $$("[data-order]").forEach(function (b) { b.addEventListener("click", function () { openOrder(); }); });
  $$("[data-order-item]").forEach(function (b) { b.addEventListener("click", function () { openOrder(b.dataset.orderItem); }); });
  function openWrite(topic) {
    if (!fWrite) { show(dWrite); return; }
    fWrite.classList.remove("is-sent");
    $$('input[name="topic"]', fWrite).forEach(function (r) { r.checked = r.value === topic; });
    if (!$('input[name="topic"]:checked', fWrite)) $('input[name="topic"]', fWrite).checked = true;
    show(dWrite);
  }
  $$("[data-write]").forEach(function (b) { b.addEventListener("click", function () { openWrite(b.dataset.write); }); });
  need($("[data-review-open]")).addEventListener("click", function () { if (fReview) fReview.classList.remove("is-sent"); show(dReview); });

  // ---------- Meal finder ----------
  var planOpen = false, calc;
  if (fPlan) {
  var res = $("[data-res]"), resTxt = $("[data-res-txt]"), gramsField = $("[data-grams-field]");
  var ageEl = fPlan.elements.namedItem("age_months"), kgEl = fPlan.elements.namedItem("weight_kg");
  var planEmail = fPlan.elements.namedItem("email"), planSubmit = $('button[type="submit"]', fPlan);
  function planFields(on) { planEmail.disabled = !on; planSubmit.disabled = !on; }
  planFields(false);
  var PACKS = [250, 500, 750, 1000];
  function packName(g) { return g === 1000 ? "1 kg" : g + " g"; }
  function dailyGrams(p, age, kg, activity, neutered) {
    var act = { low: 0, medium: 1, high: 2 }[activity] || 0, r;
    if (p === "cat") r = age < 12 ? .06 : [.03, .035, .04][act];
    else r = age < 6 ? .05 : age < 12 ? .04 : [.02, .025, .03][act];
    if (neutered === "yes") r *= .9;
    return Math.round(kg * 1000 * r / 10) * 10;
  }
  calc = function () {
    var age = parseFloat(ageEl.value), kg = parseFloat(String(kgEl.value).replace(",", "."));
    var g = dailyGrams(pet, age, kg, fPlan.elements.namedItem("activity").value, fPlan.elements.namedItem("neutered").value);
    var recipe = pet === "cat" ? "Chicken & Liver" : "Chicken & Pumpkin", pack = null;
    for (var i = 0; i < PACKS.length; i++) if (PACKS[i] >= g) { pack = PACKS[i]; break; }
    gramsField.value = String(g);
    resTxt.textContent = "";
    resTxt.appendChild(document.createTextNode("About "));
    var b = document.createElement("b"); b.textContent = g + " g"; resTxt.appendChild(b);
    resTxt.appendChild(document.createTextNode(pack
      ? " a day. That is one " + packName(pack) + " pack of " + recipe + " most days."
      : " a day. That is about " + Math.ceil(g / 1000) + " packs of 1 kg of " + recipe + " a day."));
  }
  $("[data-see]").addEventListener("click", function () {
    if (!ageEl.reportValidity() || !kgEl.reportValidity()) return;
    calc();
    planOpen = true; planFields(true);
    res.classList.add("open");
  });
  [ageEl, kgEl].forEach(function (el) {
    el.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); $("[data-see]").click(); } });
  });
  $$("input, select", $(".bar", fPlan)).forEach(function (el) {
    el.addEventListener("change", function () { if (planOpen && ageEl.checkValidity() && kgEl.checkValidity()) calc(); });
  });
  }

  // ---------- Forms: thanks only when Formgong answers success: true ----------
  function wire(f, afterSent, afterAgain) {
    var button = $('button[type="submit"]', f), label = button.textContent, status = $("[data-status]", f);
    function say(text, bad) { status.textContent = text; status.classList.toggle("err", !!bad); }
    f.addEventListener("submit", function (event) {
      if (!f.checkValidity()) { event.preventDefault(); f.reportValidity(); }
    });
    f.addEventListener("formgong:sending", function () { button.disabled = true; button.textContent = "Sending…"; say(""); });
    f.addEventListener("formgong:sent", function () {
      var nm = f.elements.namedItem("name"), first = nm && nm.value ? nm.value.trim().split(/\s+/)[0] : "";
      $$("[data-name]", f).forEach(function (n) { n.textContent = first || "there"; });
      if (afterSent) afterSent(); else f.reset();
      f.classList.add("is-sent");
      $(".thanks", f).focus();
      button.disabled = false; button.textContent = label;
    });
    f.addEventListener("formgong:error", function (event) {
      var d = event.detail || {};
      say(d.network ? "Could not send. Check your connection and try again." : (d.message || "Could not send. Please try again."), true);
      button.disabled = false; button.textContent = label;
    });
    $("[data-again]", f).addEventListener("click", function () {
      f.classList.remove("is-sent"); say("");
      if (afterAgain) afterAgain();
      var first = $("input:not([type=hidden]):not([tabindex='-1']), select, textarea", f);
      if (first) first.focus();
    });
  }
  if (fPlan) wire(fPlan, function () {
    $("[data-mail]", fPlan).textContent = planEmail.value || "you";
    planEmail.value = "";
  });
  if (fOrder) wire(fOrder, function () { var keep = itemSel.value; fOrder.reset(); itemSel.value = keep; syncOrder(); });
  if (fReview) wire(fReview);
  if (fWrite) wire(fWrite, function () { var t = $('input[name="topic"]:checked', fWrite); var v = t && t.value; fWrite.reset(); if (v) $$('input[name="topic"]', fWrite).forEach(function (r) { r.checked = r.value === v; }); });
})();
