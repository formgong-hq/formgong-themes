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
        <div class="num">01 · Order</div>
        <h3>Order a piece</h3>
        <p>Pick a piece and how many. We check it is still on the shelf, then send you shipping and a payment link.</p>
      </div>
      <div class="card">
        <form id="f-order" class="fgk fgk-order" data-formgong>
          <input type="hidden" name="request" value="Order">
          <label class="fgk-field">Piece
            <select name="piece" required data-piece-select>
              <option value="" disabled selected>Select…</option>
              <option>Dune vase</option><option>Citrus bowl</option><option>Fornace pitcher</option><option>Trio cups</option>
            </select>
          </label>
          <div class="fgk-field">How many
            <div class="fgk-qty"><button type="button" data-step-by="-1" aria-label="One less">−</button><input type="number" name="quantity" value="1" min="1" max="6" inputmode="numeric" aria-label="How many"><button type="button" data-step-by="1" aria-label="One more">+</button></div>
          </div>
          <div class="fgk-row">
            <label class="fgk-field">Name<input name="name" autocomplete="name" placeholder="Giulia Neri" required></label>
            <label class="fgk-field">Email<input type="email" name="email" autocomplete="email" placeholder="giulia@mail.com" required></label>
          </div>
          <label class="fgk-field">Ship to (country)<input name="country" autocomplete="country-name" placeholder="Italy" required></label>
          <button type="submit">Request this order</button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1">
            <svg class="fgk-tick" viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="26"/><path d="m19 31 7.5 7.5L41.5 23"/></svg>
            <p class="fgk-big">Thank you, <span data-sent-name>there</span>.</p>
            <p class="fgk-small">We will check the shelf and write back with shipping within a working day.</p>
            <button type="button" class="fgk-ghost" data-again>Order something else</button>
          </div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
