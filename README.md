# ogonek-m3

Svelte components and utilities inspired by Material Design 3.

> This project borrows heavily from m3-svelte.

## Install

```bash
pnpm add ogonek-m3
```

## Material Symbols (icons)

Use the provider component once near the root of your app to load the baseline icons,
and extend it with any extra icons you need.

```svelte
<script lang="ts">
	import { MaterialSymbolsProvider } from 'ogonek-m3';
</script>

<MaterialSymbolsProvider extraIcons={['search', 'add']} />
```

## Theme CSS conversion (Material Theme Builder)

[Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) exports a CSS file with a theme selector (e.g. `.light { ... }`).
Use the CLI to convert that file into the format used by this package.

```bash
npx ogonek-m3-theme path/to/theme.css path/to/output.css
```

The converter:

- Remaps variables from `--md-` to `--color-md-`
- Wraps the output in `@layer base` and `[data-theme="..."]`
