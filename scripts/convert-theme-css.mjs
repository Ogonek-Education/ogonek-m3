#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length === 0 || args.includes('-h') || args.includes('--help')) {
	const usage = [
		'Usage:',
		'  node scripts/convert-theme-css.mjs <input.css> [output.css]',
		'',
		'Converts a single-theme CSS block (e.g. .dark { ... }) into:',
		'  @layer base { [data-theme="..."] { --color-md-... } }'
	].join('\n');
	console.log(usage);
	process.exit(args.length === 0 ? 1 : 0);
}

const inputPath = args[0];
const outputPath = args[1] ?? null;

const raw = fs.readFileSync(inputPath, 'utf8');

const selectorMatch = raw.match(/^\s*([^{]+)\{/m);
if (!selectorMatch) {
	throw new Error('Could not find a selector to convert.');
}

const selector = selectorMatch[1].trim();
const themeName = selectorToTheme(selector);

const bodyMatch = raw.match(/\{([\s\S]*?)\}/);
if (!bodyMatch) {
	throw new Error('Could not find a declaration block to convert.');
}

const declarations = bodyMatch[1]
	.split('\n')
	.map((line) => line.trim())
	.filter((line) => line.length > 0)
	.map((line) => line.replace(/--md-/g, '--color-md-'));

const output = [
	'@layer base {',
	`  [data-theme="${themeName}"] {`,
	...declarations.map((line) => `    ${line}`),
	'  }',
	'}',
	''
].join('\n');

if (outputPath) {
	fs.mkdirSync(path.dirname(outputPath), { recursive: true });
	fs.writeFileSync(outputPath, output, 'utf8');
} else {
	process.stdout.write(output);
}

function selectorToTheme(selectorText) {
	const first = selectorText.split(',')[0].trim();
	let name = first.startsWith('.') ? first.slice(1) : first;
	name = name.replace(/['"]/g, '');
	name = name.replace(/-medium-contrast$/, '-mc');
	name = name.replace(/-high-contrast$/, '-hc');
	return name;
}
