<?php
/**
 * Title: Header
 * Slug: lattice-estate/header
 * Categories: lattice-estate
 * Inserter: no
 *
 * @package Lattice_Estate
 */

?>
<!-- wp:group {"tagName":"header","className":"bar","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group bar">
<!-- wp:html -->
<a class="b logo" href="<?php echo esc_url( home_url( '/#top' ) ); ?>" aria-label="Veranthe Homes, back to top"><span>VER</span>ANTHE</a>
<!-- /wp:html -->
<!-- wp:group {"className":"menu-btn le-menu-cell","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group menu-btn le-menu-cell">
<!-- wp:navigation {"overlayMenu":"always","className":"le-nav","layout":{"type":"flex","orientation":"vertical"}} /-->
</div>
<!-- /wp:group -->
<!-- wp:html -->
<a class="b btn bar-cta" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>">Book a consultation</a>
<!-- /wp:html -->
<!-- wp:html -->
<div class="b clock"><span class="mono">LIS</span><span data-clock data-tz="Europe/Lisbon">--:--</span></div>
<!-- /wp:html -->
</header>
<!-- /wp:group -->
