<?php
/**
 * Lattice Estate theme setup: styles, the page script, editor styles, the pattern category and small front-end helpers.
 *
 * @package Lattice_Estate
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function lattice_estate_setup() {
	add_editor_style( array( 'assets/css/fonts.css', 'assets/css/lattice-estate.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'lattice_estate_setup' );

/**
 * Front-end styles (the fonts, the Lattice Estate stylesheet, then the WordPress additions) and the page script
 * (grid layout, intro, line drawing, the house rewound by scroll, clock; it honours reduced motion).
 */
function lattice_estate_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'lattice-estate-fonts', get_theme_file_uri( 'assets/css/fonts.css' ), array(), $version );
	wp_enqueue_style( 'lattice-estate', get_theme_file_uri( 'assets/css/lattice-estate.css' ), array( 'lattice-estate-fonts' ), $version );
	wp_enqueue_style( 'lattice-estate-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'lattice-estate' ), $version );
	wp_enqueue_script( 'lattice-estate', get_theme_file_uri( 'assets/js/lattice-estate.js' ), array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'lattice_estate_assets' );

/**
 * As the original, before the first paint: the layout mode (L = pinned screens, F = flowing page), the line drawing,
 * and the intro (home page only, once per tab session, never for reduced motion). Then the main font files and,
 * on the home page, the first photo of the house.
 */
function lattice_estate_head() {
	$intro = is_front_page() ? 'if (!matchMedia("(prefers-reduced-motion: reduce)").matches && !sessionStorage.getItem("estate-intro")) root.classList.add("js-intro");' : '';
	wp_print_inline_script_tag(
		'(function () { var root = document.documentElement; root.classList.add("js", innerWidth > 860 ? "L" : "F");'
		. ' try { ' . $intro . ' } catch (e) {}'
		. ' if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) root.classList.add("lines"); })();'
	);
	foreach ( array( 'montserrat-latin.woff2', 'cormorant-garamond-latin.woff2' ) as $font ) {
		printf(
			'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
			esc_url( get_theme_file_uri( 'assets/fonts/' . $font ) )
		);
	}
	if ( is_front_page() ) {
		printf( '<link rel="preload" as="image" href="%s">' . "\n", esc_url( get_theme_file_uri( 'assets/img/built.webp' ) ) );
	}
}
add_action( 'wp_head', 'lattice_estate_head', 1 );

/**
 * Pattern category for the Lattice Estate sections.
 */
function lattice_estate_pattern_category() {
	register_block_pattern_category( 'lattice-estate', array( 'label' => __( 'Lattice Estate', 'lattice-estate' ) ) );
}
add_action( 'init', 'lattice_estate_pattern_category' );

/**
 * Mark the menu link of the page being viewed (aria-current), as Orrery does. The menu links are custom URLs,
 * which WordPress does not mark as current itself. The demo menu links to parts of the home page, which the
 * original marks with no colour, so only a link to another page (added by the site owner) gets the accent.
 */
function lattice_estate_current_menu_link() {
	wp_print_inline_script_tag( "document.querySelectorAll('.le-nav a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'lattice_estate_current_menu_link' );
