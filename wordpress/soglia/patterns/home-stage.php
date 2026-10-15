<?php
/**
 * Title: Home: loader and curtain
 * Slug: soglia/home-stage
 * Categories: soglia
 * Inserter: no
 * Description: The slate loader that rolls the words once per visit, and the curtain between Home and Contacts.
 *
 * @package Soglia
 */

?>
<!-- wp:html -->
<a class="skip" href="#contact-form">Skip to the contact form</a>
<div class="loader" aria-hidden="true">
  <p class="caps l-est">Est. 2006</p>
  <p class="caps l-load">Loading <span data-pct>0</span></p>
  <p class="l-word" data-word></p>
</div>
<div class="curtain" aria-hidden="true"></div>
<!-- /wp:html -->
