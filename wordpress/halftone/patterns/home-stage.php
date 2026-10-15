<?php
/**
 * Title: Home: loader
 * Slug: halftone/home-stage
 * Categories: halftone
 * Inserter: no
 * Description: The orange loader that counts to 100 once per visit, then the tilted page fills the screen.
 *
 * @package Halftone
 */

?>
<!-- wp:html -->
<a class="skip" href="#contact">Skip to the contact form</a>

<div class="loader" aria-hidden="true">
  <p class="l-tl">Light, drawn</p>
  <p class="l-tr">Into rooms</p>
  <div class="l-card"><img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/hero.webp' ) ); ?>" alt=""></div>
  <p class="l-bl">Loading<span data-dots>....</span></p>
  <p class="l-br"><span data-pct>0</span> %</p>
</div>
<!-- /wp:html -->
