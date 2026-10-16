#!/bin/sh
# Build the theme exactly as a merchant gets it, from the Theme Store or a zip upload.
#
# The repo root is the Marrow demo store (its photos, collections, products, reviews and
# kitchen copy), so `theme dev` and the "Marrow dev" draft show the demo. A merchant's store has
# none of that content, so the zip takes the store-agnostic templates and section groups
# from install/ instead: placeholders, no offers, no review app blocks.
#
#   scripts/package.sh                        -> Marrow-<version>.zip in the repo root
#   scripts/package.sh <store> <theme id>     -> also push the build to that theme to check it
set -eu

root=$(cd "$(dirname "$0")/.." && pwd)
build=$(mktemp -d)
trap 'rm -rf "$build"' EXIT

for dir in assets blocks config layout locales sections snippets templates; do
  [ -d "$root/$dir" ] && cp -R "$root/$dir" "$build/"
done
cp -R "$root/install/." "$build/"
rm -f "$build/assets/.gitkeep"

# Nothing from the demo store may reach a merchant
if grep -rl "shopify://shop_images\|shopify://apps/\|shopify://products/\|shopify://pages/\|shopify://collections/\|fk_[A-Za-z0-9]\{10,\}\|marrow-main\|marrow-menu\|dog-recipes\|cat-recipes\|Marrow Kitchen\|Portland\|marrow.example" "$build/templates" "$build/sections" "$build/config"; then
  echo "demo content left in the build (files above)" >&2
  exit 1
fi

# The Theme Store upload reads the preset from settings_data.json: plain JSON (no admin comment
# header), current = "Marrow", and exactly one preset with that name
python3 -c '
import json, sys
d = json.load(open(sys.argv[1]))
assert d.get("current") == "Marrow" and list(d.get("presets", {})) == ["Marrow"], "preset"
' "$build/config/settings_data.json" || { echo "config/settings_data.json needs one preset named Marrow" >&2; exit 1; }

(cd "$build" && shopify theme package --path . >/dev/null && mv ./*.zip "$root/")
ls "$root"/*.zip

if [ $# -eq 2 ]; then
  shopify theme push --path "$build" --store "$1" --theme "$2"
fi
