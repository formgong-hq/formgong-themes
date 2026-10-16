<?php
/**
 * Title: Home: highlights
 * Slug: lucerna/home-highlights
 * Categories: lucerna
 * Inserter: yes
 * Description: The bento of technical sheets, products, the number card, dealers and the catalogue.
 *
 * @package Lucerna
 */

?>
<!-- wp:html -->
<section class="sec2" id="highlights">
    <div class="sec2-in">
      <div class="sec2-text">
        <p class="small">Highlights</p>
        <h2 class="primary">The right file, right when you need it.</h2>
        <p class="secondary">Quick access to technical sheets, catalogues and news. Clear, tidy documents make your work easier and help you decide fast and well.</p>
      </div>
      <div class="grid">
        <a class="card-img span4 bottom" href="<?php echo esc_url( home_url( '/#highlights' ) ); ?>" style="--ratio:460/250">
          <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/docs.webp' ) ); ?>" alt="" width="1000" height="667" loading="lazy">
          <span class="ct"><span class="ct-main">Technical sheets</span><span class="ct-desc">Browse our newest catalogues.</span></span>
          <span class="arrow-btn" aria-hidden="true"><svg class="ic"><use href="#arrow"/></svg></span>
        </a>
        <a class="prod span3" href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">
          <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/prod-street.webp' ) ); ?>" alt="" width="600" height="600" loading="lazy">
          <span class="pt"><span class="pt-name">ARGO high-bay</span><span class="pt-desc"><i>60/80/100 W</i><i>3CCT</i></span></span>
        </a>
        <div class="stat span2 bottom" style="--ratio:240/160">
          <canvas class="silk" data-silk="sun" aria-hidden="true"></canvas>
          <div class="stat-in"><b>148</b><span>Shops across the country</span></div>
        </div>
        <a class="card-img dealers span3 bottom" href="<?php echo esc_url( home_url( '/#highlights' ) ); ?>" style="--ratio:340/250">
          <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/dealers.webp' ) ); ?>" alt="" width="1000" height="736" loading="lazy">
          <span class="ct"><span class="ct-main">Dealers</span><span class="ct-desc">Your trade area, with every file in one place.</span></span>
          <span class="arrow-btn" aria-hidden="true"><svg class="ic"><use href="#arrow"/></svg></span>
        </a>
        <a class="prod span3" href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">
          <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/prod-flood.webp' ) ); ?>" alt="" width="600" height="600" loading="lazy">
          <span class="pt"><span class="pt-name">TERA 3CCT</span><span class="pt-desc"><i>Dimmable 0–10 V</i><i>160 lm/W</i></span></span>
        </a>
        <a class="card-img span6" href="<?php echo esc_url( home_url( '/#highlights' ) ); ?>" style="--ratio:710/340">
          <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/catalogue.webp' ) ); ?>" alt="" width="1420" height="680" loading="lazy">
          <span class="ct"><span class="ct-main">Catalogue 2026</span><span class="ct-desc">Our whole range in one book.</span></span>
          <span class="arrow-btn" aria-hidden="true"><svg class="ic"><use href="#arrow"/></svg></span>
        </a>
        <a class="prod span3 tablet-full" href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">
          <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/prod-ring.webp' ) ); ?>" alt="" width="600" height="600" loading="lazy">
          <span class="pt"><span class="pt-name">CIRA 3CCT</span><span class="pt-desc"><i>IP54 panel</i><i>UGR &lt; 19</i></span></span>
        </a>
      </div>
    </div>
  </section>
<!-- /wp:html -->
