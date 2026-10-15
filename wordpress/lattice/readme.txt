=== Lattice ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/license/mit

A dark, motion-led one-page portfolio block theme for a creative developer or a small studio, with a contact form that sends to Formgong.

== Description ==

Lattice is the WordPress version of the free Lattice website template (https://formgong.com/en/website-templates/lattice/).

* Home page: five sections, each a pattern you can move or remove in Appearance → Editor: the hero, selected work (a project switcher pinned to the scroll on wide screens), services with numbers and client quotes, about the studio, and contact with the form and the footer row. Every box sits on a drawn grid; a light intro spells the studio name once per visit, frames draw themselves in, and a particle orb travels between sections.
* Pages, posts, the blog index, archives, search and 404 use the same grid, type and colours: a heading on the grid, then the text in a bordered box.
* Demo content in one go: download lattice-wordpress-pages.xml from the Lattice release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu (Work, Services, About, Contact, linking to the home sections). Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* The contact form is the Formgong plugin's block (template "lattice"), in the contact section. Install the free Formgong plugin, paste your access key under Settings → Formgong, and the form sends every enquiry to your Formgong inbox and to Telegram.
* Motion (intro, line drawing, orb, counters, quotes, rotator) stops when the visitor asks for reduced motion.

= Make it yours =

The header, the home sections and the footer carry sample details of a fictional studio, Halden Studio in Lisbon. Edit them in Appearance → Editor (Patterns and Templates). The logo is two-coloured text in the header pattern ("HAL" in the accent colour, then "DEN"); the clock reads the time zone in its data-tz attribute (an IANA name such as Europe/Lisbon). The menu is one Navigation block: its button is the "M" box in the bar, and it opens the full-screen menu with numbered links. The projects of the work section (names, texts, colours and screenshots) and the services of the rotator live in the PROJECTS and SERVICES lists at the top of assets/js/lattice.js, as in the template; the screenshots are in assets/img.

== Frequently Asked Questions ==

= The contact form does not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the form block from the contact section, or replace it with another form plugin's block.

== Changelog ==

= 1.0.0 =
* First WordPress release, from the Lattice website template 1.0.0.

== Copyright ==

Lattice WordPress theme, Copyright 2026 Formgong.
Lattice is distributed under the terms of the MIT License.

Montserrat font, Copyright 2024 The Montserrat.Git Project Authors (https://github.com/JulietaUla/Montserrat.git)
License: SIL Open Font License 1.1, https://openfontlicense.org

IBM Plex Mono font, Copyright © 2017 IBM Corp. with Reserved Font Name "Plex"
License: SIL Open Font License 1.1, https://openfontlicense.org

Project screenshots: from the Lattice website template (images in assets/img), generated for the template; the sites and brands in them are fictional. Replace them with your own work before launch.
