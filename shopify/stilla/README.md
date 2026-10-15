# Stilla for Shopify

The [Stilla](https://formgong.com/en/website-templates/stilla/) activewear template as a Shopify Online Store 2.0
theme. The size question on product pages and the contact forms send to your Formgong inbox; the newsletter
form signs people up as Shopify customers.

## Install

1. Download `Stilla-<version>.zip` from the [release](https://github.com/formgong-hq/formgong-themes/releases).
   Don't unzip it.
2. In Shopify admin, open Online Store → Themes → Add theme → Upload zip file, and choose the file.
3. Create a free Formgong access key at https://formgong.com/new, then in the theme editor open
   Theme settings → Formgong and paste it. Without a key the size question form stays hidden.
4. Add your photos, menus and texts in the theme editor. The theme starts with placeholders and no demo
   content: Shopify never copies products, photos or menus with a theme.

## What is in this folder

- the theme root is the demo look (stilla demo photos and menus) that `shopify theme dev` shows;
- `install/` holds the merchant defaults that replace the demo files in the zip;
- `scripts/package.sh` builds the zip and refuses to build if a demo reference is left in it.

Built from Formgong's own Scamper theme. License: see LICENSE.md.
