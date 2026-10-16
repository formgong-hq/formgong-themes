<?php
/**
 * Title: Header
 * Slug: marrow/header
 * Categories: marrow
 * Inserter: no
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<div class="wipe" aria-hidden="true"></div>
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <symbol id="i-arrow" viewBox="0 0 14 14"><path d="M1 7h11M7.5 2.5 12 7l-4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="m15.5 15.5 5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-user" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 21c.6-4.2 3.8-7 8-7s7.4 2.8 8 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-bag" viewBox="0 0 24 24"><path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M9 10V7a3 3 0 0 1 6 0v3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="i-dog" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 5.2C8.3 4.4 10 4 12 4s3.7.4 5 1.2V14a5 5 0 0 1-10 0z"/><path d="M7 5.5C4.6 5 2.6 7.3 3.1 10.6l1.2 2.6L7 11.6M17 5.5c2.4-.5 4.4 1.8 3.9 5.1l-1.2 2.6-2.7-1.6"/></g><g fill="currentColor"><circle cx="9.8" cy="10" r="1"/><circle cx="14.2" cy="10" r="1"/><path d="M10.6 13.6h2.8L12 15.2z"/></g></symbol>
  <symbol id="i-cat" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3.8 8.6 7.6h6.8L19 3.8V13a7 7 0 0 1-14 0z"/><path d="M2.5 14.2 7 15M2.8 17.6 7 16.4M21.5 14.2 17 15M21.2 17.6 17 16.4"/></g><g fill="currentColor"><circle cx="9.6" cy="11.6" r="1"/><circle cx="14.4" cy="11.6" r="1"/><path d="M10.8 14.4h2.4L12 15.8z"/></g></symbol>
  <symbol id="i-check" viewBox="0 0 24 24"><path d="m5 12.5 4.5 4.5L19 7.5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><path fill="currentColor" d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5l-5.9 3.1 1.2-6.5L2.5 9.5l6.6-.9z"/></symbol>
  <symbol id="i-mark" viewBox="0 0 57 72"><g fill="currentColor"><rect x="10" y="15" width="37" height="9" rx="2"/><circle cx="10" cy="14.5" r="6"/><circle cx="10" cy="24.5" r="6"/><circle cx="47" cy="14.5" r="6"/><circle cx="47" cy="24.5" r="6"/><path d="M2 39.5c0-1 .8-1.5 1.8-1.5h49.4c1 0 1.8.5 1.8 1.5C55 54.5 43 64 28.5 64S2 54.5 2 39.5z"/><rect x="17" y="66" width="23" height="5" rx="2.5"/></g></symbol>
  <symbol id="i-camera" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 8h3.5L9 5.5h6L16.5 8H20a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></g></symbol>
  <symbol id="i-play" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9v6l5-3z" fill="currentColor"/></symbol>
  <symbol id="i-chat" viewBox="0 0 24 24"><path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9l-5 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6.5 8.5 7 8.5-7"/></g></symbol>
</svg>
<!-- /wp:html -->
<!-- wp:group {"tagName":"header","className":"hdr","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group hdr">
<!-- wp:navigation {"overlayMenu":"never","className":"hnav","layout":{"type":"flex","flexWrap":"nowrap"}} /-->
<!-- wp:html -->
<a class="hlogo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Marrow Kitchen, home">
    <svg class="h-mark" aria-hidden="true"><use href="#i-mark"/></svg>
    <span class="h-word" aria-hidden="true">MARROW</span>
  </a>
<!-- /wp:html -->
<!-- wp:html -->
<div class="hact">
    <a class="ib opt" href="<?php echo esc_url( home_url( '/#finder' ) ); ?>" aria-label="Find the right meal"><svg aria-hidden="true"><use href="#i-search"/></svg></a>
    <a class="ib opt" href="#contact" aria-label="Contact and opening hours"><svg aria-hidden="true"><use href="#i-user"/></svg></a>
    <button class="ib" type="button" data-order aria-label="Open your order request"><svg aria-hidden="true"><use href="#i-bag"/></svg></button>
    <button class="pill" type="button" data-order>Order now</button>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu" aria-label="Menu" data-menu><i></i><i></i></button>
  </div>
<!-- /wp:html -->
</header>
<!-- /wp:group -->
<!-- wp:group {"anchor":"menu","className":"menu","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div id="menu" class="wp-block-group menu">
<!-- wp:navigation {"overlayMenu":"never","className":"mw-mnav","layout":{"type":"flex","flexWrap":"wrap"}} /-->
</div>
<!-- /wp:group -->
