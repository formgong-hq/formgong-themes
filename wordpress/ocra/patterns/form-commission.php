<?php
/**
 * Title: Form: Commission
 * Slug: ocra/form-commission
 * Categories: ocra
 * Inserter: yes
 * Description: A growing text box with a counter and a drop zone for up to three files. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Ocra
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<article class="row" id="commission">
      <div class="info">
        <div class="num">03 · Commissions</div>
        <h3>Commission your own shape</h3>
        <p>A set for a restaurant, a vase to match a room. Send a sketch or a photo and we will tell you what is possible.</p>
      </div>
      <div class="card">
        <form id="f-commission" class="fgk" data-formgong>
          <input type="hidden" name="request" value="Commission">
          <label class="fgk-field">What would you like?<textarea name="message" rows="3" maxlength="800" placeholder="Twelve plates for a small restaurant, in the orange glaze…" required data-autosize></textarea></label>
          <div class="fgk-meta"><span data-count="message">0 / 800</span></div>
          <div class="fgk-zone" data-drop data-max="3" data-mb="5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 16V5M7.5 9.5 12 5l4.5 4.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" stroke-linecap="round"/></svg>
            <span>Drop sketches or photos here</span>
            <small>Up to 3 files, 5 MB each</small>
            <input type="file" name="reference" multiple accept="image/*,.pdf" aria-label="Attach up to 3 sketches or photos, 5 MB each">
          </div>
          <ul class="fgk-list" data-files></ul>
          <div class="fgk-row">
            <label class="fgk-field">Name<input name="name" autocomplete="name" placeholder="Giulia Neri" required></label>
            <label class="fgk-field">Email<input type="email" name="email" autocomplete="email" placeholder="giulia@mail.com" required></label>
          </div>
          <button type="submit">Send the idea</button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1"><p class="fgk-big">Got it, <span data-sent-name>there</span>.</p><p class="fgk-small">We will look at the drawings and reply with a price range and a date.</p><button type="button" class="fgk-ghost" data-again>Send another idea</button></div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
