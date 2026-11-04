<?php
/**
 * Title: Home: studio facts
 * Slug: ocra/home-about
 * Categories: ocra
 * Inserter: yes
 * Description: The studio in one sentence, three numbers and orange slices.
 *
 * @package Ocra
 */

?>
<!-- wp:html -->
<section class="split" aria-label="<?php esc_attr_e( 'About the studio', 'ocra' ); ?>">
    <div class="words">
      <p><?php esc_html_e( 'Clay from the hills, glazes mixed in the studio, and a kiln that fires once a month. That is the whole business.', 'ocra' ); ?></p>
      <dl class="facts">
        <div><dt>12</dt><dd><?php esc_html_e( 'years at the wheel', 'ocra' ); ?></dd></div>
        <div><dt>40</dt><dd><?php esc_html_e( 'pieces a firing', 'ocra' ); ?></dd></div>
        <div><dt>2</dt><dd><?php esc_html_e( 'people, no factory', 'ocra' ); ?></dd></div>
      </dl>
    </div>
    <div class="orange-art" aria-hidden="true"><svg class="slice s1" viewBox="0 0 100 100"><use href="#slice"/></svg><svg class="slice s2" viewBox="0 0 100 100"><use href="#slice"/></svg><svg class="slice s3" viewBox="0 0 100 100"><use href="#slice"/></svg></div>
  </section>
<!-- /wp:html -->
