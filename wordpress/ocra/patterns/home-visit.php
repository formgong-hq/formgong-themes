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
    <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/studio.webp' ) ); ?>" width="1536" height="1024" alt="<?php esc_attr_e( 'Shelves of cream and terracotta pieces in the studio, with oranges on the worktable', 'ocra' ); ?>" loading="lazy"></figure>
    <div class="hours">
      <h2 id="visit-title"><?php esc_html_e( 'Visit the studio', 'ocra' ); ?></h2>
      <dl>
        <dt><?php esc_html_e( 'Shop', 'ocra' ); ?></dt><dd><?php esc_html_e( 'Thursday to Saturday, 10:00–18:00', 'ocra' ); ?></dd>
        <dt><?php esc_html_e( 'Classes', 'ocra' ); ?></dt><dd><?php esc_html_e( 'Saturdays, 10:00 and 15:00', 'ocra' ); ?></dd>
        <dt><?php esc_html_e( 'Address', 'ocra' ); ?></dt><dd><?php esc_html_e( 'Via dei Vasai 12', 'ocra' ); ?></dd>
        <dt><?php esc_html_e( 'Email', 'ocra' ); ?></dt><dd><?php esc_html_e( 'hello@ocra.example', 'ocra' ); ?></dd>
      </dl>
    </div>
  </section>
<!-- /wp:html -->
