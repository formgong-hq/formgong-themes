<?php
/**
 * Title: Home: reviews
 * Slug: marrow/home-reviews
 * Categories: marrow
 * Inserter: yes
 * Description: The wave, then the reviews: the running ribbon and the cards (approved Formgong reviews replace the samples once a key is saved); Leave a review opens the review form.
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<div class="wave" style="--below:var(--cream)"><canvas data-color="#ffffff" aria-hidden="true"></canvas></div>

<section class="reviews" id="reviews" aria-labelledby="reviews-h" data-fade-bg>
    <div class="wrap top">
      <p class="label" data-rv-label>Sample reviews</p>
      <h2 class="h2" id="reviews-h"><span>Dogs who cleaned the bowl,</span> <span>owners who</span> <span><b>wrote back.</b></span></h2>
    </div>
    <svg class="ribbon" viewBox="0 0 1440 360" aria-hidden="true" data-ribbon>
      <path id="ribbon-path" d="M-40 250C200 330 400 110 720 170S1180 330 1480 100"/>
      <text dy="12"><textPath href="#ribbon-path" startOffset="-50%" data-ribbon-text>✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly </textPath></text>
    </svg>
    <svg class="down dp" viewBox="0 0 28 70" aria-hidden="true"><path pathLength="1" d="M14 2v64" style="--d:0s"/><path pathLength="1" d="M3 55l11 12 11-12" style="--d:.35s"/></svg>
    <div class="wrap rv-wrap">
      <ul class="rv-track" data-rv-track aria-label="Reviews">
        <li class="rcard"><div class="stars" aria-label="5 out of 5 stars"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p>Our lab used to pick at his kibble. Now he waits by the fridge at six. Two months in and his coat is softer than it has been in years.</p><div class="who"><span class="av" aria-hidden="true">JR</span><div><b>Jenna R.</b><span>2 months ago</span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="5 out of 5 stars"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p>I sent the order request on Sunday and picked it up on Tuesday. They asked for Pepper's weight and age and wrote back with a plan. Simple.</p><div class="who"><span class="av" aria-hidden="true">MT</span><div><b>Marcus T.</b><span>3 weeks ago</span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="5 out of 5 stars"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p>My cat is the fussiest eater I know and she finishes the rabbit every time. The packs thaw overnight in the fridge without any mess.</p><div class="who"><span class="av" aria-hidden="true">PS</span><div><b>Priya S.</b><span>1 month ago</span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="5 out of 5 stars"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p>We switched over ten days like the FAQ says. No upset stomach, and the yard clean-up got a lot smaller.</p><div class="who"><span class="av" aria-hidden="true">OB</span><div><b>Owen B.</b><span>2 months ago</span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="4 out of 5 stars"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true" style="opacity:.25"><use href="#i-star"/></svg></div><p>Duck and apple sits well with our sensitive terrier and she licks the bowl clean. I wish the 250 g packs came in a bigger box.</p><div class="who"><span class="av" aria-hidden="true">LM</span><div><b>Lucy M.</b><span>5 months ago</span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="5 out of 5 stars"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p>Sardine crisps are the only treat that gets our greyhound's attention at the park. Honest ingredients and fair prices.</p><div class="who"><span class="av" aria-hidden="true">DK</span><div><b>Daniel K.</b><span>6 months ago</span></div></div></li>
      </ul>
      <div class="rv-ctl">
        <button class="pill big" type="button" data-review-open>Leave a review</button>
        <div class="arrows"><button class="circ prev" type="button" aria-label="Previous reviews" data-rv-prev><svg aria-hidden="true"><use href="#i-arrow"/></svg></button><button class="circ" type="button" aria-label="Next reviews" data-rv-next><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div>
      </div>
    </div>
  </section>
<!-- /wp:html -->
