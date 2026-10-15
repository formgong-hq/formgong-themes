<?php
/**
 * Title: Home: hero
 * Slug: halftone/home-hero
 * Categories: halftone
 * Inserter: yes
 * Description: The pinned halftone photo that turns into a second frame as you scroll, the title split to the edges.
 *
 * @package Halftone
 */

?>
<!-- wp:html -->
<section class="hero" id="top" aria-labelledby="h-title" data-hero>
    <div class="h-pin">
      <figure class="h-frame dots"><img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/hero.webp' ) ); ?>" alt="A woman with an orange umbrella crossing a rainy courtyard between apartment buildings"></figure>
      <figure class="h-frame dots"><img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/p1.webp' ) ); ?>" alt="" decoding="async"></figure>
      <h1 class="h-title d" id="h-title"><span>We design homes</span> <span>that hold light</span></h1>
      <p class="h-down">[ scroll down ]</p>
    </div>
  </section>
<!-- /wp:html -->
