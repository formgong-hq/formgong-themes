<?php
/**
 * Halftone theme setup: styles, the page script, editor styles, the pattern category and small front-end helpers.
 *
 * @package Halftone
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function halftone_setup() {
	add_editor_style( array( 'assets/css/fonts.css', 'assets/css/halftone.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'halftone_setup' );

/**
 * Front-end styles (the fonts, the Halftone stylesheet, then the WordPress additions) and the page script (loader,
 * header that hides on the way down, the scroll-driven hero, projects and strip, entrances; it honours reduced motion).
 */
function halftone_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'halftone-fonts', get_theme_file_uri( 'assets/css/fonts.css' ), array(), $version );
	wp_enqueue_style( 'halftone', get_theme_file_uri( 'assets/css/halftone.css' ), array( 'halftone-fonts' ), $version );
	wp_enqueue_style( 'halftone-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'halftone' ), $version );
	wp_enqueue_script( 'halftone', get_theme_file_uri( 'assets/js/halftone.js' ), array(), $version, true );
}
add_action( 'wp_enqueue_scripts', 'halftone_assets' );

/**
 * As the original, before the first paint: the loader plays once per tab session and never for reduced motion (home
 * page only; other pages are plain scrolling pages, class ht-inner). Then the two latin font files and, on the home
 * page, the hero photo.
 */
function halftone_head() {
	if ( is_front_page() ) {
		$js = '(function () { var root = document.documentElement; root.classList.add("js");'
			. ' try { if (!matchMedia("(prefers-reduced-motion: reduce)").matches && !sessionStorage.getItem("halftone-loader")) root.classList.add("loading"); } catch (e) {} })();';
	} else {
		$js = 'document.documentElement.classList.add("js", "ht-inner");';
	}
	wp_print_inline_script_tag( $js );
	foreach ( array( 'archivo-latin', 'figtree-latin' ) as $font ) {
		printf(
			'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
			esc_url( get_theme_file_uri( 'assets/fonts/' . $font . '.woff2' ) )
		);
	}
	if ( is_front_page() ) {
		printf( '<link rel="preload" as="image" href="%s">' . "\n", esc_url( get_theme_file_uri( 'assets/img/hero.webp' ) ) );
	}
}
add_action( 'wp_head', 'halftone_head', 1 );

/**
 * The template's favicon (an orange square with a black dot) and theme colour, unless the site has its own icon.
 */
function halftone_icon() {
	echo '<meta name="theme-color" content="#f2621c">' . "\n";
	if ( ! has_site_icon() ) {
		echo '<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\'%3E%3Crect width=\'32\' height=\'32\' fill=\'%23f2621c\'/%3E%3Ccircle cx=\'16\' cy=\'16\' r=\'6\' fill=\'%23000\'/%3E%3C/svg%3E">' . "\n";
	}
}
add_action( 'wp_head', 'halftone_icon', 2 );

/**
 * Pattern category for the Halftone sections.
 */
function halftone_pattern_category() {
	register_block_pattern_category( 'halftone', array( 'label' => __( 'Halftone', 'halftone' ) ) );
}
add_action( 'init', 'halftone_pattern_category' );

/**
 * Mark the menu link of the page being viewed (aria-current), as Orrery does. The menu links are custom URLs, which
 * WordPress does not mark itself. The original marks no link visually (its menu links are all of one page), so the
 * mark is for screen readers; a link to another page (added by the site owner) is marked on that page.
 */
function halftone_current_menu_link() {
	wp_print_inline_script_tag( "document.querySelectorAll('.ht-nav li.ht-mlink > a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'halftone_current_menu_link' );
