# Konh Blog

Astro 6 personal publishing starter: MDX in Git, static output, Pagefind search, RSS, Giscus-ready comments, and optional Sveltia CMS.

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Write

Create posts in `src/content/posts/*.mdx`.

Required frontmatter:

```yaml
title: "Post title"
description: "Short summary"
pubDate: 2026-05-15
tags: ["astro"]
cover: "/images/covers/example.svg"
coverAlt: "Cover description"
```

Keep published images in `public/images`. The live site should not hotlink Notion-hosted or other expiring file URLs.

## Search

`npm run build` runs Pagefind after Astro builds. Local search works in preview mode after a build:

```bash
npm run build
npm run preview
```

## Comments

Fill these env vars after creating a GitHub Discussions category for Giscus:

```bash
PUBLIC_GISCUS_REPO=
PUBLIC_GISCUS_REPO_ID=
PUBLIC_GISCUS_CATEGORY=
PUBLIC_GISCUS_CATEGORY_ID=
```

## Selection speech

The article text-selection panel uses ElevenLabs through `/api/selection-speech` when
`ELEVENLABS_API_KEY` is set in the Vercel project's server-side environment. Keep the
key out of `PUBLIC_` variables and client code. A key restricted to text-to-speech,
with a credit limit set in ElevenLabs, is recommended.

Speech uses the George voice with `eleven_multilingual_v2` for English and Chinese
selections. Requests are limited to 500 characters and have a best-effort cap of 12
generations per IP per hour. If ElevenLabs is not configured or temporarily unavailable,
the panel falls back to a browser voice automatically.

## CMS

The optional CMS is available at `/admin/`. Update `public/admin/config.yml` with your GitHub repo before deploying.

## Codex Skill

This repo includes a project-local skill at `.codex/skills/konh-blog-cms`. Use it for CMS-agent style writing,
metadata edits, validation, and publish workflows.

## Deploy

Vercel:

```bash
vercel
```

Cloudflare Pages:

```txt
Build command: npm run build
Output directory: dist
```
