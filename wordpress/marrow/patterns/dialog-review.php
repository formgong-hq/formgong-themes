<?php
/**
 * Title: Dialog: Leave a review
 * Slug: marrow/dialog-review
 * Categories: marrow
 * Inserter: no
 * Description: Star rating, name, review and email. Its block also asks the Formgong plugin for the approved reviews of the slider. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Marrow
 */

?>
<!-- wp:formgong/custom-form {"reviews":true} -->
<!-- wp:html -->
<dialog id="d-review" aria-labelledby="review-title">
  <div class="dlg" tabindex="-1" autofocus>
    <button class="x" type="button" aria-label="Close" data-close>×</button>
    <h2 id="review-title">Leave a review</h2>
    <p class="intro">Tell other owners how it went. Your review appears here once the kitchen has read it.</p>
    <form class="form" id="f-review" data-formgong>
      <input type="hidden" name="subject" value="New review">
      <fieldset class="rate">
        <legend>Your rating</legend>
        <div class="pick">
          <input type="radio" id="r5" name="rating" value="5" required><label for="r5" aria-label="5 stars"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
          <input type="radio" id="r4" name="rating" value="4"><label for="r4" aria-label="4 stars"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
          <input type="radio" id="r3" name="rating" value="3"><label for="r3" aria-label="3 stars"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
          <input type="radio" id="r2" name="rating" value="2"><label for="r2" aria-label="2 stars"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
          <input type="radio" id="r1" name="rating" value="1"><label for="r1" aria-label="1 star"><svg aria-hidden="true"><use href="#i-star"/></svg></label>
        </div>
      </fieldset>
      <label class="f full"><span>Name</span><input name="name" autocomplete="name" required maxlength="100"></label>
      <label class="f full"><span>Your review</span><textarea name="review" required maxlength="2000" placeholder="What does your pet think? What could be better?"></textarea></label>
      <label class="f full"><span>Email (optional, not shown)</span><input type="email" name="email" autocomplete="email" maxlength="160"></label>
      <button class="pill big" type="submit">Send review</button>
      <p class="status" data-status role="status" aria-live="polite"></p>
      <p class="credit">Reviews powered by <a href="https://formgong.com" rel="noopener">Formgong</a></p>
      <div class="thanks" tabindex="-1"><strong>Thank you, <span data-name>there</span>.</strong>Your review will appear here once the kitchen has read it. <button type="button" data-again>Send another</button></div>
    </form>
  </div>
</dialog>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
