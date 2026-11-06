=== Marrow ===
Contributors: formgong
Requires at least: 6.6
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.3.0
License: MIT
License URI: https://opensource.org/license/mit

A bright one-page block theme for a raw pet-food kitchen: a giant MARROW wordmark over a cut-out dog photo, a meal calculator, dog and cat recipes, treats, reviews and four form layouts.

== Description ==

Marrow is the WordPress version of the free Marrow website template (https://formgong.com/en/website-templates/marrow/#get-wordpress).

* The home page is the template's one page. Each part is a pattern you can move or remove in Appearance → Editor:
  - Home: hero. The blue card with the giant MARROW wordmark, the cut-out dog photo (the cat photo with the cat switch), "Raw meals for dogs" and the dog/cat switch.
  - Home: meal finder. Age, weight, activity and neutered; "See my plan" shows the daily grams and the pack that fits, then the "Email me this plan" form.
  - Home: recipes. The wave, then six dog and three cat recipe cards (the dog/cat switch swaps them); each arrow opens the order request with that recipe picked.
  - Home: why raw. The wave, then the bowl, floating vegetables and four checks.
  - Home: treats. The wave, then the treats carousel; "Add to order" opens the order request with that treat picked.
  - Home: reviews. The wave, then the running ribbon and the sample review cards (edit them in the pattern); "Leave a review" opens the review form.
  - Home: questions. The accordion and "Ask us".
  - Home: photo banner. "Build a recipe".
* The footer part holds the navy footer and the three dialogs (Dialog: Order request, Dialog: Leave a review, Dialog: Write to the kitchen), so "Order now" and the footer's "Write to us" work on every page.
* Pages, posts, the blog index, archives, search and 404 use the template's type and colours: a big Unbounded title, then a cream card with round corners, the date and categories in the first column and the text in the rest. The header shows its scrolled look there (white bar, the MARROW wordmark).
* Demo content in one go: download marrow-wordpress-pages.xml from the Marrow release on GitHub, then Tools → Import → WordPress. It adds an empty page "Home" and the menu. Then:
  - Settings → Reading → Your homepage displays: A static page, Homepage: Home, Posts page: leave it on "— Select —" (or choose a page of your own for a blog). The Home page stays empty; the theme draws the home page.
* Motion (the page wipe, the wordmark, the waves, the floating vegetables, the carousels, the ribbon) stops when the visitor asks for reduced motion.

= The form layouts =

The four forms (the meal plan in the finder, the order request, the review and write to us) are the template's form layouts in Custom HTML blocks, with the meal calculator, the dialogs and the field checks working. The theme does not send them: sending forms is the job of a plugin. To take messages, either replace a form pattern with the block of the form plugin you use, or set the form's action attribute to the address your form service gives you. Until then, pressing the form's button shows "This form is not connected yet" and nothing is sent.

= Make it yours =

The header, the patterns and the footer carry sample details of a fictional kitchen. Edit them in Appearance → Editor (Patterns and Templates).

The menu is one Navigation menu, shown twice: in the header bar and in the full-screen orange menu (the round orange button, on every screen size, so phones reach every link). Its items, in order: Recipes, Treats, Raw feeding, Reviews and Questions with the CSS class mw-menu-only (Advanced → Additional CSS class: only in the open menu), Contact, then the contact line, four items with the class mw-mc (address, phone, email, hours: only in the open menu, under the big links; the address and the hours have no link).

The recipes, treats and the order form's list are in the Home: recipes, Home: treats and Dialog: Order request patterns: keep each button's data-order-item equal to an option of the order form.

== Frequently Asked Questions ==

= How do I make the forms send? =

Replace the form pattern with your form plugin's block (Appearance → Editor), or set the form's action to your form service's address. The theme itself sends nothing.

= Can I remove the forms? =

Yes. Remove the meal finder pattern from the home page and the three dialog patterns from the footer part in Appearance → Editor.

== Changelog ==

= 1.3.0 =
* No plugin dependency: the four forms are plain layouts in core blocks (the plugin block, the CSS that hid forms without the plugin, the plugin's script events, the reviews feed and the "Powered by" and footer credits are gone). A form that is not connected says so instead of submitting. The review cards are the template's samples.
* All visible text is translatable: the skip links, 404, blog and "nothing found" text moved from the templates into patterns, and the script's messages (the pet switch, the menu button, the meal plan, the postcode label) come from wp_localize_script().
* The 404 page links home with home_url().
* Contrast to WCAG AA (4.5:1): darker placeholders in the meal finder (2.49 to 4.85).
* The e-commerce tag is gone (the theme has no cart or checkout), and so is the deprecated light tag.

= 1.2.0 =
* Ready for the WordPress.org theme directory: all pattern text is translatable (text domain marrow), readable CSS instead of the minified copy, requires WordPress 6.6 (theme.json version 3).

= 1.1.0 =
* The theme no longer posts form data itself.

= 1.0.0 =
* First WordPress release, from the Marrow website template.

== Copyright ==

Marrow WordPress theme, Copyright 2026 Formgong.
Marrow is distributed under the terms of the MIT License.

Figtree font, Copyright 2022 The Figtree Project Authors (https://github.com/erikdkennedy/figtree)
License: SIL Open Font License 1.1, https://openfontlicense.org

Unbounded font, Copyright 2022 The Unbounded Project Authors (https://github.com/googlefonts/unbounded)
License: SIL Open Font License 1.1, https://openfontlicense.org

Photos (assets/img, screenshot.jpg): Copyright 2026 Formgong, generated for the Marrow template with ChatGPT image generation (OpenAI), whose terms assign the output to Formgong; the animals, people and places are fictional. License: MIT, the same as the theme, https://opensource.org/license/mit Replace them with photos of your own before launch, keeping the file names.
