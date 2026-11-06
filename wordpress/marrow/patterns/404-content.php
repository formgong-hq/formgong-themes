<?php
/**
 * Title: 404 content
 * Slug: marrow/404-content
 * Categories: marrow
 * Inserter: no
 *
 * @package Marrow
 */

?>
<!-- wp:heading {"level":1,"className":"mw-title"} --><h1 class="wp-block-heading mw-title"><?php esc_html_e( 'Not found', 'marrow' ); ?></h1><!-- /wp:heading -->
<!-- wp:group {"className":"mw-body","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group mw-body"><!-- wp:group {"className":"mw-meta","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group mw-meta"><!-- wp:paragraph --><p>404</p><!-- /wp:paragraph --></div>
<!-- /wp:group --><!-- wp:group {"className":"mw-content","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group mw-content"><!-- wp:paragraph {"className":"mw-prose"} --><p class="mw-prose"><?php
echo wp_kses(
	sprintf(
		/* translators: %s: URL of the home page. */
		__( 'This address leads nowhere. The recipes, the treats and the meal finder are on the <a href="%s">home page</a>.', 'marrow' ),
		esc_url( home_url( '/' ) )
	),
	array( 'a' => array( 'href' => array() ) )
);
?></p><!-- /wp:paragraph --><!-- wp:search {"label":<?php echo wp_json_encode( __( 'Search', 'marrow' ) ); ?>,"showLabel":false,"buttonText":<?php echo wp_json_encode( __( 'Search', 'marrow' ) ); ?>,"className":"mw-search"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
