<?php
/**
 * Title: Header
 * Slug: contour/header
 * Categories: contour
 * Inserter: no
 *
 * @package Contour
 */

?>
<!-- wp:html -->
<a class="skip note" href="#main">Skip to content</a>
<!-- /wp:html -->
<!-- wp:group {"tagName":"header","className":"site-header wrap","layout":{"type":"default"}} -->
<header class="wp-block-group site-header wrap">
<!-- wp:html -->
<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="<?php echo esc_attr( get_bloginfo( 'name' ) ); ?>">
    <svg class="monogram brand__mark is-plotting" viewBox="0 0 68 40" aria-hidden="true"><path pathLength="1" d="M4 37 16 3l12 34M8.2 25h15.6"/><path class="monogram__g" pathLength="1" d="M38 37V3h16M38 20h13"/><circle class="monogram__dot" cx="64" cy="36" r="2.6"/></svg>
    <span class="brand__name note note--ink"><?php echo esc_html( get_bloginfo( 'name' ) ); ?><span class="brand__role"><?php echo esc_html( get_bloginfo( 'description' ) ? ' / ' . get_bloginfo( 'description' ) : '' ); ?></span></span>
  </a>
<!-- /wp:html -->
<!-- wp:navigation {"overlayMenu":"never","className":"nav ct-nav","layout":{"type":"flex","flexWrap":"nowrap"}} /-->
<!-- wp:html -->
<div class="tools">
    <button class="tool" type="button" data-action="theme" aria-label="Toggle light / dark theme"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.25"/><path d="M10 2.75a7.25 7.25 0 0 1 0 14.5z"/></svg></button>
    <button class="tool" type="button" data-action="accent" aria-label="Change accent colour"><span class="swatch" aria-hidden="true"></span></button>
    <button class="tool tool--kbd note" type="button" data-action="palette" aria-label="Open command palette (Ctrl K)">⌘K</button>
    <button class="tool tool--menu note" type="button" data-action="palette" aria-label="Open menu">Menu</button>
    <a class="btn header-cta" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>">Start a project</a>
  </div>
<!-- /wp:html -->
<!-- wp:html -->
<div class="hd-rule" aria-hidden="true"><span class="hd-rule__fill"><span class="hd-rule__tag note"></span></span></div>
<!-- /wp:html -->
</header>
<!-- /wp:group -->
