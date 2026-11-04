<?php
/**
 * Title: Form: Feedback
 * Slug: ocra/form-feedback
 * Categories: ocra
 * Inserter: yes
 * Description: Five faces, a comment and the order email. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Ocra
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<article class="row" id="feedback">
      <div class="info">
        <div class="num"><?php esc_html_e( '05 · After your order', 'ocra' ); ?></div>
        <h3><?php esc_html_e( 'How did it arrive?', 'ocra' ); ?></h3>
        <p><?php esc_html_e( 'Every parcel is packed by hand. Tell us how yours arrived and how you are using it. We read every answer.', 'ocra' ); ?></p>
      </div>
      <div class="card">
        <form id="f-feedback" class="fgk fgk-rating" data-formgong>
          <input type="hidden" name="request" value="Feedback">
          <fieldset>
            <legend><?php esc_html_e( 'How was your order?', 'ocra' ); ?></legend>
            <div class="fgk-faces">
              <label class="fgk-face"><input type="radio" name="rating" value="1" required aria-label="<?php esc_attr_e( '1 of 5, very bad', 'ocra' ); ?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8 16.5c2.4-2.6 5.6-2.6 8 0"/></svg></label>
              <label class="fgk-face"><input type="radio" name="rating" value="2" aria-label="<?php esc_attr_e( '2 of 5, bad', 'ocra' ); ?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.5 16c2.2-1.3 4.8-1.3 7 0"/></svg></label>
              <label class="fgk-face"><input type="radio" name="rating" value="3" aria-label="<?php esc_attr_e( '3 of 5, okay', 'ocra' ); ?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.5 15.5h7"/></svg></label>
              <label class="fgk-face"><input type="radio" name="rating" value="4" aria-label="<?php esc_attr_e( '4 of 5, good', 'ocra' ); ?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.5 14.5c2.2 1.3 4.8 1.3 7 0"/></svg></label>
              <label class="fgk-face"><input type="radio" name="rating" value="5" aria-label="<?php esc_attr_e( '5 of 5, great', 'ocra' ); ?>"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M7.5 13.5c2.4 3.4 6.6 3.4 9 0"/></svg></label>
            </div>
            <div class="fgk-ends"><span><?php esc_html_e( 'Not good', 'ocra' ); ?></span><span><?php esc_html_e( 'Lovely', 'ocra' ); ?></span></div>
          </fieldset>
          <label class="fgk-field"><?php esc_html_e( 'Anything to add? (optional)', 'ocra' ); ?><textarea name="comment" rows="3" placeholder="<?php esc_attr_e( 'It arrived in one piece and…', 'ocra' ); ?>"></textarea></label>
          <label class="fgk-field"><?php esc_html_e( 'Order email (optional)', 'ocra' ); ?><input type="email" name="email" autocomplete="email" placeholder="<?php esc_attr_e( 'giulia@mail.com', 'ocra' ); ?>"></label>
          <button type="submit"><?php esc_html_e( 'Send', 'ocra' ); ?></button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1"><p class="fgk-big"><?php esc_html_e( 'Thank you.', 'ocra' ); ?></p><p class="fgk-small"><?php esc_html_e( 'It goes straight to the two of us.', 'ocra' ); ?></p><button type="button" class="fgk-ghost" data-again><?php esc_html_e( 'Send another', 'ocra' ); ?></button></div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
