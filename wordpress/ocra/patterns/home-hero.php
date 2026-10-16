<?php
/**
 * Title: Home: hero
 * Slug: ocra/home-hero
 * Categories: ocra
 * Inserter: yes
 * Description: The OCRA wordmark with the citrus slice, two big buttons and the hero photo.
 *
 * @package Ocra
 */

?>
<!-- wp:html -->
<section class="hero">
    <h1 class="sr">Ocra: handmade ceramics you order by message</h1>
    <p class="word" aria-hidden="true" data-fit><svg class="slice ch" viewBox="0 0 100 100"><use href="#slice"/></svg><span class="ch">C</span><span class="ch">R</span><span class="ch">A</span></p>
    <div class="cta">
      <a class="big" href="#shop"><span class="roll"><span>Shop the kiln</span><span aria-hidden="true">Shop the kiln</span></span></a>
      <a class="big" href="#workshop"><span class="roll"><span>Book a class</span><span aria-hidden="true">Book a class</span></span></a>
    </div>
    <figure class="stage">
      <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/hero.webp' ) ); ?>" width="1536" height="1024" alt="Cream ceramic vases with dried grass and an olive branch beside fresh and halved oranges on a white table" data-float>
      <figcaption>The October firing, ready to ship</figcaption>
    </figure>
  </section>
<!-- /wp:html -->
