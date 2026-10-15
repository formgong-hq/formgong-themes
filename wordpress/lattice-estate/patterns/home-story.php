<?php
/**
 * Title: Home: the house, rewound
 * Slug: lattice-estate/home-story
 * Categories: lattice-estate
 * Inserter: yes
 * Description: The pinned screen where scrolling rewinds one house: finished, shell, frame, drawing.
 *
 * @package Lattice_Estate
 */

?>
<!-- wp:html -->
<section class="sec story" id="top" aria-label="One house, from the keys back to the first drawing">
    <div class="screen grid-on on-photo">
      <div class="backdrop stage" aria-hidden="true">
        <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/built.webp' ) ); ?>" alt="" data-layer>
        <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/shell.webp' ) ); ?>" alt="" data-layer>
        <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/frame.webp' ) ); ?>" alt="" data-layer>
        <img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/drawing.webp' ) ); ?>" alt="" data-layer>
        <i class="wipe" data-wipe></i>
        <svg class="dims" data-dims></svg>
      </div>
      <div class="gridlay" data-gridlay aria-hidden="true"></div>
      <h1 class="hl" data-k="hl"><span>Homes built</span><span>to outlast</span></h1>
      <div class="b panel counter" data-k="counter"><span class="mono">Timeline</span><span data-time>Month 18</span></div>
      <div class="b panel cap" data-k="cap">
        <div class="cap-in" data-cap aria-live="polite">
          <p class="label"><b>01 / 04</b><span>Handover</span></p>
          <h2>A home, finished</h2>
          <p>This is where every project ends: the keys handed over, every joint checked twice. Scroll to watch how it began.</p>
        </div>
      </div>
      <button class="b panel stg" type="button" data-k="stg" data-stage="0"><b>01</b><span>The home</span></button>
      <button class="b panel stg" type="button" data-k="stg" data-stage="1"><b>02</b><span>The build</span></button>
      <button class="b panel stg" type="button" data-k="stg" data-stage="2"><b>03</b><span>The frame</span></button>
      <button class="b panel stg" type="button" data-k="stg" data-stage="3"><b>04</b><span>The drawing</span></button>
    </div>
  </section>
<!-- /wp:html -->
