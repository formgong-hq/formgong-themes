<?php
/**
 * Title: Home: studio
 * Slug: halftone/home-studio
 * Categories: halftone
 * Inserter: yes
 * Description: Huge words; a strip of photos rises over them and the middle one opens to the whole screen.
 *
 * @package Halftone
 */

?>
<!-- wp:html -->
<section class="clarity" id="studio" aria-labelledby="c-title" data-clarity>
    <div class="c-pin">
      <h2 class="c-words d" id="c-title"><span>Light,</span><span class="r">drawn</span><span class="s"><span>into</span><span>rooms</span></span></h2>
      <div class="c-strip" aria-hidden="true">
        <figure><img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/c2.webp' ) ); ?>" alt="" loading="lazy" decoding="async"></figure>
        <figure class="mid"><img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/c1.webp' ) ); ?>" alt="" loading="lazy" decoding="async"></figure>
        <figure><img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/c3.webp' ) ); ?>" alt="" loading="lazy" decoding="async"></figure>
      </div>
      <div class="c-text">
        <p>TAKU is an architecture studio for the places people use every day. We draw around the light a site already has, the routes people already take and the materials that will still look right in thirty years.</p>
        <p>The result is a building that feels considered from the first step inside.</p>
      </div>
    </div>
  </section>
<!-- /wp:html -->
