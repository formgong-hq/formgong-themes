<?php
/**
 * Ocra theme setup: styles, the page script, editor styles, the pattern category and small front-end helpers.
 *
 * @package Ocra
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function ocra_setup() {
	add_editor_style( array( 'assets/css/fonts.css', 'assets/css/ocra.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'ocra_setup' );

/**
 * Front-end styles (the fonts, the Ocra stylesheet, then the WordPress additions) and the template's script (the
 * forms: steps, files, "thank you" only on the Formgong plugin's formgong:sent; then the wordmarks, reveals, turning
 * slices and the floating order button; it honours reduced motion).
 */
function ocra_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'ocra-fonts', get_theme_file_uri( 'assets/css/fonts.css' ), array(), $version );
	wp_enqueue_style( 'ocra', get_theme_file_uri( 'assets/css/ocra.css' ), array( 'ocra-fonts' ), $version );
	wp_enqueue_style( 'ocra-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'ocra' ), $version );
	wp_enqueue_script( 'ocra', get_theme_file_uri( 'assets/js/ocra.js' ), array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'ocra_assets' );

/**
 * As the original: the hero photo is preloaded on the home page. Then the template's favicon (the citrus slice),
 * unless the site has its own icon.
 */
function ocra_head() {
	if ( is_front_page() ) {
		printf( '<link rel="preload" as="image" href="%s">' . "\n", esc_url( get_theme_file_uri( 'assets/img/hero.webp' ) ) );
	}
	if ( ! has_site_icon() ) {
		echo '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'15\' fill=\'%23ef7a2e\'/%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'11\' fill=\'%23fde2c4\'/%3E%3Cpath d=\'M16 16V6.5M16 16l6.7-6.7M16 16h9.5M16 16l6.7 6.7M16 16v9.5M16 16l-6.7 6.7M16 16H6.5M16 16 9.3 9.3\' stroke=\'%23ef7a2e\' stroke-width=\'1.6\'/%3E%3C/svg%3E">' . "\n";
	}
}
add_action( 'wp_head', 'ocra_head', 2 );

/**
 * Pattern category for the Ocra sections.
 */
function ocra_pattern_category() {
	register_block_pattern_category( 'ocra', array( 'label' => __( 'Ocra', 'ocra' ) ) );
}
add_action( 'init', 'ocra_pattern_category' );

/**
 * Mark the menu link of the page being viewed (aria-current), as Orrery does. The menu links are custom URLs, which
 * WordPress does not mark itself. The original marks no link (its links are all parts of one page), so the mark is
 * for screen readers; a link to another page (added by the site owner) is marked on that page.
 */
function ocra_current_menu_link() {
	wp_print_inline_script_tag( "document.querySelectorAll('.top .nav li > a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'ocra_current_menu_link' );
