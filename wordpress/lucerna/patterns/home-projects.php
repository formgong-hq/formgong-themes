<?php
/**
 * Title: Home: projects
 * Slug: lucerna/home-projects
 * Categories: lucerna
 * Inserter: yes
 * Description: The turning badge and the strip of project photos you drag; the dots name the products.
 *
 * @package Lucerna
 */

?>
<!-- wp:html -->
<section class="sec4" id="projects">
    <div class="info">
      <svg class="circ-text" viewBox="0 0 150 150" width="150" height="150" role="button" tabindex="0" aria-label="Next project">
        <defs><path id="ring" d="M75,75 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"/></defs>
        <g class="circ-rot"><text font-size="11" letter-spacing="3.6" fill="#8a8f9c" font-family="Poppins, sans-serif"><textPath href="#ring">DRAG TO SEE MORE GREAT PROJECTS ·</textPath></text></g>
        <path d="M52 75h46M88 65l10 10-10 10" fill="none" stroke="#8a8f9c" stroke-width="1.2"/>
      </svg>
      <div class="info-text">
        <p class="small">Projects</p>
        <h2 class="primary">Ideas that light the way.</h2>
        <p class="secondary">Explore tailored lighting, planned to answer exactly what each space and each client needs.</p>
      </div>
    </div>
    <div class="track-wrap">
      <div class="track" id="track">
        <div class="pslide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/proj-1.webp' ) ); ?>" alt="Meeting room under a suspended frame of light" width="1400" height="1050" loading="lazy" draggable="false">
          <div class="goo" data-stop-drag>
            <button class="ptr" style="left:30%;top:16%" type="button" aria-label="VEGA 3CCT"><span class="tip"><b>VEGA 3CCT</b><small>Linear profile</small></span></button>
            <button class="ptr" style="left:68%;top:22%" type="button" aria-label="T connector"><span class="tip"><b>T connector for VEGA</b><small>Accessory</small></span></button>
          </div></div>
        <div class="pslide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/proj-2.webp' ) ); ?>" alt="Boutique with lines of light in the ceiling" width="1400" height="1050" loading="lazy" draggable="false">
          <div class="goo" data-stop-drag>
            <button class="ptr" style="left:44%;top:12%" type="button" aria-label="NOVA line"><span class="tip"><b>NOVA 13 W 3CCT</b><small>Recessed line</small></span></button>
            <button class="ptr" style="left:22%;top:50%" type="button" aria-label="Wall line"><span class="tip"><b>Wall line 24 V</b><small>Profile</small></span></button>
          </div></div>
        <div class="pslide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/proj-3.webp' ) ); ?>" alt="Restaurant with warm pendant and cove lights" width="1400" height="1050" loading="lazy" draggable="false">
          <div class="goo" data-stop-drag>
            <button class="ptr" style="left:28%;top:34%" type="button" aria-label="ORB pendant"><span class="tip"><b>ORB pendant</b><small>Decorative</small></span></button>
            <button class="ptr" style="left:62%;top:40%" type="button" aria-label="COB strip"><span class="tip"><b>Strip 24 V COB</b><small>130 lm/W</small></span></button>
          </div></div>
        <div class="pslide"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/proj-4.webp' ) ); ?>" alt="Open office under ring pendants" width="1400" height="1050" loading="lazy" draggable="false">
          <div class="goo" data-stop-drag>
            <button class="ptr" style="left:48%;top:18%" type="button" aria-label="HALO ring"><span class="tip"><b>HALO 3CCT</b><small>Ring pendant</small></span></button>
          </div></div>
      </div>
      <div class="track-progress" aria-hidden="true"><span></span></div>
    </div>
  </section>
<!-- /wp:html -->
