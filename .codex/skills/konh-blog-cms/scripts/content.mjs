#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import YAML from 'yaml';

const args = process.argv.slice(2);
const command = args[0];
const rest = args.slice(1);
const postDir = path.join(process.cwd(), 'src/content/posts');

const usage = () => {
  console.log(`Usage:
  node .codex/skills/konh-blog-cms/scripts/content.mjs list [--json]
  node .codex/skills/konh-blog-cms/scripts/content.mjs show --slug post-slug
  node .codex/skills/konh-blog-cms/scripts/content.mjs create --title "Title" --description "Summary" [--tags "a,b"] [--date 2026-05-16] [--slug custom] [--draft]
  node .codex/skills/konh-blog-cms/scripts/content.mjs update --slug post-slug [--title "Title"] [--description "Summary"] [--tags "a,b"] [--draft true|false]
  node .codex/skills/konh-blog-cms/scripts/content.mjs delete --slug post-slug --yes
`);
};

const readArg = (name, fallback = '') => {
  const prefix = `--${name}=`;
  const inline = rest.find((arg) => arg.startsWith(prefix));
  if (inline) return inline.slice(prefix.length);
  const index = rest.indexOf(`--${name}`);
  return index >= 0 ? (rest[index + 1] ?? fallback) : fallback;
};

const hasFlag = (name) => rest.includes(`--${name}`);

const assertRoot = () => {
  const pkgPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(pkgPath) || JSON.parse(fs.readFileSync(pkgPath, 'utf8')).name !== 'konh-blog') {
    console.error('Run this script from the konh-blog repository root.');
    process.exit(1);
  }
  fs.mkdirSync(postDir, { recursive: true });
};

const slugify = (value) =>
  value
    .normalize('NFKD')
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 72);

const postFiles = () =>
  fs
    .readdirSync(postDir)
    .filter((name) => /\.(md|mdx)$/.test(name))
    .sort()
    .map((name) => path.join(postDir, name));

const parsePost = (filePath) => {
  const source = fs.readFileSync(filePath, 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) throw new Error(`Missing frontmatter: ${filePath}`);
  const data = YAML.parse(match[1]) ?? {};
  return { filePath, data, body: match[2] };
};

const slugFromFile = (filePath) => path.basename(filePath).replace(/\.(md|mdx)$/, '');

const findPost = () => {
  const file = readArg('file');
  if (file) {
    const filePath = path.resolve(process.cwd(), file);
    if (!fs.existsSync(filePath)) throw new Error(`Post not found: ${file}`);
    return parsePost(filePath);
  }

  const slug = readArg('slug');
  if (!slug) throw new Error('Pass --slug or --file.');
  const found = postFiles().find((filePath) => slugFromFile(filePath) === slug || slugFromFile(filePath).endsWith(`-${slug}`));
  if (!found) throw new Error(`Post not found: ${slug}`);
  return parsePost(found);
};

const parseTags = (value) =>
  value
    .split(',')
    .map((tag) => tag.trim().toLowerCase())
    .filter(Boolean);

const normalizeDate = (value) => (value ? String(value).slice(0, 10) : undefined);

const serializePost = (data, body) => {
  const ordered = {};
  for (const key of ['title', 'description', 'pubDate', 'updatedDate', 'tags', 'draft', 'cover', 'coverAlt', 'canonicalURL']) {
    if (data[key] !== undefined && data[key] !== '') ordered[key] = data[key];
  }
  for (const [key, value] of Object.entries(data)) {
    if (!(key in ordered)) ordered[key] = value;
  }
  return `---\n${YAML.stringify(ordered).trim()}\n---\n${body.startsWith('\n') ? body : `\n${body}`}`;
};

const listPosts = () => {
  const posts = postFiles().map((filePath) => {
    const post = parsePost(filePath);
    return {
      slug: slugFromFile(filePath),
      title: post.data.title,
      date: normalizeDate(post.data.pubDate),
      draft: Boolean(post.data.draft),
      tags: post.data.tags ?? [],
      file: path.relative(process.cwd(), filePath),
    };
  });

  if (hasFlag('json')) {
    console.log(JSON.stringify(posts, null, 2));
    return;
  }

  if (posts.length === 0) {
    console.log('No posts found.');
    return;
  }

  for (const post of posts) {
    console.log(`${post.draft ? 'draft ' : 'live  '} ${post.date} ${post.slug} :: ${post.title}`);
  }
};

const createPost = () => {
  const title = readArg('title');
  const description = readArg('description');
  if (!title || !description) throw new Error('Create requires --title and --description.');

  const today = new Date().toISOString().slice(0, 10);
  const date = normalizeDate(readArg('date', today));
  const slug = readArg('slug', slugify(title) || 'post');
  const filePath = path.join(postDir, `${date}-${slug}.mdx`);
  if (fs.existsSync(filePath)) throw new Error(`Refusing to overwrite existing post: ${filePath}`);

  const data = {
    title,
    description,
    pubDate: date,
    tags: parseTags(readArg('tags')),
  };
  if (hasFlag('draft')) data.draft = true;
  if (readArg('cover')) data.cover = readArg('cover');
  if (readArg('cover-alt')) data.coverAlt = readArg('cover-alt');
  if (readArg('canonical-url')) data.canonicalURL = readArg('canonical-url');

  const body = readArg('body', '\n## Opening\n\nWrite the first section here.\n');
  fs.writeFileSync(filePath, serializePost(data, body), 'utf8');
  console.log(path.relative(process.cwd(), filePath));
};

const showPost = () => {
  const post = findPost();
  console.log(JSON.stringify({ slug: slugFromFile(post.filePath), file: path.relative(process.cwd(), post.filePath), ...post.data }, null, 2));
};

const updatePost = () => {
  const post = findPost();
  const next = { ...post.data };
  for (const key of ['title', 'description', 'cover', 'coverAlt', 'canonicalURL']) {
    const argName = key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
    const value = readArg(argName);
    if (value) next[key] = value;
  }
  if (readArg('date')) next.pubDate = normalizeDate(readArg('date'));
  if (readArg('updated-date')) next.updatedDate = normalizeDate(readArg('updated-date'));
  if (readArg('tags')) next.tags = parseTags(readArg('tags'));
  if (readArg('draft')) next.draft = readArg('draft') === 'true';
  if (hasFlag('publish')) next.draft = false;
  if (hasFlag('unpublish')) next.draft = true;

  fs.writeFileSync(post.filePath, serializePost(next, post.body), 'utf8');
  console.log(path.relative(process.cwd(), post.filePath));
};

const deletePost = () => {
  if (!hasFlag('yes')) throw new Error('Delete requires --yes.');
  const post = findPost();
  fs.unlinkSync(post.filePath);
  console.log(`Deleted ${path.relative(process.cwd(), post.filePath)}`);
};

try {
  assertRoot();
  if (!command || hasFlag('help')) {
    usage();
  } else if (command === 'list') {
    listPosts();
  } else if (command === 'show' || command === 'read') {
    showPost();
  } else if (command === 'create') {
    createPost();
  } else if (command === 'update') {
    updatePost();
  } else if (command === 'delete' || command === 'remove') {
    deletePost();
  } else {
    usage();
    process.exit(1);
  }
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
