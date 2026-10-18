<?php
/**
 * Title: Home: services
 * Slug: contour/home-services
 * Categories: contour
 * Inserter: yes
 * Description: Three service rows; ink floods the row under the pointer.
 *
 * @package Contour
 */

?>
<!-- wp:html -->
<section class="section wrap" id="services" aria-labelledby="s-h">
    <header class="section-head"><h2 class="note note--ink" id="s-h">[03] Services</h2><a class="note link" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>">Ask for a quote →</a></header>
    <ol class="services">
      <li class="service" data-reveal="up"><a class="service__link grid-12" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" data-fill>
        <span class="service__n note" aria-hidden="true">01</span>
        <span class="service__title h2">Websites for studios</span>
        <span class="service__body">Motion-rich sites and CMS builds, made side by side with your designers and handed over so your team can run them.</span>
        <span class="service__tags"><span class="note">Astro</span><span class="note">GSAP</span><span class="note">WordPress</span><span class="note">Shopify</span></span>
        <span class="service__arrow" aria-hidden="true">→</span>
      </a></li>
      <li class="service" data-reveal="up"><a class="service__link grid-12" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" data-fill>
        <span class="service__n note" aria-hidden="true">02</span>
        <span class="service__title h2">AI for your team</span>
        <span class="service__body">Practical workshops on coding assistants, then the small tools and workflows your team actually needs, plus a plain list of what not to automate.</span>
        <span class="service__tags"><span class="note">Workshops</span><span class="note">Agents</span><span class="note">Workflows</span></span>
        <span class="service__arrow" aria-hidden="true">→</span>
      </a></li>
      <li class="service" data-reveal="up"><a class="service__link grid-12" href="<?php echo esc_url( home_url( '/#contact' ) ); ?>" data-fill>
        <span class="service__n note" aria-hidden="true">03</span>
        <span class="service__title h2">AI inside products</span>
        <span class="service__body">Assistants and search that answer from your client's own content, tested on real user questions and showing their sources.</span>
        <span class="service__tags"><span class="note">RAG</span><span class="note">Search</span><span class="note">Evals</span></span>
        <span class="service__arrow" aria-hidden="true">→</span>
      </a></li>
    </ol>
  </section>
<!-- /wp:html -->
