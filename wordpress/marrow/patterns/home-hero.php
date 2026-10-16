<?php
/**
 * Title: Home: hero
 * Slug: marrow/home-hero
 * Categories: marrow
 * Inserter: yes
 * Description: The blue hero card: the giant MARROW wordmark, the cut-out dog (or cat) photo, the button to the recipes and the dog/cat switch.
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<div class="hero-pin">
    <section class="hero" aria-label="Marrow Kitchen">
      <div class="hero-card">
        <h1 class="sr">Marrow, fresh raw food for dogs and cats</h1>
        <div class="hero-word" aria-hidden="true"><span>MARROW</span></div>
        <div class="hero-media" role="img" aria-label="A happy dog waiting for dinner" data-hero-media>
          <img data-still="dog" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/hero-dog.webp' ) ); ?>" alt="" width="1000" height="1000">
          <img data-still="cat" data-src="<?php echo esc_url( get_theme_file_uri( 'assets/img/hero-cat.webp' ) ); ?>" alt="" width="1000" height="1000">
          <svg class="strokes" viewBox="0 0 130 110" aria-hidden="true"><path pathLength="1" d="M14 64C26 40 42 22 64 8"/><path pathLength="1" d="M40 98c22-14 48-22 80-24"/></svg>
        </div>
        <a class="hero-cta" href="#recipes"><span data-pet-text>Raw meals for dogs</span><span class="circ" aria-hidden="true"><svg><use href="#i-arrow"/></svg></span></a>
        <div class="pet-switch" role="group" aria-label="Show food for">
          <span class="hl" aria-hidden="true"></span>
          <button type="button" data-pet="dog" aria-pressed="true" aria-label="Dogs"><svg aria-hidden="true"><use href="#i-dog"/></svg></button>
          <button type="button" data-pet="cat" aria-pressed="false" aria-label="Cats"><svg aria-hidden="true"><use href="#i-cat"/></svg></button>
        </div>
      </div>
    </section>
  </div>
<!-- /wp:html -->
