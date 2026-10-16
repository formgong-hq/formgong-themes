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
    <h2>The kiln</h2>
    <p>Four pieces from the last firing. Each one is thrown, trimmed and glazed by hand, so no two are quite the same.</p>
  </header>

<div class="shop">
    <article class="item">
      <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/vase.webp' ) ); ?>" width="800" height="800" alt="A matte cream vase holding a dried olive branch" loading="lazy"><span class="price">€64</span></figure>
      <h3>Dune vase</h3><p>Matte cream, 24 cm</p>
      <a class="ask" href="#order" data-piece="Dune vase">Order this</a>
    </article>
    <article class="item">
      <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/bowl.webp' ) ); ?>" width="800" height="800" alt="A speckled cream bowl full of oranges with leaves" loading="lazy"><span class="price">€48</span></figure>
      <h3>Citrus bowl</h3><p>Speckled glaze, 28 cm</p>
      <a class="ask" href="#order" data-piece="Citrus bowl">Order this</a>
    </article>
    <article class="item">
      <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/pitcher.webp' ) ); ?>" width="800" height="800" alt="A pitcher in a glossy burnt orange glaze" loading="lazy"><span class="price">€72</span></figure>
      <h3>Fornace pitcher</h3><p>Burnt orange, 1.2 litres</p>
      <a class="ask" href="#order" data-piece="Fornace pitcher">Order this</a>
    </article>
    <article class="item">
      <figure><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/cups.webp' ) ); ?>" width="800" height="800" alt="Three small cups in cream, terracotta and orange" loading="lazy"><span class="price">€54</span></figure>
      <h3>Trio cups</h3><p>Set of three, 90 ml</p>
      <a class="ask" href="#order" data-piece="Trio cups">Order this</a>
    </article>
  </div>
<!-- /wp:html -->
