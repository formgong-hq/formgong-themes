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
        <div class="num">04 · Wholesale</div>
        <h3>For shops, cafés and hotels</h3>
        <p>We keep a few pieces back from every firing for places that sell or use them. Ask for the price list.</p>
      </div>
      <div class="card">
        <form id="f-wholesale" class="fgk fgk-loading" data-keep data-formgong>
          <input type="hidden" name="request" value="Wholesale">
          <fieldset>
            <legend>You are a…</legend>
            <div class="fgk-opts">
              <label class="fgk-opt"><input type="radio" name="business" value="Shop" required><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 8h14l-1.2 11.5H6.2z" stroke-linejoin="round"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>Shop</label>
              <label class="fgk-opt"><input type="radio" name="business" value="Café or restaurant"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M5 9h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z" stroke-linejoin="round"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5v2.5M11 3.5v2.5"/></svg>Café</label>
              <label class="fgk-opt"><input type="radio" name="business" value="Hotel"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 19V7M3 15h18v4M21 15v-3a3 3 0 0 0-3-3h-7v6"/><circle cx="7" cy="11.5" r="2"/></svg>Hotel</label>
            </div>
          </fieldset>
          <label class="fgk-field">Business name<input name="company" autocomplete="organization" placeholder="Bottega Sole" required></label>
          <label class="fgk-field">Email<input type="email" name="email" autocomplete="email" placeholder="orders@bottegasole.com" required></label>
          <button type="submit">
            <span class="fgk-b fgk-b1">Request the price list</span>
            <span class="fgk-b fgk-b2" aria-hidden="true">Sending <span class="fgk-dots"><i></i><i></i><i></i></span></span>
            <span class="fgk-b fgk-b3" aria-hidden="true"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 8.5 3 3 7-7"/></svg>On its way</span>
          </button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
