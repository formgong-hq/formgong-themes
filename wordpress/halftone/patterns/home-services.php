<?php
/**
 * Title: Home: services
 * Slug: halftone/home-services
 * Categories: halftone
 * Inserter: yes
 * Description: The list of services next to a photo.
 *
 * @package Halftone
 */

?>
<!-- wp:html -->
<section class="services" id="services" aria-labelledby="s-title">
    <div class="s-list">
      <h2 id="s-title">The full scope of TAKU</h2>
      <ul class="d">
        <li class="rise">Architecture</li>
        <li class="rise" style="--d:.06s">Interior design</li>
        <li class="rise" style="--d:.12s">Landscape</li>
        <li class="rise" style="--d:.18s">Renovation and reuse</li>
        <li class="rise" style="--d:.24s">Planning and permits</li>
        <li class="rise" style="--d:.3s">BIM and digital design</li>
      </ul>
    </div>
    <figure class="s-photo"><img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/svc.webp' ) ); ?>" alt="Plans and a white card model of a house on a studio table" loading="lazy" decoding="async"></figure>
  </section>
<!-- /wp:html -->
