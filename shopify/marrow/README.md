# Marrow for Shopify

The [Marrow](https://formgong.com/en/website-templates/marrow/) raw pet-food template as a Shopify Online Store 2.0
theme: a rounded hero card with a giant wordmark and a cut-out photo of a dog or cat, a dog/cat switch, a meal
finder, wave dividers, recipe and treat cards from your collections, a "why raw" stage with a bowl and drifting
ingredients, reviews, questions and a photo banner. Recipes and treats are real Shopify products: the arrow on a card
opens a quick add with the pack size, and the cart is Shopify's. The meal plan, the review form and "write to us"
send to your Formgong inbox.

## Install

1. Download `Marrow-<version>.zip` from the [release](https://github.com/formgong-hq/formgong-themes/releases).
   Don't unzip it.
2. In Shopify admin, open Online Store → Themes → Add theme → Upload zip file, and choose the file.
3. Create a free Formgong access key at https://formgong.com/new, then in the theme editor open
   Theme settings → Formgong and paste it. Without a key the three forms stay hidden.
4. In the theme editor, choose your dog recipes, cat recipes and treats collections in the recipes and treats
   sections, then add your photos, menus and texts. Give recipe products a "Pack" option (for example 250 g,
   500 g, 750 g, 1 kg); the quick add shows its values. The theme starts with placeholders and no demo content:
   Shopify never copies products, photos or menus with a theme. The giant hero word shows your store name until you
   type your own.
5. The meal finder's daily amounts are a starting point, not vet advice; edit the rule in assets/marrow.js if you use
   your own feeding guide.

## What is in this folder

- the theme root is the demo look (Marrow demo photos, collections and menus) that `shopify theme dev` shows;
- `install/` holds the merchant defaults that replace the demo files in the zip;
- `scripts/package.sh` builds the zip and refuses to build if a demo reference is left in it.

Built from Formgong's own Scamper theme. License: see LICENSE.md.
