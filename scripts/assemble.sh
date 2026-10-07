#!/bin/sh
# Runs after `astro build`. Copies the parts of the site Astro doesn't build
# (the CV page and its template assets, the LS100 course site, old course
# handouts) into dist/ so it can be deployed as one site.
set -eu
cd "$(dirname "$0")/.."

for path in cv.html cv assets teaching-learning; do
  test -e "$path" || { echo "Missing required path: $path" >&2; exit 1; }
  cp -R "$path" dist/
done

mkdir -p dist/comp_etho
cp -R comp_etho/guide_materials dist/comp_etho/

find dist -name '.DS_Store' -delete
python3 scripts/sanitize_ls100_routes.py dist
