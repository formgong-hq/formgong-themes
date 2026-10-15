<?php
/**
 * Lattice Atelier theme setup: styles, the page script, editor styles, the pattern category and small front-end helpers.
 *
 * @package Lattice_Atelier
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function lattice_atelier_setup() {
	add_editor_style( array( 'assets/css/fonts.css', 'assets/css/lattice-atelier.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'lattice_atelier_setup' );

/**
 * Front-end styles (the font, the Lattice Atelier stylesheet, then the WordPress additions) and the page script
 * (grid layout, intro, line drawing, letter rolls, the split hero changed by scroll; it honours reduced motion).
 */
function lattice_atelier_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'lattice-atelier-fonts', get_theme_file_uri( 'assets/css/fonts.css' ), array(), $version );
	wp_enqueue_style( 'lattice-atelier', get_theme_file_uri( 'assets/css/lattice-atelier.css' ), array( 'lattice-atelier-fonts' ), $version );
	wp_enqueue_style( 'lattice-atelier-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'lattice-atelier' ), $version );
	wp_enqueue_script( 'lattice-atelier', get_theme_file_uri( 'assets/js/lattice-atelier.js' ), array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'lattice_atelier_assets' );

/**
 * As the original, before the first paint: the layout mode (L = pinned screens from 1080 px, F = flowing page), the
 * line drawing, and the intro (home page only, once per tab session, never for reduced motion). Then the font file
 * and, on the home page, the first photo of the hero.
 */
function lattice_atelier_head() {
	$intro = is_front_page() ? 'if (!rm && !sessionStorage.getItem("atelier-intro")) root.classList.add("js-intro");' : '';
	wp_print_inline_script_tag(
		'(function () { var root = document.documentElement, rm = matchMedia("(prefers-reduced-motion: reduce)").matches;'
		. ' root.classList.add("js", innerWidth >= 1080 ? "L" : "F");'
		. ' try { ' . $intro . ' } catch (e) {}'
		. ' if (!rm && "IntersectionObserver" in window) root.classList.add("lines"); })();'
	);
	printf(
		'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
		esc_url( get_theme_file_uri( 'assets/fonts/inter-tight-latin.woff2' ) )
	);
	if ( is_front_page() ) {
		printf( '<link rel="preload" as="image" href="%s">' . "\n", esc_url( get_theme_file_uri( 'assets/img/house.webp' ) ) );
	}
}
add_action( 'wp_head', 'lattice_atelier_head', 1 );

/**
 * Pattern category for the Lattice Atelier sections.
 */
function lattice_atelier_pattern_category() {
	register_block_pattern_category( 'lattice-atelier', array( 'label' => __( 'Lattice Atelier', 'lattice-atelier' ) ) );
}
add_action( 'init', 'lattice_atelier_pattern_category' );

/**
 * Mark the menu link of the page being viewed (aria-current), as Orrery does. The menu links are custom URLs,
 * which WordPress does not mark as current itself. The demo menu links to parts of the home page, which the
 * original never marks, so only a link to another page (added by the site owner) is marked.
 */
function lattice_atelier_current_menu_link() {
	wp_print_inline_script_tag( "document.querySelectorAll('.la-nav a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'lattice_atelier_current_menu_link' );
