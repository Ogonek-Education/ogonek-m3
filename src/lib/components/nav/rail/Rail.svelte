<script lang="ts">
	import { ButtonIcon, rail, type RailProps } from '$lib/components/index.js';
	import { clickOutside } from '$lib/actions/index.js';

	let {
		children,
		expandable = true,
		fab,
		collapsed = $bindable(true),
		class: className
	}: RailProps = $props();

	const expanded = $derived(!collapsed);
	const { base, items, ghost, scrim } = $derived(rail({ expanded }));
	const railBaseClass = $derived(`${base({ class: className ?? '' })} rail-base`);
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
	.rail-base {
		transition:
			width 500ms var(--md-sys-motion-timing-function-emphasized-decel),
			padding 500ms var(--md-sys-motion-timing-function-emphasized-decel),
			background-color 300ms var(--md-sys-motion-timing-function-emphasized-decel),
			border-radius 300ms var(--md-sys-motion-timing-function-emphasized-decel),
			box-shadow 300ms var(--md-sys-motion-timing-function-emphasized-decel);
	}

	.rail-items {
		transition:
			opacity 200ms var(--md-sys-motion-timing-function-emphasized-decel),
			transform 500ms var(--md-sys-motion-timing-function-emphasized-decel);
	}

	.rail-base[data-expanded='true'] .rail-items {
		opacity: 1;
		transform: translateX(0);
	}

	.rail-base[data-expanded='false'] .rail-items {
		opacity: 1;
		transform: translateX(0);
	}

	.rail-scrim {
		opacity: 0;
		pointer-events: none;
		transition: opacity 300ms var(--md-sys-motion-timing-function-emphasized-decel);
	}

	.rail-scrim[data-expanded='true'] {
		opacity: 1;
		pointer-events: auto;
	}
</style>
