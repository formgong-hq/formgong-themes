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
        <div class="pic"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/workshop.webp' ) ); ?>" width="900" height="600" alt="Hands shaping wet clay on a pottery wheel" loading="lazy"></div>
        <div class="num">02 · Workshops</div>
        <h3>Book a Saturday class</h3>
        <p>Three hours at the wheel, six people at most. You take home two pieces after the next firing.</p>
      </div>
      <div class="card">
        <form id="f-workshop" class="fgk fgk-steps" data-formgong>
          <input type="hidden" name="request" value="Workshop">
          <div class="fgk-top"><div class="fgk-bar"><i></i></div><p class="fgk-steplabel" data-step-label>Step 1 of 3</p></div>
          <div data-step>
            <fieldset>
              <legend>When suits you?</legend>
              <div class="fgk-chips">
                <label class="fgk-chip"><input type="radio" name="slot" value="Saturday morning" required>Saturday morning</label>
                <label class="fgk-chip"><input type="radio" name="slot" value="Saturday afternoon">Saturday afternoon</label>
                <label class="fgk-chip"><input type="radio" name="slot" value="Private group">Private group</label>
              </div>
            </fieldset>
            <label class="fgk-field">Preferred date<input type="date" name="date" required data-min-today></label>
            <button type="button" class="fgk-primary" data-next>Next</button>
          </div>
          <div data-step>
            <fieldset>
              <legend>Have you used a wheel before?</legend>
              <div class="fgk-opts">
                <label class="fgk-opt"><input type="radio" name="experience" value="Never" required><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="3"/></svg>Never</label>
                <label class="fgk-opt"><input type="radio" name="experience" value="A little"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/></svg>A little</label>
                <label class="fgk-opt"><input type="radio" name="experience" value="Often"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="10.5"/></svg>Often</label>
              </div>
            </fieldset>
            <label class="fgk-field">People
              <select name="people" required><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option></select>
            </label>
            <div class="fgk-nav"><button type="button" class="fgk-ghost" data-back>Back</button><button type="button" class="fgk-primary" data-next>Next</button></div>
          </div>
          <div data-step>
            <label class="fgk-field">Name<input name="name" autocomplete="name" placeholder="Giulia Neri" required></label>
            <label class="fgk-field">Email<input type="email" name="email" autocomplete="email" placeholder="giulia@mail.com" required></label>
            <div class="fgk-nav"><button type="button" class="fgk-ghost" data-back>Back</button><button type="submit">Book</button></div>
          </div>
          <p class="fgk-status" data-status role="status" aria-live="polite"></p>
          <div class="fgk-sent" tabindex="-1"><p class="fgk-big">See you at the wheel, <span data-sent-name>there</span>.</p><p class="fgk-small">We will confirm the date by email. Wear something you do not mind getting muddy.</p><button type="button" class="fgk-ghost" data-again>Book another</button></div>
        </form>
      </div>
    </article>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
