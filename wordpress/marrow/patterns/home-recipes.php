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
        <div class="ttl"><h2 class="h2" id="recipes-h">Made fresh,<br><b>frozen fast.</b></h2><svg class="arrow-d dp" viewBox="0 0 92 70" aria-hidden="true"><path pathLength="1" d="M4 10C34 2 66 14 74 50" style="--d:0s"/><path pathLength="1" d="M60 40l14 14 12-16" style="--d:.35s"/></svg></div>
        <p class="lead">Six recipes for dogs and three for cats. Human-grade meat, organs and ground bone with vegetables, mixed by hand in small batches and frozen the same day.</p>
      </div>
      <div class="seg" role="group" aria-label="Show recipes for">
        <span class="hl" aria-hidden="true"></span>
        <button type="button" data-pet="dog" aria-pressed="true"><svg aria-hidden="true"><use href="#i-dog"/></svg>Dogs</button>
        <button type="button" data-pet="cat" aria-pressed="false"><svg aria-hidden="true"><use href="#i-cat"/></svg>Cats</button>
      </div>
      <ul class="grid" data-grid="dog" aria-label="Recipes for dogs">
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-chicken.webp' ) ); ?>" width="800" height="800" alt="A pack of Chicken and Pumpkin raw food for dogs" loading="lazy"></div><div class="cbody"><div><h3>Chicken &amp; Pumpkin</h3><p class="price">$4.20 – $7.90</p></div><button class="circ" type="button" data-order-item="Chicken &amp; Pumpkin" aria-label="Order Chicken &amp; Pumpkin"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-beef.webp' ) ); ?>" width="800" height="800" alt="A pack of Beef and Kale raw food for dogs" loading="lazy"></div><div class="cbody"><div><h3>Beef &amp; Kale</h3><p class="price">$4.90 – $9.40</p></div><button class="circ" type="button" data-order-item="Beef &amp; Kale" aria-label="Order Beef &amp; Kale"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-lamb.webp' ) ); ?>" width="800" height="800" alt="A pack of Lamb and Carrot raw food for dogs" loading="lazy"></div><div class="cbody"><div><h3>Lamb &amp; Carrot</h3><p class="price">$5.20 – $9.90</p></div><button class="circ" type="button" data-order-item="Lamb &amp; Carrot" aria-label="Order Lamb &amp; Carrot"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-turkey.webp' ) ); ?>" width="800" height="800" alt="A pack of Turkey and Blueberry raw food for dogs" loading="lazy"></div><div class="cbody"><div><h3>Turkey &amp; Blueberry</h3><p class="price">$4.60 – $8.80</p></div><button class="circ" type="button" data-order-item="Turkey &amp; Blueberry" aria-label="Order Turkey &amp; Blueberry"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><span class="tag">Sensitive</span><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-duck.webp' ) ); ?>" width="800" height="800" alt="A pack of Duck and Apple raw food for dogs with sensitive stomachs" loading="lazy"></div><div class="cbody"><div><h3>Duck &amp; Apple</h3><p class="price">$5.40 – $10.20</p></div><button class="circ" type="button" data-order-item="Duck &amp; Apple" aria-label="Order Duck &amp; Apple"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/recipe-salmon.webp' ) ); ?>" width="800" height="800" alt="A pack of Salmon and Sweet Potato raw food for dogs" loading="lazy"></div><div class="cbody"><div><h3>Salmon &amp; Sweet Potato</h3><p class="price">$5.60 – $10.60</p></div><button class="circ" type="button" data-order-item="Salmon &amp; Sweet Potato" aria-label="Order Salmon &amp; Sweet Potato"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
      </ul>
      <ul class="grid" data-grid="cat" aria-label="Recipes for cats">
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/cat-chicken.webp' ) ); ?>" width="800" height="800" alt="A pack of Chicken and Liver raw food for cats" loading="lazy"></div><div class="cbody"><div><h3>Chicken &amp; Liver</h3><p class="price">$3.90 – $7.40</p></div><button class="circ" type="button" data-order-item="Chicken &amp; Liver (cats)" aria-label="Order Chicken &amp; Liver for cats"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/cat-rabbit.webp' ) ); ?>" width="800" height="800" alt="A pack of Rabbit raw food for cats" loading="lazy"></div><div class="cbody"><div><h3>Rabbit</h3><p class="price">$5.10 – $9.60</p></div><button class="circ" type="button" data-order-item="Rabbit (cats)" aria-label="Order Rabbit for cats"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
        <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/cat-fish.webp' ) ); ?>" width="800" height="800" alt="A pack of White Fish raw food for cats" loading="lazy"></div><div class="cbody"><div><h3>White Fish</h3><p class="price">$4.80 – $9.10</p></div><button class="circ" type="button" data-order-item="White Fish (cats)" aria-label="Order White Fish for cats"><svg aria-hidden="true"><use href="#i-arrow"/></svg></button></div></li>
      </ul>
    </div>
  </section>
<!-- /wp:html -->
