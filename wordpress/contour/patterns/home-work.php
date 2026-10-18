<?php
/**
 * Title: Home: selected projects
 * Slug: contour/home-work
 * Categories: contour
 * Inserter: yes
 * Description: Three cases drawn sketch → build → launch; on wide screens the section pins and the cases change as you scroll.
 *
 * @package Contour
 */

?>
<!-- wp:html -->
<section class="section wrap" id="work" aria-labelledby="w-h">
    <header class="section-head"><span class="note note--ink">[02] Selected projects</span><span class="note">Field notes · client names kept private</span></header>
    <h2 class="work__intro lead" id="w-h" data-reveal="up">Most client work is under NDA. So each case shows how it was built rather than who it was for.</h2>
    <div class="ws" data-work-stage>
      <div class="ws__count" aria-hidden="true"><span class="ws__n" data-ws-n>01</span><span class="ws__of outline-text">/03</span></div>
      <div class="ws__stages note" aria-hidden="true">
        <ol><li data-ws-stage><span>01</span><b>Sketch</b><i></i></li><li data-ws-stage><span>02</span><b>Build</b><i></i></li><li data-ws-stage><span>03</span><b>Launch</b><i></i></li></ol>
        <div class="ws__rail"><i data-ws-dot></i><i data-ws-dot></i><i data-ws-dot></i></div>
      </div>

      <article class="ws__item" data-ws-item="angle">
        <div class="ws__text">
          <div class="ws__meta"><span class="note">01 / 2026</span><span class="note">WordPress · GSAP · Lenis</span></div>
          <h3 class="h3 ws__title">A shop site built on one angle</h3>
          <p class="ws__client note">Retail · via a branding studio</p>
          <p class="ws__summary">Every slanted edge on the site uses the 22° angle from the store's shelving, from the wide desktop layout down to the phone. The slider shows a hint of the next colour just before it changes.</p>
          <div class="ws__actions"><button type="button" class="btn btn--ghost" data-ws-try hidden>Next slide <span class="arrow" aria-hidden="true">→</span></button></div>
        </div>
        <div class="ws__art" aria-hidden="true">
          <img class="ws__photo" data-b-wipe src="<?php echo esc_url( get_theme_file_uri( 'assets/img/work-1-800.webp' ) ); ?>" srcset="<?php echo esc_url( get_theme_file_uri( 'assets/img/work-1-800.webp' ) ); ?> 800w, <?php echo esc_url( get_theme_file_uri( 'assets/img/work-1-1600.webp' ) ); ?> 1600w" sizes="(min-width: 1024px) 62vw, 100vw" width="800" height="500" alt="" loading="lazy">
          <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            <g class="plot">
              <path class="wire" pathLength="1" data-p-draw d="M60 440 300 60h420"/>
              <path class="guide" d="M60 440h300"/>
              <path class="wire" pathLength="1" data-p-draw d="M60 440a90 90 0 0 1 84-60"/>
              <text x="160" y="420" class="lbl lbl--a" data-p-in>22°</text>
              <text x="310" y="48" class="lbl lbl--a" data-p-in>shelf angle · construction</text>
              <path d="M420 300h150v110h-150z" class="wire" pathLength="1"/>
              <path d="M590 300h150v110h-150z" class="wire" pathLength="1"/>
              <text x="420" y="290" class="lbl" data-p-in data-b-dim>slide · w 50%</text>
              <text x="590" y="290" class="lbl" data-p-in data-b-dim>next · last 1/12</text>
            </g>
            <g class="live" data-live>
              <rect x="0" y="0" width="800" height="500" class="veil" data-live-clip/>
              <rect x="48" y="440" width="220" height="3" class="track"/>
              <rect x="48" y="440" width="73.3" height="3" class="track-on" data-ws-progress/>
              <text x="290" y="447" class="lbl lbl--light" data-ws-counter>01 / 03</text>
            </g>
          </svg>
        </div>
      </article>

      <article class="ws__item" data-ws-item="names">
        <div class="ws__text">
          <div class="ws__meta"><span class="note">02 / 2026</span><span class="note">Python · Vision · Search data</span></div>
          <h3 class="h3 ws__title">Product photos that name themselves</h3>
          <p class="ws__client note">Ceramics maker · Shopify</p>
          <p class="ws__summary">Search data and an image model decide how each product photo is named, described and tagged. Several hundred photos a day go through it, and nobody renames files by hand any more.</p>
          <div class="ws__actions"><button type="button" class="btn btn--ghost" data-ws-try hidden>Rename another <span aria-hidden="true">↻</span></button></div>
        </div>
        <div class="ws__art" aria-hidden="true">
          <img class="ws__photo" data-b-wipe src="<?php echo esc_url( get_theme_file_uri( 'assets/img/work-2-800.webp' ) ); ?>" srcset="<?php echo esc_url( get_theme_file_uri( 'assets/img/work-2-800.webp' ) ); ?> 800w, <?php echo esc_url( get_theme_file_uri( 'assets/img/work-2-1600.webp' ) ); ?> 1600w" sizes="(min-width: 1024px) 62vw, 100vw" width="800" height="500" alt="" loading="lazy">
          <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            <g class="plot">
              <path d="M40 60h225v160h-225z" class="wire" pathLength="1"/>
              <path d="M285 60h225v160h-225z" class="wire" pathLength="1"/>
              <path d="M530 60h225v160h-225z" class="wire" pathLength="1"/>
              <text x="40" y="248" class="lbl lbl--a" data-p-in data-b-dim>DSC_2210.jpg</text>
              <text x="285" y="248" class="lbl lbl--a" data-p-in data-b-dim>DSC_2211.jpg</text>
              <text x="530" y="248" class="lbl lbl--a" data-p-in data-b-dim>DSC_2212.jpg</text>
              <text x="40" y="400" class="lbl lbl--a" data-p-in>search data · product page · image model</text>
              <text x="40" y="428" class="lbl lbl--a" data-p-in>→ file name · alt · tags</text>
            </g>
            <g class="live" data-live>
              <rect x="0" y="0" width="800" height="500" class="veil" data-live-clip/>
              <rect x="40" y="400" width="420" height="64" rx="8" class="chip"/>
              <text x="58" y="426" class="lbl lbl--ink">file name</text>
              <text x="58" y="450" class="lbl lbl--ink lbl--lg" data-ws-f="name">speckled-stoneware-mug-front.webp</text>
            </g>
          </svg>
        </div>
      </article>

      <article class="ws__item" data-ws-item="relief">
        <div class="ws__text">
          <div class="ws__meta"><span class="note">03 / 2025</span><span class="note">Astro · WebGL · Mapbox</span></div>
          <h3 class="h3 ws__title">An outdoor guide you can tilt</h3>
          <p class="ws__client note">Travel publisher · via an agency</p>
          <p class="ws__summary">Routes drawn on a live 3D relief, with pages that load in under a second on hotel wifi. Lighthouse on mobile: 97 on the home page and 99 on route pages.</p>
          <div class="ws__actions"><a class="btn" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>">Ask about this build <span class="arrow" aria-hidden="true">→</span></a></div>
        </div>
        <div class="ws__art" aria-hidden="true">
          <img class="ws__photo" data-b-wipe src="<?php echo esc_url( get_theme_file_uri( 'assets/img/work-3-800.webp' ) ); ?>" srcset="<?php echo esc_url( get_theme_file_uri( 'assets/img/work-3-800.webp' ) ); ?> 800w, <?php echo esc_url( get_theme_file_uri( 'assets/img/work-3-1600.webp' ) ); ?> 1600w" sizes="(min-width: 1024px) 62vw, 100vw" width="800" height="500" alt="" loading="lazy">
          <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
            <g class="plot">
              <path d="M230 130h340v200h-340z" class="wire" pathLength="1"/>
              <text x="230" y="118" class="lbl lbl--a" data-p-in data-b-dim>route · 14.2 km · +860 m</text>
              <text x="570" y="354" text-anchor="end" class="lbl lbl--a" data-p-in data-b-dim>rev. 2025</text>
            </g>
            <g class="live" data-live>
              <rect x="0" y="0" width="800" height="500" class="veil" data-live-clip/>
              <path class="hill" data-ws-hill/><path class="hill" data-ws-hill/><path class="hill" data-ws-hill/><path class="hill hill--a" data-ws-hill/><path class="hill" data-ws-hill/><path class="hill" data-ws-hill/><path class="hill" data-ws-hill/><path class="hill" data-ws-hill/><path class="hill" data-ws-hill/>
              <text x="40" y="470" class="lbl lbl--light">Lighthouse mobile · 97 · 100 · 100 · 100</text>
            </g>
          </svg>
        </div>
      </article>
    </div>
  </section>
<!-- /wp:html -->
