<?php
/**
 * Title: Header
 * Slug: halftone/header
 * Categories: halftone
 * Inserter: no
 *
 * @package Halftone
 */

?>
<!-- wp:group {"tagName":"header","className":"top","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group top">
<!-- wp:group {"className":"t-menu ht-menu-cell","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group t-menu ht-menu-cell">
<!-- wp:navigation {"overlayMenu":"always","showSubmenuIcon":false,"className":"ht-nav","layout":{"type":"flex","orientation":"vertical"}} /-->
</div>
<!-- /wp:group -->
<!-- wp:html -->
<a class="t-mark" href="<?php echo esc_url( home_url( '/#top' ) ); ?>" aria-label="TAKU, back to top">
    <span class="d" aria-hidden="true">Taku</span>
  </a>
<a class="t-cta" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>"><span>Get in touch</span><b aria-hidden="true"></b></a>
<!-- /wp:html -->
</header>
<!-- /wp:group -->
