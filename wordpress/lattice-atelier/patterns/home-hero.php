<?php
/**
 * Title: Home: projects (split hero)
 * Slug: lattice-atelier/home-hero
 * Categories: lattice-atelier
 * Inserter: yes
 * Description: The pinned split hero: scrolling changes the project, the photo wipes up and the labels roll.
 *
 * @package Lattice_Atelier
 */

?>
<!-- wp:html -->
<section class="sec hero" id="top" aria-labelledby="h-title">
    <h1 class="sr">Telaro — windows and doors made in Porto</h1>
    <div class="screen grid-on">
      <div class="slides">
        <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/house.webp' ) ); ?>" alt="A lime-washed courtyard house at dusk with tall bronze-framed glass doors"></figure>
        <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/window.webp' ) ); ?>" alt="Floor-to-ceiling oak windows set in pale limestone walls" decoding="async"></figure>
        <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/room.webp' ) ); ?>" alt="Sample window frames standing in the Porto atelier" decoding="async"></figure>
      </div>
      <div class="gridlay" aria-hidden="true"></div>
      <div class="b ink h-tab" data-k="h-tab">
        <p class="small h-count" data-count>01 . 03</p>
        <p class="h-cat" data-cat>Projects</p>
      </div>
      <a class="b ink small h-more" href="#manifesto" data-k="h-more" data-more><span data-hover>All projects</span></a>
      <p class="h-words" data-k="h-words" data-rise>Light<br>Frame<br>Home</p>
      <div class="b paper h-cap" data-k="h-cap">
        <p data-num>N°001</p>
        <h2 id="h-title" data-title>Casa Lume<br>Alentejo</h2>
        <a class="small h-disc" href="#manifesto" data-disc><span data-hover>Discover</span></a>
        <i class="h-bar" aria-hidden="true"><i></i></i>
      </div>
      <button class="b paper h-arrow" type="button" data-k="h-prev" aria-label="Previous project">‹</button>
      <button class="b paper h-arrow" type="button" data-k="h-next" aria-label="Next project">›</button>
    </div>
  </section>
<!-- /wp:html -->
