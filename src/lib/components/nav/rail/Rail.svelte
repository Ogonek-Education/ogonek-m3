<script lang="ts">
	import { clickOutside } from '$lib/actions/index.js';
	import clsx from 'clsx';
	import type { RailProps } from './types.ts';
	import ButtonIcon from '$lib/components/buttons/ButtonIcon.svelte';
	import { rail } from './theme.ts';

	let {
		children,
		rounded = false,
		expandable = true,
		fab,
		collapsed = $bindable(true),
		anchor = 'viewport',
		class: className
	}: RailProps = $props();

	const expanded = $derived(!collapsed);
	const { base, items, ghost, scrim } = $derived(rail({ expanded, anchor, rounded }));
	const railBaseClass = $derived(`${base({ class: clsx(className) })} rail-base`);
	const toggleClass = $derived(collapsed ? 'cursor-e-resize' : 'cursor-w-resize');
</script>

<div class={ghost()}></div>

<div class={`${scrim()} rail-scrim`} data-expanded={expanded}></div>
<div
	class={railBaseClass}
	data-expanded={expanded}
	use:clickOutside={() => {
		if (expanded) collapsed = true;
	}}
>
	{#if expandable}
		<ButtonIcon
			type="button"
			tooltipContent={collapsed ? 'Открыть' : 'Закрыть'}
			iconProps={{ name: `${collapsed ? 'menu' : 'menu_open'}` }}
			class={toggleClass}
			onclick={() => (collapsed = !collapsed)}
		/>
	{/if}

	{@render fab?.()}

	<div class={`${items()} rail-items`}>
		{@render children?.()}
	</div>
</div>

<style>
	.rail-scrim {
		opacity: 0;
		pointer-events: none;
	}

	.rail-scrim[data-expanded='true'] {
		opacity: 1;
		pointer-events: auto;
	}
</style>
