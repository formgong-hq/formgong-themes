=== Contour ===
Contributors: formgong
Requires at least: 6.6
Tested up to: 6.8
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A blueprint-style one-page site for an independent developer or a small studio, with a brief form that posts to Formgong.

== Description ==

Contour is the WordPress block theme of the Contour website template (demo: https://contour.formgong.com). The home
page is made of patterns you can move or remove in the Site Editor: preloader, hero, approach, selected projects, services,
process, field notes and contact. Pages, posts, the blog list, search and 404 use a plain layout in the same type and
colours. The demo developer, her projects and notes are fictional.

== Setup ==

1. Install and activate the theme.
2. Install the Formgong plugin and save your access key in Settings → Formgong (free key at https://formgong.com/new).
   The theme reads the key from the plugin and fills it into the brief form when the page is drawn. It never stores
   the key itself. Until a key is saved the form is hidden; logged-in admins see "Add your Formgong key in
   Settings → Formgong" in its place.
3. Optional demo content: Tools → Import → WordPress, import contour-pages.xml (an empty Home page and the menu).
   Then Settings → Reading → Your homepage displays: A static page, Homepage: Home. The Home page stays empty;
   the theme's front-page template draws the home page.
4. Appearance → Editor → Navigation: the menu "Main" is the header bar. On phones (and with Ctrl/⌘ K anywhere) the
   theme opens a command palette listing the same menu plus theme, accent and grid actions. An item with the extra CSS
   class ct-mm-only is hidden in the header bar and listed only in the palette (the demo's "Contact").

The brief form sends name, email, company, budget and message with the hidden subject "New project brief", has a
honeypot, and shows thanks only when Formgong answers success: true.

== Copyright ==

Contour WordPress theme, (C) 2026 Formgong. Contour is distributed under the terms of the GNU GPL v2 or later.

Geist and Geist Mono fonts (assets/fonts):
Copyright 2024 The Geist Project Authors (https://github.com/vercel/geist-font)
This Font Software is licensed under the SIL Open Font License, Version 1.1.

GSAP 3.13 with ScrollTrigger and SplitText (assets/js/vendor), GreenSock standard no-charge license, see
assets/js/vendor/GSAP-LICENSE.txt. Lenis 1.3 (assets/js/vendor/lenis.min.js), MIT, see assets/js/vendor/LENIS-LICENSE.txt.

Images (assets/img): generated for this template with FLUX 1.1 [pro] ultra (Black Forest Labs); free to use with
the theme.

== Changelog ==

= 1.0.0 =
* First release.
