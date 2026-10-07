"""Rename LS100 route bundles whose filenames contain characters GitHub Pages
won't serve ($, [, ], (, ) ...) and rewrite the manifests that reference them."""

import re
import sys
from pathlib import Path

SAFE = re.compile(r"[A-Za-z0-9._-]+")
UNSAFE = re.compile(r"[^A-Za-z0-9._-]+")
ROUTE_URL_PREFIX = "/teaching-learning/ls100/build/routes/"

site_dir = Path(sys.argv[1] if len(sys.argv) > 1 else "dist")
build_dir = site_dir / "teaching-learning" / "ls100" / "build"
routes_dir = build_dir / "routes"
replacements = {}

if routes_dir.is_dir():
    for path in sorted(routes_dir.iterdir()):
        if not path.is_file() or SAFE.fullmatch(path.name):
            continue
        new_name = UNSAFE.sub("_", path.name)
        if new_name in replacements.values() or (routes_dir / new_name).exists():
            raise RuntimeError(f"Sanitized route filename collision: {path.name} -> {new_name}")
        path.rename(routes_dir / new_name)
        replacements[path.name] = new_name

for manifest_path in build_dir.glob("manifest-*.js"):
    original = manifest_path.read_text(encoding="utf-8")
    updated = original
    for old_name, new_name in replacements.items():
        updated = updated.replace(ROUTE_URL_PREFIX + old_name, ROUTE_URL_PREFIX + new_name)
    if updated != original:
        manifest_path.write_text(updated, encoding="utf-8")

print(f"LS100: sanitized {len(replacements)} route filename(s)")
