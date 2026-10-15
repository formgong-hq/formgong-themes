=== Lattice Estate ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/license/mit

A dark one-page block theme for a luxury home builder: scrolling rewinds one house from the keys back to the first drawing, with a consultation form that sends to Formgong.

== Description ==

Lattice Estate is the WordPress version of the free Lattice Estate website template (https://formgong.com/en/website-templates/lattice-estate/).

* Home page: two sections, each a pattern you can move or remove in Appearance → Editor:
  - The house, rewound: a pinned screen where scrolling turns the finished home back into its shell, its frame and its first drawing, with a caption, a timeline and four stage buttons.
  - Contact: the consultation form over the team photo, the contact boxes and the footer row.
  Every box sits on a drawn grid; an intro spells the company name once per visit and frames draw themselves in.
* Pages, posts, the blog index, archives, search and 404 use the same grid, type and colours: a heading on the grid, then the text in a bordered box.
* Demo content in one go: download lattice-estate-wordpress-pages.xml from the Lattice Estate release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu (The home, The build, The drawing, Your idea). Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* The contact form is the Formgong plugin's block (template "lattice-estate"), in the contact section. Install the free Formgong plugin, paste your access key under Settings → Formgong, and the form sends every request to your Formgong inbox and to Telegram.
* Motion (intro, line drawing, the rewind's wipes) stops when the visitor asks for reduced motion; the stages then switch without a wipe.

= Make it yours =

The header, the home sections and the footer carry sample details of a fictional builder, Veranthe Homes in the Algarve and Lisbon. Edit them in Appearance → Editor (Patterns and Templates). The logo is two-coloured text in the header pattern ("VER" in the accent colour, then "ANTHE"); "Book a consultation" (wide screens only, as in the template) links to the form; the clock reads the time zone in its data-tz attribute (an IANA name such as Europe/Lisbon).

The menu is one Navigation block: its button is the "M" box in the bar, and it opens the full-screen menu with numbered links. A menu link to the home page with the CSS class le-go-0, le-go-1, le-go-2 or le-go-3 (Advanced → Additional CSS class) scrolls the house to that stage, as the template's menu does; the demo menu uses le-go-0, le-go-1 and le-go-3.

The texts of the four stages (caption, label and timeline) live in the STAGES list at the top of assets/js/lattice-estate.js, as in the template; the four photos of the house and the team photo are in assets/img.

== Frequently Asked Questions ==

= The contact form does not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the form block from the contact section, or replace it with another form plugin's block.

== Changelog ==

= 1.0.0 =
* First WordPress release, from the Lattice Estate website template 1.0.0.

== Copyright ==

Lattice Estate WordPress theme, Copyright 2026 Formgong.
Lattice Estate is distributed under the terms of the MIT License.

Montserrat font, Copyright 2024 The Montserrat.Git Project Authors (https://github.com/JulietaUla/Montserrat.git)
License: SIL Open Font License 1.1, https://openfontlicense.org

Cormorant Garamond font, Copyright 2015 the Cormorant Project Authors (github.com/CatharsisFonts/Cormorant)
License: SIL Open Font License 1.1, https://openfontlicense.org

IBM Plex Mono font, Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"
License: SIL Open Font License 1.1, https://openfontlicense.org

Photos: from the Lattice Estate website template (images in assets/img), generated for the template; the house, the people and the company in them are fictional. Replace them with your own before launch.
