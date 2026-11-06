<?php
/**
 * Title: Home: newsletter
 * Slug: ocra/home-letter
 * Categories: ocra
 * Inserter: yes
 * Description: The orange strip One letter per firing with the sign-up form. A layout from the template: it does not send by itself. Set the form's action or replace it with a form plugin's block.
 *
 * @package Ocra
 */

?>
<!-- wp:html -->
<section class="letter" aria-labelledby="letter-title">
    <h2 id="letter-title"><?php esc_html_e( 'One letter', 'ocra' ); ?><br><?php esc_html_e( 'per firing.', 'ocra' ); ?></h2>
    <form id="f-letter" class="fgk fgk-inline" method="post">
      <input type="hidden" name="request" value="Newsletter">
      <div class="fgk-pill">
        <label class="fgk-sr" for="letter-email"><?php esc_html_e( 'Email', 'ocra' ); ?></label>
        <input id="letter-email" type="email" name="email" autocomplete="email" placeholder="<?php esc_attr_e( 'Your email', 'ocra' ); ?>" required>
        <button type="submit"><?php esc_html_e( 'Sign up', 'ocra' ); ?></button>
      </div>
      <label class="fgk-box"><input type="checkbox" name="consent" value="yes" required><span><?php esc_html_e( 'Send me the letter. I can unsubscribe any time.', 'ocra' ); ?></span></label>
      <p class="fgk-status" data-status role="status" aria-live="polite"></p>
      <div class="fgk-sent" tabindex="-1"><p><?php esc_html_e( 'You are on the list. The next letter comes with the next firing.', 'ocra' ); ?></p></div>
    </form>
  </section>
<!-- /wp:html -->
