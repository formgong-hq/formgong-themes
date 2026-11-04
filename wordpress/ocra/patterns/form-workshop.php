<?php
/**
 * Title: Form: Workshop booking
 * Slug: ocra/form-workshop
 * Categories: ocra
 * Inserter: yes
 * Description: Three steps with a progress bar: slot and date, experience and people, name and email. Sent by the Formgong plugin (1.1.0 or later).
 *
 * @package Ocra
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<article class="row" id="workshop">
      <div class="info">
        <div class="pic"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/workshop.webp' ) ); ?>" width="900" height="600" alt="<?php esc_attr_e( 'Hands shaping wet clay on a pottery wheel', 'ocra' ); ?>" loading="lazy"></div>
        <div class="num"><?php esc_html_e( '02 · Workshops', 'ocra' ); ?></div>
        <h3><?php esc_html_e( 'Book a Saturday class', 'ocra' ); ?></h3>
        <p><?php esc_html_e( 'Three hours at the wheel, six people at most. You take home two pieces after the next firing.', 'ocra' ); ?></p>
      </div>
      <div class="card">
        <form id="f-workshop" class="fgk fgk-steps" data-formgong>
          <input type="hidden" name="request" value="Workshop">
          <div class="fgk-top"><div class="fgk-bar"><i></i></div><p class="fgk-steplabel" data-step-label><?php esc_html_e( 'Step 1 of 3', 'ocra' ); ?></p></div>
          <div data-step>
            <fieldset>
              <legend><?php esc_html_e( 'When suits you?', 'ocra' ); ?></legend>
              <div class="fgk-chips">
                <label class="fgk-chip"><input type="radio" name="slot" value="Saturday morning" required><?php esc_html_e( 'Saturday morning', 'ocra' ); ?></label>
                <label class="fgk-chip"><input type="radio" name="slot" value="Saturday afternoon"><?php esc_html_e( 'Saturday afternoon', 'ocra' ); ?></label>
                <label class="fgk-chip"><input type="radio" name="slot" value="Private group"><?php esc_html_e( 'Private group', 'ocra' ); ?></label>
              </div>
            </fieldset>
            <label class="fgk-field"><?php esc_html_e( 'Preferred date', 'ocra' ); ?><input type="date" name="date" required data-min-today></label>
            <button type="button" class="fgk-primary" data-next><?php esc_html_e( 'Next', 'ocra' ); ?></button>
          </div>
          <div data-step>
            <fieldset>
              <legend><?php esc_html_e( 'Have you used a wheel before?', 'ocra' ); ?></legend>
              <div class="fgk-opts">
                <label class="fgk-opt"><input type="radio" name="experience" value="Never" required><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="3"/></svg><?php esc_html_e( 'Never', 'ocra' ); ?></label>
                <label class="fgk-opt"><input type="radio" name="experience" value="A little"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/></svg><?php esc_html_e( 'A little', 'ocra' ); ?></label>
                <label class="fgk-opt"><input type="radio" name="experience" value="Often"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="10.5"/></svg><?php esc_html_e( 'Often', 'ocra' ); ?></label>
              </div>
            </fieldset>
            <label class="fgk-field"><?php esc_html_e( 'People', 'ocra' ); ?>

              <select name="people" required><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>
            </label>
            <div class="fgk-nav"><button type="button" class="fgk-ghost" data-back><?php esc_html_e( 'Back', 'ocra' ); ?></button><button type="button" class="fgk-primary" data-next><?php esc_html_e( 'Next', 'ocra' ); ?></button></div>
          </div>
          <div data-step>
            <label class="fgk-field"><?php esc_html_e( 'Name', 'ocra' ); ?><input name="name" autocomplete="name" placeholder="<?php esc_attr_e( 'Giulia Neri', 'ocra' ); ?>" required></label>
            <label class="fgk-field"><?php esc_html_e( 'Email', 'ocra' ); ?><input type="email" name="email" autocomplete="email" placeholder="<?php esc_attr_e( 'giulia@mail.com', 'ocra' ); ?>" required></label>
            <div class="fgk-nav"><button type="button" class="fgk-ghost" data-back><?php esc_html_e( 'Back', 'ocra' ); ?></button><button type="submit"><?php esc_html_e( 'Book', 'ocra' ); ?></button></div>
          </div>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1"><p class="fgk-big"><?php esc_html_e( 'See you at the wheel,', 'ocra' ); ?> <span data-sent-name><?php esc_html_e( 'there', 'ocra' ); ?></span>.</p><p class="fgk-small"><?php esc_html_e( 'We will confirm the date by email. Wear something you do not mind getting muddy.', 'ocra' ); ?></p><button type="button" class="fgk-ghost" data-again><?php esc_html_e( 'Book another', 'ocra' ); ?></button></div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
