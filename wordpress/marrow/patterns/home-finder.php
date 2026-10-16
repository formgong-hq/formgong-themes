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
      <h2 class="h2" id="finder-h">Find the <span class="uline"><b>right meal</b><svg class="dp one" viewBox="0 0 200 20" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M3 13C48 5 128 3 197 11"/></svg></span> for your <span data-pet-word>dog</span></h2>
      <form class="plan" id="f-plan" novalidate data-formgong>
        <input type="hidden" name="subject" value="Meal plan request">
        <input type="hidden" name="pet" value="dog" data-pet-field>
        <input type="hidden" name="daily_grams" value="" data-grams-field>
        <div class="bar">
          <label class="fld"><span>Age in months</span><input name="age_months" type="number" inputmode="numeric" min="1" max="300" step="1" placeholder="e.g. 36" required></label>
          <label class="fld"><span>Weight in kg</span><input name="weight_kg" type="number" inputmode="decimal" min="0.5" max="100" step="0.1" placeholder="e.g. 20" required></label>
          <label class="fld"><span>Activity</span><select name="activity"><option value="low">Low</option><option value="medium" selected>Medium</option><option value="high">High</option></select></label>
          <label class="fld"><span>Neutered</span><select name="neutered"><option value="yes" selected>Yes</option><option value="no">No</option></select></label>
          <button class="see" type="button" data-see>See my plan<span class="circ" aria-hidden="true"><svg><use href="#i-arrow"/></svg></span></button>
        </div>
        <div class="res-wrap" data-res>
          <div>
            <div class="res">
              <div>
                <p class="res-txt" data-res-txt aria-live="polite">About <b>420 g</b> a day. That is one 500 g pack of Chicken &amp; Pumpkin most days.</p>
                <p class="note">A starting point, not vet advice. Weigh your pet every two weeks and adjust by about 10 %.</p>
              </div>
              <div class="res-row">
                <label for="plan-email"><span>Email me this plan</span></label>
                <div class="inline">
                  <input id="plan-email" type="email" name="email" autocomplete="email" placeholder="you@example.com" required maxlength="160">
                  <button class="pill" type="submit">Email me this plan</button>
                </div>
              </div>
              <p class="status" data-status role="status" aria-live="polite"></p>
              <div class="thanks" tabindex="-1"><strong>Your plan is on its way.</strong>We will email it to <span data-mail>you</span> today, with the packs that fit. <button type="button" data-again>Send another</button></div>
            </div>
          </div>
        </div>
        <p class="plan-credit credit">Powered by <a href="https://formgong.com" rel="noopener">Formgong</a></p>
      </form>
    </div>
  </section>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
