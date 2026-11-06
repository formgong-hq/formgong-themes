<?php
/**
 * Title: 404 content
 * Slug: ocra/404-content
 * Categories: ocra
 * Inserter: no
 *
 * @package Ocra
 */

?>
<!-- wp:heading {"level":1,"className":"oc-title"} --><h1 class="wp-block-heading oc-title"><?php esc_html_e( 'Not found', 'ocra' ); ?></h1><!-- /wp:heading -->
<!-- wp:group {"className":"oc-body","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group oc-body"><!-- wp:group {"className":"oc-meta","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group oc-meta"><!-- wp:paragraph --><p>404</p><!-- /wp:paragraph --></div>
<!-- /wp:group --><!-- wp:group {"className":"oc-content","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group oc-content"><!-- wp:paragraph {"className":"oc-prose"} --><p class="oc-prose"><?php
echo wp_kses(
	sprintf(
		/* translators: %s: URL of the home page. */
		__( 'This address leads nowhere. The pieces, the classes and the order forms are on the <a href="%s">home page</a>.', 'ocra' ),
		esc_url( home_url( '/' ) )
	),
	array( 'a' => array( 'href' => array() ) )
);
?></p><!-- /wp:paragraph --><!-- wp:search {"label":<?php echo wp_json_encode( __( 'Search', 'ocra' ) ); ?>,"showLabel":false,"buttonText":<?php echo wp_json_encode( __( 'Search', 'ocra' ) ); ?>,"className":"oc-search"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
