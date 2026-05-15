# Konh Blog Content Model

Posts live in `src/content/posts/*.mdx` and are loaded by `src/content.config.ts` with Astro 6 `glob`.

Required frontmatter:

```yaml
title: "Readable post title"
description: "One sentence summary for cards, SEO, and RSS"
pubDate: 2026-05-15
tags: ["astro", "publishing"]
```

Optional frontmatter:

```yaml
updatedDate: 2026-05-16
draft: true
cover: "/images/covers/example.svg"
coverAlt: "Concrete image description"
canonicalURL: "https://example.com/original"
```

Rules:

- Use `.mdx` for posts that may later include components; `.md` is also supported.
- Keep published images in `public/images`, preferably `public/images/covers` or `public/images/uploads`.
- Do not hotlink Notion-hosted files or temporary third-party export URLs.
- Use Astro 6 entry `id` when generating routes or RSS links; do not use the removed `post.slug` property.
- Keep `draft: true` posts out of production lists by preserving the existing filters.
