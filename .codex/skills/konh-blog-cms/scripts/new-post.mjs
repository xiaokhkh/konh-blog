#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);

const readArg = (name, fallback = '') => {
  const prefix = `--${name}=`;
  const inline = args.find((arg) => arg.startsWith(prefix));
  if (inline) return inline.slice(prefix.length);
  const index = args.indexOf(`--${name}`);
  return index >= 0 ? (args[index + 1] ?? fallback) : fallback;
};

const hasFlag = (name) => args.includes(`--${name}`);

const usage = () => {
  console.log(`Usage:
  node .codex/skills/konh-blog-cms/scripts/new-post.mjs \\
    --title "Post title" \\
    --description "Short description" \\
    --tags "astro,publishing" [--date 2026-05-15] [--slug custom-slug] [--draft]
`);
};

const title = readArg('title');
const description = readArg('description');

if (!title || !description || hasFlag('help')) {
  usage();
  process.exit(title && description ? 0 : 1);
}

const root = process.cwd();
const pkgPath = path.join(root, 'package.json');
if (!fs.existsSync(pkgPath) || JSON.parse(fs.readFileSync(pkgPath, 'utf8')).name !== 'konh-blog') {
  console.error('Run this script from the konh-blog repository root.');
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const date = readArg('date', today);
const slugify = (value) =>
  value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72);

const slug = readArg('slug', slugify(title) || 'post');
const tags = readArg('tags')
  .split(',')
  .map((tag) => tag.trim())
  .filter(Boolean);
const cover = readArg('cover');
const coverAlt = readArg('cover-alt');
const draft = hasFlag('draft');
const filePath = path.join(root, 'src/content/posts', `${date}-${slug}.mdx`);

if (fs.existsSync(filePath)) {
  console.error(`Refusing to overwrite existing post: ${filePath}`);
  process.exit(1);
}

const yamlString = (value) => JSON.stringify(value);
const frontmatter = [
  '---',
  `title: ${yamlString(title)}`,
  `description: ${yamlString(description)}`,
  `pubDate: ${date}`,
  `tags: [${tags.map(yamlString).join(', ')}]`,
  draft ? 'draft: true' : null,
  cover ? `cover: ${yamlString(cover)}` : null,
  coverAlt ? `coverAlt: ${yamlString(coverAlt)}` : null,
  '---',
]
  .filter(Boolean)
  .join('\n');

const body = `${frontmatter}

## Opening

Write the first section here.
`;

fs.writeFileSync(filePath, body, 'utf8');
console.log(filePath);
