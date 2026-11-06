=== Ocra ===
Contributors: formgong
Requires at least: 6.6
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.3.0
License: MIT
License URI: https://opensource.org/license/mit

A one-page block theme for a small ceramics studio that sells by message: a citrus-slice wordmark, product cards with orange price tags, and seven form layouts.

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

= The form layouts =

The seven forms (order, workshop booking, commission with files, wholesale, feedback, write to us, newsletter) are the template's form layouts in Custom HTML blocks, with the steps, counters and file checks working. The theme does not send them: sending forms is the job of a plugin. To take messages, either replace a form pattern with the block of the form plugin you use, or set the form's action attribute to the address your form service gives you. Until then, pressing the form's button shows "This form is not connected yet" and nothing is sent.

= Make it yours =

The header, the patterns and the footer carry sample details of a fictional studio. Edit them in Appearance → Editor (Patterns and Templates). The logo "Ocra" and the two lines under the bar ("Ocra ceramics / Made by hand on the coast", "New firing / every month") are in the header pattern.

The menu is one Navigation block in the bar. Its items, in order: Shop, Workshops, Commissions, Visit, then Order with the CSS class oc-order (Advanced → Additional CSS class): the black pill. On phones (narrower than 600px) the menu folds into the Navigation block's menu button, so every link stays reachable.

The pieces, prices and the order form's list of pieces are in the Home: the kiln and Form: Order a piece patterns: keep each "Order this" button's data-piece equal to an option of the order form.

== Frequently Asked Questions ==

= How do I make the forms send? =

Replace the form pattern with your form plugin's block (Appearance → Editor), or set the form's action to your form service's address. The theme itself sends nothing.

= Can I remove the forms? =

Yes. Remove the form patterns from the home page in Appearance → Editor.

== Changelog ==

= 1.3.0 =
* No plugin dependency: the seven forms are plain layouts in core blocks (the plugin block, the CSS that hid forms without the plugin, the plugin's script events and the footer credit are gone). A form that is not connected says so instead of submitting.
* All visible text is translatable: the skip links, 404, blog and "nothing found" text moved from the templates into patterns, and the script's messages (steps, file checks) come from wp_localize_script().
* The 404 page links home with home_url().
* Contrast to WCAG AA (4.5:1): darker muted grey, darker placeholders and face icons, dark text on the orange price tags, band and hover states, darker orange step numbers.
* Phones get the Navigation block's menu button, so every menu link is reachable (before, only "Order" showed).
* The e-commerce tag is gone (the theme has no cart or checkout), and so is the deprecated light tag.

= 1.2.0 =
* Ready for the WordPress.org theme directory: all pattern text is translatable (text domain ocra), readable CSS instead of the minified copy, requires WordPress 6.6 (theme.json version 3).

= 1.1.0 =
* The theme no longer posts form data itself.

= 1.0.0 =
* First WordPress release, from the Ocra website template.

== Copyright ==

Ocra WordPress theme, Copyright 2026 Formgong.
Ocra is distributed under the terms of the MIT License.

Inter font, Copyright 2020 The Inter Project Authors (https://github.com/rsms/inter)
License: SIL Open Font License 1.1, https://openfontlicense.org

Inter Tight font, Copyright 2022 The Inter Project Authors (https://github.com/rsms/inter-tight)
License: SIL Open Font License 1.1, https://openfontlicense.org

Photos (assets/img/*.webp, screenshot.jpg): Copyright 2026 Formgong, generated for the Ocra template with ChatGPT image generation (OpenAI), whose terms assign the output to Formgong. License: MIT, the same as the theme, https://opensource.org/license/mit The citrus slices are drawn in SVG. Replace them with photos of your own work before launch, keeping the file names.
