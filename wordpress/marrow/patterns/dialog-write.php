<?php
/**
 * Title: Dialog: Write to the kitchen
 * Slug: marrow/dialog-write
 * Categories: marrow
 * Inserter: no
 * Description: Topic chips (question, custom recipe, wholesale), name, email and message. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Marrow
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<dialog id="d-write" aria-labelledby="write-title">
  <div class="dlg" tabindex="-1" autofocus>
    <button class="x" type="button" aria-label="Close" data-close>×</button>
    <h2 id="write-title">Write to the kitchen</h2>
    <p class="intro">A question, a recipe made for your pet, or wholesale for your shop. We answer within one working day.</p>
    <form class="form" id="f-write" data-formgong>
      <input type="hidden" name="subject" value="Message">
      <fieldset class="chips"><legend>Topic</legend><div class="opts">
        <label><input type="radio" name="topic" value="Question" checked><span>Question</span></label>
        <label><input type="radio" name="topic" value="Custom recipe"><span>Custom recipe</span></label>
        <label><input type="radio" name="topic" value="Wholesale"><span>Wholesale</span></label>
      </div></fieldset>
      <label class="f"><span>Name</span><input name="name" autocomplete="name" required maxlength="100"></label>
      <label class="f"><span>Email</span><input type="email" name="email" autocomplete="email" required maxlength="160"></label>
      <label class="f full"><span>Message</span><textarea name="message" required maxlength="3000" placeholder="Your pet's age, weight and anything we should know"></textarea></label>
      <button class="pill big" type="submit">Send message</button>
      <p class="status" data-status role="status" aria-live="polite"></p>
      <p class="credit">Powered by <a href="https://formgong.com" rel="noopener">Formgong</a></p>
      <div class="thanks" tabindex="-1"><strong>Thank you, <span data-name>there</span>.</strong>We will write back within one working day. <button type="button" data-again>Send another</button></div>
    </form>
  </div>
</dialog>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
