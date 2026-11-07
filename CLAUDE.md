# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Lahiru Wijesundara's personal portfolio at https://lahiruwijesundara.github.io — a Jekyll site built on the **al-folio** academic theme (v0.14.6), heavily customised with an "Apple-style" design layer for the portfolio entries. The upstream `README.md`/`INSTALL.md`/`CUSTOMIZE.md` are the stock al-folio docs; the site content and the `apple/*` layer are what's specific to this repo.

Branches: `main` is the source branch, `gh-pages` is the deploy output, and work is currently on `fix-pages-deployment`. `bin/deploy` builds from `main` and pushes to `gh-pages`; `.github/workflows/deploy.yml` also deploys.

## Running locally

Local Ruby on this machine is broken (missing DLLs), so use Docker:

```
docker compose up -d      # serves http://localhost:8888 (host 8888 -> container 8080), livereload on 35729
docker compose logs -f    # SCSS deprecation warnings are noise
```

`docker-compose.yml` uses the prebuilt `amirpourmand/al-folio:v0.14.6` image and mounts the repo at `/srv/jekyll`; `bin/entry_point.sh` runs the Jekyll server. With a working Ruby, `bundle install && bundle exec jekyll serve` is the native equivalent.

Formatting: Prettier with `@shopify/prettier-plugin-liquid` (`.prettierrc`, printWidth 150) — CI checks it via `.github/workflows/prettier*.yml`. There is no test suite; `.github/workflows` has axe, lighthouse and broken-link checks.

## Architecture

- **Portfolio entries** are a Jekyll collection (`_portfolio/*.md`, `portfolio: output: true` in `_config.yml`). Each entry's front matter sets `layout: page`, `title`, `img` (grid card), `permalink`, `importance` (sort order within its category), `category`, `description`, and a `_styles` block hiding the default post header.
- **Grid page** is `_pages/portfolio.md` (`/portfolio/`, *not* `/projects/`). It loops over its `display_categories` list (Work Experience, Research, Publications, Game Jams, Projects, Education, Certificates, …), filtering `site.portfolio` by category and sorting by `importance`. Sub-categories like `Work Experience - AI Engineer` / `- Game Dev` are used by entries; certificates/skills/interests render from `_data/resume` via `_includes/portfolio_section.liquid`.
- **Apple design layer**: styles live in `_sass/_apple.scss` (CSS variables `--apple-*`); entry bodies are composed from `_includes/apple/` — `hero.liquid`, `preview_strip.liquid` (row of screenshots under the hero; `full`/`thumb` are comma-separated paths), `section_head.liquid`, `cs_card.liquid` — plus raw `apple-overview` / `apple-section` / `apple-grid` / `apple-card` HTML and `image_fancybox.liquid` / `play_youtube.liquid` for media. To add an entry, copy the structure of an existing one (e.g. `_portfolio/rag_support_assistant.md` or `basisfolio.md`) rather than writing from scratch.
- Images for entries go in `assets/img/portfolio/<slug>/`. Gallery shots are 1440x1100 PNGs; `<slug>-card.png` is a designed 2048x1536 marketing composite used for the grid — don't overwrite it when retaking product screenshots.
- Rest of the site is stock al-folio: `_data/` (cv, resume, coauthors, venues), `_bibliography/papers.bib`, `_layouts/`, `_includes/`, `_pages/`. Site-wide settings and the enabled plugins are in `_config.yml` and `Gemfile`.
- `outputs/` and `.codex/` are untracked local working dirs (scratch outputs / Codex config), not part of the site.

## Working notes

- Screenshots: the Chrome extension capture is flaky here; use `puppeteer-core` with system Chrome headless.
- Basisfolio app shots are retaken via a temporary demo account (register → seed → capture → delete user).
