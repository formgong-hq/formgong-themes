<?php
/**
 * Title: Header
 * Slug: ocra/header
 * Categories: ocra
 * Inserter: no
 *
 * @package Ocra
 */

?>
<!-- wp:html -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true">
  <symbol id="slice" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="49" fill="#ef7a2e"/>
    <circle cx="50" cy="50" r="41" fill="#fde2c4"/>
    <g fill="#f59a52">
      <path d="M50 50 L50 13 A37 37 0 0 1 76.2 23.8Z"/><path d="M50 50 L76.2 23.8 A37 37 0 0 1 87 50Z"/>
      <path d="M50 50 L87 50 A37 37 0 0 1 76.2 76.2Z"/><path d="M50 50 L76.2 76.2 A37 37 0 0 1 50 87Z"/>
      <path d="M50 50 L50 87 A37 37 0 0 1 23.8 76.2Z"/><path d="M50 50 L23.8 76.2 A37 37 0 0 1 13 50Z"/>
      <path d="M50 50 L13 50 A37 37 0 0 1 23.8 23.8Z"/><path d="M50 50 L23.8 23.8 A37 37 0 0 1 50 13Z"/>
    </g>
    <g stroke="#fde2c4" stroke-width="3.2"><path d="M50 10v80M10 50h80M21.7 21.7l56.6 56.6M78.3 21.7 21.7 78.3"/></g>
    <circle cx="50" cy="50" r="5" fill="#fde2c4"/>
  </symbol>
</svg>
<!-- /wp:html -->
<!-- wp:group {"tagName":"header","className":"top","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group top">
<!-- wp:group {"className":"bar","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group bar">
<!-- wp:html -->
<a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"><svg viewBox="0 0 100 100" aria-hidden="true"><use href="#slice"/></svg>Ocra</a>
<!-- /wp:html -->
<!-- wp:navigation {"overlayMenu":"never","className":"nav","style":{"spacing":{"blockGap":"4px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} /-->
</div>
<!-- /wp:group -->
<!-- wp:html -->
<div class="meta">
    <p>Ocra ceramics<br><span>Made by hand on the coast</span></p>
    <p class="r">New firing<br><span>every month</span></p>
  </div>
<!-- /wp:html -->
</header>
<!-- /wp:group -->
