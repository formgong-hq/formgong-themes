<?php
/**
 * Title: Footer
 * Slug: contour/footer
 * Categories: contour
 * Inserter: no
 *
 * @package Contour
 */

?>
<!-- wp:html -->
<footer class="site-footer wrap">
  <div class="grid-12 footer-top">
    <p class="footer-claim h3">Have a brief that needs to move? <a class="link link--inline accent" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>">Let's talk.</a></p>
    <div class="footer-col"><p class="note">Site</p><ul><li><a class="link" href="<?php echo esc_url( home_url( '/#work' ) ); ?>">Work</a></li><li><a class="link" href="<?php echo esc_url( home_url( '/#services' ) ); ?>">Services</a></li><li><a class="link" href="<?php echo esc_url( home_url( '/#process' ) ); ?>">Process</a></li><li><a class="link" href="<?php echo esc_url( home_url( '/#notes' ) ); ?>">Notes</a></li></ul></div>
    <div class="footer-col"><p class="note">Elsewhere</p><ul><li><a class="link" href="<?php echo esc_url( home_url( '/#top' ) ); ?>">LinkedIn <span class="arrow" aria-hidden="true">↗</span></a></li><li><a class="link" href="<?php echo esc_url( home_url( '/#top' ) ); ?>">GitHub <span class="arrow" aria-hidden="true">↗</span></a></li><li><a class="link" href="<?php echo esc_url( home_url( '/#top' ) ); ?>">RSS</a></li></ul></div>
    <div class="footer-col"><p class="note">Contact</p><ul><li><a class="link" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>">Send a brief</a></li><li><a class="link" href="mailto:hello@example.com">Write an email</a></li></ul></div>
  </div>
  <div class="footer-sign">
    <p class="footer-mark" aria-hidden="true">I build it.</p>
    <div class="tb note"><dl class="tb__cells"><div style="--i:0"><dt>Cookies</dt><dd class="tb__val"><span>0</span></dd></div><div style="--i:1"><dt>Trackers</dt><dd class="tb__val"><span>0</span></dd></div><div style="--i:2"><dt>Ads</dt><dd class="tb__val"><span>0</span></dd></div></dl><p class="tb__cap"><span>Privacy spec · rev. 2026</span><a class="tb__link" href="<?php echo esc_url( home_url( '/#top' ) ); ?>">Read →</a></p></div>
  </div>
  <div class="footer-bottom note">
    <p class="copy"><span>© <?php echo esc_html( gmdate( 'Y' ) . ' ' . get_bloginfo( 'name' ) ); ?></span><span>Designed and built in Lisbon</span></p>
    <span class="hint">Press <kbd>G</kbd> for the grid · <kbd>⌘K</kbd> for everything else</span>
    <nav class="legal-links" aria-label="Legal"><a class="link" href="<?php echo esc_url( home_url( '/#top' ) ); ?>">Privacy</a><a class="link" href="<?php echo esc_url( home_url( '/#top' ) ); ?>">Accessibility</a></nav>
  </div>
</footer>
<div class="grid-overlay" aria-hidden="true"><div class="grid-12"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>
<!-- /wp:html -->
