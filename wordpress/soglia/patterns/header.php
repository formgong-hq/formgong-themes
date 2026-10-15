<?php
/**
 * Title: Header
 * Slug: soglia/header
 * Categories: soglia
 * Inserter: no
 *
 * @package Soglia
 */

?>
<!-- wp:group {"tagName":"header","className":"top","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group top">
<!-- wp:group {"className":"sq caps menu-btn sg-menu-cell","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group sq caps menu-btn sg-menu-cell">
<!-- wp:navigation {"overlayMenu":"always","showSubmenuIcon":false,"className":"sg-nav","layout":{"type":"flex","orientation":"vertical"}} /-->
</div>
<!-- /wp:group -->
<!-- wp:html -->
<a class="logo t" href="<?php echo esc_url( home_url( '/#home' ) ); ?>" aria-label="Orlo, home"><span data-hover>Orlo</span></a>
<p class="crumb caps"><a href="<?php echo esc_url( home_url( '/#home' ) ); ?>">Home</a> . <span>Contacts</span></p>
<a class="sq caps write" href="<?php echo esc_url( home_url( '/#contacts' ) ); ?>"><span data-hover>Write</span></a>
<!-- /wp:html -->
</header>
<!-- /wp:group -->
