<?php
/**
 * Title: Header
 * Slug: orrery/header
 * Categories: orrery
 * Inserter: no
 *
 * @package Orrery
 */

?>
<!-- wp:group {"tagName":"header","className":"site-header","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group site-header">
<!-- wp:group {"className":"header-inner","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group header-inner">
<!-- wp:html -->
<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-logo or-mark" aria-hidden="true" tabindex="-1"><svg viewBox="0 0 40 40" width="40" height="40" fill="none" aria-hidden="true" class="size-9 shrink-0 lg:size-10"><circle cx="20" cy="20" r="7" fill="var(--accent)"></circle><ellipse cx="20" cy="20" rx="17.5" ry="8.5" transform="rotate(-28 20 20)" stroke="var(--c-ink)" stroke-width="1.5"></ellipse><circle cx="33.2" cy="10.6" r="3" fill="var(--c-ink)"></circle></svg></a>
<!-- /wp:html -->
<!-- wp:group {"className":"or-brand","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group or-brand">
<!-- wp:site-title {"level":0,"className":"or-site-title"} /-->
<!-- wp:paragraph {"className":"or-site-sub"} -->
<p class="or-site-sub">Analytics<span class="text-accent">.</span></p>
<!-- /wp:paragraph -->
</div>
<!-- /wp:group -->
<!-- wp:navigation {"overlayMenu":"always","className":"or-nav","layout":{"type":"flex","flexWrap":"nowrap"}} /-->
<!-- wp:html -->
<a href="<?php echo esc_url( home_url( '/contact/#enquiry' ) ); ?>" class="btn btn-primary header-cta">Book a call</a><span class="header-rule" aria-hidden="true"></span>
<!-- /wp:html -->
</div>
<!-- /wp:group -->
</header>
<!-- /wp:group -->
