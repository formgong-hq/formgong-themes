<?php
/**
 * Soglia theme setup: styles, the page script, editor styles, the pattern category and small front-end helpers.
 *
 * @package Soglia
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function soglia_setup() {
	add_editor_style( array( 'assets/css/fonts.css', 'assets/css/soglia.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'soglia_setup' );

/**
 * Front-end styles (the font, the Soglia stylesheet, then the WordPress additions) and the page script (slider,
 * letter rolls, the Home/Contacts views, loader; it honours reduced motion).
 */
function soglia_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'soglia-fonts', get_theme_file_uri( 'assets/css/fonts.css' ), array(), $version );
	wp_enqueue_style( 'soglia', get_theme_file_uri( 'assets/css/soglia.css' ), array( 'soglia-fonts' ), $version );
	wp_enqueue_style( 'soglia-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'soglia' ), $version );
	wp_enqueue_script( 'soglia', get_theme_file_uri( 'assets/js/soglia.js' ), array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'soglia_assets' );

/**
 * As the original, before the first paint: on the home page, which view to show (Contacts for #contacts and
 * #contact-form, else Home) and whether the loader plays (once per tab session, never for reduced motion); other
 * pages are plain scrolling pages (on-page). Then the font file and, on the home page, the first photo.
 */
function soglia_head() {
	if ( is_front_page() ) {
		$js = '(function () { var root = document.documentElement, rm = matchMedia("(prefers-reduced-motion: reduce)").matches;'
			. ' root.classList.add("js", location.hash === "#contacts" || location.hash === "#contact-form" ? "on-contacts" : "on-home");'
			. ' try { if (!rm && !sessionStorage.getItem("soglia-loader")) root.classList.add("loading"); } catch (e) {} })();';
	} else {
		$js = 'document.documentElement.classList.add("js", "on-page");';
	}
	wp_print_inline_script_tag( $js );
	printf(
		'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
		esc_url( get_theme_file_uri( 'assets/fonts/geist-latin.woff2' ) )
	);
	if ( is_front_page() ) {
		printf( '<link rel="preload" as="image" href="%s">' . "\n", esc_url( get_theme_file_uri( 'assets/img/proj-1.webp' ) ) );
	}
}
add_action( 'wp_head', 'soglia_head', 1 );

/**
 * Pattern category for the Soglia sections.
 */
function soglia_pattern_category() {
	register_block_pattern_category( 'soglia', array( 'label' => __( 'Soglia', 'soglia' ) ) );
}
add_action( 'init', 'soglia_pattern_category' );

/**
 * Mark the menu link of the page being viewed (aria-current), as Orrery does. The menu links are custom URLs, which
 * WordPress does not mark itself. On the home page the theme script marks Home or Contacts by the view, as the
 * original; here a link to another page (added by the site owner) is marked on that page.
 */
function soglia_current_menu_link() {
	if ( is_front_page() ) {
		return;
	}
	wp_print_inline_script_tag( "document.querySelectorAll('.sg-nav li.sg-mlink > a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'soglia_current_menu_link' );
