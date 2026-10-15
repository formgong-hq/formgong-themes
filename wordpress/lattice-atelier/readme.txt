=== Lattice Atelier ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/license/mit

A light one-page block theme for a maker of windows and doors: a split hero where scrolling changes the project, every box on a drawn grid, and a request form that sends to Formgong.

== Description ==

Lattice Atelier is the WordPress version of the free Lattice Atelier website template (https://formgong.com/en/website-templates/lattice-atelier/).

* Home page: five sections, each a pattern you can move or remove in Appearance → Editor:
  - Projects: the pinned split hero; scrolling changes the project, the photo wipes up and every label rolls letter by letter.
  - Manifesto: the statement, a detail photo and three figures.
  - Collections: four collections, each row a link to the form.
  - Ateliers: two ateliers with hours, address and contacts.
  - Contact: the heading, the direct lines and the request form.
  The dark footer closes every page. An intro rolls the company name once per visit and frames draw themselves in.
* Pages, posts, the blog index, archives, search and 404 use the same grid, type and colours: a heading on the grid, then the text in a bordered box.
* Demo content in one go: download lattice-atelier-wordpress-pages.xml from the Lattice Atelier release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu. Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* The contact form is the Formgong plugin's block (template "lattice-atelier"), in the contact section. Install the free Formgong plugin, paste your access key under Settings → Formgong, and the form sends every request to your Formgong inbox and to Telegram.
* Motion (intro, line drawing, letter rolls, photo wipes) stops when the visitor asks for reduced motion.

= Make it yours =

The header, the home sections and the footer carry sample details of a fictional maker, Telaro in Porto and Lisbon. Edit them in Appearance → Editor (Patterns and Templates). The name "Telaro" beside the bar is in the header pattern; "Write" links to the form.

The menu is one Navigation block: its button is the "Menu" box in the bar, and it opens the full-screen menu. Links with the CSS class la-mlink (Advanced → Additional CSS class) are the numbered links; the two boxes beside them are submenus with the classes "la-mbox la-mbox-a" (Ateliers: place, email, phone) and "la-mbox la-mbox-b" (Follow: social links). They show only in the open menu.

The texts of the three hero projects (label, button, number and title) live in the SLIDES list at the top of assets/js/lattice-atelier.js, as in the template; the photos are in assets/img, in the same order as the <img> tags of the Projects pattern.

== Frequently Asked Questions ==

= The contact form does not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the form block from the contact section, or replace it with another form plugin's block.

== Changelog ==

= 1.0.0 =
* First WordPress release, from the Lattice Atelier website template.

== Copyright ==

Lattice Atelier WordPress theme, Copyright 2026 Formgong.
Lattice Atelier is distributed under the terms of the MIT License.

Inter Tight font, Copyright 2022 The Inter Project Authors (https://github.com/rsms/inter-tight)
License: SIL Open Font License 1.1, https://openfontlicense.org

Photos: from the Lattice Atelier website template (images in assets/img), made for the template with FLUX.1 [schnell] (Apache 2.0); the houses, the windows and the company in them are fictional. Replace them with photos of your own work before launch, keeping the file names.
