<script lang="ts">
	import type { CardProps } from './types.js';
	import { card } from './theme.js';
	import clsx from 'clsx';

	let {
		children,
		type = 'filled',
		class: className,
		href,
		hoverable = !!href,
		...restProps
	}: CardProps = $props();

	const { base } = $derived(card({ type, hoverable }));
</script>

{#if href}
	<a {href} class={base({ class: clsx(className) })} {...restProps}>
		{@render children?.()}
	</a>
{:else}
	<div class={base({ class: clsx(className) })} {...restProps}>
		{@render children?.()}
	</div>
{/if}
