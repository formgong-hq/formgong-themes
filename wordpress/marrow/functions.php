<?php
/**
 * Marrow theme setup: styles, the page script, editor styles, the pattern category and small front-end helpers.
 *
 * @package Marrow
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function marrow_setup() {
	add_editor_style( array( 'assets/css/fonts.css', 'assets/css/marrow.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'marrow_setup' );

/**
 * Front-end styles (the fonts, the Marrow stylesheet, then the WordPress additions) and the template's script (the
 * pet switch, the giant wordmark, the menu, the scroll motion, the carousels, the dialogs, the meal calculator and the
 * forms: "thank you" only when Formgong answers success: true; it honours reduced motion).
 */
function marrow_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'marrow-fonts', get_theme_file_uri( 'assets/css/fonts.css' ), array(), $version );
	wp_enqueue_style( 'marrow', get_theme_file_uri( 'assets/css/marrow.css' ), array( 'marrow-fonts' ), $version );
	wp_enqueue_style( 'marrow-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'marrow' ), $version );
	wp_enqueue_script( 'marrow', get_theme_file_uri( 'assets/js/marrow.js' ), array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'marrow_assets' );

/**
 * As the original, first thing in the head: the "js" and "motion" classes on <html> (motion only when the visitor has
 * not asked for reduced motion), then the hero photo preloaded on the home page, then the template's favicon (the
 * bowl mark), unless the site has its own icon.
 */
function marrow_head() {
	wp_print_inline_script_tag( 'document.documentElement.className += " js" + (matchMedia("(prefers-reduced-motion: reduce)").matches ? "" : " motion");' );
	if ( is_front_page() ) {
		printf( '<link rel="preload" as="image" href="%s">' . "\n", esc_url( get_theme_file_uri( 'assets/img/hero-dog.webp' ) ) );
	}
	if ( ! has_site_icon() ) {
		echo '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Crect width=\'32\' height=\'32\' rx=\'16\' fill=\'%23ff6b2c\'/%3E%3Cg fill=\'%231c2a6b\'%3E%3Crect x=\'9\' y=\'9\' width=\'14\' height=\'4\' rx=\'1\'/%3E%3Ccircle cx=\'9\' cy=\'9.4\' r=\'2.4\'/%3E%3Ccircle cx=\'9\' cy=\'12.6\' r=\'2.4\'/%3E%3Ccircle cx=\'23\' cy=\'9.4\' r=\'2.4\'/%3E%3Ccircle cx=\'23\' cy=\'12.6\' r=\'2.4\'/%3E%3Cpath d=\'M6 17h20c0 5-4.5 8-10 8S6 22 6 17z\'/%3E%3C/g%3E%3C/svg%3E">' . "\n";
	}
}
add_action( 'wp_head', 'marrow_head', 1 );

/**
 * Pages other than the home page have no hero under the header: there the header stays in its scrolled look (white
 * bar, the MARROW wordmark), see wordpress.css.
 *
 * @param string[] $classes Body classes.
 * @return string[]
 */
function marrow_body_class( $classes ) {
	if ( ! is_front_page() ) {
		$classes[] = 'mw-inner';
	}
	return $classes;
}
add_filter( 'body_class', 'marrow_body_class' );

/**
 * Pattern category for the Marrow sections.
 */
function marrow_pattern_category() {
	register_block_pattern_category( 'marrow', array( 'label' => __( 'Marrow', 'marrow' ) ) );
}
add_action( 'init', 'marrow_pattern_category' );

/**
 * Mark the menu link of the page being viewed (aria-current), as Orrery does. The menu links are custom URLs, which
 * WordPress does not mark itself. The original marks no link (its links are all parts of one page), so the mark has
 * no visual style; a link to another page (added by the site owner) is marked on that page.
 */
function marrow_current_menu_link() {
	wp_print_inline_script_tag( "document.querySelectorAll('.hdr .hnav li > a[href], #menu li > a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'marrow_current_menu_link' );
