<?php
/**
 * Title: Home: visit
 * Slug: ocra/home-visit
 * Categories: ocra
 * Inserter: yes
 * Description: The studio photo next to the opening hours and the address.
 *
 * @package Ocra
 */

?>
<!-- wp:html -->
<section class="visit" id="visit" aria-labelledby="visit-title">
    <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/studio.webp' ) ); ?>" width="1536" height="1024" alt="Shelves of cream and terracotta pieces in the studio, with oranges on the worktable" loading="lazy"></figure>
    <div class="hours">
      <h2 id="visit-title">Visit the studio</h2>
      <dl>
        <dt>Shop</dt><dd>Thursday to Saturday, 10:00–18:00</dd>
        <dt>Classes</dt><dd>Saturdays, 10:00 and 15:00</dd>
        <dt>Address</dt><dd>Via dei Vasai 12</dd>
        <dt>Email</dt><dd>hello@ocra.example</dd>
      </dl>
    </div>
  </section>
<!-- /wp:html -->
