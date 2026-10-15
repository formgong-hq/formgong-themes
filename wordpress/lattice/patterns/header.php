<?php
/**
 * Title: Header
 * Slug: lattice/header
 * Categories: lattice
 * Inserter: no
 *
 * @package Lattice
 */

?>
<!-- wp:group {"tagName":"header","className":"bar","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group bar">
<!-- wp:html -->
<a class="b logo" href="<?php echo esc_url( home_url( '/#top' ) ); ?>" aria-label="Halden Studio, back to top"><span>HAL</span>DEN</a>
<!-- /wp:html -->
<!-- wp:group {"className":"menu-btn lt-menu-cell","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group menu-btn lt-menu-cell">
<!-- wp:navigation {"overlayMenu":"always","className":"lt-nav","layout":{"type":"flex","orientation":"vertical"}} /-->
</div>
<!-- /wp:group -->
<!-- wp:html -->
<div class="b clock"><span class="mono">LIS</span><span data-clock data-tz="Europe/Lisbon">--:--</span></div>
<!-- /wp:html -->
</header>
<!-- /wp:group -->
