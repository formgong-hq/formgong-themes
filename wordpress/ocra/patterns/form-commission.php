<?php
/**
 * Title: Form: Commission
 * Slug: ocra/form-commission
 * Categories: ocra
 * Inserter: yes
 * Description: A growing text box with a counter and a drop zone for up to three files. A layout from the template: it does not send by itself. Set the form's action or replace it with a form plugin's block.
 *
 * @package Ocra
 */

?>
<!-- wp:html -->
<article class="row" id="commission">
      <div class="info">
        <div class="num"><?php esc_html_e( '03 · Commissions', 'ocra' ); ?></div>
        <h3><?php esc_html_e( 'Commission your own shape', 'ocra' ); ?></h3>
        <p><?php esc_html_e( 'A set for a restaurant, a vase to match a room. Send a sketch or a photo and we will tell you what is possible.', 'ocra' ); ?></p>
      </div>
      <div class="card">
        <form id="f-commission" class="fgk" method="post">
          <input type="hidden" name="request" value="Commission">
          <label class="fgk-field"><?php esc_html_e( 'What would you like?', 'ocra' ); ?><textarea name="message" rows="3" maxlength="800" placeholder="<?php esc_attr_e( 'Twelve plates for a small restaurant, in the orange glaze…', 'ocra' ); ?>" required data-autosize></textarea></label>
          <div class="fgk-meta"><span data-count="message">0 / 800</span></div>
          <div class="fgk-zone" data-drop data-max="3" data-mb="5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 16V5M7.5 9.5 12 5l4.5 4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" stroke-linecap="round"/></svg>
            <span><?php esc_html_e( 'Drop sketches or photos here', 'ocra' ); ?></span>
            <small><?php esc_html_e( 'Up to 3 files, 5 MB each', 'ocra' ); ?></small>
            <input type="file" name="reference" multiple accept="image/*,.pdf" aria-label="<?php esc_attr_e( 'Attach up to 3 sketches or photos, 5 MB each', 'ocra' ); ?>">
          </div>
          <ul class="fgk-list" data-files></ul>
          <div class="fgk-row">
            <label class="fgk-field"><?php esc_html_e( 'Name', 'ocra' ); ?><input name="name" autocomplete="name" placeholder="<?php esc_attr_e( 'Giulia Neri', 'ocra' ); ?>" required></label>
            <label class="fgk-field"><?php esc_html_e( 'Email', 'ocra' ); ?><input type="email" name="email" autocomplete="email" placeholder="<?php esc_attr_e( 'giulia@mail.com', 'ocra' ); ?>" required></label>
          </div>
          <button type="submit"><?php esc_html_e( 'Send the idea', 'ocra' ); ?></button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1"><p class="fgk-big"><?php esc_html_e( 'Got it,', 'ocra' ); ?> <span data-sent-name><?php esc_html_e( 'there', 'ocra' ); ?></span>.</p><p class="fgk-small"><?php esc_html_e( 'We will look at the drawings and reply with a price range and a date.', 'ocra' ); ?></p><button type="button" class="fgk-ghost" data-again><?php esc_html_e( 'Send another idea', 'ocra' ); ?></button></div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
