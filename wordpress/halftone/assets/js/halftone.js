/* Halftone: the template's script, adapted for WordPress (see build_halftone.py). */
(function () {
  "use strict";
  var RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var root = document.documentElement;
  function $(s, r) { return (r || document).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function clamp(v) { return Math.min(1, Math.max(0, v)); }
  var year = $("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  /* Loader: count to 100, then the tilted page straightens and fills the screen */
  function ready() { root.classList.add("ready"); }
  var loader = $(".loader");
  if (loader && root.classList.contains("loading")) {
    var pct = $("[data-pct]"), dots = $("[data-dots]"), t0 = performance.now(), done = false, TOTAL = 2200;
    var finish = function () {
      if (done) return;
      done = true;
      try { sessionStorage.setItem("halftone-loader", "1"); } catch (e) {}
      loader.classList.add("zoom");
      setTimeout(function () { ready(); loader.classList.add("gone"); root.classList.remove("loading"); }, 1000);
      setTimeout(function () { loader.remove(); }, 1600);
    };
    loader.addEventListener("click", finish);
    (function tick() {
      var p = clamp((performance.now() - t0) / TOTAL);
      pct.textContent = Math.round(p * 100);
      dots.textContent = "....".slice(0, 1 + Math.floor(performance.now() / 300) % 4);
      if (p < 1 && !done) requestAnimationFrame(tick); else finish();
    })();
  } else {
    root.classList.remove("loading");
    if (loader) loader.remove();
    requestAnimationFrame(function () { requestAnimationFrame(ready); });
  }

  /* Header hides on the way down and returns on the way up */
  var top = $(".top"), lastY = scrollY;

  /* Menu */
  var navBox = $(".ht-nav .wp-block-navigation__responsive-container");
  function menuOpen() { return !!(navBox && navBox.classList.contains("is-menu-open")); }
  if (navBox && "MutationObserver" in window) new MutationObserver(function () {
    root.classList.toggle("menu-open", menuOpen());
  }).observe(navBox, { attributes: true, attributeFilter: ["class"] });
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".ht-nav .is-menu-open a[href]");
    if (!a) return;
    var close = a.closest(".is-menu-open").querySelector(".wp-block-navigation__responsive-container-close");
    if (close) close.click();
  });

  /* Scroll-driven parts: the hero turns into its second frame, the clarity strip rises and opens, the pattern drifts */
  var hero = $("[data-hero]"), clarity = $("[data-clarity]"), stats = $("[data-stats]"), queued = false;
  var work = $("[data-work]"), panels = work ? $$(".project", work) : [];
  if (work) work.style.setProperty("--n", panels.length);
  // One project = 100vh of entrance + 70vh of hold; the first one arrives with the page, so it only holds.
  function stage() {
    if (!work) return;
    var vh = innerHeight, y = -work.getBoundingClientRect().top, hold = .7 * vh;
    panels.forEach(function (p, i) {
      if (!i) return;
      var e = clamp((y - hold - (i - 1) * (vh + hold)) / vh), k = (1 - e) * 100, from = p.dataset.from;
      p.style.transform = from === "left" ? "translateX(" + -k + "%)" : from === "right" ? "translateX(" + k + "%)" : "translateY(" + k + "%)";
      p.style.setProperty("--e", e.toFixed(3));
      p.style.visibility = e > 0 ? "visible" : "hidden";
    });
  }
  function progress(el) {
    var r = el.getBoundingClientRect();
    return clamp(-r.top / Math.max(1, r.height - innerHeight));
  }
  function update() {
    queued = false;
    var y = scrollY;
    if (top) top.classList.toggle("hide", y > lastY && y > innerHeight * .5 && !root.classList.contains("menu-open"));
    lastY = y;
    if (RM) return;
    stage();
    if (hero) {
      var hp = progress(hero);
      hero.style.setProperty("--p", hp.toFixed(3));
      hero.style.setProperty("--f", clamp((hp - .25) / .5).toFixed(3));
    }
    if (clarity) {
      var cp = progress(clarity);
      clarity.style.setProperty("--a", clamp(cp / .3).toFixed(3));
      clarity.style.setProperty("--b", clamp((cp - .35) / .3).toFixed(3));
      clarity.style.setProperty("--t", clamp((cp - .7) / .2).toFixed(3));
    }
    if (stats) {
      var sr = stats.getBoundingClientRect();
      stats.style.setProperty("--sp", clamp(1 - sr.bottom / (innerHeight + sr.height)).toFixed(3));
    }
  }
  function queue() { if (!queued) { queued = true; requestAnimationFrame(update); } }
  addEventListener("scroll", queue, { passive: true });
  addEventListener("resize", queue);
  update();

  /* Entrances: lines rise, project bars slide up, the contact card arrives, the numbers count */
  var targets = $$(".rise, .project, [data-contact], [data-count]");
  function countUp(el) {
    var end = +el.dataset.count, plus = el.textContent.indexOf("+") > -1, t0 = performance.now();
    (function step(now) {
      var p = clamp((now - t0) / 1400), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
      el.textContent = v + (plus ? "+" : "");
      if (p < 1) requestAnimationFrame(step);
    })(t0);
  }
  if ("IntersectionObserver" in window && !RM) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        e.target.classList.add("in");
        if (e.target.dataset.count) countUp(e.target);
      });
    }, { threshold: .25 });
    targets.forEach(function (el) { io.observe(el); });
  } else {
    targets.forEach(function (el) { el.classList.add("in"); });
  }

})();
