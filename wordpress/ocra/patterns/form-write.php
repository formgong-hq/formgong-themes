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
        <div class="num">06 · Anything else</div>
        <h3>Write to us</h3>
        <p>Questions about glazes, care, or a piece you saw at a market. A short note is fine.</p>
      </div>
      <div class="card dark">
        <form id="f-write" class="fgk fgk-float" data-formgong>
          <input type="hidden" name="request" value="Message">
          <label class="fgk-fl"><input name="name" autocomplete="name" placeholder=" " required><span>Name</span></label>
          <label class="fgk-fl"><input type="email" name="email" autocomplete="email" placeholder=" " required><span>Email</span></label>
          <label class="fgk-fl"><textarea name="message" rows="2" placeholder=" " required data-autosize></textarea><span>Message</span></label>
          <button type="submit">Send</button>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1"><p class="fgk-big">Thanks, <span data-sent-name>there</span>.</p><p class="fgk-small" style="color:rgba(255,255,255,.6)">We will answer within a working day.</p><button type="button" class="fgk-ghost" data-again>Write again</button></div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
