<?php
/**
 * Title: Home: contact
 * Slug: halftone/home-contact
 * Categories: halftone
 * Inserter: yes
 * Description: The orange contact card (Formgong plugin form) over a photo, the socials along the bottom.
 *
 * @package Halftone
 */

?>
<!-- wp:html -->
<section class="contact dots" id="contact" aria-labelledby="k-title" data-contact>
    <img class="cover" src="<?php echo esc_url( get_theme_file_uri( 'assets/img/contact.webp' ) ); ?>" alt="" loading="lazy" decoding="async">
    <div class="card">
      <p class="tab d">Contact us</p>
      <h2 class="d" id="k-title">Let's talk about your place</h2>
      <div id="fg-form" class="ht-form">
<!-- /wp:html -->
<!-- wp:formgong/form {"template":"halftone"} /-->
<!-- wp:html -->
</div>
      <p class="credit">Powered by <a href="https://formgong.com" rel="noopener">Formgong</a></p>
    </div>
    <nav class="socials d" aria-label="Social"><a href="#">Instagram</a><a href="mailto:studio@example.com">Email</a><a href="#">LinkedIn</a></nav>
  </section>
<!-- /wp:html -->
