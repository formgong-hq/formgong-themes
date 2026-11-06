<?php
/**
 * Title: Dialog: Leave a review
 * Slug: marrow/dialog-review
 * Categories: marrow
 * Inserter: no
 * Description: Star rating, name, review and email. A layout from the template: it does not send by itself. Set the form's action or replace it with a form plugin's block.
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<dialog id="d-review" aria-labelledby="review-title">
  <div class="dlg" tabindex="-1" autofocus>
    <button class="x" type="button" aria-label="<?php esc_attr_e( 'Close', 'marrow' ); ?>" data-close>×</button>
    <h2 id="review-title"><?php esc_html_e( 'Leave a review', 'marrow' ); ?></h2>
    <p class="intro"><?php esc_html_e( 'Tell other owners how it went. Your review appears here once the kitchen has read it.', 'marrow' ); ?></p>
    <form class="form" id="f-review" method="post">
      <input type="hidden" name="subject" value="New review">
      <fieldset class="rate">
        <legend><?php esc_html_e( 'Your rating', 'marrow' ); ?></legend>
        <div class="pick">
          <input type="radio" id="r5" name="rating" value="5" required><label for="r5" aria-label="<?php esc_attr_e( '5 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
          <input type="radio" id="r4" name="rating" value="4"><label for="r4" aria-label="<?php esc_attr_e( '4 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
          <input type="radio" id="r3" name="rating" value="3"><label for="r3" aria-label="<?php esc_attr_e( '3 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
          <input type="radio" id="r2" name="rating" value="2"><label for="r2" aria-label="<?php esc_attr_e( '2 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
          <input type="radio" id="r1" name="rating" value="1"><label for="r1" aria-label="<?php esc_attr_e( '1 star', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
        </div>
      </fieldset>
      <label class="f full"><span><?php esc_html_e( 'Name', 'marrow' ); ?></span><input name="name" autocomplete="name" required maxlength="100"></label>
      <label class="f full"><span><?php esc_html_e( 'Your review', 'marrow' ); ?></span><textarea name="review" required maxlength="2000" placeholder="<?php esc_attr_e( 'What does your pet think? What could be better?', 'marrow' ); ?>"></textarea></label>
      <label class="f full"><span><?php esc_html_e( 'Email (optional, not shown)', 'marrow' ); ?></span><input type="email" name="email" autocomplete="email" maxlength="160"></label>
      <button class="pill big" type="submit"><?php esc_html_e( 'Send review', 'marrow' ); ?></button>
      <p class="status" data-status role="status" aria-live="polite"></p>
      <div class="thanks" tabindex="-1"><strong><?php esc_html_e( 'Thank you,', 'marrow' ); ?> <span data-name><?php esc_html_e( 'there', 'marrow' ); ?></span>.</strong><?php esc_html_e( 'Your review will appear here once the kitchen has read it.', 'marrow' ); ?> <button type="button" data-again><?php esc_html_e( 'Send another', 'marrow' ); ?></button></div>
    </form>
  </div>
</dialog>
<!-- /wp:html -->
