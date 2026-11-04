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
        <div class="ttl"><h2 class="h2" id="treats-h"><?php esc_html_e( 'Treats that keep', 'marrow' ); ?><br><b><?php esc_html_e( 'the tail going', 'marrow' ); ?></b></h2><svg class="arrow-d dp" viewBox="0 0 92 70" aria-hidden="true"><path pathLength="1" d="M4 10C34 2 66 14 74 50" style="--d:0s"/><path pathLength="1" d="M60 40l14 14 12-16" style="--d:.35s"/></svg></div>
        <p class="lead"><?php esc_html_e( 'Single-ingredient chews and crisps, slow-dried in our oven. No salt, no sugar, nothing else.', 'marrow' ); ?></p>
      </div>
      <div class="car" data-car>
        <ul class="car-track" data-track aria-label="<?php esc_attr_e( 'Treats', 'marrow' ); ?>">
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-1.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pouch of dried chicken hearts', 'marrow' ); ?>" loading="lazy" draggable="false"></div><div class="cbody"><div><h3><?php esc_html_e( 'Chicken hearts', 'marrow' ); ?></h3><p class="price">$4.50</p></div><button class="pill" type="button" data-order-item="Chicken hearts"><?php esc_html_e( 'Add to order', 'marrow' ); ?></button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-2.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pouch of beef liver bites', 'marrow' ); ?>" loading="lazy" draggable="false"></div><div class="cbody"><div><h3><?php esc_html_e( 'Beef liver bites', 'marrow' ); ?></h3><p class="price">$5.20</p></div><button class="pill" type="button" data-order-item="Beef liver bites"><?php esc_html_e( 'Add to order', 'marrow' ); ?></button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-3.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pouch of lamb lung puffs', 'marrow' ); ?>" loading="lazy" draggable="false"></div><div class="cbody"><div><h3><?php esc_html_e( 'Lamb lung puffs', 'marrow' ); ?></h3><p class="price">$4.90</p></div><button class="pill" type="button" data-order-item="Lamb lung puffs"><?php esc_html_e( 'Add to order', 'marrow' ); ?></button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-4.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pouch of sardine crisps', 'marrow' ); ?>" loading="lazy" draggable="false"></div><div class="cbody"><div><h3><?php esc_html_e( 'Sardine crisps', 'marrow' ); ?></h3><p class="price">$5.60</p></div><button class="pill" type="button" data-order-item="Sardine crisps"><?php esc_html_e( 'Add to order', 'marrow' ); ?></button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-5.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pouch of duck neck chews', 'marrow' ); ?>" loading="lazy" draggable="false"></div><div class="cbody"><div><h3><?php esc_html_e( 'Duck neck chews', 'marrow' ); ?></h3><p class="price">$6.30</p></div><button class="pill" type="button" data-order-item="Duck neck chews"><?php esc_html_e( 'Add to order', 'marrow' ); ?></button></div></li>
          <li class="card rv"><div class="pack ph"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/treat-6.webp' ) ); ?>" width="800" height="800" alt="<?php esc_attr_e( 'A pouch of salmon skin twists', 'marrow' ); ?>" loading="lazy" draggable="false"></div><div class="cbody"><div><h3><?php esc_html_e( 'Salmon skin twists', 'marrow' ); ?></h3><p class="price">$6.90</p></div><button class="pill" type="button" data-order-item="Salmon skin twists"><?php esc_html_e( 'Add to order', 'marrow' ); ?></button></div></li>
        </ul>
        <button class="circ car-next" type="button" aria-label="<?php esc_attr_e( 'Next treats', 'marrow' ); ?>" data-car-next><svg aria-hidden="true"><use href="#i-arrow"/></svg></button>
      </div>
    </div>
  </section>
<!-- /wp:html -->
