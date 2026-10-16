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
        <div class="num">05 · After your order</div>
        <h3>How did it arrive?</h3>
        <p>Every parcel is packed by hand. Tell us how yours arrived and how you are using it. We read every answer.</p>
      </div>
      <div class="card">
        <form id="f-feedback" class="fgk fgk-rating" data-formgong>
          <input type="hidden" name="request" value="Feedback">
          <fieldset>
            <legend>How was your order?</legend>
            <div class="fgk-faces">
              <label class="fgk-face"><input type="radio" name="rating" value="1" required aria-label="1 of 5, very bad"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8 16.5c2.4-2.6 5.6-2.6 8 0"/></svg></label>
              <label class="fgk-face"><input type="radio" name="rating" value="2" aria-label="2 of 5, bad"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.5 16c2.2-1.3 4.8-1.3 7 0"/></svg></label>
              <label class="fgk-face"><input type="radio" name="rating" value="3" aria-label="3 of 5, okay"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.5 15.5h7"/></svg></label>
              <label class="fgk-face"><input type="radio" name="rating" value="4" aria-label="4 of 5, good"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.5 14.5c2.2 1.3 4.8 1.3 7 0"/></svg></label>
              <label class="fgk-face"><input type="radio" name="rating" value="5" aria-label="5 of 5, great"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9.5"/><circle cx="8.8" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15.2" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M7.5 13.5c2.4 3.4 6.6 3.4 9 0"/></svg></label>
            </div>
            <div class="fgk-ends"><span>Not good</span><span>Lovely</span></div>
          </fieldset>
          <label class="fgk-field">Anything to add? (optional)<textarea name="comment" rows="3" placeholder="It arrived in one piece and…"></textarea></label>
          <label class="fgk-field">Order email (optional)<input type="email" name="email" autocomplete="email" placeholder="giulia@mail.com"></label>
          <button type="submit">Send</button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1"><p class="fgk-big">Thank you.</p><p class="fgk-small">It goes straight to the two of us.</p><button type="button" class="fgk-ghost" data-again>Send another</button></div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
