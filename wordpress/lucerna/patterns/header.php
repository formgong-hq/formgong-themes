<?php
/**
 * Title: Header
 * Slug: lucerna/header
 * Categories: lucerna
 * Inserter: no
 *
 * @package Lucerna
 */

?>
<!-- wp:html -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false">
  <symbol id="wordmark" viewBox="0 0 236 60">
    <text x="0" y="46" font-family="Poppins, sans-serif" font-weight="600" font-size="50" textLength="206" lengthAdjust="spacingAndGlyphs" fill="currentColor">fulgor</text>
    <circle cx="224" cy="40" r="7" fill="#ffb800"/>
  </symbol>
  <symbol id="arrow" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="chev" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m15.5 15.5 4 4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
  <symbol id="user" viewBox="0 0 24 24"><circle cx="12" cy="8.5" r="3.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M5 19.5c1.3-3.4 3.8-4.9 7-4.9s5.7 1.5 7 4.9" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></symbol>
  <symbol id="power" viewBox="0 0 24 24"><path d="M12 3v7m6.36-3.36a8.5 8.5 0 1 1-12.72 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="g"/><feComposite in="SourceGraphic" in2="g" operator="atop"/></filter>
</svg>
<!-- /wp:html -->
<!-- wp:group {"tagName":"header","anchor":"hdr","className":"hdr","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<header id="hdr" class="wp-block-group hdr">
<!-- wp:html -->
<a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Fulgor, home"><svg viewBox="0 0 236 60"><use href="#wordmark"/></svg></a>
<!-- /wp:html -->
<!-- wp:navigation {"overlayMenu":"never","className":"lc-menu","layout":{"type":"flex","flexWrap":"nowrap"}} /-->
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<div class="extra">
    <button class="btn-contact" type="button" data-open="contact">Contact <svg class="ic"><use href="#arrow"/></svg></button>
    <div class="search-bar" id="searchBar">
      <input class="search-input" id="q" type="search" placeholder="Search products" aria-label="Search products" autocomplete="off" tabindex="-1">
      <button class="circ" type="button" id="searchBtn" aria-label="Search" aria-expanded="false"><svg class="ic"><use href="#search"/></svg></button>
      <ul class="results" id="results" hidden></ul>
    </div>
    <div class="login" id="login">
      <button class="login-bar is-collapsed" type="button" id="loginBtn" aria-expanded="false" aria-controls="tradeWrap"><span class="login-label">Trade area</span><span class="login-avatar"><svg class="ic"><use href="#user"/></svg></span></button>
      <div class="login-form-wrap" id="tradeWrap"><div class="login-form-inner">
        <div class="login-card">
          <p class="login-h">Ask for a trade account</p>
                    <form class="fg" data-formgong>
            <input type="hidden" name="subject" value="Trade account request">
            <div class="fg-fields">
              <input class="inp" name="name" autocomplete="name" placeholder="Name" aria-label="Name" required>
              <input class="inp" name="email" type="email" autocomplete="email" placeholder="Work email" aria-label="Work email" required>
              <input class="inp" name="company" autocomplete="organization" placeholder="Company" aria-label="Company" required>
              <button class="btn-wide" type="submit"><span data-label>Request access</span></button>
              <p class="fg-status" data-status role="status" aria-live="polite"></p>
            </div>
            <div class="fg-sent" tabindex="-1"><p class="fg-sent-h">Thank you, <span data-name>there</span>.</p><p>We will check your details and send your login within two working days.</p><button class="link-u" type="button" data-again>Send another</button></div>
          </form>
          <p class="credit">Powered by <a href="https://formgong.com" rel="noopener">Formgong</a></p>
        </div>
      </div></div>
    </div>
  </div>
<button class="burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mmenu"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
<div class="mega" id="mega">
    <div class="mega-in">
      <div class="mega-left">
        <button class="mega-cat is-on" type="button" data-cat="0">Indoor</button>
        <button class="mega-cat" type="button" data-cat="1">Outdoor</button>
        <button class="mega-cat" type="button" data-cat="2">LED strips &amp; Neon</button>
        <button class="mega-cat" type="button" data-cat="3">Lamps &amp; Trims</button>
        <button class="mega-cat" type="button" data-cat="4">Industry &amp; Emergency</button>
        <button class="mega-cat" type="button" data-cat="5">Smart Control</button>
        <a class="btn-out sm" href="<?php echo esc_url( home_url( '/#highlights' ) ); ?>">See all categories <svg class="ic"><use href="#arrow"/></svg></a>
      </div>
      <div class="mega-mid" data-mega-body>
        <div class="mega-group"><p class="mega-h" data-mega-h>Indoor lighting</p><ul data-mega-a><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Downlights</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Tracklights</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Decorative</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Panels</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Battens</a></li></ul>
          <a class="btn-out sm" href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">See all in <span data-mega-name>Indoor</span> <svg class="ic"><use href="#arrow"/></svg></a></div>
        <div class="mega-group"><p class="mega-h">Lighting by space</p><ul><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Retail</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Bedrooms</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Bathrooms</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Kitchen</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Living room</a></li><li><a href="<?php echo esc_url( home_url( '/#projects' ) ); ?>">Garage</a></li></ul></div>
      </div>
      <div class="mega-right" data-mega-feat>
        <p class="mega-h">Featured</p>
        <a class="mega-card" href="<?php echo esc_url( home_url( '/#projects' ) ); ?>"><img src="<?php echo esc_url( get_theme_file_uri( 'assets/img/prod-line.webp' ) ); ?>" alt="" width="600" height="600" loading="lazy"><span>VEGA linear</span></a>
      </div>
    </div>
  </div>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
</header>
<!-- /wp:group -->
<!-- wp:html -->
<div class="mega-backdrop"></div>
<!-- /wp:html -->
<!-- wp:group {"anchor":"mmenu","className":"mmenu","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div id="mmenu" class="wp-block-group mmenu">
<!-- wp:html -->
<div class="mm-overlay"></div>
<!-- /wp:html -->
<!-- wp:group {"className":"mm-panel","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"default"}} -->
<div class="wp-block-group mm-panel">
<!-- wp:html -->
<button class="mm-close" type="button" aria-label="Close menu"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 4l16 16M20 4 4 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
<!-- /wp:html -->
<!-- wp:navigation {"overlayMenu":"never","className":"lc-mm","layout":{"type":"flex","orientation":"vertical"}} /-->
</div>
<!-- /wp:group -->
</div>
<!-- /wp:group -->
<!-- wp:formgong/custom-form -->
<!-- wp:html -->
<div class="scrim"></div>
<aside class="drawer" id="contact" role="dialog" aria-modal="true" aria-labelledby="contact-h" aria-hidden="true">
  <div class="drawer-head"><p id="contact-h">Tell us about your project</p><button class="drawer-x" type="button" aria-label="Close"><svg viewBox="0 0 24 24" width="18" height="18"><path d="M4 4l16 16M20 4 4 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button></div>
  <div class="drawer-body">
        <form class="fg" data-formgong>
      <input type="hidden" name="subject" value="New project enquiry">
      <div class="fg-fields">
        <label class="fld"><span>Name</span><input class="inp" name="name" autocomplete="name" required></label>
        <label class="fld"><span>Email</span><input class="inp" name="email" type="email" autocomplete="email" required></label>
        <label class="fld"><span>Company <i>(optional)</i></span><input class="inp" name="company" autocomplete="organization"></label>
        <label class="fld"><span>Type of project</span><select class="inp" name="project"><option>Home</option><option>Shop or restaurant</option><option>Office</option><option>Outdoor or street</option><option>Industry</option></select></label>
        <label class="fld"><span>Message</span><textarea class="inp" name="message" rows="5" required></textarea></label>
        <button class="btn-wide" type="submit"><span data-label>Send</span></button>
        <p class="fg-status" data-status role="status" aria-live="polite"></p>
      </div>
      <div class="fg-sent" tabindex="-1"><p class="fg-sent-h">Thank you, <span data-name>there</span>.</p><p>We got your message and will answer within one working day.</p><button class="link-u" type="button" data-again>Send another</button></div>
    </form>
    <p class="credit">Powered by <a href="https://formgong.com" rel="noopener">Formgong</a></p>
  </div>
</aside>
<!-- /wp:html -->
<!-- /wp:formgong/custom-form -->
