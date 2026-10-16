=== Marrow ===
Contributors: formgong
Requires at least: 6.5
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: MIT
License URI: https://opensource.org/license/mit

A bright one-page block theme for a raw pet-food kitchen: a giant MARROW wordmark over a cut-out dog photo, a meal calculator, dog and cat recipes, treats, reviews and four forms that send to Formgong.

== Description ==

Marrow is the WordPress version of the free Marrow website template (https://formgong.com/en/website-templates/marrow/).

* The home page is the template's one page. Each part is a pattern you can move or remove in Appearance → Editor:
  - Home: hero. The blue card with the giant MARROW wordmark, the cut-out dog photo (the cat photo with the cat switch), "Raw meals for dogs" and the dog/cat switch.
  - Home: meal finder. Age, weight, activity and neutered; "See my plan" shows the daily grams and the pack that fits, then the "Email me this plan" form.
  - Home: recipes. The wave, then six dog and three cat recipe cards (the dog/cat switch swaps them); each arrow opens the order request with that recipe picked.
  - Home: why raw. The wave, then the bowl, floating vegetables and four checks.
  - Home: treats. The wave, then the treats carousel; "Add to order" opens the order request with that treat picked.
  - Home: reviews. The wave, then the running ribbon and the review cards; "Leave a review" opens the review form.
  - Home: questions. The accordion and "Ask us".
  - Home: photo banner. "Build a recipe".
* The footer part holds the navy footer and the three dialogs (Dialog: Order request, Dialog: Leave a review, Dialog: Write to the kitchen), so "Order now" and the footer's "Write to us" work on every page.
* Pages, posts, the blog index, archives, search and 404 use the template's type and colours: a big Unbounded title, then a cream card with round corners, the date and categories in the first column and the text in the rest. The header shows its scrolled look there (white bar, the MARROW wordmark).
* Demo content in one go: download marrow-wordpress-pages.xml from the Marrow release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu. Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* Motion (the page wipe, the wordmark, the waves, the floating vegetables, the carousels, the ribbon) stops when the visitor asks for reduced motion.

= The forms and your Formgong key =

The four forms (the meal plan in the finder, the order request, the review and write to us) are the template's own forms in Custom HTML blocks. They post straight to https://formgong.com/submit and show "thank you" only when Formgong answers that the message was stored.

The Formgong plugin holds the access key; the theme stores none. Install the free Formgong plugin and paste your access key under Settings → Formgong: the theme puts it into every form when the page is drawn. Until a key is saved the forms are not shown, and signed-in administrators see "Add your Formgong key in Settings → Formgong" in each form's place. Do not type a key into the patterns.

Reviews: use a Formgong form with Reviews switched on. Its key also loads the reviews you approved in Formgong into the reviews slider, in place of the sample cards.

= Make it yours =

The header, the patterns and the footer carry sample details of a fictional kitchen. Edit them in Appearance → Editor (Patterns and Templates).

The menu is one Navigation menu, shown twice: in the header bar and in the full-screen orange menu (the round orange button). Its items, in order: Recipes, Treats, Raw feeding, Reviews and Questions with the CSS class mw-menu-only (Advanced → Additional CSS class: only in the open menu), Contact, then the contact line, four items with the class mw-mc (address, phone, email, hours: only in the open menu, under the big links; the address and the hours have no link).

The recipes, treats and the order form's list are in the Home: recipes, Home: treats and Dialog: Order request patterns: keep each button's data-order-item equal to an option of the order form.

== Frequently Asked Questions ==

= The forms do not show =

Install and activate the Formgong plugin, then paste your access key under Settings → Formgong.

= Can I use the theme without Formgong? =

Yes. Remove the meal finder pattern and the three dialog patterns from the footer part, or put another form plugin's block in their place.

== Changelog ==

= 1.0.0 =
* First WordPress release, from the Marrow website template.

== Copyright ==

Marrow WordPress theme, Copyright 2026 Formgong.
Marrow is distributed under the terms of the MIT License.

Figtree font, Copyright 2022 The Figtree Project Authors (https://github.com/erikdkennedy/figtree)
License: SIL Open Font License 1.1, https://openfontlicense.org

Unbounded font, Copyright 2022 The Unbounded Project Authors (https://github.com/googlefonts/unbounded)
License: SIL Open Font License 1.1, https://openfontlicense.org

Photos: from the Marrow website template (images in assets/img), generated for the template with ChatGPT image generation (OpenAI); the animals, people and places are fictional; you may use them in your own site. Replace them with photos of your own before launch, keeping the file names.
