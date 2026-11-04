<?php
/**
 * Title: Form: Write to us
 * Slug: ocra/form-write
 * Categories: ocra
 * Inserter: yes
 * Description: Floating labels on the dark card. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Ocra
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<article class="row" id="write">
      <div class="info">
        <div class="num"><?php esc_html_e( '06 · Anything else', 'ocra' ); ?></div>
        <h3><?php esc_html_e( 'Write to us', 'ocra' ); ?></h3>
        <p><?php esc_html_e( 'Questions about glazes, care, or a piece you saw at a market. A short note is fine.', 'ocra' ); ?></p>
      </div>
      <div class="card dark">
        <form id="f-write" class="fgk fgk-float" data-formgong>
          <input type="hidden" name="request" value="Message">
          <label class="fgk-fl"><input name="name" autocomplete="name" placeholder=" " required><span><?php esc_html_e( 'Name', 'ocra' ); ?></span></label>
          <label class="fgk-fl"><input type="email" name="email" autocomplete="email" placeholder=" " required><span><?php esc_html_e( 'Email', 'ocra' ); ?></span></label>
          <label class="fgk-fl"><textarea name="message" rows="2" placeholder=" " required data-autosize></textarea><span><?php esc_html_e( 'Message', 'ocra' ); ?></span></label>
          <button type="submit"><?php esc_html_e( 'Send', 'ocra' ); ?></button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1"><p class="fgk-big"><?php esc_html_e( 'Thanks,', 'ocra' ); ?> <span data-sent-name><?php esc_html_e( 'there', 'ocra' ); ?></span>.</p><p class="fgk-small" style="color:rgba(255,255,255,.6)"><?php esc_html_e( 'We will answer within a working day.', 'ocra' ); ?></p><button type="button" class="fgk-ghost" data-again><?php esc_html_e( 'Write again', 'ocra' ); ?></button></div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
