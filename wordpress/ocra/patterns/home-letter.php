<?php
/**
 * Title: Home: newsletter
 * Slug: ocra/home-letter
 * Categories: ocra
 * Inserter: yes
 * Description: The orange strip One letter per firing with the sign-up form (sent by the Formgong plugin, 1.1.0 or later).
 *
 * @package Ocra
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<section class="letter" aria-labelledby="letter-title">
    <h2 id="letter-title">One letter<br>per firing.</h2>
    <form id="f-letter" class="fgk fgk-inline" data-formgong>
      <input type="hidden" name="request" value="Newsletter">
      <div class="fgk-pill">
        <label class="fgk-sr" for="letter-email">Email</label>
        <input id="letter-email" type="email" name="email" autocomplete="email" placeholder="Your email" required>
        <button type="submit">Sign up</button>
      </div>
      <label class="fgk-box"><input type="checkbox" name="consent" value="yes" required><span>Send me the letter. I can unsubscribe any time.</span></label>
      <p class="fgk-status" data-status role="status" aria-live="polite"></p>
      <div class="fgk-sent" tabindex="-1"><p>You are on the list. The next letter comes with the next firing.</p></div>
    </form>
  </section>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
