<?php
/**
 * Title: Thank-you page
 * Slug: craftline/page-thanks
 * Categories: craftline
 * Inserter: yes
 * Block Types: core/post-content
 *
 * @package Craftline
 */

?>
<!-- wp:html -->
<section class="relative overflow-x-clip"><div class="container-x py-20 sm:py-28"><div class="mx-auto max-w-2xl text-center"><span class="mx-auto grid size-20 place-items-center rounded-full bg-success/12 text-success"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><h1 class="h-display mt-8 text-[clamp(2.25rem,1.6rem+2.8vw,3.5rem)]"><?php esc_html_e( 'We have', 'craftline' ); ?> <span class="hl"><?php esc_html_e( 'your request', 'craftline' ); ?></span></h1><p class="lead mt-6"><?php esc_html_e( 'What happens next:', 'craftline' ); ?></p></div><ol class="stagger mx-auto mt-12 grid max-w-2xl gap-4"><li class="card flex items-center gap-5 p-5 sm:p-6" style="--i:0"><span class="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-sm font-extrabold text-accent-text">1</span><span class="font-semibold"><?php esc_html_e( 'The office reads your request and checks which plumber is nearest.', 'craftline' ); ?></span></li><li class="card flex items-center gap-5 p-5 sm:p-6" style="--i:1"><span class="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-sm font-extrabold text-accent-text">2</span><span class="font-semibold"><?php esc_html_e( 'We call or email within an hour during opening hours, with a price range or a time to visit.', 'craftline' ); ?></span></li><li class="card flex items-center gap-5 p-5 sm:p-6" style="--i:2"><span class="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-sm font-extrabold text-accent-text">3</span><span class="font-semibold"><?php esc_html_e( 'On the visit, you agree the written price before any work starts.', 'craftline' ); ?></span></li></ol><div class="mx-auto mt-12 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="btn btn-secondary btn-lg"><?php esc_html_e( 'Back to the home page', 'craftline' ); ?></a><a href="tel:+15555550199" class="btn btn-primary btn-lg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="icon" aria-hidden="true" focusable="false"><path d="M13 3 5 13.5h6L10 21l8-10.5h-6z"/></svg> <?php esc_html_e( 'Emergency? (555) 555-0199', 'craftline' ); ?></a></div></div></section>
<!-- /wp:html -->
