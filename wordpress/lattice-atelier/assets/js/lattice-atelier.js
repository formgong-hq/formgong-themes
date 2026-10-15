/* Lattice Atelier: the template's script, adapted for WordPress (see build_lattice_atelier.py). */
(function () {
  "use strict";
  var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function clamp(v, a, b) { return Math.min(b === undefined ? 1 : b, Math.max(a || 0, v)); }

  // The hero slides. Edit these for your own projects; the photos are the <img> tags in .slides, in the same order.
  var SLIDES = [
    { cat: "Projects", more: "All projects", href: "#manifesto", n: "N°001", title: "Casa Lume\nAlentejo" },
    { cat: "Collections", more: "All collections", href: "#collections", n: "N°002", title: "Oak & Bronze\nWindows" },
    { cat: "Atelier", more: "Visit the atelier", href: "#ateliers", n: "N°003", title: "Atelier\nPorto" }
  ];
  var LOADER_WORDS = ["Light", "Frame", "Home", "Telaro"];

  /* Letters */
  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function textOf(el) {
    return Array.prototype.map.call(el.childNodes, function (n) { return n.nodeName === "BR" ? "\n" : n.textContent; }).join("").replace(/[ \t\r]+/g, " ").trim();
  }
  function letters(text, words) {
    var i = 0;
    return text.split("\n").map(function (line) {
      if (words) return line.split(" ").map(function (w) { return '<span class="wd"><span class="ch" style="--i:' + (i++) + '">' + esc(w) + "</span></span>"; }).join(" ");
      return '<span class="ln">' + Array.from(line).map(function (c) { return '<span class="ch" style="--i:' + (i++) + '">' + esc(c) + "</span>"; }).join("") + "</span>";
    }).join(words ? "<br>" : "");
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
    nu.style.setProperty("--d", ".16s");
    nu.innerHTML = letters(text);
    rw.appendChild(nu);
    void nu.offsetWidth;
    nu.classList.remove("in");
    if (old) {
      old.classList.add("out");
      old.classList.toggle("rev", dir < 0);
      setTimeout(function () { old.remove(); }, 1600);
    }
  }
  function hover(el, text) {
    el.innerHTML = '<span class="sr"></span><span class="hv" aria-hidden="true">' + Array.from(text).map(function (c, i) { return '<span class="ch" style="--i:' + i + '">' + esc(c) + "</span>"; }).join("") + "</span>";
    el.firstChild.textContent = text;
  }
  $$("[data-hover]").forEach(function (el) { hover(el, textOf(el)); });
  $$("[data-rise]").forEach(function (el) {
    var words = el.dataset.rise === "w";
    var text = textOf(el);
    el.innerHTML = '<span class="sr"></span><span class="rw" aria-hidden="true"><span class="ly">' + letters(text, words) + "</span></span>";
    el.firstChild.textContent = text.replace(/\n/g, " ");
    el.classList.add("rise");
    if (words) el.style.setProperty("--st", "34ms");
  });

  /* Grid layout. Every box is placed by grid lines, so its borders fall on the drawn grid.
     Wide screens: each section is a pinned screen of --rows × --cols cells on a grid fixed to the window.
     Narrow screens: the hero stays pinned, the other sections flow with heights in whole cells. */
  var K = {};
  $$("[data-k]").forEach(function (el) { (K[el.dataset.k] = K[el.dataset.k] || []).push(el); });
  var G = {};
  function A(k, r1, c1, r2, c2, i) {
    var el = K[k] && K[k][i || 0];
    if (el) el.style.gridArea = r1 + " / " + c1 + " / " + r2 + " / " + c2;
  }
  function layout() {
    // Some mobile browsers report a too-tall window before the first paint; take the smallest reading.
    // Below 1080px the split hero and the side-by-side form get too tight, so the page flows instead.
    var W = root.clientWidth, H = Math.min(innerHeight, root.clientHeight || innerHeight, screen.height || innerHeight), flow = W < 1080;
    if (flow && G.flow && G.W === W) H = G.H;
    var u = flow ? 56 : 75;
    var C = Math.max(5, Math.floor((W - 2 * (flow ? 16 : 45)) / u));
    var gut = Math.floor((W - C * u) / 2);
    var R = Math.max(flow ? 11 : 8, Math.floor(H / u));
    G = { W: W, H: H, flow: flow, u: u, C: C, R: R, gut: gut };
    root.classList.toggle("F", flow);
    root.classList.toggle("L", !flow);
    var big = C >= 15, S = flow ? 0 : Math.max(6, Math.round(C * .42));
    var s = root.style;
    s.setProperty("--u", u + "px"); s.setProperty("--gut", gut + "px");
    s.setProperty("--cols", C); s.setProperty("--rows", R); s.setProperty("--split", S);
    $$("[data-k]").forEach(function (el) { el.style.gridArea = ""; });
    $$("[data-rows], [data-snap]").forEach(function (el) { el.style.height = ""; });

    var form = $("#fg-form") || document.createElement("div"), phoneField = document.createElement("div"), cap = 0;

    // Header, loader and menu
    A("b-menu", 1, 1, 2, 2); A("b-write", 1, C, 2, C + 1);
    A("i-est", 1, 1, 2, 4); A("i-load", 1, C - 2, 2, C + 1); A("i-word", R - 3, 1, R, C + 1);
    if (!flow) {
      A("mn-links", 2, 1, 7, 1 + S); A("mn-a", 2, S + 2, 5, C + 1); A("mn-b", 5, S + 2, 7, C + 1);
    } else {
      A("mn-links", 2, 1, 7, C + 1); A("mn-a", 8, 1, 10, C + 1); A("mn-b", 10, 1, 12, C + 1);
    }

    if (!flow) {
      // Hero: a staircase of ink boxes on the paper side, the caption steps over the photo
      var TA = Math.max(3, S - 2), r0 = Math.floor((R - 2) / 2) + 1, CW = Math.min(big ? 5 : 4, C - 3 - S), c0 = S + 2;
      A("h-tab", r0, 1, r0 + 2, 1 + TA); A("h-more", r0 + 1, 1 + TA, r0 + 2, S + 1);
      A("h-words", R - 2, 1, R, S + 1);
      A("h-cap", R - 2, c0, R, c0 + CW); A("h-prev", R - 2, c0 + CW, R - 1, c0 + CW + 1); A("h-next", R - 2, c0 + CW + 1, R - 1, c0 + CW + 2);
      // Manifesto
      var MI = big ? 5 : 4, FW = Math.floor((C - MI - 1) / 3);
      A("m-label", 2, 1, 3, 4); A("m-text", 3, 1, R - 2, C - MI); A("m-img", 2, C + 1 - MI, R, C + 1);
      for (var i = 0; i < 3; i++) A("m-fact", R - 2, 1 + i * FW, R, 1 + (i + 1) * FW, i);
      // Collections and ateliers: the rows end where the manifesto and the form end, one row above the bottom
      var top = R - 4;
      A("c-head", 2, 1, top, C - 2); A("c-cta", top - 1, C - 2, top, C + 1);
      for (var j = 0; j < 4; j++) A("c-row", top + j, 1, top + j + 1, C + 1, j);
      var AW = Math.floor((C - 3) / 2);
      A("a-head", 2, 1, top, C + 1);
      for (var k = 0; k < 2; k++) {
        var ar = top + k * 2;
        A("a-lab", ar, 1, ar + 2, 4, k); A("a-addr", ar, 4, ar + 2, 4 + AW, k); A("a-tel", ar, 4 + AW, ar + 2, C + 1, k);
      }
      // Contact: heading and direct lines on the paper side, the form in rows on the right
      var BW = Math.floor(S / 2), FR = R - 2, keep = FR - cap - 5 >= 2;
      A("k-head", 2, 1, 5, S + 1); A("k-text", 5, 1, R - 2, S + 1);
      A("k-box", R - 2, 1, R, 1 + BW, 0); A("k-box", R - 2, 1 + BW, R, S + 1, 1);
      A("form", 2, S + 2, R, C + 1);
      phoneField.hidden = !keep;
      form.style.setProperty("--msg", Math.max(1, FR - cap - (keep ? 5 : 4)));
      form.style.setProperty("--fr", FR);
      // Footer
      // Footer: link columns need three rows; the name below gets what is left, and its size follows
      var FC = Math.floor(C / 4), fe = R >= 10 ? R - 4 : 5;
      for (var m = 0; m < 4; m++) A("ft-col", 2, 1 + m * FC, fe, m === 3 ? C + 1 : 1 + (m + 1) * FC, m);
      A("ft-mark", fe, 1, R - 1, C + 1);
      if (K["ft-mark"]) K["ft-mark"][0].style.fontSize = Math.round((R - 1 - fe) * u * .83) + "px";
      A("ft-copy", R - 1, 1, R, 4); A("ft-priv", R - 1, 4, R, 6); A("ft-terms", R - 1, 6, R, 8); A("ft-credit", R - 1, C - 2, R, C + 1);
    } else {
      // Tablets get the phone layout with the boxes capped, so they keep their proportions
      var tw = Math.min(C - 2, 5), cw = Math.min(C, 7);
      A("h-tab", 3, 1, 5, 1 + tw); A("h-more", 4, 1 + tw, 5, 3 + tw);
      A("h-cap", R - 2, 1, R, 1 + cw); A("h-prev", R - 3, cw - 1, R - 2, cw); A("h-next", R - 3, cw, R - 2, cw + 1);
      phoneField.hidden = false;
      if (K["ft-mark"]) K["ft-mark"][0].style.fontSize = "";
      form.style.setProperty("--msg", 3);
      form.style.setProperty("--fr", 9 + cap);
      $$("[data-rows]").forEach(function (el) { el.style.height = (+el.dataset.rows * u + (el.classList.contains("b") ? 1 : 0)) + "px"; });
      snapFlow();
    }
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
  layout();

  /* Hero texts start as plain text in the HTML; split them into letters now */
  var catEl = $("[data-cat]"), countEl = $("[data-count]"), numEl = $("[data-num]"), titleEl = $("[data-title]");
  var moreEl = $("[data-more]"), discEl = $("[data-disc]");
  [catEl, countEl, numEl, titleEl].forEach(function (el) { if (el) roll(el, textOf(el), 1); });

  /* Boxes slide in from their side, then their frames draw from the top-left corner. */
  var drawable = $$("header .b, main .b, footer .b"), drawIO = null, riseIO = null;
  function setSlide() {
    drawable.forEach(function (el) {
      if (el.classList.contains("drawn")) return;
      var r = el.getBoundingClientRect(), sx;
      if (el.parentElement.closest(".b") || getComputedStyle(el.parentElement).overflow !== "visible") sx = 0;
      else if (r.width > innerWidth * .6) sx = -1;
      else sx = r.left + r.width / 2 < innerWidth / 2 ? -1 : 1;
      el.style.setProperty("--sx", sx * 56 + "px");
    });
  }
  function startDraw() {
    if (drawIO) drawable.forEach(function (el) { drawIO.observe(el); });
    if (riseIO) $$(".rise").forEach(function (el) { riseIO.observe(el); });
  }

  /* Loader */
  var intro = $(".intro");
  if (root.classList.contains("js-intro") && intro) {
    var word = $(".i-word", intro), pct = $("[data-pct]", intro), finished = false, leaving = false, t0 = performance.now();
    var STEP = 620, TOTAL = STEP * LOADER_WORDS.length + 500;
    var done = function () {
      if (finished) return;
      finished = true;
      root.classList.remove("js-intro");
      intro.remove();
      try { sessionStorage.setItem("atelier-intro", "1"); } catch (e) {}
      startDraw();
    };
    var leave = function () {
      if (leaving) return;
      leaving = true;
      intro.classList.add("out");
      setTimeout(done, 1100);
    };
    intro.addEventListener("click", leave);
    roll(word, "", 1);
    LOADER_WORDS.forEach(function (w, i) { setTimeout(function () { if (!leaving) roll(word, w, 1); }, 150 + i * STEP); });
    (function count() {
      var p = clamp((performance.now() - t0) / TOTAL);
      pct.textContent = String(Math.round(p * 100)).padStart(3, "0");
      if (p < 1 && !leaving) requestAnimationFrame(count);
      else if (!leaving) leave();
    })();
    setTimeout(done, 9000);
  } else if (intro) {
    intro.remove();
  } else {
    root.classList.remove("js-intro");
  }

  var year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* Menu */
  function label(btn, text) {
    if (!btn || btn.dataset.la) return;
    btn.dataset.la = "1";
    var s = document.createElement("span");
    btn.appendChild(s);
    hover(s, text);
    s.firstChild.remove();
  }
  label($(".la-nav .wp-block-navigation__responsive-container-open"), "Menu");
  label($(".la-nav .wp-block-navigation__responsive-container-close"), "Close");
  $$(".la-nav .la-mlink .wp-block-navigation-item__label").forEach(function (el) { hover(el, textOf(el)); });
  var navBox = $(".la-nav .wp-block-navigation__responsive-container");
  function menuOpen() { return !!(navBox && navBox.classList.contains("is-menu-open")); }
  if (navBox && "MutationObserver" in window) new MutationObserver(function () {
    root.classList.toggle("menu-open", menuOpen());
    queue();
  }).observe(navBox, { attributes: true, attributeFilter: ["class"] });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".la-nav .is-menu-open a[href]");
    if (!a || !a.hash || a.origin !== location.origin || a.pathname !== location.pathname) return;
    var close = a.closest(".is-menu-open").querySelector(".wp-block-navigation__responsive-container-close");
    if (close) close.click();
  });

  /* Hero: scrolling through the pinned hero changes the slide; the photo wipes up and the labels roll */
  var hero = $(".hero"), heroScreen = $(".hero .screen"), slides = $$(".slide"), bar = $(".h-bar i");
  var prevBtn = (K["h-prev"] || [])[0], nextBtn = (K["h-next"] || [])[0], cur = 0, z = 1, n = SLIDES.length;
  if (!hero || !heroScreen || slides.length < n || !bar || !prevBtn || !nextBtn || !catEl || !titleEl || !moreEl || !discEl) hero = null;
  if (hero) slides[0].style.zIndex = 1;
  function pad(v) { return String(v).padStart(2, "0"); }
  function heroSpan() { return Math.max(1, hero.offsetHeight - heroScreen.offsetHeight); }
  function heroT() { if (!hero) return 0; return clamp(-hero.getBoundingClientRect().top / heroSpan()) * (n - 1); }
  function goSlide(k) {
    var top = scrollY + hero.getBoundingClientRect().top;
    scrollTo({ top: Math.round(top + heroSpan() * k / (n - 1)), behavior: RM ? "auto" : "smooth" });
  }
  function showSlide(i) {
    if (i === cur) return;
    var dir = i > cur ? 1 : -1, st = SLIDES[i], inc = slides[i], img = inc.firstElementChild, oimg = slides[cur].firstElementChild;
    roll(catEl, st.cat, dir); roll(countEl, pad(i + 1) + " . " + pad(n), dir);
    roll(numEl, st.n, dir); roll(titleEl, st.title, dir);
    hover($("[data-hover]", moreEl), st.more);
    moreEl.href = discEl.href = st.href;
    inc.style.zIndex = ++z;
    if (!RM) {
      inc.style.transition = img.style.transition = "none";
      inc.style.clipPath = dir > 0 ? "inset(100% 0 0 0)" : "inset(0 0 100% 0)";
      img.style.transform = "translateY(" + (dir > 0 ? 16 : -16) + "%) scale(1.08)";
      void inc.offsetWidth;
      inc.style.transition = "clip-path 1.2s var(--ease)";
      img.style.transition = "transform 1.6s var(--ease)";
      inc.style.clipPath = "inset(0)";
      img.style.transform = "none";
      oimg.style.transition = "transform 1.2s var(--ease)";
      oimg.style.transform = "translateY(" + (dir > 0 ? -12 : 12) + "%)";
    }
    cur = i;
    prevBtn.disabled = i === 0;
  }
  if (hero) {
  prevBtn.disabled = true;
  prevBtn.addEventListener("click", function () { if (cur > 0) goSlide(cur - 1); });
  nextBtn.addEventListener("click", function () {
    if (cur < n - 1) goSlide(cur + 1);
    else { var next = hero.nextElementSibling || $("#manifesto"); if (next) next.scrollIntoView({ behavior: RM ? "auto" : "smooth" }); }
  });
  }

  var queued = false, foot = $(".foot");
  function update() {
    queued = false;
    var t = heroT();
    root.classList.toggle("bar-on", !hero || hero.getBoundingClientRect().bottom < heroScreen.offsetHeight - 1);
    root.classList.toggle("bar-dark", menuOpen() || (!!foot && foot.getBoundingClientRect().top < G.u));
    if (!hero) return;
    showSlide(Math.min(n - 1, Math.round(t)));
    bar.style.setProperty("--p", (t / (n - 1)).toFixed(4));
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

  /* Start the slide-in, line drawing and letter rise now that every box exists */
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
    riseIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { riseIO.unobserve(e.target); e.target.classList.add("in"); } });
    }, { rootMargin: "0px 0px -10% 0px" });
    if (!root.classList.contains("js-intro")) startDraw();
  } else {
    $$(".rise").forEach(function (el) { el.classList.add("in"); });
  }
  update();

})();
