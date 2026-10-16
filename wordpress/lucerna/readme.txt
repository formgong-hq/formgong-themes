=== Lucerna ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/license/mit

A one-page block theme for a maker of LED lighting: a loader that switches the wordmark on, a frosted header with a mega menu, a two-slide hero, a bento of highlights, a strip of project photos you drag, a house at dusk with five light switches, stacked value cards and a silk-light footer. Two forms (contact and trade account) send to Formgong.

== Description ==

Lucerna is the WordPress version of the free Lucerna website template (https://formgong.com/en/website-templates/lucerna/). The demo brand, Fulgor, its products, numbers and projects are fictional.

* The home page is the template's one page. Each part is a pattern you can move or remove in Appearance → Editor:
  - Home: loader. Black; a dim light sweeps the wordmark, then it switches fully on (7 seconds, once per page load).
  - Home: hero. Two full-screen slides with 01 / 02 under them.
  - Home: highlights. Technical sheets, three products, the number card, dealers and the catalogue.
  - Home: projects. The turning "drag to see more" badge and the strip of project photos; the dots name the products.
  - Home: about and light zones. About us next to the house at dusk with five light switches.
  - Home: values. Five stacked value cards.
  - The header and the footer are template parts (Header, Footer patterns). The header carries the contact drawer.
* Pages, posts, the blog index, archives, search and 404 use the template's type, colours and grid: a small grey line, a big title, then a row under a thin line with the date in the first column and the text in the rest.
* Demo content in one go: download lucerna-wordpress-pages.xml from the Lucerna release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu. Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* Smooth scrolling and motion use GSAP (ScrollTrigger, ScrollSmoother), shipped with the theme. Motion stops and the loader is skipped when the visitor asks for reduced motion.

= The forms and the Formgong plugin =

The two forms are the template's own: "Ask for a trade account" (the person icon in the header) and "Tell us about your project" (Contact, in a drawer from the right; "Write to us" in the footer and Contact in the phone menu open it too). They post straight to Formgong. The theme holds no key: the free Formgong plugin holds it. Install the plugin and paste your access key under Settings → Formgong; the theme puts that key into both forms when the page is drawn. While no key is saved the forms stay hidden, and signed-in admins see "Add your Formgong key in Settings → Formgong" in their place. "Thank you" shows only when Formgong answers that the message was stored.

= Make it yours =

The header, the patterns and the footer carry sample details of the fictional Fulgor. Edit them in Appearance → Editor (Patterns and Templates). The wordmark is the "fulgor" symbol at the top of the Header pattern; the mega menu, search list and the trade form are in the Header pattern too.

The menu is one Navigation menu, drawn twice: in the frosted pill of the header and in the white phone panel (below 1081 px). Its items, in order, and their CSS classes (Advanced → Additional CSS class):

* Products & Applications: class lc-mega. In the header it opens the mega menu; in the phone panel it leads to the highlights, as in the template.
* Technical Documents, About Us, Where to Buy: no class.
* Contact: classes lc-mm-only lc-mm-contact. Only the open phone menu shows it, as the blue Contact bar; it opens the contact drawer (its address ends in #contact).

A link to another page of your site is marked as the current page there (the grey pill of a hovered link).

== Frequently Asked Questions ==

= The forms do not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the forms from the Header pattern, or put another form plugin's block in their place.

== Changelog ==

= 1.0.0 =
* First WordPress release, from the Lucerna website template.

== Copyright ==

Lucerna WordPress theme, Copyright 2026 Formgong.
Lucerna is distributed under the terms of the MIT License.

Poppins font, Copyright 2020 The Poppins Project Authors (https://github.com/itfoundry/Poppins)
License: SIL Open Font License 1.1, https://openfontlicense.org (assets/fonts/OFL.txt)

GSAP 3.13.0 (gsap.min.js, ScrollTrigger.min.js, ScrollSmoother.min.js), Copyright (c) 2008-2025, GreenSock. All rights reserved.
Used under GreenSock's standard "no charge" license: https://gsap.com/standard-license (assets/js/vendor/GSAP-LICENSE.txt). GSAP is not covered by the theme's MIT License.

Photos: from the Lucerna website template (images in assets/img), made for the template with AI image models; the products, buildings and rooms are fictional. Replace them with photos of your own work before launch, keeping the file names.
