=== Ocra ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.1.0
License: MIT
License URI: https://opensource.org/license/mit

A one-page block theme for a small ceramics studio that sells by message: a citrus-slice wordmark, product cards with orange price tags, and seven forms sent by the Formgong plugin.

== Description ==

Ocra is the WordPress version of the free Ocra website template (https://formgong.com/en/website-templates/ocra/).

* The home page is the template's one page. Each part is a pattern you can move or remove in Appearance → Editor:
  - Home: hero. The OCRA wordmark (its O is a citrus slice that turns as you scroll), "Shop the kiln" and "Book a class", the hero photo.
  - Home: band. The orange band of words.
  - Home: the kiln. Four pieces with orange price tags; "Order this" fills the piece into the order form.
  - Home: studio facts. One sentence, three numbers, orange slices.
  - Home: ask us. The "Ask us" heading, then the six form rows (each its own pattern, in the "rows" group): Form: Order a piece, Form: Workshop booking, Form: Commission, Form: Wholesale, Form: Feedback, Form: Write to us.
  - Home: visit. The studio photo, opening hours and address.
  - Home: newsletter. The orange strip with the sign-up form.
  - The footer with the big wordmark (a template part).
  - Home: floating order button. "Order a piece", shown after the hero, hidden near the order form.
* Pages, posts, the blog index, archives, search and 404 use the template's type and colours: a big Inter Tight title, then a sand card with rounded corners, the date and categories in the first column and the text in the rest.
* Demo content in one go: download ocra-wordpress-pages.xml from the Ocra release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu. Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* Motion (the wordmark, entrances, turning slices, the drifting hero photo, the band) stops when the visitor asks for reduced motion.

= The forms and your Formgong key =

The seven forms (order, workshop booking, commission with files, wholesale, feedback, write to us, newsletter) are the template's own form markup in Custom HTML blocks, each inside the Formgong plugin's "Formgong custom form" block. The theme sends nothing itself: the free Formgong plugin (version 1.1.0 or later) adds the address, your access key and the spam trap to each form and sends it, and the theme shows "thank you" only when Formgong answers that the message was stored.

Install the Formgong plugin and paste your access key under Settings → Formgong. Until a key is saved the forms are not shown, and signed-in administrators see a reminder in each form's place. Without the plugin the forms stay hidden, because nothing could send them.

= Make it yours =

The header, the patterns and the footer carry sample details of a fictional studio. Edit them in Appearance → Editor (Patterns and Templates). The logo "Ocra" and the two lines under the bar ("Ocra ceramics / Made by hand on the coast", "New firing / every month") are in the header pattern.

The menu is one Navigation block in the bar. Its items, in order: Shop, Workshops, Commissions, Visit, then Order with the CSS class oc-order (Advanced → Additional CSS class): the black pill. On phones (760px and narrower) only the oc-order item shows, as in the template; there is no menu button.

The pieces, prices and the order form's list of pieces are in the Home: the kiln and Form: Order a piece patterns: keep each "Order this" button's data-piece equal to an option of the order form.

== Frequently Asked Questions ==

= The forms do not show =

Install and activate the Formgong plugin (1.1.0 or later), then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the form patterns from the home page, or put another form plugin's block in their place.

== Changelog ==

= 1.1.0 =
* The forms are sent by the Formgong plugin's custom form block (plugin 1.1.0 or later); the theme no longer reads the plugin's settings or posts anything itself.

= 1.0.0 =
* First WordPress release, from the Ocra website template.

== Copyright ==

Ocra WordPress theme, Copyright 2026 Formgong.
Ocra is distributed under the terms of the MIT License.

Inter font, Copyright 2020 The Inter Project Authors (https://github.com/rsms/inter)
License: SIL Open Font License 1.1, https://openfontlicense.org

Inter Tight font, Copyright 2022 The Inter Project Authors (https://github.com/rsms/inter-tight)
License: SIL Open Font License 1.1, https://openfontlicense.org

Photos: from the Ocra website template (images in assets/img), generated for the template with ChatGPT image generation (OpenAI); you may use them in your own site. The citrus slices are drawn in SVG. Replace them with photos of your own work before launch, keeping the file names.
