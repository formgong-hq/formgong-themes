=== Halftone ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/license/mit

A one-page block theme for an architecture studio: an orange loader, a halftone photo hero, project panels that stack as you scroll, and an orange contact card with a form that sends to Formgong.

== Description ==

Halftone is the WordPress version of the free Halftone website template (https://formgong.com/en/website-templates/halftone/).

* The home page is the template's one page. Each part is a pattern you can move or remove in Appearance → Editor:
  - Home: loader. Orange, four corner words and the page tilted small in the middle; it counts to 100 once per visit, then the page straightens and fills the screen.
  - Home: hero. A pinned halftone photo that turns into a second frame as you scroll; the title splits to the edges.
  - Home: intro. The orange statement.
  - Home: projects. Four full-screen photos that stack as you scroll, each sliding in from its own side, with a white bar.
  - Home: studio. "Light, drawn into rooms": a strip of photos rises over the words and the middle one opens to the whole screen.
  - Home: services. The list of services next to a photo.
  - Home: numbers. Two numbers on orange with a pattern of rounded tiles.
  - The footer with the big wordmark (a template part; on the home page it sits before the contact card, as in the template).
  - Home: contact. The orange card with the form over a photo, the socials along the bottom.
* Pages, posts, the blog index, archives, search and 404 use the template's type and colours: a big orange title in the display face, then a row under a black line with the date and categories in the first column and the text in the rest.
* Demo content in one go: download halftone-wordpress-pages.xml from the Halftone release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu. Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* The contact form is the Formgong plugin's block (template "halftone"), in the Home: contact pattern. Install the free Formgong plugin, paste your access key under Settings → Formgong, and the form sends every message to your Formgong inbox and to Telegram.
* Motion (loader, scroll-driven photos, entrances, counting numbers) stops when the visitor asks for reduced motion.

= Make it yours =

The header, the patterns and the footer carry sample details of a fictional studio, TAKU in Copenhagen and Aarhus. Edit them in Appearance → Editor (Patterns and Templates). The mark "TAKU" and "Get in touch" are in the header pattern.

The menu is one Navigation block: its button is the white "Menu" cell of the header bar, and it opens the white panel under the bar. Its items, in order, and their CSS classes (Advanced → Additional CSS class):

* The five big links: class ht-mlink.
* The studio line with "Privacy policy" and "Terms of use" under it (the right column; under the links on phones): a submenu with the class ht-mside. It shows only in the open menu. The legal links point at the home page until you set their addresses.

The loader words are in the Home: loader pattern; the projects, services and numbers in their patterns (the numbers count up to data-count).

== Frequently Asked Questions ==

= The contact form does not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the form block from the Home: contact pattern, or replace it with another form plugin's block.

== Changelog ==

= 1.0.0 =
* First WordPress release, from the Halftone website template.

== Copyright ==

Halftone WordPress theme, Copyright 2026 Formgong.
Halftone is distributed under the terms of the MIT License.

Archivo font, Copyright 2020 The Archivo Project Authors (https://github.com/Omnibus-Type/Archivo)
License: SIL Open Font License 1.1, https://openfontlicense.org

Figtree font, Copyright 2022 The Figtree Project Authors (https://github.com/erikdkennedy/figtree)
License: SIL Open Font License 1.1, https://openfontlicense.org

Photos: from the Halftone website template (images in assets/img), made for the template with FLUX.1 [schnell] (Apache 2.0); the buildings, the projects and the studio in them are fictional. Replace them with photos of your own work before launch, keeping the file names.
