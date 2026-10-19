<?php
/**
 * Title: Home: contact
 * Slug: contour/home-contact
 * Categories: contour
 * Inserter: yes
 * Description: The big call, two buttons and the brief form (Formgong).
 *
 * @package Contour
 */

?>
<!-- wp:html -->
<section class="section wrap cta" id="contact" aria-labelledby="c-h">
    <header class="section-head"><span class="note note--ink">[06] Next</span><span class="note">Reply within one working day</span></header>
    <h2 class="display cta__title" id="c-h" data-reveal="lines">Tell me what you're making.</h2>
    <div class="cta__actions" data-reveal="up">
      <a class="btn" href="<?php echo esc_url( home_url( '/#brief' ) ); ?>">Send a short brief <span class="arrow" aria-hidden="true">↓</span></a>
      <a class="btn btn--ghost" href="mailto:hello@example.com">Or write to hello@example.com</a>
    </div>
    <div class="cta__form grid-12" id="brief">
      <p class="cta__lead lead" data-reveal="up">What it is, when it has to launch and which part worries you. Rough notes are fine.</p>
      <form class="fg" action="https://formgong.com/submit" method="POST" data-reveal="up">
        <input type="hidden" name="access_key" value="">
        <input type="hidden" name="subject" value="New project brief">
        <div aria-hidden="true" class="hp"><label>Leave this field empty<input name="botcheck" tabindex="-1" autocomplete="off"></label></div>
        <div class="fg-fields">
          <label class="fld"><span class="note">Name</span><input name="name" autocomplete="name" required></label>
          <label class="fld"><span class="note">Email</span><input name="email" type="email" autocomplete="email" required></label>
          <label class="fld"><span class="note">Studio or company (optional)</span><input name="company" autocomplete="organization"></label>
          <label class="fld"><span class="note">Budget</span><select name="budget"><option>Under €5k</option><option>€5k – €15k</option><option>€15k – €40k</option><option>Over €40k</option><option>Not sure yet</option></select></label>
          <label class="fld fld-wide"><span class="note">The brief</span><textarea name="message" rows="4" required></textarea></label>
          <div class="fld-wide fg-row"><button class="btn" type="submit"><span data-label>Send the brief</span> <span class="arrow" aria-hidden="true">→</span></button><p class="fg-status" data-status role="status" aria-live="polite"></p></div>
        </div>
        <div class="fg-sent" tabindex="-1"><p class="fg-sent-h h3">Thanks, <span data-name>there</span>.</p><p>Your brief is in. I will reply within one working day.</p><button class="btn btn--ghost" type="button" data-again>Send another</button></div>
        <?php $contour_privacy = get_privacy_policy_url(); if ( $contour_privacy ) : ?><p class="fg-privacy note"><?php esc_html_e( 'I use your details only to reply to you.', 'contour' ); ?> <a class="link link--inline" href="<?php echo esc_url( $contour_privacy ); ?>"><?php esc_html_e( 'Privacy policy', 'contour' ); ?></a></p><?php endif; ?>
        <p class="credit note">Forms by <a class="link link--inline" href="https://formgong.com" rel="noopener">Formgong</a></p>
      </form>
    </div>
  </section>
<!-- /wp:html -->
