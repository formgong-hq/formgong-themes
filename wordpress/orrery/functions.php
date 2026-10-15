<?php
/**
 * Orrery theme setup: styles, the motion script, editor styles and the pattern category.
 *
 * @package Orrery
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function orrery_setup() {
	add_editor_style( array( 'assets/css/orrery.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'orrery_setup' );

/**
 * Front-end styles (the Orrery build, then the WordPress additions) and the motion script
 * (network and wave canvases, enter animations, pointer follow; it honours reduced motion).
 */
function orrery_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'orrery', get_theme_file_uri( 'assets/css/orrery.css' ), array(), $version );
	wp_enqueue_style( 'orrery-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'orrery' ), $version );
	if ( function_exists( 'wp_enqueue_script_module' ) ) {
		wp_enqueue_script_module( 'orrery-motion', get_theme_file_uri( 'assets/js/orrery.js' ), array(), $version );
	}
}
add_action( 'wp_enqueue_scripts', 'orrery_assets' );

/**
 * Preload the main font file, as the original does.
 */
function orrery_preload_font() {
	printf(
		'<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n",
		esc_url( get_theme_file_uri( 'assets/fonts/questrial-latin-400-normal.DNhQdR1R.woff2' ) )
	);
}
add_action( 'wp_head', 'orrery_preload_font', 1 );

/**
 * Pattern category for the Orrery sections and page layouts.
 */
function orrery_pattern_category() {
	register_block_pattern_category( 'orrery', array( 'label' => __( 'Orrery', 'orrery' ) ) );
}
add_action( 'init', 'orrery_pattern_category' );

/**
 * Mark the menu link of the page being viewed, so it takes the accent colour as in the original.
 * The menu links are custom URLs, which WordPress does not mark as current itself.
 */
function orrery_current_menu_link() {
	wp_print_inline_script_tag( "document.querySelectorAll('.or-nav a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'orrery_current_menu_link' );
