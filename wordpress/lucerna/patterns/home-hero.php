<?php
/**
 * Title: Home: hero
 * Slug: lucerna/home-hero
 * Categories: lucerna
 * Inserter: yes
 * Description: Two full-screen slides with 01 / 02 under them.
 *
 * @package Lucerna
 */

?>
<!-- wp:html -->
<section class="hero" id="top" aria-label="Highlights">
    <div class="slide" id="slide-0" style="background-image:url(<?php echo esc_url( get_theme_file_uri( 'assets/img/hero-1.webp' ) ); ?>)">
      <div class="slide-content"><h1>Light that draws the way forward.</h1><p>Every project is a chance to turn your idea into light. We walk the whole route with you.</p></div>
    </div>
    <div class="slide" id="slide-1" style="background-image:url(<?php echo esc_url( get_theme_file_uri( 'assets/img/hero-2.webp' ) ); ?>)">
      <div class="slide-content"><h2 class="h1">Together, we light up what comes next.</h2><p>Efficient lighting where new technology, low energy use, fair cost and lasting quality meet.</p></div>
    </div>
    <div class="slider-nav" role="tablist" aria-label="Slides">
      <button class="nav-item is-on" type="button" role="tab" aria-selected="true" data-slide="0">01</button>
      <button class="nav-item" type="button" role="tab" aria-selected="false" data-slide="1">02</button>
    </div>
    <span class="nav-hl" aria-hidden="true"></span>
  </section>
<!-- /wp:html -->
