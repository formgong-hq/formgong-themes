# Lucerna for Shopify

The [Lucerna](https://formgong.com/en/website-templates/lucerna/) lighting-maker template as a Shopify Online Store
2.0 theme: a loader that switches the wordmark on, a frosted header with a mega menu, search and a trade-area form,
two hero slides, a bento of highlights, a strip of project photos you drag, a house at dusk with five light switches,
stacked value cards and a silk-light footer. The trade-account form and the contact drawer send to your Formgong inbox.

## Install

1. Download `Lucerna-<version>.zip` from the [release](https://github.com/formgong-hq/formgong-themes/releases).
   Don't unzip it.
2. In Shopify admin, open Online Store → Themes → Add theme → Upload zip file, and choose the file.
3. Create a free Formgong access key at https://formgong.com/new, then in the theme editor open
   Theme settings → Formgong and paste it. Without a key both forms stay hidden.
4. Add your photos, menus and texts in the theme editor (Header, the home sections, Footer). The theme starts with
   placeholders and no demo content.

The header menu (Navigation → Main menu) shows in the frosted pill and in the phone panel; its first link opens the
mega menu on wide screens (Header → "First menu link opens the mega menu"). The mega menu categories, the second list
and the featured card are blocks of the Header section. Home sections scroll to anchors: menu links like `/#about`.

## What is in this folder

- the theme root is the demo look (Fulgor's copy, demo menus, `shopify://shop_images/lucerna-*.webp`) that
  `shopify theme dev` shows; upload the photos in `demo-files/` to Content → Files and create the menus in
  `demo-pages.json` on the demo store;
- `install/` holds the merchant defaults that replace the demo files in the zip;
- `scripts/package.sh` builds the zip and refuses to build if a demo reference is left in it.

Built from Formgong's own Scamper theme (via Stilla: cart, search, blog, product and collection pages). Licence: see
LICENSE.md (GSAP and Poppins keep their own licences).
