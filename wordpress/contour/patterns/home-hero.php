<?php
/**
 * Title: Home: hero
 * Slug: contour/home-hero
 * Categories: contour
 * Inserter: yes
 * Description: A blueprint intro, the headline filling from outline to ink, a generated subline and a contour map that rises under the pointer.
 *
 * @package Contour
 */

?>
<!-- wp:html -->
<section class="hero wrap" id="top" data-hero>
    <div class="hero__top note">
      <span>Ada Ferrer · independent web &amp; AI developer</span>
      <span class="hide-sm">Base camp · 38.72° N, 9.14° W · Lisbon</span>
      <span>Booking from March</span>
    </div>
    <h1 class="hero__title">
      <span class="hero__human display" data-hero-human data-bp="h1.human">I build it.</span>
      <span class="hero__machine h2" data-hero-generate data-bp="h1.machine">Front-end and AI builds for design studios, when the concept is hard to ship.</span>
    </h1>
    <div class="hero__notes">
      <p class="note" data-hero-fade><span class="note--accent">●</span> human · set by hand</p>
      <p class="note" data-hero-fade><span class="note--accent">◆</span> machine · generated · <span data-gen-tokens>21</span> tokens · <span data-gen-ms>1920</span> ms</p>
      <p class="note hero__terrain" aria-hidden="true"><span class="note--accent">▲</span> relief · move the pointer to lift the ground</p>
    </div>
    <div class="hero__foot">
      <p class="hero__intro lead" data-hero-fade data-bp="p.lead">Turning difficult designs into fast, stable websites since 2011. These days the toolkit includes AI.</p>
      <div class="hero__ctas" data-hero-fade data-bp="nav.cta">
        <a class="btn" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>">Bring me the tricky part <span class="arrow" aria-hidden="true">→</span></a>
        <a class="btn btn--ghost" href="<?php echo esc_url( home_url( '/#work' ) ); ?>">See the projects</a>
      </div>
    </div>
  </section>
<!-- /wp:html -->
