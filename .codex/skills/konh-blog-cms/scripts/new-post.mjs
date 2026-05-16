#!/usr/bin/env node

process.argv = [process.argv[0], new URL('./content.mjs', import.meta.url).pathname, 'create', ...process.argv.slice(2)];
await import('./content.mjs');
