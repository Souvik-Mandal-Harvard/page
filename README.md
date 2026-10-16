# souvikmandal.info

Personal website, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Editing content

| What | Where |
| --- | --- |
| Headline, case studies, skills, timeline, interests, links | `src/data/profile.ts` |
| Page layout and sections | `src/pages/index.astro` |
| Colours, fonts, spacing | `src/styles/global.css` (tokens at the top) |
| Portrait | `src/assets/portrait_lightMode.jpg` and `portrait_darkMode.jpg`, swapped by the visitor's light/dark setting (any size; resized automatically) |
| Blog posts | `src/content/writing/*.md` (see `_template.md`) |

The **Writing** section and its nav link appear automatically once there is at least one non-draft post.

## Running locally

```sh
npm install
npm run dev       # live-reloading dev server (home page only)
npm run build     # full site into dist/, including CV and LS100
npm run preview   # serve dist/ at http://localhost:4321
```

## What isn't built by Astro

`scripts/assemble.sh` copies these into `dist/` after the Astro build:

- `cv.html`, `cv/` and `assets/` (the CV page still uses the old HTML5 UP template)
- `teaching-learning/ls100/` (the MyST course site, deployed here by its own pipeline)
- `comp_etho/guide_materials/` (old handouts; `/comp_etho` redirects to the course site)

## Adding animations or video

Don't use GIFs. They are 20–50× larger than video. Convert them instead:

```sh
ffmpeg -i input.gif -an -movflags +faststart -pix_fmt yuv420p \
  -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -c:v libx264 -crf 26 -preset slow public/media/name.mp4
ffmpeg -i input.gif -frames:v 1 poster.png && cwebp -q 75 poster.png -o public/media/name-poster.webp
```

Then use `<LoopVideo>` (see a case study in `profile.ts` for the fields). It only downloads when scrolled into view.

## Deploying

Pushing to `main` runs `.github/workflows/pages.yml`, which builds and publishes the site.
To turn on privacy-friendly analytics, create a [GoatCounter](https://www.goatcounter.com) site and add its code
as a repository variable named `GOATCOUNTER_CODE` (Settings → Secrets and variables → Actions → Variables).
