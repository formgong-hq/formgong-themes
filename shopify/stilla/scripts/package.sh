#!/bin/sh
# Build the theme exactly as a merchant gets it, from the Theme Store or a zip upload.
#
# The repo root is the Wagtail demo store (its photos, collections, products and shipping
# promise), so `theme dev` and the "Stilla dev" draft show the demo. A merchant's store has
# none of that content, so the zip takes the store-agnostic templates and section groups
# from install/ instead: placeholders, no offers, no review app blocks.
#
#   scripts/package.sh                        -> Stilla-<version>.zip in the repo root
#   scripts/package.sh <store> <theme id>     -> also push the build to that theme to check it
set -eu

root=$(cd "$(dirname "$0")/.." && pwd)
build=$(mktemp -d)
trap 'rm -rf "$build"' EXIT

for dir in assets blocks config layout locales sections snippets templates; do
  [ -d "$root/$dir" ] && cp -R "$root/$dir" "$build/"
done
cp -R "$root/install/." "$build/"

# Nothing from the demo store may reach a merchant
if grep -rl "shopify://shop_images\|shopify://apps/\|shopify://products/\|shopify://pages/\|shopify://collections/\|fk_mP1r7\|stilla-main\|stilla-shop" "$build/templates" "$build/sections" "$build/config"; then
  echo "demo content left in the build (files above)" >&2
  exit 1
fi

# The Theme Store upload reads the preset from settings_data.json: plain JSON (no admin comment
# header), current = "Stilla", and exactly one preset with that name
python3 -c '
import json, sys
d = json.load(open(sys.argv[1]))
assert d.get("current") == "Stilla" and list(d.get("presets", {})) == ["Stilla"], "preset"
' "$build/config/settings_data.json" || { echo "config/settings_data.json needs one preset named Stilla" >&2; exit 1; }

(cd "$build" && shopify theme package --path . >/dev/null && mv ./*.zip "$root/")
ls "$root"/*.zip

if [ $# -eq 2 ]; then
  shopify theme push --path "$build" --store "$1" --theme "$2"
fi
