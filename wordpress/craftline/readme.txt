=== Craftline ===
Contributors: formgong
Requires at least: 6.6
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.1.0
License: MIT
License URI: https://opensource.org/license/mit

A dark block theme for a plumber, electrician, cleaner or another trade, with a scroll story on the home page and a quote form that sends to Formgong.

== Description ==

Craftline is the WordPress version of the free Craftline website template (https://formgong.com/en/website-templates/craftline/).

* Home page: a scroll story (a leak at night, a request sent from a phone, a van on the way, a fixed price, a dry floor), numbers, services, service areas, reviews, FAQ and a quote form.
* Page layouts for Services, each service, About, Contact and Thanks, under Add page → Patterns → Craftline.
* Demo pages in one go: download craftline-wordpress-pages.xml from the Craftline release on GitHub, then Tools → Import → WordPress. It adds Services with its six service pages, About, Contact, Thanks and the menu.
* The quote form is the Formgong plugin's block (template "craftline"). Install the free Formgong plugin, paste your access key under Settings → Formgong, and the form sends every request to your Formgong inbox and to Telegram.

= Make it yours =

The header, footer and home sections carry sample details of a fictional plumber, Northside Plumbing & Heating. Edit them in Appearance → Editor (Patterns and Templates), and set the menu in the Navigation block. The site title comes from Settings → General.

== Frequently Asked Questions ==

= The quote form does not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the form block, or replace it with another form plugin's block.

== Privacy ==

Craftline collects no data, sets no cookies and loads nothing from other sites: its fonts are in the theme folder.

The quote form is not part of the theme. It is the block of the Formgong plugin. When that plugin is active and a visitor sends the form, the entry goes to Formgong (formgong.com), which stores it and emails it to the site owner. Without the plugin, no form is shown and nothing is sent. Formgong's privacy policy: https://formgong.com/en/privacy/

== Changelog ==

= 1.1.0 =
* Every text in the patterns is translatable (text domain craftline).
* The sections that hold the quote form are group blocks, so no Custom HTML block is left with an unclosed tag.
* craftline.css is shipped readable (not minified).
* Requires WordPress 6.6 (theme.json version 3).
* Privacy and resource notes in this readme.

= 1.0.0 =
* First WordPress release, from the Craftline website template 1.0.0.

== Copyright ==

Craftline WordPress theme, Copyright 2026 Formgong.
Craftline is distributed under the terms of the MIT License.

== Resources ==

* Urbanist font (assets/fonts/urbanist-latin-wght-normal.D69JTELx.woff2), Copyright 2021 The Urbanist Project Authors, SIL Open Font License 1.1 (https://openfontlicense.org), source: https://github.com/coreyhu/Urbanist
* Illustrations and icons (inline SVG in the patterns: the house, the van, the map, the service icons), Copyright 2026 Formgong, MIT License, drawn for the Craftline template: https://github.com/formgong/craftline-astro-theme
* screenshot.png, Copyright 2026 Formgong, MIT License, a capture of this theme's home page.
* assets/css/craftline.css, Copyright 2026 Formgong, MIT License, built from the Craftline template (https://github.com/formgong/craftline-astro-theme) with Tailwind CSS 4 (Copyright Tailwind Labs, Inc., MIT License, https://github.com/tailwindlabs/tailwindcss).
