<?php
/**
 * Title: Home: treats
 * Slug: marrow/home-treats
 * Categories: marrow
 * Inserter: yes
 * Description: The wave, then the treats carousel (Add to order opens the order request with the treat picked).
 *
 * @package Marrow
 */

?>
<!-- wp:html -->
<div class="wave" style="--below:#fff"><canvas data-color="#fff3e3" aria-hidden="true"></canvas></div>

<section class="treats" id="treats" aria-labelledby="treats-h">
    <div class="wrap">
      <div class="thead">
        <div class="ttl"><h2 class="h2" id="treats-h">Treats that keep<br><b>the tail going</b></h2><svg class="arrow-d dp" viewBox="0 0 92 70" aria-hidden="true"><path pathLength="1" d="M4 10C34 2 66 14 74 50" style="--d:0s"/><path pathLength="1" d="M60 40l14 14 12-16" style="--d:.35s"/></svg></div>
        <p class="lead">Single-ingredient chews and crisps, slow-dried in our oven. No salt, no sugar, nothing else.</p>
      </div>
      <div class="car" data-car>
        <ul class="car-track" data-track aria-label="Treats">
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-1.webp' ) ); ?>" width="800" height="800" alt="A pouch of dried chicken hearts" loading="lazy" draggable="false"></div><div class="cbody"><div><h3>Chicken hearts</h3><p class="price">$4.50</p></div><button class="pill" type="button" data-order-item="Chicken hearts">Add to order</button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-2.webp' ) ); ?>" width="800" height="800" alt="A pouch of beef liver bites" loading="lazy" draggable="false"></div><div class="cbody"><div><h3>Beef liver bites</h3><p class="price">$5.20</p></div><button class="pill" type="button" data-order-item="Beef liver bites">Add to order</button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-3.webp' ) ); ?>" width="800" height="800" alt="A pouch of lamb lung puffs" loading="lazy" draggable="false"></div><div class="cbody"><div><h3>Lamb lung puffs</h3><p class="price">$4.90</p></div><button class="pill" type="button" data-order-item="Lamb lung puffs">Add to order</button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-4.webp' ) ); ?>" width="800" height="800" alt="A pouch of sardine crisps" loading="lazy" draggable="false"></div><div class="cbody"><div><h3>Sardine crisps</h3><p class="price">$5.60</p></div><button class="pill" type="button" data-order-item="Sardine crisps">Add to order</button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-5.webp' ) ); ?>" width="800" height="800" alt="A pouch of duck neck chews" loading="lazy" draggable="false"></div><div class="cbody"><div><h3>Duck neck chews</h3><p class="price">$6.30</p></div><button class="pill" type="button" data-order-item="Duck neck chews">Add to order</button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-6.webp' ) ); ?>" width="800" height="800" alt="A pouch of salmon skin twists" loading="lazy" draggable="false"></div><div class="cbody"><div><h3>Salmon skin twists</h3><p class="price">$6.90</p></div><button class="pill" type="button" data-order-item="Salmon skin twists">Add to order</button></div></li>
        </ul>
        <button class="circ car-next" type="button" aria-label="Next treats" data-car-next><svg aria-hidden="true"><use href="#i-arrow"/></svg></button>
      </div>
    </div>
  </section>
<!-- /wp:html -->
