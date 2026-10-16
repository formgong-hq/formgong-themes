<?php
/**
 * Lucerna theme setup: styles, GSAP and the page script, editor styles, the pattern category, the Formgong key for
 * the two forms and small front-end helpers.
 *
 * @package Lucerna
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Editor styles, so the Site Editor shows the theme as visitors see it.
 */
function lucerna_setup() {
	add_editor_style( array( 'assets/css/fonts.css', 'assets/css/lucerna.css', 'assets/css/wordpress.css' ) );
}
add_action( 'after_setup_theme', 'lucerna_setup' );

/**
 * Front-end styles (the fonts, the Lucerna stylesheet, then the WordPress additions), GSAP 3.13 with ScrollTrigger and
 * ScrollSmoother (self-hosted, GreenSock's no-charge standard licence, see assets/js/vendor/GSAP-LICENSE.txt) and the
 * template's script (loader, smooth scroll, slider, drag strip, light switches, value cards, mega menu, phone menu,
 * the contact drawer and the forms; it honours reduced motion).
 */
function lucerna_assets() {
	$version = wp_get_theme()->get( 'Version' );
	wp_enqueue_style( 'lucerna-fonts', get_theme_file_uri( 'assets/css/fonts.css' ), array(), $version );
	wp_enqueue_style( 'lucerna', get_theme_file_uri( 'assets/css/lucerna.css' ), array( 'lucerna-fonts' ), $version );
	wp_enqueue_style( 'lucerna-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'lucerna' ), $version );
	wp_enqueue_script( 'lucerna-gsap', get_theme_file_uri( 'assets/js/vendor/gsap.min.js' ), array(), '3.13.0', true );
	wp_enqueue_script( 'lucerna-scrolltrigger', get_theme_file_uri( 'assets/js/vendor/ScrollTrigger.min.js' ), array( 'lucerna-gsap' ), '3.13.0', true );
	wp_enqueue_script( 'lucerna-scrollsmoother', get_theme_file_uri( 'assets/js/vendor/ScrollSmoother.min.js' ), array( 'lucerna-scrolltrigger' ), '3.13.0', true );
	wp_enqueue_script( 'lucerna', get_theme_file_uri( 'assets/js/lucerna.js' ), array( 'lucerna-scrollsmoother' ), $version, true );
}
add_action( 'wp_enqueue_scripts', 'lucerna_assets' );

/**
 * As the original: the three Poppins files of the first screen are preloaded, and on the home page the first hero
 * photo too, and the page does not scroll until the loader is done (lucerna.js lifts it; with no loader it lifts it
 * at once). Then the template's favicon, unless the site has its own icon.
 */
function lucerna_head() {
	foreach ( array( '400', '500', '600' ) as $weight ) {
		printf( '<link rel="preload" href="%s" as="font" type="font/woff2" crossorigin>' . "\n", esc_url( get_theme_file_uri( "assets/fonts/poppins-$weight.woff2" ) ) );
	}
	if ( is_front_page() ) {
		printf( '<link rel="preload" href="%s" as="image" fetchpriority="high">' . "\n", esc_url( get_theme_file_uri( 'assets/img/hero-1.webp' ) ) );
		wp_print_inline_script_tag( 'document.documentElement.classList.add("no-scroll");' );
	}
	if ( ! has_site_icon() ) {
		printf( '<link rel="icon" href="%s" type="image/svg+xml">' . "\n", esc_url( get_theme_file_uri( 'assets/img/favicon.svg' ) ) );
	}
}
add_action( 'wp_head', 'lucerna_head', 2 );

/**
 * Pattern category for the Lucerna sections.
 */
function lucerna_pattern_category() {
	register_block_pattern_category( 'lucerna', array( 'label' => __( 'Lucerna', 'lucerna' ) ) );
}
add_action( 'init', 'lucerna_pattern_category' );

/**
 * The Formgong access key, from the Formgong plugin's settings (Settings → Formgong). The theme stores no key.
 *
 * @return string The key, or '' when none is saved.
 */
function lucerna_formgong_key() {
	$settings = get_option( 'formgong_settings' );
	if ( is_array( $settings ) && ! empty( $settings['access_key'] ) && is_string( $settings['access_key'] ) ) {
		return trim( $settings['access_key'] );
	}
	return '';
}

/**
 * The template's two forms (trade account in the header, contact in the drawer) post straight to Formgong
 * (https://formgong.com/submit) with a hidden access_key field that the patterns leave empty. At render time the key
 * from the Formgong plugin goes into it. While no key is saved the forms are left out (a form without a key cannot
 * send) and signed-in admins see one line in their place.
 *
 * @param string $content The rendered block.
 * @param array  $block   The block.
 * @return string
 */
function lucerna_formgong_forms( $content, $block ) {
	if ( empty( $block['blockName'] ) || 'core/html' !== $block['blockName'] || false === strpos( $content, 'name="access_key"' ) ) {
		return $content;
	}
	$key = lucerna_formgong_key();
	if ( '' !== $key ) {
		return str_replace( 'name="access_key" value=""', 'name="access_key" value="' . esc_attr( $key ) . '"', $content );
	}
	$note = '';
	if ( current_user_can( 'manage_options' ) ) {
		$note = '<p class="lc-nokey">' . esc_html__( 'Add your Formgong key in Settings → Formgong', 'lucerna' ) . '</p>';
	}
	$out = preg_replace( '#<form\b[^>]*\bclass="fg\b[^"]*"[^>]*>.*?</form>#s', $note, $content );
	return null === $out ? '' : $out;
}
add_filter( 'render_block', 'lucerna_formgong_forms', 10, 2 );

/**
 * Mark the menu link of the page being viewed (aria-current), as Orrery does. The menu links are custom URLs, which
 * WordPress does not mark itself. The original marks no link (its links are all parts of one page), so on the home
 * page nothing changes; a link to another page (added by the site owner) is marked on that page and drawn as the
 * original draws a hovered link (the grey pill; in the phone menu the light grey row).
 */
function lucerna_current_menu_link() {
	wp_print_inline_script_tag( "document.querySelectorAll('.lc-menu li > a[href], .lc-mm li > a[href]').forEach(function(a){if(a.origin===location.origin&&a.pathname===location.pathname&&!a.hash){a.setAttribute('aria-current','page');}});" );
}
add_action( 'wp_footer', 'lucerna_current_menu_link' );
