---
name: konh-blog-cms
description: Operate the Konh Blog Astro/MDX publishing system as a CMS agent. Use when Codex needs to create, edit, organize, validate, or publish Konh Blog posts; update tags, frontmatter, covers, RSS, Sveltia CMS config, Giscus settings, or deployment metadata; migrate drafts from Notion or other sources into repo-owned Markdown/MDX; or run the blog's content QA and GitHub publish workflow.
---

# Konh Blog CMS

## Overview

Act as a content operations agent for the project-local Konh Blog repo. Treat Git/MDX as the canonical CMS, keep assets self-hosted under `public/images`, and validate every meaningful content or config change with Astro before publishing.

## First Steps

1. Work from the repository root containing `package.json` with `"name": "konh-blog"`.
2. Inspect the current content before editing:

```bash
rg --files src/content public/images
rg "title:|tags:|draft:" src/content/posts
```

3. For content schema details, read `references/content-model.md` only when you need frontmatter specifics or route/RSS behavior.

## Create A Post

Prefer the bundled script so filenames and frontmatter stay consistent:

```bash
node .codex/skills/konh-blog-cms/scripts/new-post.mjs \
  --title "Post title" \
  --description "Short summary" \
  --tags "astro,publishing" \
  --date 2026-05-15
```

Use `--draft` when the post should not appear in lists or RSS. Use `--cover /images/covers/name.svg --cover-alt "Description"` when a cover already exists.

After creating the skeleton, write the article directly in the MDX file. Use concise headings, meaningful summaries, and durable links.

## Edit Existing Content

- Preserve user-authored prose unless the user asked for a rewrite.
- Keep `description` aligned with the article's actual thesis; it is used on cards, SEO metadata, and RSS.
- Normalize tags to short lowercase topics unless the project already uses a different style.
- Put new images in `public/images/uploads` or `public/images/covers`; update `coverAlt` with a concrete description.
- Do not use Notion file URLs, expiring CDN links, or local absolute image paths in published posts.

## Validate

Run validation after content, config, or skill changes:

```bash
npm run check
npm run build
```

If routes, RSS, or search are touched, inspect generated output under `dist` after the build. RSS links must use post ids, not `undefined`.

## CMS And Deploy Config

- Sveltia CMS entrypoint: `public/admin/index.html`.
- CMS collection config: `public/admin/config.yml`.
- Giscus env placeholders: `.env.example` and `src/pages/posts/[slug].astro`.
- Vercel config: `vercel.json`.
- GitHub CI: `.github/workflows/ci.yml`.

When connecting the browser CMS, update `public/admin/config.yml` with the real GitHub `owner/repo` and keep media paths pointed at `public/images/uploads`.

## Publish Workflow

1. Run `git status --short` and review changed files.
2. Run `npm run check && npm run build`.
3. Commit with a concise conventional commit, usually `feat: add ...`, `fix: ...`, or `chore: ...`.
4. Push to GitHub.

Do not commit `dist`, `node_modules`, `.astro`, or local `.env` files.

## Resources

- `scripts/new-post.mjs`: deterministic post skeleton creator.
- `references/content-model.md`: frontmatter schema and routing rules.
