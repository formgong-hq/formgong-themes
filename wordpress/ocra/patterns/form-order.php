<?php
/**
 * Title: Form: Order a piece
 * Slug: ocra/form-order
 * Categories: ocra
 * Inserter: yes
 * Description: Pick a piece and how many; the product cards fill the piece in. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Ocra
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<article class="row" id="order">
      <div class="info">
        <div class="num"><?php esc_html_e( '01 · Order', 'ocra' ); ?></div>
        <h3><?php esc_html_e( 'Order a piece', 'ocra' ); ?></h3>
        <p><?php esc_html_e( 'Pick a piece and how many. We check it is still on the shelf, then send you shipping and a payment link.', 'ocra' ); ?></p>
      </div>
      <div class="card">
        <form id="f-order" class="fgk fgk-order" data-formgong>
          <input type="hidden" name="request" value="Order">
          <label class="fgk-field"><?php esc_html_e( 'Piece', 'ocra' ); ?>

            <select name="piece" required data-piece-select>
              <option value="" disabled selected><?php esc_html_e( 'Select…', 'ocra' ); ?></option>
              <option><?php esc_html_e( 'Dune vase', 'ocra' ); ?></option><option><?php esc_html_e( 'Citrus bowl', 'ocra' ); ?></option><option><?php esc_html_e( 'Fornace pitcher', 'ocra' ); ?></option><option><?php esc_html_e( 'Trio cups', 'ocra' ); ?></option>
            </select>
          </label>
          <div class="fgk-field"><?php esc_html_e( 'How many', 'ocra' ); ?>

            <div class="fgk-qty"><button type="button" data-step-by="-1" aria-label="<?php esc_attr_e( 'One less', 'ocra' ); ?>">−</button><input type="number" name="quantity" value="1" min="1" max="6" inputmode="numeric" aria-label="<?php esc_attr_e( 'How many', 'ocra' ); ?>"><button type="button" data-step-by="1" aria-label="<?php esc_attr_e( 'One more', 'ocra' ); ?>">+</button></div>
          </div>
          <div class="fgk-row">
            <label class="fgk-field"><?php esc_html_e( 'Name', 'ocra' ); ?><input name="name" autocomplete="name" placeholder="<?php esc_attr_e( 'Giulia Neri', 'ocra' ); ?>" required></label>
            <label class="fgk-field"><?php esc_html_e( 'Email', 'ocra' ); ?><input type="email" name="email" autocomplete="email" placeholder="<?php esc_attr_e( 'giulia@mail.com', 'ocra' ); ?>" required></label>
          </div>
          <label class="fgk-field"><?php esc_html_e( 'Ship to (country)', 'ocra' ); ?><input name="country" autocomplete="country-name" placeholder="<?php esc_attr_e( 'Italy', 'ocra' ); ?>" required></label>
          <button type="submit"><?php esc_html_e( 'Request this order', 'ocra' ); ?></button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1">
            <svg class="fgk-tick" viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="26"/><path d="m19 31 7.5 7.5L41.5 23"/></svg>
            <p class="fgk-big"><?php esc_html_e( 'Thank you,', 'ocra' ); ?> <span data-sent-name><?php esc_html_e( 'there', 'ocra' ); ?></span>.</p>
            <p class="fgk-small"><?php esc_html_e( 'We will check the shelf and write back with shipping within a working day.', 'ocra' ); ?></p>
            <button type="button" class="fgk-ghost" data-again><?php esc_html_e( 'Order something else', 'ocra' ); ?></button>
          </div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
