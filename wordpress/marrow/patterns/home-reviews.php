<?php
/**
 * Title: Home: reviews
 * Slug: marrow/home-reviews
 * Categories: marrow
 * Inserter: yes
 * Description: The wave, then the reviews: the running ribbon and the sample review cards; Leave a review opens the review form.
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<div class="wave" style="--below:var(--cream)"><canvas data-color="#ffffff" aria-hidden="true"></canvas></div>

<section class="reviews" id="reviews" aria-labelledby="reviews-h" data-fade-bg>
    <div class="wrap top">
      <p class="label" data-rv-label><?php esc_html_e( 'Sample reviews', 'marrow' ); ?></p>
      <h2 class="h2" id="reviews-h"><span><?php esc_html_e( 'Dogs who cleaned the bowl,', 'marrow' ); ?></span> <span><?php esc_html_e( 'owners who', 'marrow' ); ?></span> <span><b><?php esc_html_e( 'wrote back.', 'marrow' ); ?></b></span></h2>
    </div>
    <svg class="ribbon" viewBox="0 0 1440 360" aria-hidden="true" data-ribbon>
      <path id="ribbon-path" d="M-40 250C200 330 400 110 720 170S1180 330 1480 100"/>
      <text dy="12"><textPath href="#ribbon-path" startOffset="-50%" data-ribbon-text><?php esc_html_e( '✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly ✱ MARROW ✱ raw food, done properly', 'marrow' ); ?> </textPath></text>
    </svg>
    <svg class="down dp" viewBox="0 0 28 70" aria-hidden="true"><path pathLength="1" d="M14 2v64" style="--d:0s"/><path pathLength="1" d="M3 55l11 12 11-12" style="--d:.35s"/></svg>
    <div class="wrap rv-wrap">
      <ul class="rv-track" data-rv-track aria-label="<?php esc_attr_e( 'Reviews', 'marrow' ); ?>">
        <li class="rcard"><div class="stars" aria-label="<?php esc_attr_e( '5 out of 5 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p><?php esc_html_e( 'Our lab used to pick at his kibble. Now he waits by the fridge at six. Two months in and his coat is softer than it has been in years.', 'marrow' ); ?></p><div class="who"><span class="av" aria-hidden="true"><?php esc_html_e( 'JR', 'marrow' ); ?></span><div><b><?php esc_html_e( 'Jenna R.', 'marrow' ); ?></b><span><?php esc_html_e( '2 months ago', 'marrow' ); ?></span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="<?php esc_attr_e( '5 out of 5 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p><?php esc_html_e( 'I sent the order request on Sunday and picked it up on Tuesday. They asked for Pepper\'s weight and age and wrote back with a plan. Simple.', 'marrow' ); ?></p><div class="who"><span class="av" aria-hidden="true"><?php esc_html_e( 'MT', 'marrow' ); ?></span><div><b><?php esc_html_e( 'Marcus T.', 'marrow' ); ?></b><span><?php esc_html_e( '3 weeks ago', 'marrow' ); ?></span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="<?php esc_attr_e( '5 out of 5 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p><?php esc_html_e( 'My cat is the fussiest eater I know and she finishes the rabbit every time. The packs thaw overnight in the fridge without any mess.', 'marrow' ); ?></p><div class="who"><span class="av" aria-hidden="true"><?php esc_html_e( 'PS', 'marrow' ); ?></span><div><b><?php esc_html_e( 'Priya S.', 'marrow' ); ?></b><span><?php esc_html_e( '1 month ago', 'marrow' ); ?></span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="<?php esc_attr_e( '5 out of 5 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p><?php esc_html_e( 'We switched over ten days like the FAQ says. No upset stomach, and the yard clean-up got a lot smaller.', 'marrow' ); ?></p><div class="who"><span class="av" aria-hidden="true"><?php esc_html_e( 'OB', 'marrow' ); ?></span><div><b><?php esc_html_e( 'Owen B.', 'marrow' ); ?></b><span><?php esc_html_e( '2 months ago', 'marrow' ); ?></span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="<?php esc_attr_e( '4 out of 5 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true" style="opacity:.25"><use href="#i-star"/></svg></div><p><?php esc_html_e( 'Duck and apple sits well with our sensitive terrier and she licks the bowl clean. I wish the 250 g packs came in a bigger box.', 'marrow' ); ?></p><div class="who"><span class="av" aria-hidden="true"><?php esc_html_e( 'LM', 'marrow' ); ?></span><div><b><?php esc_html_e( 'Lucy M.', 'marrow' ); ?></b><span><?php esc_html_e( '5 months ago', 'marrow' ); ?></span></div></div></li>
        <li class="rcard"><div class="stars" aria-label="<?php esc_attr_e( '5 out of 5 stars', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg><svg aria-hidden="true"><use href="#i-star"/></svg></div><p><?php esc_html_e( 'Sardine crisps are the only treat that gets our greyhound\'s attention at the park. Honest ingredients and fair prices.', 'marrow' ); ?></p><div class="who"><span class="av" aria-hidden="true"><?php esc_html_e( 'DK', 'marrow' ); ?></span><div><b><?php esc_html_e( 'Daniel K.', 'marrow' ); ?></b><span><?php esc_html_e( '6 months ago', 'marrow' ); ?></span></div></div></li>
      </ul>
      <div class="rv-ctl">
        <button class="pill big" type="button" data-review-open><?php esc_html_e( 'Leave a review', 'marrow' ); ?></button>
        <div class="arrows"><button class="circ prev" type="button" aria-label="<?php esc_attr_e( 'Previous reviews', 'marrow' ); ?>" data-rv-prev><svg aria-hidden="true"><use href="#i-arrow"/></svg></button><button class="circ" type="button" aria-label="<?php esc_attr_e( 'Next reviews', 'marrow' ); ?>" data-rv-next><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div>
      </div>
    </div>
  </section>
<!-- /wp:html -->
