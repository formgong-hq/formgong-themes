<?php
/**
 * Title: Dialog: Write to the kitchen
 * Slug: marrow/dialog-write
 * Categories: marrow
 * Inserter: no
 * Description: Topic chips (question, custom recipe, wholesale), name, email and message. A layout from the template: it does not send by itself. Set the form's action or replace it with a form plugin's block.
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<dialog id="d-write" aria-labelledby="write-title">
  <div class="dlg" tabindex="-1" autofocus>
    <button class="x" type="button" aria-label="<?php esc_attr_e( 'Close', 'marrow' ); ?>" data-close>×</button>
    <h2 id="write-title"><?php esc_html_e( 'Write to the kitchen', 'marrow' ); ?></h2>
    <p class="intro"><?php esc_html_e( 'A question, a recipe made for your pet, or wholesale for your shop. We answer within one working day.', 'marrow' ); ?></p>
    <form class="form" id="f-write" method="post">
      <input type="hidden" name="subject" value="Message">
      <fieldset class="chips"><legend><?php esc_html_e( 'Topic', 'marrow' ); ?></legend><div class="opts">
        <label><input type="radio" name="topic" value="Question" checked><span><?php esc_html_e( 'Question', 'marrow' ); ?></span></label>
        <label><input type="radio" name="topic" value="Custom recipe"><span><?php esc_html_e( 'Custom recipe', 'marrow' ); ?></span></label>
        <label><input type="radio" name="topic" value="Wholesale"><span><?php esc_html_e( 'Wholesale', 'marrow' ); ?></span></label>
      </div></fieldset>
      <label class="f"><span><?php esc_html_e( 'Name', 'marrow' ); ?></span><input name="name" autocomplete="name" required maxlength="100"></label>
      <label class="f"><span><?php esc_html_e( 'Email', 'marrow' ); ?></span><input type="email" name="email" autocomplete="email" required maxlength="160"></label>
      <label class="f full"><span><?php esc_html_e( 'Message', 'marrow' ); ?></span><textarea name="message" required maxlength="3000" placeholder="<?php esc_attr_e( 'Your pet\'s age, weight and anything we should know', 'marrow' ); ?>"></textarea></label>
      <button class="pill big" type="submit"><?php esc_html_e( 'Send message', 'marrow' ); ?></button>
      <p class="status" data-status role="status" aria-live="polite"></p>
      <div class="thanks" tabindex="-1"><strong><?php esc_html_e( 'Thank you,', 'marrow' ); ?> <span data-name><?php esc_html_e( 'there', 'marrow' ); ?></span>.</strong><?php esc_html_e( 'We will write back within one working day.', 'marrow' ); ?> <button type="button" data-again><?php esc_html_e( 'Send another', 'marrow' ); ?></button></div>
    </form>
  </div>
</dialog>
<!-- /wp:html -->
