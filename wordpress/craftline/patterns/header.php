<?php
/**
 * Title: Header
 * Slug: craftline/header
 * Categories: craftline
 * Inserter: no
 *
 * @package Craftline
 */

?>
<!-- wp:group {"tagName":"header","className":"site-header","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header class="wp-block-group site-header">
<!-- wp:html -->
<div class="header-backdrop" aria-hidden="true"></div>
<!-- /wp:html -->
<!-- wp:group {"className":"container-x relative flex h-16 items-center justify-between gap-3 sm:h-[72px]","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group container-x relative flex h-16 items-center justify-between gap-3 sm:h-[72px]">
<!-- wp:html -->
<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="header-logo flex min-w-0 items-center gap-3 rounded-lg"><svg viewBox="0 0 40 40" width="40" height="40" class="shrink-0 size-9 sm:size-10" aria-hidden="true" focusable="false"><rect width="40" height="40" rx="11" fill="var(--accent)"></rect><path d="M9.5 19.5 20 11l10.5 8.5" fill="none" stroke="var(--accent-text)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 17.2c2.6 3 4.3 5.1 4.3 7.2a4.3 4.3 0 0 1-8.6 0c0-2.1 1.7-4.2 4.3-7.2z" fill="var(--accent-text)"></path></svg></a>
<!-- /wp:html -->
<!-- wp:site-title {"level":0,"className":"cl-site-title"} /-->
<!-- wp:navigation {"overlayMenu":"always","className":"cl-nav","layout":{"type":"flex","flexWrap":"nowrap"}} /-->
<!-- wp:html -->
<div class="flex items-center gap-2"><a href="tel:+15555550142" class="btn btn-secondary hidden min-h-11 px-4 md:inline-flex"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon" aria-hidden="true" focusable="false"><path d="M5 4h3.2l1.6 4.2-2.1 1.4a11.5 11.5 0 0 0 6.7 6.7l1.4-2.1 4.2 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16 16 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4z"/></svg>(555) 555-0142</a><a href="<?php echo esc_url( home_url( '/contact/#quote' ) ); ?>" class="btn btn-primary hidden min-h-11 px-4 lg:inline-flex">Get a quote</a><a href="tel:+15555550142" class="btn btn-secondary min-h-11 px-4 md:hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon" aria-hidden="true" focusable="false"><path d="M5 4h3.2l1.6 4.2-2.1 1.4a11.5 11.5 0 0 0 6.7 6.7l1.4-2.1 4.2 1.6V19a1.6 1.6 0 0 1-1.7 1.6A16 16 0 0 1 3.4 5.7 1.6 1.6 0 0 1 5 4z"/></svg>Call<span class="sr-only"> (555) 555-0142</span></a></div>
<!-- /wp:html -->
</div>
<!-- /wp:group -->
</header>
<!-- /wp:group -->
