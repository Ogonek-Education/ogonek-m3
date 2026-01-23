<script lang="ts">
	import clsx from 'clsx';
	import { singlePane } from './theme.js';
	import type { SinglePaneProps } from './types.js';
	import type { Snippet } from 'svelte';

	const {
		children,
		headline,
		padding = 'md',
		centered = 'medium',
		background = true,
		full = true,
		class: className,
		contentClass,
		...rest
	}: {
		children: Snippet;
		headline?: string;
		class?: string;
		contentClass?: string;
	} & SinglePaneProps = $props();

	const {
		base,
		content,
		headline: headlineCls
	} = $derived(singlePane({ centered, padding, full, background }));
</script>

<div class={base({ class: clsx(className) })} {...rest}>
	<div class={content({ class: clsx(contentClass) })}>
		{#if headline}
			<div class={headlineCls()}>{headline}</div>
		{/if}
		{@render children()}
	</div>
</div>
