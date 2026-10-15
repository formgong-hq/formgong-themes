/* Lattice Estate: the template's script, adapted for WordPress (see build_lattice_estate.py). */
(function () {
  "use strict";
  var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return Math.min(b === undefined ? 1 : b, Math.max(a || 0, v)); }
  function replay(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

  // One house, rewound: what each stage of the story says. Edit these for your own project.
  var STAGES = [
    { n: "01 / 04", tag: "Handover", title: "A home, finished", text: "This is where every project ends: the keys handed over, every joint checked twice. Scroll to watch how it began.", time: "Month 18" },
    { n: "02 / 04", tag: "Construction", title: "Built by our own crews", text: "Walls, roof and services go up under one contract. Weekly photo reports keep you on site from anywhere.", time: "Month 11" },
    { n: "03 / 04", tag: "Structure", title: "Engineered for the cliff", text: "A reinforced concrete frame on foundations sized for coastal wind and rock, signed off by our own engineers.", time: "Month 4" },
    { n: "04 / 04", tag: "Design", title: "It began as a drawing", text: "Plans, permits and engineering are drawn in-house, so the house you approve is the house we build.", time: "Day 1" }
  ];

  /* Grid layout. Every box is placed by grid lines, so its borders fall on the drawn grid.
     Wide screens: each section is a pinned screen of --rows × --cols cells on a grid fixed to the window.
     Narrow screens: the story stays pinned, the contact section flows with heights in whole cells. */
  var K = {};
  $$("[data-k]").forEach(function (el) { (K[el.dataset.k] = K[el.dataset.k] || []).push(el); });
  var G = {};
  function A(k, r1, c1, r2, c2, i) {
    var el = K[k] && K[k][i || 0];
    if (el) el.style.gridArea = r1 + " / " + c1 + " / " + r2 + " / " + c2;
  }
  function layout() {
    // Some mobile browsers report a too-tall window before the first paint; take the smallest reading.
    var W = root.clientWidth, H = Math.min(innerHeight, root.clientHeight || innerHeight, screen.height || innerHeight), flow = W <= 860;
    if (flow && G.flow && G.W === W) H = G.H;
    var u = flow ? 56 : 75;
    var C = Math.max(5, Math.floor((W - 2 * (flow ? 16 : 45)) / u));
    var gut = Math.floor((W - C * u) / 2);
    var R = Math.max(flow ? 11 : 8, Math.floor(H / u));
    G = { W: W, H: H, flow: flow, u: u, C: C, R: R, gut: gut };
    root.classList.toggle("F", flow);
    root.classList.toggle("L", !flow);
    var s = root.style;
    s.setProperty("--u", u + "px"); s.setProperty("--gut", gut + "px");
    s.setProperty("--cols", C); s.setProperty("--rows", R);
    s.setProperty("--mt", Math.max(2, Math.floor((R - 4) / 2)));
    $$("[data-k]").forEach(function (el) { el.style.gridArea = ""; });
    $$("[data-snap]").forEach(function (el) { el.style.height = ""; });

    var big = C >= 15, top = R >= 11 ? 5 : 4, form = $("#fg-form") || document.createElement("div"), phoneField = $("[data-phone-field]") || document.createElement("div");
    var cap = 0;
    var contactScreen = $(".contact .screen");
    if (contactScreen) contactScreen.classList.toggle("grid-on", !flow);

    if (!flow) {
      var CW = big ? 6 : 5, SW = big ? 4 : 3;
      A("hl", 3, 1, 6, big ? 10 : C - 2);
      A("counter", 3, C + 1 - SW, 4, C + 1);
      A("cap", R - 4, 1, R - 1, 1 + CW);
      for (var i = 0; i < 4; i++) A("stg", R - 5 + i, C + 1 - SW, R - 4 + i, C + 1, i);
      // Contact
      // The form starts beside the heading (two rows higher), so it has room for every field.
      var A2 = 4, F = big ? 5 : 4, f0 = top - 2, FR = R - 1 - f0, keep = FR - cap - 5 >= 2;
      A("c-head", top - 2, 1, top, big ? 10 : C + 1 - F);
      A("box1", top, 1, top + 2, 1 + A2); A("box2", Math.max(top + 2, R - 3), 1, R - 1, 1 + A2);
      A("form", f0, C + 1 - F, R - 1, C + 1);
      A("f-copy", R - 1, 1, R, 4); A("f-priv", R - 1, 4, R, 6); A("f-terms", R - 1, 6, R, 8); A("f-credit", R - 1, C - 2, R, C + 1);
      phoneField.hidden = !keep;
      form.style.setProperty("--msg", Math.max(1, FR - cap - (keep ? 5 : 4)));
      form.style.setProperty("--fr", FR);
    } else {
      A("hl", 3, 1, 6, C + 1);
      A("counter", 7, C - 3, 8, C + 1);
      for (var j = 0; j < 4; j++) A("stg", R - 6, 1 + j, R - 5, 2 + j, j);
      A("cap", R - 5, 1, R - 1, C + 1);
      phoneField.hidden = false;
      form.style.setProperty("--msg", 3);
      form.style.setProperty("--fr", 8 + cap);
      snapFlow();
    }
    drawDims();
  }
  // Narrow screens: round text blocks up to whole cells so everything below stays on the grid.
  function snapFlow() {
    if (!G.flow) return;
    $$("[data-snap]").forEach(function (el) {
      el.style.height = "";
      var b = el.classList.contains("b") ? 1 : 0;
      var h = el.getBoundingClientRect().height - b;
      el.style.height = (Math.max(1, Math.ceil((h - .5) / G.u)) * G.u + b) + "px";
    });
  }

  /* Dimension lines for the drawing stage. They sit on grid lines in the top band, which is free
     once the headline has gone, and frame the drawing like annotations on a sheet. */
  var dims = $("[data-dims]"), dimPaths = [];
  function drawDims() {
    if (!dims) return;
    var u = G.u, gut = G.gut, C = G.C, R = G.R, flow = G.flow, SW = C >= 15 ? 4 : 3;
    var x1 = gut + (flow ? 0 : 1) * u, x2 = gut + (flow ? C : C - SW - 1) * u;
    var y = 2 * u, yExt = (flow ? 5 : 4) * u, yV = (R - 5) * u, t = 7, svg = "";
    function tick(x, yy) { return "M" + (x - t) + " " + (yy + t) + "L" + (x + t) + " " + (yy - t); }
    svg += '<path class="ext" d="M' + x1 + " " + (y - 10) + "V" + yExt + "M" + x2 + " " + (y - 10) + "V" + yExt + '"/>';
    svg += '<path data-dim d="M' + (x1 - 12) + " " + y + "H" + (x2 + 12) + tick(x1, y) + tick(x2, y) + '"/>';
    svg += '<text x="' + ((x1 + x2) / 2) + '" y="' + (y - 10) + '" text-anchor="middle">24 600</text>';
    if (!flow) {
      svg += '<path data-dim d="M' + x2 + " " + (y - 12) + "V" + (yV + 12) + tick(x2, y) + tick(x2, yV) + '"/>';
      svg += '<path class="ext" d="M' + (x2 - u) + " " + yV + "H" + (x2 + 10) + '"/>';
      svg += '<text x="' + (x2 + 14) + '" y="' + ((y + yV) / 2) + '" transform="rotate(-90 ' + (x2 + 14) + " " + ((y + yV) / 2) + ')" text-anchor="middle">8 400</text>';
    }
    ["A", "B"].forEach(function (l, i) {
      var x = i ? x2 : x1;
      if (flow) x = i ? x2 - 14 : x1 + 14;
      svg += '<circle cx="' + x + '" cy="' + (y - 30) + '" r="11"/><text x="' + x + '" y="' + (y - 26) + '" text-anchor="middle">' + l + "</text>";
    });
    dims.setAttribute("viewBox", "0 0 " + innerWidth + " " + innerHeight);
    dims.innerHTML = svg;
    dimPaths = $$("[data-dim]", dims).map(function (p) { var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; return { p: p, L: L }; });
    if (typeof queue === "function") queue();
  }

  layout();

  /* Intro */
  var intro = $(".intro");
  if (root.classList.contains("js-intro") && intro) {
    var letters = $$(".intro-word span", intro);
    var finished = false, leaving = false;
    A("i-word", Math.floor(G.R / 2), 1, Math.floor(G.R / 2) + 1, G.C + 1);
    var done = function () {
      if (finished) return;
      finished = true;
      root.classList.remove("js-intro");
      intro.remove();
      try { sessionStorage.setItem("estate-intro", "1"); } catch (e) {}
      startDraw();
    };
    var leave = function () {
      if (leaving) return;
      leaving = true;
      intro.classList.add("out");
      setTimeout(done, 1000);
    };
    intro.addEventListener("click", leave);
    requestAnimationFrame(function () {
      intro.classList.add("in");
      setTimeout(function () {
        if (leaving) return;
        var gap = Math.min(64, innerWidth / (letters.length + 3)), cx = innerWidth / 2;
        letters.forEach(function (l, i) {
          var r = l.getBoundingClientRect();
          l.style.transform = "translateX(" + (cx + (i - (letters.length - 1) / 2) * gap - (r.left + r.width / 2)) + "px)";
        });
        setTimeout(leave, 1300);
      }, 900 + letters.length * 70);
    });
    setTimeout(done, 7000);
  } else if (intro) {
    intro.remove();
  } else {
    root.classList.remove("js-intro");
  }

  /* Clock and year */
  var clock = $("[data-clock]");
  if (clock) {
    try {
      var fmt = new Intl.DateTimeFormat("en-GB", { timeZone: clock.dataset.tz || undefined, hour: "2-digit", minute: "2-digit" });
      var tickClock = function () { clock.textContent = fmt.format(new Date()); };
      tickClock();
      setInterval(tickClock, 15000);
    } catch (e) {}
  }
  var year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* Menu */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".le-nav .is-menu-open a[href]");
    if (!a || a.origin !== location.origin || a.pathname !== location.pathname) return;
    var go = /(?:^|\s)le-go-(\d)(?:\s|$)/.exec((a.closest(".wp-block-navigation-item") || a).className);
    if (!a.hash && !go) return;
    var close = a.closest(".is-menu-open").querySelector(".wp-block-navigation__responsive-container-close");
    if (close) close.click();
    if (go && story) { e.preventDefault(); goStage(+go[1]); }
  });

  /* Heading reveal */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); e.target.classList.add("in"); } });
    }, { rootMargin: "0px 0px -12% 0px" });
    $$("[data-reveal]").forEach(function (el) { io.observe(el); });
  } else {
    $$("[data-reveal]").forEach(function (el) { el.classList.add("in"); });
  }

  /* Boxes slide in from their side, then their frames draw from the top-left corner. */
  var drawable = [], drawIO = null;
  function setSlide() {
    var perSection = new Map();
    drawable.forEach(function (el) {
      if (el.classList.contains("drawn")) return;
      var r = el.getBoundingClientRect(), sx;
      if (el.parentElement.closest(".b") || getComputedStyle(el.parentElement).overflow !== "visible") sx = 0;
      else if (r.width > innerWidth * .6) {
        var sec = el.closest(".sec") || document.body, n = perSection.get(sec) || 0;
        perSection.set(sec, n + 1);
        sx = n % 2 ? 1 : -1;
      } else sx = r.left + r.width / 2 < innerWidth / 2 ? -1 : 1;
      el.style.setProperty("--sx", sx * 56 + "px");
    });
  }
  function startDraw() {
    if (drawIO) drawable.forEach(function (el) { drawIO.observe(el); });
  }

  /* Story: scroll rewinds the house. t runs 0..3 across the pinned section; the last part holds the drawing. */
  var story = $(".story"), layers = $$("[data-layer]"), wipe = $("[data-wipe]"), gridlay = $("[data-gridlay]");
  var capEl = $("[data-cap]"), timeEl = $("[data-time]"), hl = K.hl && K.hl[0], stg = K.stg || [], sIdx = -1;
  if (!story || layers.length < 4 || !wipe || !gridlay || !dims || !capEl || !timeEl || !hl) story = null;
  var SPAN = 3.4;
  function storyT() {
    if (!story) return 0;
    var r = story.getBoundingClientRect();
    return clamp(-r.top / Math.max(1, r.height - innerHeight)) * SPAN;
  }
  function goStage(k) {
    if (!story) return;
    var top = scrollY + story.getBoundingClientRect().top;
    scrollTo({ top: top + (story.offsetHeight - innerHeight) * (k / SPAN) + 1, behavior: RM ? "auto" : "smooth" });
  }
  stg.forEach(function (b) { b.addEventListener("click", function () { goStage(+b.dataset.stage); }); });
  function showStage(i) {
    if (i === sIdx) return;
    var first = sIdx === -1;
    sIdx = i;
    var st = STAGES[i];
    capEl.innerHTML = '<p class="label"><b>' + st.n + "</b><span>" + st.tag + "</span></p><h2>" + st.title + "</h2><p>" + st.text + "</p>";
    timeEl.textContent = st.time;
    stg.forEach(function (b, j) { b.setAttribute("aria-current", String(j === i)); });
    if (!first && !RM) replay(capEl, "swap");
  }
  function amount(t, k) {
    // Each change uses the middle 70% of its stretch of scroll; the rest holds still.
    var a = clamp((t - (k - 1) - .15) / .7);
    return RM ? (a >= .5 ? 1 : 0) : a;
  }

  var prog = $(".prog"), progTick = $(".prog i"), queued = false;
  function update() {
    queued = false;
    var t = storyT();
    if (story) {
    var a1 = amount(t, 1), a2 = amount(t, 2), a3 = amount(t, 3);
    // Build and frame wipe in from the right, like time running back; the drawing opens from a point.
    var W = innerWidth, F = 90;   // half-width of the soft edge, px
    function edge(a) { return (1 - a) * (W + 2 * F) - F; }
    function linear(a) { var p = edge(a); return "linear-gradient(90deg, transparent " + (p - F) + "px, #000 " + (p + F) + "px)"; }
    layers[1].style.setProperty("--mask", linear(a1));
    layers[2].style.setProperty("--mask", linear(a2));
    var R = a3 * (Math.hypot(W, innerHeight) + 2 * F);
    layers[3].style.setProperty("--mask", "radial-gradient(circle at 62% 52%, #000 " + Math.max(0, R - F) + "px, transparent " + (R + F * .6) + "px)");
    var moving = a1 > 0 && a1 < 1 ? a1 : a2 > 0 && a2 < 1 ? a2 : 0;
    wipe.style.left = edge(moving) + "px";
    wipe.style.opacity = moving ? "1" : "0";
    gridlay.style.setProperty("--ga", (.05 + a3 * .11).toFixed(3));
    var d = RM ? (a3 >= 1 ? 1 : 0) : clamp((t - 2.55) / .55);
    dimPaths.forEach(function (o) { o.p.style.strokeDashoffset = o.L * (1 - d); });
    dims.style.opacity = d ? "1" : "0";
    if (!RM) {
      hl.style.opacity = String(1 - clamp(t * 2.2));
      hl.style.transform = "translateX(" + (-clamp(t * 2.2) * 60) + "px)";
    } else hl.style.opacity = t < .5 ? "1" : "0";
    showStage(Math.min(3, Math.round(t)));
    }
    var max = root.scrollHeight - innerHeight;
    if (!prog || !progTick) return;
    progTick.style.left = (clamp(scrollY / Math.max(1, max)) * 100) + "%";
    prog.style.opacity = String(1 - clamp((scrollY - max + 220) / 160));
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  addEventListener("scroll", queue, { passive: true });
  var lastW = root.clientWidth, lastH = innerHeight;
  addEventListener("resize", function () {
    if (root.clientWidth === lastW && innerHeight === lastH) return;
    lastW = root.clientWidth; lastH = innerHeight;
    layout(); queue();
    if (drawIO) setSlide();
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { snapFlow(); queue(); });
  addEventListener("load", function () { G = {}; layout(); queue(); });

  /* Start the slide-in and line drawing now that every box exists */
  drawable = $$("header .b, main .b, footer .b");
  if (root.classList.contains("lines")) {
    setSlide();
    drawIO = new IntersectionObserver(function (entries) {
      entries.filter(function (e) { return e.isIntersecting; })
        .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left; })
        .forEach(function (e, n) {
          drawIO.unobserve(e.target);
          e.target.style.setProperty("--dd", Math.min(n, 9) * 70 + "ms");
          e.target.classList.add("drawn");
        });
    }, { threshold: .15 });
    if (!root.classList.contains("js-intro")) startDraw();
  }
  update();

})();
