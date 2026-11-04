<?php
/**
 * Title: Home: recipes
 * Slug: marrow/home-recipes
 * Categories: marrow
 * Inserter: yes
 * Description: The wave, then Made fresh, frozen fast: the dog and cat recipe cards (the arrow opens the order request with the recipe picked).
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<div class="wave" style="--below:#fff"><canvas data-color="#eef2fb" aria-hidden="true"></canvas></div>

<section class="recipes" id="recipes" aria-labelledby="recipes-h">
    <div class="wrap">
      <div class="rhead">
        <div class="ttl"><h2 class="h2" id="recipes-h"><?php esc_html_e( 'Made fresh,', 'marrow' ); ?><br><b><?php esc_html_e( 'frozen fast.', 'marrow' ); ?></b></h2><svg class="arrow-d dp" viewBox="0 0 92 70" aria-hidden="true"><path pathLength="1" d="M4 10C34 2 66 14 74 50" style="--d:0s"/><path pathLength="1" d="M60 40l14 14 12-16" style="--d:.35s"/></svg></div>
        <p class="lead"><?php esc_html_e( 'Six recipes for dogs and three for cats. Human-grade meat, organs and ground bone with vegetables, mixed by hand in small batches and frozen the same day.', 'marrow' ); ?></p>
      </div>
      <div class="seg" role="group" aria-label="<?php esc_attr_e( 'Show recipes for', 'marrow' ); ?>">
        <span class="hl" aria-hidden="true"></span>
        <button type="button" data-pet="dog" aria-pressed="true"><svg aria-hidden="true"><use href="#i-dog"/></svg><?php esc_html_e( 'Dogs', 'marrow' ); ?></button>
        <button type="button" data-pet="cat" aria-pressed="false"><svg aria-hidden="true"><use href="#i-cat"/></svg><?php esc_html_e( 'Cats', 'marrow' ); ?></button>
      </div>
      <ul class="grid" data-grid="dog" aria-label="<?php esc_attr_e( 'Recipes for dogs', 'marrow' ); ?>">
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-chicken.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of Chicken and Pumpkin raw food for dogs', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'Chicken & Pumpkin', 'marrow' ); ?></h3><p class="price">$4.20 – $7.90</p></div><button class="circ" type="button" data-order-item="Chicken &amp; Pumpkin" aria-label="<?php esc_attr_e( 'Order Chicken & Pumpkin', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-beef.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of Beef and Kale raw food for dogs', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'Beef & Kale', 'marrow' ); ?></h3><p class="price">$4.90 – $9.40</p></div><button class="circ" type="button" data-order-item="Beef &amp; Kale" aria-label="<?php esc_attr_e( 'Order Beef & Kale', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-lamb.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of Lamb and Carrot raw food for dogs', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'Lamb & Carrot', 'marrow' ); ?></h3><p class="price">$5.20 – $9.90</p></div><button class="circ" type="button" data-order-item="Lamb &amp; Carrot" aria-label="<?php esc_attr_e( 'Order Lamb & Carrot', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-turkey.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of Turkey and Blueberry raw food for dogs', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'Turkey & Blueberry', 'marrow' ); ?></h3><p class="price">$4.60 – $8.80</p></div><button class="circ" type="button" data-order-item="Turkey &amp; Blueberry" aria-label="<?php esc_attr_e( 'Order Turkey & Blueberry', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><span class="tag"><?php esc_html_e( 'Sensitive', 'marrow' ); ?></span><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-duck.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of Duck and Apple raw food for dogs with sensitive stomachs', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'Duck & Apple', 'marrow' ); ?></h3><p class="price">$5.40 – $10.20</p></div><button class="circ" type="button" data-order-item="Duck &amp; Apple" aria-label="<?php esc_attr_e( 'Order Duck & Apple', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-salmon.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of Salmon and Sweet Potato raw food for dogs', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'Salmon & Sweet Potato', 'marrow' ); ?></h3><p class="price">$5.60 – $10.60</p></div><button class="circ" type="button" data-order-item="Salmon &amp; Sweet Potato" aria-label="<?php esc_attr_e( 'Order Salmon & Sweet Potato', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
      </ul>
      <ul class="grid" data-grid="cat" aria-label="<?php esc_attr_e( 'Recipes for cats', 'marrow' ); ?>">
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/cat-chicken.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of Chicken and Liver raw food for cats', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'Chicken & Liver', 'marrow' ); ?></h3><p class="price">$3.90 – $7.40</p></div><button class="circ" type="button" data-order-item="Chicken &amp; Liver (cats)" aria-label="<?php esc_attr_e( 'Order Chicken & Liver for cats', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/cat-rabbit.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of Rabbit raw food for cats', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'Rabbit', 'marrow' ); ?></h3><p class="price">$5.10 – $9.60</p></div><button class="circ" type="button" data-order-item="Rabbit (cats)" aria-label="<?php esc_attr_e( 'Order Rabbit for cats', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/cat-fish.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pack of White Fish raw food for cats', 'marrow' ); ?>" loading="lazy"></div><div class="cbody"><div><h3><?php esc_html_e( 'White Fish', 'marrow' ); ?></h3><p class="price">$4.80 – $9.10</p></div><button class="circ" type="button" data-order-item="White Fish (cats)" aria-label="<?php esc_attr_e( 'Order White Fish for cats', 'marrow' ); ?>"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
      </ul>
    </div>
  </section>
<!-- /wp:html -->
