<?php
/**
 * Title: Home: about and light zones
 * Slug: lucerna/home-about
 * Categories: lucerna
 * Inserter: yes
 * Description: About us next to the house at dusk with five light switches.
 *
 * @package Lucerna
 */

?>
<!-- wp:html -->
<section class="sec5" id="about">
    <div class="sec5-text">
      <p class="small">About Us</p>
      <h2 class="primary">Committed to excellence</h2>
      <p class="secondary">For over ten years a name builders trust: solid engineering, plain talk and lighting shaped around what our partners and clients really ask for.</p>
      <a class="btn-out" href="<?php echo esc_url( home_url( '/#values' ) ); ?>">Learn more <svg class="ic"><use href="#arrow"/></svg></a>
    </div>
    <div class="img-container">
      <div class="img-wrap">
        <div class="img-inner">
          <div class="scene"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/house-off.webp' ) ); ?>" alt="A modern house at dusk with garden and carport" width="2400" height="1200" loading="lazy"></div>
          <div class="layer z1" data-z="1"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/house-on.webp' ) ); ?>" alt="" width="2400" height="1200" loading="lazy"></div>
          <div class="layer z2" data-z="2"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/house-on.webp' ) ); ?>" alt="" width="2400" height="1200" loading="lazy"></div>
          <div class="layer z3" data-z="3"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/house-on.webp' ) ); ?>" alt="" width="2400" height="1200" loading="lazy"></div>
          <div class="layer z4" data-z="4"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/house-on.webp' ) ); ?>" alt="" width="2400" height="1200" loading="lazy"></div>
          <div class="layer z5" data-z="5"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/house-on.webp' ) ); ?>" alt="" width="2400" height="1200" loading="lazy"></div>
        </div>
      </div>
      <div class="controls" aria-hidden="true">
        <div class="controls-in">
          <p class="controls-title">Switches</p>
          <div class="switch-row">
            <div class="switch-col"><button class="toggle" type="button" role="switch" aria-checked="false" data-z="1" aria-label="Zone 1, upper floor"><span class="knob"><svg width="14" height="14"><use href="#power"/></svg></span></button><span class="sw-label">Zone 1</span></div>
            <div class="switch-col"><button class="toggle" type="button" role="switch" aria-checked="false" data-z="2" aria-label="Zone 2, living room"><span class="knob"><svg width="14" height="14"><use href="#power"/></svg></span></button><span class="sw-label">Zone 2</span></div>
            <div class="switch-col"><button class="toggle" type="button" role="switch" aria-checked="false" data-z="3" aria-label="Zone 3, garden"><span class="knob"><svg width="14" height="14"><use href="#power"/></svg></span></button><span class="sw-label">Zone 3</span></div>
            <div class="switch-col"><button class="toggle" type="button" role="switch" aria-checked="false" data-z="4" aria-label="Zone 4, carport"><span class="knob"><svg width="14" height="14"><use href="#power"/></svg></span></button><span class="sw-label">Zone 4</span></div>
            <div class="switch-col"><button class="toggle" type="button" role="switch" aria-checked="false" data-z="5" aria-label="Zone 5, eaves"><span class="knob"><svg width="14" height="14"><use href="#power"/></svg></span></button><span class="sw-label">Zone 5</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- /wp:html -->
