<?php
/**
 * Title: Home: slider
 * Slug: soglia/home-slider
 * Categories: soglia
 * Inserter: yes
 * Description: One screen: the photo, the dark tab with the category, the caption and the arrows; wheel, swipe and keys move it.
 *
 * @package Soglia
 */

?>
<!-- wp:html -->
<section class="home" id="home" aria-labelledby="h-title" aria-roledescription="carousel">
    <h1 class="sr">Orlo — designer windows and doors</h1>
    <div class="stage">
      <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/proj-1.webp' ) ); ?>" alt="A single-storey house at dusk behind a wall of slim-framed glass"></figure>
      <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/proj-2.webp' ) ); ?>" alt="A dark timber house with glass corners among birch trees" decoding="async"></figure>
      <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/win-1.webp' ) ); ?>" alt="A concrete house with tall oak-framed windows" decoding="async"></figure>
      <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/win-2.webp' ) ); ?>" alt="Black-framed sliding glass doors opening onto a garden" decoding="async"></figure>
      <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/at-1.webp' ) ); ?>" alt="The Milan showroom with steel-framed glass partitions" decoding="async"></figure>
      <figure class="slide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/at-2.webp' ) ); ?>" alt="An oak window frame being assembled in the Como workshop" decoding="async"></figure>
    </div>
    <div class="tab">
      <p class="caps t-count" data-count>01 . 03</p>
      <p class="t t-cat" data-cat-label>Projects</p>
    </div>
    <a class="caps t-more" href="#contacts" data-more><span data-hover>All projects</span></a>
    <p class="t words" data-rise>Light<br>Calm<br>View</p>
    <div class="cap" aria-live="polite">
      <p class="t c-num" data-num>N°001</p>
      <h2 class="t c-title" id="h-title" data-title>Villa Aster<br>Ticino</h2>
      <a class="caps c-more" href="#contacts"><span data-hover>Discover more</span></a>
      <i class="c-bar" aria-hidden="true"><i></i></i>
    </div>
    <div class="nav">
      <button class="prev" type="button" aria-label="Previous">‹</button>
      <button class="next" type="button" aria-label="Next">›</button>
    </div>
  </section>
<!-- /wp:html -->
