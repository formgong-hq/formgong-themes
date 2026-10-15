=== Shoal ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/license/mit

A light, photo-led block theme for a real estate agent or another local expert, with area guides, notes and a contact dialog whose form sends to Formgong.

== Description ==

Shoal is the WordPress version of the free Shoal website template (https://formgong.com/en/website-templates/shoal/).

* Home page: a full-screen photo hero, six service tiles, "Meet" with a wide photo, the island guides, notes and a call to action.
* Page layouts for Buying, Selling, About (Meet Dana), Contact, Thanks and four island guides, under Add page → Patterns → Shoal.
* Notes are posts: the blog index, archives and search show them as the home's note cards; a note page shows its category, date, title and lead above the picture, as in the template.
* Demo content in one go: download shoal-wordpress-pages.xml from the Shoal release on GitHub, then Tools → Import → WordPress. It adds Home, Buying, Selling, Meet Dana, Contact, Thanks, an Areas page with the four island guides under it (so they keep /areas/<name>/ addresses), a Notes page, the three notes and the menu. Then:
  - Settings → Permalinks → Custom structure: /notes/%postname%/ (the notes keep their /notes/<name>/ addresses).
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: Notes (the blog index is then at /notes/; the Home page stays empty, the theme draws it).
* The enquiry form is the Formgong plugin's block (template "shoal"), on the Contact page and in the contact dialog that the "Let's Connect" button opens on every page. Install the free Formgong plugin, paste your access key under Settings → Formgong, and the form sends every enquiry to your Formgong inbox and to Telegram.
* Motion (enter animations, the header that turns solid and hides on scroll) stops when the visitor asks for reduced motion.

= Make it yours =

The header, footer, contact dialog and home sections carry sample details of a fictional agent, Dana Whitlock. Edit them in Appearance → Editor (Patterns and Templates). The site title (Settings → General) is the wordmark in the header. The menu is one Navigation block: items marked sh-only-bar show only in the bar on wide screens (Areas, Let's Connect, the phone), items marked sh-only-open show only in the open menu (the name line, Home, Meet Dana, the island guides, Contact, the phone and e-mail line), so edit them in the Navigation block too. A menu item with the class sh-open-contact opens the contact dialog. The demo pages show their pictures from the theme folder (/wp-content/themes/shoal/assets/img/); replace them with your own from the Media Library. To send visitors to your Thanks page after the form, set its address as the redirect under Settings → Formgong.

== Frequently Asked Questions ==

= The enquiry form does not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the form block, or replace it with another form plugin's block.

== Changelog ==

= 1.0.0 =
* First WordPress release, from the Shoal website template 1.0.0.

== Copyright ==

Shoal WordPress theme, Copyright 2026 Formgong.
Shoal is distributed under the terms of the MIT License.

Newsreader font, Copyright 2020 The Newsreader Project Authors (http://github.com/productiontype/Newsreader)
License: SIL Open Font License 1.1, https://openfontlicense.org

Metropolis font (https://github.com/dw5/Metropolis), as packaged by Fontsource (@fontsource/metropolis).
License: The Unlicense, "This is free and unencumbered software released into the public domain."

Photos: from the Shoal website template (images in assets/img), under the template's licence.
