/* Lattice: the template's script, adapted for WordPress (see build_lattice.py). */
(function () {
  "use strict";
  var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return Math.min(b === undefined ? 1 : b, Math.max(a || 0, v)); }
  function replay(el, cls) { el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }

  var PROJECTS = [
    { name: "kelp & co.", code: "KC", meta: "2026 · E-commerce · Astro", t: ["A web shop for a small seaweed skincare brand, built around ingredients and slow storytelling.", "Product pages load in under a second, and wholesale requests reach the right person."], bg: "#10201d", img: LATTICE_IMG + "kelp.webp", phone: LATTICE_IMG + "kelp-phone.webp" },
    { name: "atlas rail", code: "AR", meta: "2025 · Booking · Nuxt", t: ["Route finder and booking flow for night trains across southern Europe.", "A calm interface for a stressful task: fewer steps, clear prices, honest delays."], bg: "#141a2b", img: LATTICE_IMG + "atlas.webp", phone: LATTICE_IMG + "atlas-phone.webp" },
    { name: "mosaic clinic", code: "MC", meta: "2025 · Healthcare · WordPress", t: ["Website for a family dental clinic with online appointment requests.", "Accessible forms and plain language, tested with patients over sixty."], bg: "#1f1a17", img: LATTICE_IMG + "mosaic.webp", phone: LATTICE_IMG + "mosaic-phone.webp" },
    { name: "ondra architects", code: "OA", meta: "2024 · Portfolio · Astro", t: ["Portfolio for an architecture practice that lets the photographs carry the page.", "Image-first layouts with scroll-linked transitions and a quiet project index."], bg: "#191919", img: LATTICE_IMG + "ondra.webp", phone: LATTICE_IMG + "ondra-phone.webp" },
    { name: "lumen festival", code: "LF", meta: "2024 · Event · Next.js", t: ["Site for a three-night light festival: programme, map and volunteer sign-up.", "The volunteer form handled the launch-week rush without losing a message."], bg: "#1a1024", img: LATTICE_IMG + "lumen.webp", phone: LATTICE_IMG + "lumen-phone.webp" },
    { name: "fieldnote", code: "FN", meta: "2023 · Product · SvelteKit", t: ["Launch site for a field journal app used by ecologists and hikers.", "Motion sketches of the app explain features before anyone reads a word."], bg: "#16201a", img: LATTICE_IMG + "fieldnote.webp", phone: LATTICE_IMG + "fieldnote-phone.webp" }
  ];
  var SERVICES = [
    ["motion", "design", "Transitions and small interactions that guide the eye and give a site its rhythm."],
    ["front end", "development", "Designs turned into fast, accessible code that holds up on every screen."],
    ["back end", "development", "Forms, content and integrations that keep working long after launch day."],
    ["web", "design", "Layout, type and colour shaped into one clear visual system."],
    ["ux / ui", "design", "Flows that feel obvious, with details that reward a second look."],
    ["brand", "identity", "A digital identity that carries across the site, the inbox and social posts."]
  ];

  /* Grid layout. Every box is placed by grid lines, so its borders fall on the drawn grid.
     Wide screens: each section is a pinned screen of --rows × --cols cells on a grid fixed to the window.
     Narrow screens: sections flow, the grid scrolls with the page, and heights are whole cells. */
  var K = {};
  $$("[data-k]").forEach(function (el) { (K[el.dataset.k] = K[el.dataset.k] || []).push(el); });
  var G = {};
  function A(k, r1, c1, r2, c2, i) {
    var el = K[k] && K[k][i || 0];
    if (el) el.style.gridArea = r1 + " / " + c1 + " / " + r2 + " / " + c2;
  }
  function box(el, x, y, w, h) {
    if (!el) return;
    var u = G.u;
    // Offsets count from the parent's inner edge, one pixel inside its border.
    el.style.left = (x * u - 1) + "px"; el.style.top = (y * u - 1) + "px";
    el.style.width = (w * u + 1) + "px"; el.style.height = (h * u + 1) + "px";
  }
  function placeMock(S, P) {
    // Keep the browser mock landscape: at least one column wider than it is tall.
    var mc = Math.max(2, S >= 6 ? S - 2 : S - 1), mr = Math.max(1, Math.min(3, P - 1, mc - 1));
    var mx = Math.floor((S - mc) / 2), my = Math.floor((P - mr) / 2);
    box($("[data-mock]"), mx, my, mc, mr);
    box($("[data-phone]"), mx + mc - 1, Math.min(my + mr - 1, P - 2), 1, 2);
  }
  function layout() {
    // Some mobile browsers report a too-tall window before the first paint; take the smallest reading.
    var W = root.clientWidth, H = Math.min(innerHeight, root.clientHeight || innerHeight, screen.height || innerHeight), flow = W <= 860;
    // Mobile browsers change the height while their toolbars slide; keep rows stable then.
    if (flow && G.flow && G.W === W) H = G.H;
    var u = flow ? 56 : 75;
    var C = Math.max(5, Math.floor((W - 2 * (flow ? 16 : 45)) / u));
    var gut = Math.floor((W - C * u) / 2);
    var R = Math.max(flow ? 11 : 8, Math.floor(H / u));
    G = { W: W, H: H, flow: flow, u: u, C: C, R: R };
    root.classList.toggle("F", flow);
    root.classList.toggle("L", !flow);
    var s = root.style;
    s.setProperty("--u", u + "px"); s.setProperty("--gut", gut + "px");
    s.setProperty("--cols", C); s.setProperty("--rows", R);
    s.setProperty("--mt", Math.max(2, Math.floor((R - 4) / 2)));
    $$("[data-k]").forEach(function (el) { el.style.gridArea = ""; });
    $$("[data-rows], [data-snap]").forEach(function (el) { el.style.height = ""; });

    var big = C >= 15, top = R >= 11 ? 5 : 4;
    var fc = flow ? (C % 2 ? 3 : 4) : big ? (C % 2 ? 5 : 6) : (C % 2 ? 5 : 4);
    var fc0 = (C - fc) / 2 + 1, phoneField = $("[data-phone-field]") || document.createElement("div"), form = $("#fg-form") || document.createElement("div");
    var q = (K.quotes && K.quotes[0]) || document.createElement("div"), cap = 0;

    if (!flow) {
      // Hero
      var fr0 = Math.max(2, Math.floor((R - fc) / 2) + 1), fr1 = fr0 + fc, wr = fr0 + Math.floor(fc / 2) - 1;
      var ls = big ? 2 : 1, le = big ? C : C + 1;
      A("frame", fr0, fc0, fr1, fc0 + fc); A("i-frame", fr0, fc0, fr1, fc0 + fc);
      A("tl", fr0, ls, fr0 + 1, fc0); A("tr", fr0, fc0 + fc, fr0 + 1, le);
      A("bl", fr1 - 1, ls, fr1, fc0); A("br", fr1 - 1, fc0 + fc, fr1, le);
      A("wl", wr, big ? 3 : 1, wr + 2, fc0); A("wr", wr, fc0 + fc, wr + 2, big ? C - 1 : C + 1);
      A("i-word", wr, 1, wr + 2, C + 1);
      // Work
      var Aw = big ? 5 : 3, T = C >= 17 ? 5 : C >= 12 ? 4 : 3, sh0 = 1 + Aw, sh1 = C - T;
      A("w-head", top - 2, 1, top, C - 2); A("w-cta", top - 1, C - 2, top, C + 1);
      A("p-orb", top, 1, R - 1, sh0); A("p-shot", top, sh0, R - 1, sh1);
      A("p-thumbs", top, sh1, R - 1, sh1 + 1); A("p-text", top, sh1 + 1, R - 1, C + 1);
      A("b-prev", R - 1, 1, R, 2); A("b-link", R - 1, 2, R, 3); A("b-name", R - 1, 3, R, C); A("b-next", R - 1, C, R, C + 1);
      placeMock(sh1 - sh0, R - 1 - top);
      // Services
      var hasQ = R >= 10, sEnd = hasQ ? R - 2 : R, RW = big ? 6 : 4, SW = big ? 6 : 4, sw2 = SW / 2, q1 = Math.floor((sEnd - top) / 2);
      A("s-head", top - 2, 1, top, C - 2); A("s-cta", top - 1, C - 2, top, C + 1);
      A("rot", top, 1, sEnd, 1 + RW); A("s-orb", top, 1 + RW, sEnd, C + 1 - SW);
      A("st", top, C + 1 - SW, top + q1, C + 1 - sw2, 0); A("st", top, C + 1 - sw2, top + q1, C + 1, 1);
      A("st", top + q1, C + 1 - SW, sEnd, C + 1 - sw2, 2); A("st", top + q1, C + 1 - sw2, sEnd, C + 1, 3);
      q.hidden = !hasQ;
      A("quotes", R - 2, 1, R, C + 1);
      q.style.setProperty("--cw", big ? 6 : 5);
      // About
      var OW = big ? 5 : 4, base = Math.floor(C / 6), rest = C % 6, c = 1;
      A("a-head", top - 2, 1, top, C + 1); A("a-text", top, 1, R - 1, C + 1 - OW); A("a-orb", top, C + 1 - OW, R - 1, C + 1);
      (K.tool || []).forEach(function (t, i) { var w = base + (i < rest ? 1 : 0); A("tool", R - 1, c, R, c + w, i); c += w; });
      // Contact
      var A2 = big ? 5 : 4, F = big ? 5 : 4, gap = big ? 1 : 0, FR = R - 1 - top, keep = FR - cap - 4 >= 2;
      A("c-head", top - 2, 1, top, C + 1);
      A("box1", top, 1, top + 2, 1 + A2); A("box2", Math.max(top + 2, R - 3), 1, R - 1, 1 + A2);
      A("c-orb", top, 1 + A2 + gap, R - 1, C + 1 - F - gap); A("form", top, C + 1 - F, R - 1, C + 1);
      A("f-copy", R - 1, 1, R, 4); A("f-priv", R - 1, 4, R, 6); A("f-terms", R - 1, 6, R, 8); A("f-credit", R - 1, C - 2, R, C + 1);
      phoneField.hidden = !keep;
      form.style.setProperty("--msg", Math.max(1, FR - cap - (keep ? 4 : 3)));
      form.style.setProperty("--fr", FR);
    } else {
      // Hero on narrow screens: a grid as tall as needed, starting at the top of the page
      var mf0 = Math.max(5, Math.floor((R - fc) / 2) + 1), half = Math.ceil(C / 2) + 1;
      s.setProperty("--hrows", Math.max(R, mf0 + fc + 3));
      A("tl", 2, 1, 3, half); A("tr", 2, half, 3, C + 1);
      A("wl", mf0 - 2, 1, mf0, C + 1); A("frame", mf0, fc0, mf0 + fc, fc0 + fc);
      A("wr", mf0 + fc, 1, mf0 + fc + 2, C + 1);
      A("bl", mf0 + fc + 2, 1, mf0 + fc + 3, C + 1); A("br", mf0 + fc + 3, 1, mf0 + fc + 4, C + 1);
      var ir = Math.max(2, Math.floor((R - fc) / 2) + 1);
      A("i-frame", ir, fc0, ir + fc, fc0 + fc); A("i-word", ir + fc / 2 - 1, 1, ir + fc / 2 + 1, C + 1);
      placeMock(C, 4);
      q.hidden = false;
      q.style.setProperty("--cw", C);
      phoneField.hidden = false;
      form.style.setProperty("--msg", 3);
      form.style.setProperty("--fr", 7 + cap);
      $$("[data-rows]").forEach(function (el) {
        el.style.height = (+el.dataset.rows * u + (el.matches(".b, .quotes") ? 1 : 0)) + "px";
      });
      snapFlow();
    }
  }
  // Narrow screens: round text blocks up to whole cells so everything below stays on the grid.
  function snapFlow() {
    if (!G.flow) return;
    $$("[data-snap]").forEach(function (el) {
      el.style.height = "";
      var b = el.matches(".b, .quotes") ? 1 : 0;
      var h = el.getBoundingClientRect().height - b;
      el.style.height = (Math.max(1, Math.ceil((h - .5) / G.u)) * G.u + b) + "px";
    });
  }
  layout();

  /* Intro */
  var intro = $(".intro");
  if (root.classList.contains("js-intro") && intro) {
    var letters = $$(".intro-word span", intro);
    var finished = false, leaving = false;
    var done = function () {
      if (finished) return;
      finished = true;
      root.classList.remove("js-intro");
      intro.remove();
      try { sessionStorage.setItem("lattice-intro", "1"); } catch (e) {}
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
    var a = e.target.closest && e.target.closest(".lt-nav .is-menu-open a[href]");
    if (!a || a.origin !== location.origin || a.pathname !== location.pathname || !a.hash) return;
    var close = a.closest(".is-menu-open").querySelector(".wp-block-navigation__responsive-container-close");
    if (close) close.click();
  });

  /* Reveal and counters */
  function count(el) {
    var to = +el.dataset.count;
    if (RM) { el.textContent = to; return; }
    var t0 = performance.now();
    (function step(t) {
      var p = clamp((t - t0) / 1600);
      el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  var counters = $$("[data-count]");
  if (!RM) counters.forEach(function (el) { el.textContent = "0"; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        e.target.classList.add("in");
        if (e.target.dataset.count) count(e.target);
      });
    }, { rootMargin: "0px 0px -12% 0px" });
    $$("[data-reveal]").concat(counters).forEach(function (el) { io.observe(el); });
  } else {
    $$("[data-reveal]").forEach(function (el) { el.classList.add("in"); });
    counters.forEach(function (el) { el.textContent = el.dataset.count; });
  }

  /* Boxes slide in from their side, then their frames draw from the top-left corner.
     Left-half boxes come from the left, right-half from the right; full-width ones alternate. */
  // Collected after the script builds its buttons (see the end of this file).
  var drawable = [], drawIO = null;
  function setSlide() {
    var perSection = new Map();
    drawable.forEach(function (el) {
      if (el.classList.contains("drawn")) return;
      var r = el.getBoundingClientRect(), sx;
      // Nested boxes and boxes inside a clipping container only fade and draw: sliding would hide them for good.
      if (el.classList.contains("frame") || el.parentElement.closest(".b") || getComputedStyle(el.parentElement).overflow !== "visible") sx = 0;
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
  /* Work: scroll-pinned on wide screens, buttons everywhere */
  var work = $(".work"), shot = $(".p-shot"), mock = $("[data-mock]"), phone = $("[data-phone]"), thumbs = $("[data-p-thumbs]");
  if (!work || !shot || !mock || !phone || !thumbs) work = null;
  var pIdx = -1;
  function shotImg(parent, src) {
    var im = document.createElement("img");
    im.src = src; im.alt = ""; im.loading = "lazy"; im.decoding = "async";
    return parent.appendChild(im);
  }
  if (work) PROJECTS.forEach(function (p, i) {
    p.els = [shotImg(mock, p.img), shotImg(phone, p.phone)];
    var b = document.createElement("button");
    b.type = "button";
    b.className = "b";
    b.textContent = p.code;
    b.setAttribute("aria-label", "Show " + p.name);
    b.addEventListener("click", function () { goProject(i); });
    thumbs.appendChild(b);
  });
  function showProject(i) {
    i = (i + PROJECTS.length) % PROJECTS.length;
    if (i === pIdx) return;
    var first = pIdx === -1;
    pIdx = i;
    var p = PROJECTS[i];
    shot.style.setProperty("--m-bg", p.bg);
    PROJECTS.forEach(function (q, j) { q.els.forEach(function (im) { im.classList.toggle("on", j === i); }); });
    $("[data-p-name]").textContent = p.name;
    $("[data-p-num]").textContent = String(i + 1).padStart(2, "0") + " / " + String(PROJECTS.length).padStart(2, "0");
    $("[data-p-kind]").textContent = p.meta;
    $("[data-p-t1]").textContent = p.t[0];
    $("[data-p-t2]").textContent = p.t[1];
    $$("button", thumbs).forEach(function (b, j) { b.setAttribute("aria-current", String(j === i)); });
    if (!first && !RM) { replay($("[data-p-text]"), "swap"); replay($("[data-p-name]"), "swap"); }
  }
  function goProject(i) {
    i = (i + PROJECTS.length) % PROJECTS.length;
    if (!G.flow) {
      var top = scrollY + work.getBoundingClientRect().top;
      var span = work.offsetHeight - innerHeight;
      scrollTo({ top: top + span * (i / (PROJECTS.length - 1)) + 1, behavior: RM ? "auto" : "smooth" });
    } else {
      showProject(i);
    }
  }
  if (work) {
    $("[data-p-prev]").addEventListener("click", function () { goProject(pIdx - 1); });
    $("[data-p-next]").addEventListener("click", function () { goProject(pIdx + 1); });
    showProject(0);
  }

  /* Services rotator */
  var rot = $("[data-rot]"), squares = $("[data-rot-squares]"), sIdx = 0, timer = null;
  if (rot && squares) SERVICES.forEach(function (s, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", "Show " + s[0] + " " + s[1]);
    b.addEventListener("click", function () { showService(i); restart(); });
    squares.appendChild(b);
  });
  function showService(i) {
    sIdx = (i + SERVICES.length) % SERVICES.length;
    var s = SERVICES[sIdx];
    $("[data-rot-a]").textContent = s[0];
    $("[data-rot-b]").textContent = s[1];
    $("[data-rot-d]").textContent = s[2];
    $$("button", squares).forEach(function (b, j) { b.setAttribute("aria-current", String(j === sIdx)); });
    if (!RM) replay(rot, "go");
  }
  function restart() {
    clearInterval(timer);
    if (!RM) timer = setInterval(function () { showService(sIdx + 1); }, 3600);
  }
  if (rot && squares) {
    rot.addEventListener("mouseenter", function () { clearInterval(timer); });
    rot.addEventListener("mouseleave", restart);
    rot.addEventListener("focusin", function () { clearInterval(timer); });
    showService(0);
    rot.classList.remove("go");
    restart();
  }

  /* Quotes step one card at a time, so they always come to rest on grid lines */
  var quotes = K.quotes && K.quotes[0], track = quotes && $(".track", quotes), qN = track ? $$(".q", track).length : 0, qIdx = 0, qTimer = null;
  if (!RM && track) $$(".q", track).forEach(function (q) {
    var copy = q.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    track.appendChild(copy);
  });
  function qGo(i, instant) {
    if (!track) return;
    qIdx = i;
    var cw = parseFloat(getComputedStyle(quotes).getPropertyValue("--cw")) || 6;
    track.style.transition = instant ? "none" : "";
    track.style.transform = "translateX(" + (-i * cw * G.u) + "px)";
  }
  if (track) track.addEventListener("transitionend", function () { if (qIdx >= qN) qGo(qIdx - qN, true); });
  function qPlay() {
    clearInterval(qTimer);
    if (!RM) qTimer = setInterval(function () { qGo(qIdx + 1); }, 3400);
  }
  if (track) {
    quotes.addEventListener("mouseenter", function () { clearInterval(qTimer); });
    quotes.addEventListener("mouseleave", qPlay);
    quotes.addEventListener("focusin", function () { clearInterval(qTimer); });
    qPlay();
  }

  /* Start the slide-in and line drawing now that every box exists */
  drawable = $$("header .b, main .b, footer .b, main [data-slide], main .frame");
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

  /* About: words light up with scroll */
  var words = [], wordsEl = $("[data-words]");
  if (wordsEl) {
    var text = wordsEl.textContent.trim().split(/\s+/);
    wordsEl.textContent = "";
    var inner = document.createElement("span");
    text.forEach(function (w, i) {
      var s = document.createElement("span");
      s.className = "w";
      s.textContent = w;
      inner.appendChild(s);
      if (i < text.length - 1) inner.appendChild(document.createTextNode(" "));
      words.push(s);
    });
    wordsEl.appendChild(inner);
  }
  snapFlow();

  /* Scroll-linked state */
  var hero = $(".hero"), about = $(".about");
  var wl = K.wl && K.wl[0], wr = K.wr && K.wr[0], labels = $$(".h-lab"), prog = $(".prog"), progTick = $(".prog i");
  var queued = false;
  function update() {
    queued = false;
    var vh = innerHeight;
    var hr = hero ? hero.getBoundingClientRect() : null;
    var hp = hr ? clamp(-hr.top / Math.max(1, G.flow ? hr.height * .8 : hr.height - vh)) : 0;
    if (hr && wl && wr && !RM) {
      wl.style.transform = "translateX(" + (-hp * 22) + "vw)";
      wr.style.transform = "translateX(" + (hp * 22) + "vw)";
      wl.style.opacity = wr.style.opacity = String(1 - hp * 1.3);
      labels.forEach(function (l) { l.style.opacity = String(1 - hp * 2); });
    }
    if (!G.flow && work) {
      var wkr = work.getBoundingClientRect();
      showProject(Math.round(clamp(-wkr.top / Math.max(1, wkr.height - vh)) * (PROJECTS.length - 1)));
    }
    if (words.length && about) {
      var ar = about.getBoundingClientRect();
      var lit = RM ? words.length : Math.round(clamp((vh * .8 - ar.top) / (ar.height * .7)) * words.length);
      words.forEach(function (w, i) { w.classList.toggle("lit", i < lit); });
    }
    var max = root.scrollHeight - vh;
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
    layout(); qGo(qIdx, true); queue();
    if (drawIO) setSlide();
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { snapFlow(); queue(); });
  addEventListener("load", function () { G = {}; layout(); qGo(qIdx, true); queue(); });
  update();

  /* Particle orb: one canvas that travels between [data-orb] anchors */
  (function () {
    var canvas = $(".orb"), ctx = canvas && canvas.getContext("2d");
    if (!ctx) return;
    var anchors = $$("main [data-orb]");
    var N = innerWidth < 700 ? 900 : 1700;
    var pts = new Float32Array(N * 3), seed = new Float32Array(N);
    for (var i = 0; i < N; i++) {
      var y = 1 - (i + .5) / N * 2, r = Math.sqrt(1 - y * y), th = i * 2.399963;
      pts[i * 3] = Math.cos(th) * r; pts[i * 3 + 1] = y; pts[i * 3 + 2] = Math.sin(th) * r;
      seed[i] = Math.random();
    }
    var SHAPES = { sphere: [.035, 0], blob: [.13, 0], dust: [.05, .38] };
    var COLORS = { white: [250, 250, 250], teal: [67, 202, 188], amber: [217, 164, 65] };
    var cur = { x: innerWidth / 2, y: innerHeight / 2, r: 0, blob: .035, dust: 0, a: 0, col: [250, 250, 250] };
    var tgt = { x: cur.x, y: cur.y, r: 0, blob: .035, dust: 0, a: 0, col: [250, 250, 250], name: "sphere" };
    var mx = 0, my = 0, smx = 0, smy = 0, dpr = 1, W = 0, H = 0;
    var readout = $("[data-readout]"), pMeta = $("[data-p-meta]"), lastRead = 0;
    function size() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      W = innerWidth; H = innerHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function pick() {
      var best = null, bd = Infinity, vc = H / 2;
      for (var k = 0; k < anchors.length; k++) {
        var rc = anchors[k].getBoundingClientRect();
        if (rc.bottom < 0 || rc.top > H || rc.width === 0) continue;
        var d = Math.abs((rc.top + rc.bottom) / 2 - vc);
        if (d < bd) { bd = d; best = { el: anchors[k], rc: rc }; }
      }
      if (!best) { tgt.a = 0; return; }
      var el = best.el, rc2 = best.rc, sh = SHAPES[el.dataset.orb] || SHAPES.sphere;
      tgt.x = rc2.left + rc2.width / 2;
      tgt.y = rc2.top + rc2.height / 2;
      tgt.r = Math.min(rc2.width, rc2.height) * (+el.dataset.orbScale || .3);
      tgt.blob = sh[0]; tgt.dust = sh[1]; tgt.a = 1;
      tgt.col = COLORS[el.dataset.orbColor] || COLORS.white;
      tgt.name = el.dataset.orb;
    }
    function draw(t) {
      pick();
      var k = RM ? 1 : .12, kc = RM ? 1 : .06;
      if (cur.r === 0) { cur.x = tgt.x; cur.y = tgt.y; }
      cur.x += (tgt.x - cur.x) * k; cur.y += (tgt.y - cur.y) * k; cur.r += (tgt.r - cur.r) * k;
      cur.blob += (tgt.blob - cur.blob) * kc; cur.dust += (tgt.dust - cur.dust) * kc; cur.a += (tgt.a - cur.a) * kc;
      for (var c = 0; c < 3; c++) cur.col[c] += (tgt.col[c] - cur.col[c]) * kc;
      smx += (mx - smx) * .05; smy += (my - smy) * .05;
      ctx.clearRect(0, 0, W, H);
      if (cur.a > .01 && cur.r > 2) {
        var time = RM ? 0 : t;
        var ry = time * .00018 + smx * .6, rx = .35 + smy * .4;
        var cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx);
        ctx.fillStyle = "rgb(" + (cur.col[0] | 0) + "," + (cur.col[1] | 0) + "," + (cur.col[2] | 0) + ")";
        for (var i = 0; i < N; i++) {
          var x = pts[i * 3], y = pts[i * 3 + 1], z = pts[i * 3 + 2];
          var d = 1 + cur.blob * 2.2 * Math.sin(x * 3.1 + time * .0011) * Math.sin(y * 2.7 + time * .0013) * Math.sin(z * 3.3 + time * .0009);
          d += cur.dust * (seed[i] - .5) * 2 * (.7 + .3 * Math.sin(time * .0006 + seed[i] * 6.28));
          x *= d; y *= d; z *= d;
          var x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
          var y1 = y * cx - z1 * sx, z2 = y * sx + z1 * cx;
          var p = 2.8 / (2.8 - z2);
          var sz = (.55 + (z2 + 1) * .5) * (cur.dust > .2 ? .8 : 1);
          ctx.globalAlpha = Math.max(0, (.14 + (z2 + 1) * .36) * cur.a);
          ctx.fillRect(cur.x + x1 * cur.r * p, cur.y + y1 * cur.r * p, sz, sz);
        }
        ctx.globalAlpha = 1;
      }
      if (t - lastRead > 250) {
        lastRead = t;
        if (readout) readout.textContent = "points " + N + " · rot " + ((t * .00018) % 6.283).toFixed(2) + " rad · blob " + cur.blob.toFixed(2);
        if (pMeta) pMeta.textContent = "shape " + tgt.name + " · " + cur.blob.toFixed(2);
      }
      if (!RM) requestAnimationFrame(draw);
    }
    addEventListener("pointermove", function (e) { mx = e.clientX / innerWidth * 2 - 1; my = e.clientY / innerHeight * 2 - 1; }, { passive: true });
    addEventListener("resize", function () { size(); if (RM) draw(0); });
    size();
    if (RM) {
      addEventListener("scroll", function () { requestAnimationFrame(draw); }, { passive: true });
      draw(0);
    } else {
      requestAnimationFrame(draw);
    }
  })();

})();
