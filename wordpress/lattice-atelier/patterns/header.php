<?php
/**
 * Title: Header
 * Slug: lattice-atelier/header
 * Categories: lattice-atelier
 * Inserter: no
 *
 * @package Lattice_Atelier
 */

?>
<!-- wp:group {"tagName":"header","className":"bar","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group bar">
<!-- wp:group {"className":"menu-btn la-menu-cell","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group menu-btn la-menu-cell">
<!-- wp:navigation {"overlayMenu":"always","showSubmenuIcon":false,"className":"la-nav","layout":{"type":"flex","orientation":"vertical"}} /-->
</div>
<!-- /wp:group -->
<!-- wp:html -->
<a class="b ink small" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" data-k="b-write"><span data-hover>Write</span></a>
<!-- /wp:html -->
</header>
<!-- /wp:group -->
<!-- wp:html -->
<a class="logo" href="<?php echo esc_url( home_url( '/#top' ) ); ?>" aria-label="Telaro, back to top">Telaro</a>
<!-- /wp:html -->
