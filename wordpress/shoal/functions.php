<?php
/**
 * Shoal theme setup: styles, the page script, editor styles, the pattern category and small front-end helpers.
 *
 * @package Shoal
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function shoal_setup() {
	add_editor_style( array( 'assets/css/shoal.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'shoal_setup' );

/**
 * Front-end styles (the Shoal build, then the WordPress additions) and the page script
 * (enter animations, the header that turns solid and hides on scroll, the contact dialog; it honours reduced motion).
 */
function shoal_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'shoal', get_theme_file_uri( 'assets/css/shoal.css' ), array(), $version );
	wp_enqueue_style( 'shoal-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'shoal' ), $version );
	if ( function_exists( 'wp_enqueue_script_module' ) ) {
		wp_enqueue_script_module( 'shoal-motion', get_theme_file_uri( 'assets/js/shoal.js' ), array(), $version );
	}
}
add_action( 'wp_enqueue_scripts', 'shoal_assets' );

/**
 * As the original: mark the page as scripted (enter animations wait for it) and preload the two main font files.
 */
function shoal_head() {
	wp_print_inline_script_tag( 'document.documentElement.classList.add("js");' );
	foreach ( array( 'newsreader-latin-opsz-normal.s-izfB6B.woff2', 'metropolis-latin-400-normal.DKepXnDq.woff2' ) as $font ) {
		printf(
			'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
			esc_url( get_theme_file_uri( 'assets/fonts/' . $font ) )
		);
	}
}
add_action( 'wp_head', 'shoal_head', 1 );

/**
 * Every page but the home page starts below a solid header, as the original's body class "plain-top".
 *
 * @param string[] $classes Body classes.
 * @return string[]
 */
function shoal_body_class( $classes ) {
	if ( ! is_front_page() ) {
		$classes[] = 'plain-top';
	}
	return $classes;
}
add_filter( 'body_class', 'shoal_body_class' );

/**
 * Pattern category for the Shoal sections and page layouts.
 */
function shoal_pattern_category() {
	register_block_pattern_category( 'shoal', array( 'label' => __( 'Shoal', 'shoal' ) ) );
}
add_action( 'init', 'shoal_pattern_category' );

/**
 * Mark the menu link of the page being viewed (aria-current), as Orrery does. The menu links are custom URLs,
 * which WordPress does not mark as current itself. The original Shoal shows no colour for it, so neither does the theme.
 */
function shoal_current_menu_link() {
	wp_print_inline_script_tag( "document.querySelectorAll('.sh-nav a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'shoal_current_menu_link' );
