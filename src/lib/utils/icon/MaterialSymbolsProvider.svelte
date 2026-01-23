<script lang="ts">
	import { baseIconNames } from './base-icons.js';
	import type { MaterialSymbolsProviderProps } from './types.js';

	const {
		icons = [...baseIconNames],
		extraIcons = [],
		display = 'swap'
	}: MaterialSymbolsProviderProps = $props();

	const iconList = $derived.by(() => {
		const combined = [...icons, ...extraIcons].filter(Boolean);
		return Array.from(new Set(combined)).sort();
	});

	const iconNamesParam = $derived.by(() => {
		if (!iconList.length) return '';
		return `&icon_names=${encodeURIComponent(iconList.join(','))}`;
	});

	const displayParam = $derived.by(() => {
		if (!display) return '';
		return `&display=${display}`;
	});

	const href = $derived.by(() => {
		const base =
			'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
		return `${base}${iconNamesParam}${displayParam}`;
	});
</script>

<svelte:head>
	<link rel="stylesheet" href={href} />
</svelte:head>
