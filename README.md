# ogonek-m3

Svelte components and utilities inspired by Material Design 3.

> This project borrows heavily from [m3-svelte.](https://github.com/KTibow/m3-svelte)

## Install

```bash
pnpm add ogonek-m3
```

## Material Symbols

Use the provider component once near the root of your app to load the baseline icons,
and extend it with any extra icons you need.

```svelte
<script lang="ts">
	import { MaterialSymbolsProvider } from 'ogonek-m3';
</script>

<MaterialSymbolsProvider extraIcons={['search', 'add']} />
```

## Theme CSS (Material Theme Builder)

[Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) exports a CSS file with a theme selector (e.g. `.light { ... }`).

Convert:

- Variables from `--md-` to `--color-md-`
- Wrap the output in `@layer base` and `[data-theme="..."]`

You can then import the resulting .css into your app.css. Add the data-theme attribute to the app.html file to use the newly-created theme. Otherwise the package will resolve to default Google colours.

## Components

Almost all components have been implemented. Refer to this list to see how to use them. The semantics and props have been kept same. You can literally type in class="text-md-sys-color-on-error-container" and that will 1:1 corresond to what Google writes. [Material Design Components. ](https://m3.material.io/components)
