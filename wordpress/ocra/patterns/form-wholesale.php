<?php
/**
 * Title: Form: Wholesale
 * Slug: ocra/form-wholesale
 * Categories: ocra
 * Inserter: yes
 * Description: Shop, cafe or hotel cards and a button that shows sending and done. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Ocra
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<article class="row" id="wholesale">
      <div class="info">
        <div class="num"><?php esc_html_e( '04 · Wholesale', 'ocra' ); ?></div>
        <h3><?php esc_html_e( 'For shops, cafés and hotels', 'ocra' ); ?></h3>
        <p><?php esc_html_e( 'We keep a few pieces back from every firing for places that sell or use them. Ask for the price list.', 'ocra' ); ?></p>
      </div>
      <div class="card">
        <form id="f-wholesale" class="fgk fgk-loading" data-keep data-formgong>
          <input type="hidden" name="request" value="Wholesale">
          <fieldset>
            <legend><?php esc_html_e( 'You are a…', 'ocra' ); ?></legend>
            <div class="fgk-opts">
              <label class="fgk-opt"><input type="radio" name="business" value="Shop" required><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 8h14l-1.2 11.5H6.2z" stroke-linejoin="round"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg><?php esc_html_e( 'Shop', 'ocra' ); ?></label>
              <label class="fgk-opt"><input type="radio" name="business" value="Café or restaurant"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" stroke-linejoin="round"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5v2.5M11 3.5v2.5"/></svg><?php esc_html_e( 'Café', 'ocra' ); ?></label>
              <label class="fgk-opt"><input type="radio" name="business" value="Hotel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 19V7M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11.5" r="2"/></svg><?php esc_html_e( 'Hotel', 'ocra' ); ?></label>
            </div>
          </fieldset>
          <label class="fgk-field"><?php esc_html_e( 'Business name', 'ocra' ); ?><input name="company" autocomplete="organization" placeholder="<?php esc_attr_e( 'Bottega Sole', 'ocra' ); ?>" required></label>
          <label class="fgk-field"><?php esc_html_e( 'Email', 'ocra' ); ?><input type="email" name="email" autocomplete="email" placeholder="<?php esc_attr_e( 'orders@bottegasole.com', 'ocra' ); ?>" required></label>
          <button type="submit">
            <span class="fgk-b fgk-b1"><?php esc_html_e( 'Request the price list', 'ocra' ); ?></span>
            <span class="fgk-b fgk-b2" aria-hidden="true"><?php esc_html_e( 'Sending', 'ocra' ); ?> <span class="fgk-dots"><i></i><i></i><i></i></span></span>
            <span class="fgk-b fgk-b3" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8.5 3 3 7-7"/></svg><?php esc_html_e( 'On its way', 'ocra' ); ?></span>
          </button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
