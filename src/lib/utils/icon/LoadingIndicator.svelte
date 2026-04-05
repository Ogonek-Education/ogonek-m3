<script lang="ts">
	import type { LoadingIndicatorProps } from './types.js';
	import { loadingIndicator } from './theme.js';
	import clsx from 'clsx';

	let {
		size = 48,
		container = false,
		center = true,
		class: className
	}: LoadingIndicatorProps = $props();

	const styling = $derived(loadingIndicator({ center, container, class: clsx(className) }));
</script>

<svg width={size} height={size} class={styling} viewBox="0 0 48 48">
	<circle cx="24" cy="24" r="8" fill="currentColor" />
</svg>
