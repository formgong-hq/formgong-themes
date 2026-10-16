<?php
/**
 * Title: Form: Write to us
 * Slug: ocra/form-write
 * Categories: ocra
 * Inserter: yes
 * Description: Floating labels on the dark card. Sends to Formgong with the key from the Formgong plugin.
 *
 * @package Ocra
 */

?>
<!-- wp:html -->
<article class="row" id="write">
      <div class="info">
        <div class="num">06 · Anything else</div>
        <h3>Write to us</h3>
        <p>Questions about glazes, care, or a piece you saw at a market. A short note is fine.</p>
      </div>
      <div class="card dark">
        <form id="f-write" class="fgk fgk-float" action="https://formgong.com/submit" method="POST" enctype="multipart/form-data">
          <input type="hidden" name="access_key" value="">
          <input type="hidden" name="request" value="Message">
          <div class="fgk-hp" aria-hidden="true"><label>Leave this field empty<input name="botcheck" tabindex="-1" autocomplete="off"></label></div>
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
