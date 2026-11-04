<?php
/**
 * Title: Home: meal finder
 * Slug: marrow/home-finder
 * Categories: marrow
 * Inserter: yes
 * Description: Find the right meal: age, weight, activity and neutered, See my plan, then the daily grams and the Email me this plan form (sent by the Formgong plugin, 1.1.0 or later).
 *
 * @package Marrow
 */

?>
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<section class="finder" aria-labelledby="finder-h" data-next>
    <div class="wrap" id="finder">
      <h2 class="h2" id="finder-h"><?php esc_html_e( 'Find the', 'marrow' ); ?> <span class="uline"><b><?php esc_html_e( 'right meal', 'marrow' ); ?></b><svg class="dp one" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M3 13C48 5 128 3 197 11"/></svg></span> <?php esc_html_e( 'for your', 'marrow' ); ?> <span data-pet-word><?php esc_html_e( 'dog', 'marrow' ); ?></span></h2>
      <form class="plan" id="f-plan" novalidate data-formgong>
        <input type="hidden" name="subject" value="Meal plan request">
        <input type="hidden" name="pet" value="dog" data-pet-field>
        <input type="hidden" name="daily_grams" value="" data-grams-field>
        <div class="bar">
          <label class="fld"><span><?php esc_html_e( 'Age in months', 'marrow' ); ?></span><input name="age_months" type="number" inputmode="numeric" min="1" max="300" step="1" placeholder="<?php esc_attr_e( 'e.g. 36', 'marrow' ); ?>" required></label>
          <label class="fld"><span><?php esc_html_e( 'Weight in kg', 'marrow' ); ?></span><input name="weight_kg" type="number" inputmode="decimal" min="0.5" max="100" step="0.1" placeholder="<?php esc_attr_e( 'e.g. 20', 'marrow' ); ?>" required></label>
          <label class="fld"><span><?php esc_html_e( 'Activity', 'marrow' ); ?></span><select name="activity"><option value="low"><?php esc_html_e( 'Low', 'marrow' ); ?></option><option value="medium" selected><?php esc_html_e( 'Medium', 'marrow' ); ?></option><option value="high"><?php esc_html_e( 'High', 'marrow' ); ?></option></select></label>
          <label class="fld"><span><?php esc_html_e( 'Neutered', 'marrow' ); ?></span><select name="neutered"><option value="yes" selected><?php esc_html_e( 'Yes', 'marrow' ); ?></option><option value="no"><?php esc_html_e( 'No', 'marrow' ); ?></option></select></label>
          <button class="see" type="button" data-see><?php esc_html_e( 'See my plan', 'marrow' ); ?><span class="circ" aria-hidden="true"><svg><use href="#i-arrow"/></svg></span></button>
        </div>
        <div class="res-wrap" data-res>
          <div>
            <div class="res">
              <div>
                <p class="res-txt" data-res-txt aria-live="polite"><?php esc_html_e( 'About', 'marrow' ); ?> <b><?php esc_html_e( '420 g', 'marrow' ); ?></b> <?php esc_html_e( 'a day. That is one 500 g pack of Chicken & Pumpkin most days.', 'marrow' ); ?></p>
                <p class="note"><?php esc_html_e( 'A starting point, not vet advice. Weigh your pet every two weeks and adjust by about 10 %.', 'marrow' ); ?></p>
              </div>
              <div class="res-row">
                <label for="plan-email"><span><?php esc_html_e( 'Email me this plan', 'marrow' ); ?></span></label>
                <div class="inline">
                  <input id="plan-email" type="email" name="email" autocomplete="email" placeholder="<?php esc_attr_e( 'you@example.com', 'marrow' ); ?>" required maxlength="160">
                  <button class="pill" type="submit"><?php esc_html_e( 'Email me this plan', 'marrow' ); ?></button>
                </div>
              </div>
              <p class="status" data-status role="status" aria-live="polite"></p>
              <div class="thanks" tabindex="-1"><strong><?php esc_html_e( 'Your plan is on its way.', 'marrow' ); ?></strong><?php esc_html_e( 'We will email it to', 'marrow' ); ?> <span data-mail><?php esc_html_e( 'you', 'marrow' ); ?></span> <?php esc_html_e( 'today, with the packs that fit.', 'marrow' ); ?> <button type="button" data-again><?php esc_html_e( 'Send another', 'marrow' ); ?></button></div>
            </div>
          </div>
        </div>
        <p class="plan-credit credit"><?php esc_html_e( 'Powered by', 'marrow' ); ?> <a href="https://formgong.com" rel="noopener"><?php esc_html_e( 'Formgong', 'marrow' ); ?></a></p>
      </form>
    </div>
  </section>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
