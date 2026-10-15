<?php
/**
 * Title: Contact, form and footer
 * Slug: lattice-estate/home-contact
 * Categories: lattice-estate
 * Inserter: yes
 * Description: The consultation form over the team photo, the contact boxes and the footer row.
 *
 * @package Lattice_Estate
 */

?>
<!-- wp:html -->
<section class="sec contact" id="contact" aria-labelledby="contact-h">
    <div class="screen on-photo">
      <div class="backdrop stage" aria-hidden="true"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/team.webp' ) ); ?>" alt="" decoding="async"></div>
      <div class="gridlay" aria-hidden="true"></div>
      <div class="head" data-k="c-head" data-snap>
        <p class="sub" data-reveal>Tell us about the plot and the house you imagine. The team you see here reads every request.</p>
        <h2 id="contact-h" data-reveal style="--d:.08s"><span>Your idea</span> <span>starts here</span></h2>
      </div>
      <div class="c-info">
        <ul class="b panel box" data-k="box1" data-snap>
          <li><a href="mailto:studio@example.com">studio@example.com</a></li>
          <li><a href="tel:+351912345678">+351 912 345 678</a></li>
          <li><a href="https://wa.me/" rel="noopener">WhatsApp</a></li>
        </ul>
        <div class="b panel box" data-k="box2" data-snap>
          <p>Lagos, Algarve · Lisbon</p>
          <p>Mon–Fri, 8:30–18:00</p>
          <p class="mono">Site visits by appointment</p>
        </div>
      </div>
      <div id="fg-form" class="c-form le-form" data-k="form">
<!-- /wp:html -->
<!-- wp:formgong/form {"template":"lattice-estate"} /-->
<!-- wp:html -->
</div>

      <div class="foot">
        <p class="b panel" data-k="f-copy"><span>© <span data-year>2026</span> Veranthe Homes</span></p>
        <a class="b panel" href="#" data-k="f-priv">Privacy policy</a>
        <a class="b panel" href="#" data-k="f-terms">Terms</a>
        <a class="b panel" href="https://formgong.com" rel="noopener" data-k="f-credit">Powered by Formgong</a>
      </div>
    </div>
  </section>
<!-- /wp:html -->
