<?php
/**
 * Title: Home: the kiln
 * Slug: ocra/home-shop
 * Categories: ocra
 * Inserter: yes
 * Description: The kiln: four pieces with orange price tags and Order this buttons that fill the order form.
 *
 * @package Ocra
 */

?>
<!-- wp:html -->
<header class="section-head" id="shop">
    <h2><?php esc_html_e( 'The kiln', 'ocra' ); ?></h2>
    <p><?php esc_html_e( 'Four pieces from the last firing. Each one is thrown, trimmed and glazed by hand, so no two are quite the same.', 'ocra' ); ?></p>
  </header>

<div class="shop">
    <article class="item">
      <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/vase.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A matte cream vase holding a dried olive branch', 'ocra' ); ?>" loading="lazy"><span class="price">€64</span></figure>
      <h3><?php esc_html_e( 'Dune vase', 'ocra' ); ?></h3><p><?php esc_html_e( 'Matte cream, 24 cm', 'ocra' ); ?></p>
      <a class="ask" href="#order" data-piece="Dune vase"><?php esc_html_e( 'Order this', 'ocra' ); ?></a>
    </article>
    <article class="item">
      <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/bowl.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A speckled cream bowl full of oranges with leaves', 'ocra' ); ?>" loading="lazy"><span class="price">€48</span></figure>
      <h3><?php esc_html_e( 'Citrus bowl', 'ocra' ); ?></h3><p><?php esc_html_e( 'Speckled glaze, 28 cm', 'ocra' ); ?></p>
      <a class="ask" href="#order" data-piece="Citrus bowl"><?php esc_html_e( 'Order this', 'ocra' ); ?></a>
    </article>
    <article class="item">
      <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/pitcher.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pitcher in a glossy burnt orange glaze', 'ocra' ); ?>" loading="lazy"><span class="price">€72</span></figure>
      <h3><?php esc_html_e( 'Fornace pitcher', 'ocra' ); ?></h3><p><?php esc_html_e( 'Burnt orange, 1.2 litres', 'ocra' ); ?></p>
      <a class="ask" href="#order" data-piece="Fornace pitcher"><?php esc_html_e( 'Order this', 'ocra' ); ?></a>
    </article>
    <article class="item">
      <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/cups.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'Three small cups in cream, terracotta and orange', 'ocra' ); ?>" loading="lazy"><span class="price">€54</span></figure>
      <h3><?php esc_html_e( 'Trio cups', 'ocra' ); ?></h3><p><?php esc_html_e( 'Set of three, 90 ml', 'ocra' ); ?></p>
      <a class="ask" href="#order" data-piece="Trio cups"><?php esc_html_e( 'Order this', 'ocra' ); ?></a>
    </article>
  </div>
<!-- /wp:html -->
