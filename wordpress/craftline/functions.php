<?php
/**
 * Craftline theme setup: styles, editor styles and the pattern category.
 *
 * @package Craftline
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function craftline_setup() {
	add_editor_style( array( 'assets/css/craftline.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'craftline_setup' );

/**
 * Front-end styles: the Craftline build, then the WordPress additions.
 */
function craftline_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'craftline', get_theme_file_uri( 'assets/css/craftline.css' ), array(), $version );
	wp_enqueue_style( 'craftline-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'craftline' ), $version );
}
add_action( 'wp_enqueue_scripts', 'craftline_assets' );

/**
 * Pattern category for the Craftline sections and page layouts.
 */
function craftline_pattern_category() {
	register_block_pattern_category( 'craftline', array( 'label' => __( 'Craftline', 'craftline' ) ) );
}
add_action( 'init', 'craftline_pattern_category' );
