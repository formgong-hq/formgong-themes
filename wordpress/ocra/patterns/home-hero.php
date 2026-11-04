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
    <h1 class="sr"><?php esc_html_e( 'Ocra: handmade ceramics you order by message', 'ocra' ); ?></h1>
    <p class="word" aria-hidden="true" data-fit><svg class="slice ch" viewBox="0 0 100 100"><use href="#slice"/></svg><span class="ch"><?php esc_html_e( 'C', 'ocra' ); ?></span><span class="ch"><?php esc_html_e( 'R', 'ocra' ); ?></span><span class="ch"><?php esc_html_e( 'A', 'ocra' ); ?></span></p>
    <div class="cta">
      <a class="big" href="#shop"><span class="roll"><span><?php esc_html_e( 'Shop the kiln', 'ocra' ); ?></span><span aria-hidden="true"><?php esc_html_e( 'Shop the kiln', 'ocra' ); ?></span></span></a>
      <a class="big" href="#workshop"><span class="roll"><span><?php esc_html_e( 'Book a class', 'ocra' ); ?></span><span aria-hidden="true"><?php esc_html_e( 'Book a class', 'ocra' ); ?></span></span></a>
    </div>
    <figure class="stage">
      <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/hero.webp' ) ); ?>" width="1536" height="1024" alt="<?php esc_attr_e( 'Cream ceramic vases with dried grass and an olive branch beside fresh and halved oranges on a white table', 'ocra' ); ?>" data-float>
      <figcaption><?php esc_html_e( 'The October firing, ready to ship', 'ocra' ); ?></figcaption>
    </figure>
  </section>
<!-- /wp:html -->
