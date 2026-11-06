<?php
/**
 * Title: Footer
 * Slug: marrow/footer
 * Categories: marrow
 * Inserter: no
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<footer id="contact">
  <div class="wrap">
    <div class="f-grid">
      <div class="f-contact">
        <p class="f-logo"><svg aria-hidden="true"><use href="#i-mark"/></svg><?php esc_html_e( 'MARROW', 'marrow' ); ?></p>
        <h3 style="margin-top:28px"><?php esc_html_e( 'Contact', 'marrow' ); ?></h3>
        <p><?php esc_html_e( '218 Dock Road, Portland, OR 97209', 'marrow' ); ?></p>
        <a class="tel" href="tel:+15035550148">+1 (503) 555-0148</a>
        <p><a href="mailto:hello@marrow.example"><?php esc_html_e( 'hello@marrow.example', 'marrow' ); ?></a></p>
        <div class="social">
          <a href="#" aria-label="<?php esc_attr_e( 'Photos', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-camera"/></svg></a>
          <a href="#" aria-label="<?php esc_attr_e( 'Videos', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-play"/></svg></a>
          <a href="#" aria-label="<?php esc_attr_e( 'Chat with us', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-chat"/></svg></a>
          <a href="#" aria-label="<?php esc_attr_e( 'Newsletter', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-mail"/></svg></a>
        </div>
      </div>
      <div><h3><?php esc_html_e( 'Recipes', 'marrow' ); ?></h3><ul><li><a href="<?php echo esc_url( home_url( '/#recipes' ) ); ?>" data-set-pet="dog"><?php esc_html_e( 'For dogs', 'marrow' ); ?></a></li><li><a href="<?php echo esc_url( home_url( '/#recipes' ) ); ?>" data-set-pet="cat"><?php esc_html_e( 'For cats', 'marrow' ); ?></a></li><li><a href="<?php echo esc_url( home_url( '/#treats' ) ); ?>"><?php esc_html_e( 'Treats', 'marrow' ); ?></a></li><li><a href="<?php echo esc_url( home_url( '/#finder' ) ); ?>"><?php esc_html_e( 'Meal finder', 'marrow' ); ?></a></li></ul></div>
      <div><h3><?php esc_html_e( 'Help', 'marrow' ); ?></h3><ul><li><a href="<?php echo esc_url( home_url( '/#why' ) ); ?>"><?php esc_html_e( 'Why raw', 'marrow' ); ?></a></li><li><a href="<?php echo esc_url( home_url( '/#faq' ) ); ?>"><?php esc_html_e( 'Questions', 'marrow' ); ?></a></li><li><a href="<?php echo esc_url( home_url( '/#faq-5' ) ); ?>"><?php esc_html_e( 'Delivery', 'marrow' ); ?></a></li><li><button class="linkbtn" type="button" data-write="Wholesale"><?php esc_html_e( 'Wholesale', 'marrow' ); ?></button></li><li><button class="linkbtn" type="button" data-write="Question"><?php esc_html_e( 'Write to us', 'marrow' ); ?></button></li></ul></div>
      <div><h3><?php esc_html_e( 'Hours', 'marrow' ); ?></h3><ul><li><?php esc_html_e( 'Mon–Fri 9:00–19:00', 'marrow' ); ?></li><li><?php esc_html_e( 'Sat 10:00–16:00', 'marrow' ); ?></li><li><?php esc_html_e( 'Sun closed', 'marrow' ); ?></li></ul></div>
    </div>
    <div class="f-bottom"><p>© <span data-year>2026</span> <?php esc_html_e( 'Marrow Kitchen · sample site', 'marrow' ); ?></p></div>
  </div>
</footer>
<!-- /wp:html -->
