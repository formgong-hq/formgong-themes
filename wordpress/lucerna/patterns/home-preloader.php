<?php
/**
 * Title: Home: loader
 * Slug: lucerna/home-preloader
 * Categories: lucerna
 * Inserter: yes
 * Description: The black loader: a dim light sweeps the wordmark, then it switches fully on (7 s, once per load).
 *
 * @package Lucerna
 */

?>
<!-- wp:html -->
<div class="preloader" aria-hidden="true">
  <div class="pre-mark">
    <svg class="pre-dim" viewBox="0 0 236 60"><use href="#wordmark"/></svg>
    <svg class="pre-on" viewBox="0 0 236 60"><use href="#wordmark"/></svg>
  </div>
</div>
<!-- /wp:html -->
