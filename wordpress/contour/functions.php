<?php
/**
 * Contour functions: styles, scripts, the Formgong key for the brief form, the current menu item.
 *
 * @package Contour
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

add_action(
	'after_setup_theme',
	function () {
		add_theme_support( 'wp-block-styles' );
		add_theme_support( 'editor-styles' );
		add_editor_style( array( 'assets/css/fonts.css', 'assets/css/contour.css', 'assets/css/wordpress.css' ) );
	}
);

add_action(
	'wp_enqueue_scripts',
	function () {
		$v = wp_get_theme()->get( 'Version' );
		wp_enqueue_style( 'contour-fonts', get_theme_file_uri( 'assets/css/fonts.css' ), array(), $v );
		wp_enqueue_style( 'contour', get_theme_file_uri( 'assets/css/contour.css' ), array( 'contour-fonts' ), $v );
		wp_enqueue_style( 'contour-wordpress', get_theme_file_uri( 'assets/css/wordpress.css' ), array( 'contour' ), $v );
		wp_enqueue_script( 'gsap', get_theme_file_uri( 'assets/js/vendor/gsap.min.js' ), array(), '3.13.0', array( 'strategy' => 'defer', 'in_footer' => true ) );
		wp_enqueue_script( 'gsap-scrolltrigger', get_theme_file_uri( 'assets/js/vendor/ScrollTrigger.min.js' ), array( 'gsap' ), '3.13.0', array( 'strategy' => 'defer', 'in_footer' => true ) );
		wp_enqueue_script( 'gsap-splittext', get_theme_file_uri( 'assets/js/vendor/SplitText.min.js' ), array( 'gsap' ), '3.13.0', array( 'strategy' => 'defer', 'in_footer' => true ) );
		wp_enqueue_script( 'lenis', get_theme_file_uri( 'assets/js/vendor/lenis.min.js' ), array(), '1.3.27', array( 'strategy' => 'defer', 'in_footer' => true ) );
		wp_enqueue_script( 'contour', get_theme_file_uri( 'assets/js/contour.js' ), array( 'gsap', 'gsap-scrolltrigger', 'gsap-splittext', 'lenis' ), $v, array( 'strategy' => 'defer', 'in_footer' => true ) );
	}
);

/* The <html> class and the saved theme, before paint (as the template's inline script). */
add_action(
	'wp_head',
	function () {
		echo "<script>(function(d){d.classList.remove('no-js');d.classList.add('js');try{var t=localStorage.getItem('ct-theme'),a=localStorage.getItem('ct-accent');if(t)d.dataset.theme=t;if(a)d.dataset.accent=a;if(sessionStorage.getItem('ct-preloaded'))d.dataset.preloaded='yes'}catch(e){}})(document.documentElement)</script>\n";
	},
	1
);
add_filter(
	'language_attributes',
	function ( $out ) {
		return $out . ' class="no-js" data-accent="blue"';
	}
);
/* The fixed hairlines at the page edges (the template's body.frame). */
add_filter(
	'body_class',
	function ( $classes ) {
		$classes[] = 'frame';
		return $classes;
	}
);

add_action(
	'init',
	function () {
		register_block_pattern_category( 'contour', array( 'label' => __( 'Contour', 'contour' ) ) );
	}
);

/**
 * The Formgong access key saved by the Formgong plugin (Settings → Formgong). Never stored in the theme.
 */
function contour_formgong_key() {
	$settings = get_option( 'formgong_settings' );
	return is_array( $settings ) && ! empty( $settings['access_key'] ) ? (string) $settings['access_key'] : '';
}

/* Fill the key into the brief form at render time; while there is none, hide the form (admins see a hint). */
add_filter(
	'render_block',
	function ( $html, $block ) {
		if ( 'core/html' !== $block['blockName'] || false === strpos( $html, 'name="access_key"' ) ) {
			return $html;
		}
		$key = contour_formgong_key();
		if ( '' !== $key ) {
			return str_replace( 'name="access_key" value=""', 'name="access_key" value="' . esc_attr( $key ) . '"', $html );
		}
		$hint = current_user_can( 'manage_options' ) ? '<p class="ct-key-hint">' . esc_html__( 'Add your Formgong key in Settings → Formgong', 'contour' ) . '</p>' : '';
		return preg_replace( '#<form class="fg".*?</form>#s', $hint, $html );
	},
	10,
	2
);

/* The current page's menu item gets aria-current, as on the template (a hash link marks the section in view). */
add_action(
	'wp_footer',
	function () {
		echo "<script>(function(){var p=location.pathname;document.querySelectorAll('.ct-nav a').forEach(function(a){if(a.pathname===p&&!a.hash&&p!=='/'){a.setAttribute('aria-current','page');}});})();</script>\n";
	}
);
