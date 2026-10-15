=== Soglia ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/license/mit

A one-page block theme for a maker of designer windows and doors: a full-screen slider, a dark three-column menu, and a Contacts view with a request form that sends to Formgong.

== Description ==

Soglia is the WordPress version of the free Soglia website template (https://formgong.com/en/website-templates/soglia/).

* The home page has two views, as the template: Home and Contacts (the address /#contacts opens Contacts, /#contact-form jumps to the form, /#home returns). A slate curtain passes between them; a slate loader rolls words once per visit. Each part is a pattern you can move or remove in Appearance → Editor:
  - Home: slider. One screen: the photo, the dark tab with the category, the caption and the arrows. The wheel or a vertical swipe changes the category, the arrows, a horizontal swipe or the arrow keys change the piece; every label rolls letter by letter and autoplay runs with a bar under "Discover more".
  - Contacts: offices. The heading, the introduction and the rows of addresses, hours and phones.
  - Contacts: customer service. The dark rounded box.
  - Contacts: form. The heading, the text and the request form.
  The light footer closes the Contacts view and every other page.
* Pages, posts, the blog index, archives, search and 404 use the Contacts view's type and hairline rows: a big heading, then a row with the date and categories on the left and the text on the right.
* Demo content in one go: download soglia-wordpress-pages.xml from the Soglia release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu. Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* The contact form is the Formgong plugin's block (template "soglia"), in the Contacts: form pattern. Install the free Formgong plugin, paste your access key under Settings → Formgong, and the form sends every request to your Formgong inbox and to Telegram.
* Motion (loader, curtain, photo wipes, letter rolls) stops when the visitor asks for reduced motion.

= Make it yours =

The header, the patterns and the footer carry sample details of a fictional maker, Orlo in Milan and Como. Edit them in Appearance → Editor (Patterns and Templates). The name "Orlo" is in the header pattern; "Write" opens Contacts.

The menu is one Navigation block: its button is the "Menu" square in the bar, and it opens the full-screen dark menu. Its items, in order, and their CSS classes (Advanced → Additional CSS class):

* The five big links: class sg-mlink. Home and Contacts also carry sg-route-home and sg-route-contacts (the menu greys the one of the view on screen); Projects, Windows and Ateliers carry sg-cat-0, sg-cat-1 and sg-cat-2 (a click turns the slider to that category).
* "Write to us" and "Info" (bottom of the first column): submenus with the classes "sg-mfoot sg-write" and "sg-mfoot sg-info".
* The three product blocks (middle column): submenus with the class sg-mblock. The submenu's label is the big title, its Description the small line above it; the last link, "View all", has the class sg-view.
* "Follow", "Languages" and "Info" (right column): submenus with the classes "sg-mside sg-follow", "sg-mside sg-lang" and "sg-mside sg-legal". In Languages, the link with the class sg-on is underlined.

These boxes show only in the open menu. The social, language and legal links point at the home page until you set their addresses.

The slider texts (category, button, titles) live in the CATS list at the top of assets/js/soglia.js, as in the template; the photos are in assets/img, in the same order as the <img> tags of the Home: slider pattern. AUTOPLAY there is the time per slide in milliseconds (0 turns it off); the loader words are in LOADER_WORDS.

== Frequently Asked Questions ==

= The contact form does not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the form block from the Contacts: form pattern, or replace it with another form plugin's block.

== Changelog ==

= 1.0.0 =
* First WordPress release, from the Soglia website template.

== Copyright ==

Soglia WordPress theme, Copyright 2026 Formgong.
Soglia is distributed under the terms of the MIT License.

Geist font, Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font.git)
License: SIL Open Font License 1.1, https://openfontlicense.org

Photos: from the Soglia website template (images in assets/img), made for the template with FLUX.1 [schnell] (Apache 2.0); the houses, the windows and the company in them are fictional. Replace them with photos of your own work before launch, keeping the file names.
