<script lang="ts">
	import { search } from './theme.js';
	import clsx from 'clsx';
	import type { SearchProps } from './types.js';
	import { Icon } from '$lib/utils/index.js';
	import { fade } from 'svelte/transition';

	let {
		children,
		placeholder = 'Поиск',
		value = $bindable(),
		elementRef = $bindable(),
		trailingIconProps = { name: 'close' },
		leadingIconProps = { name: 'search' },
		class: className,
		trailingClick = () => {
			value = '';
		},
		...restProps
	}: SearchProps = $props();

	const { base, leadingIcon, trailingIcon, input } = $derived(search());
</script>

<label for="search" class={base({ class: clsx(className) })}>
	{#if leadingIconProps}
		<Icon {...leadingIconProps} class={leadingIcon()} />
	{/if}
	<input
		id="search"
		{...restProps}
		{placeholder}
		bind:this={elementRef}
		bind:value
		type="text"
		class={input()}
		oncancel={() => (value = undefined)}
	/>

	{#if trailingIconProps && value}
		<button onclick={trailingClick} class="z-10" in:fade>
			<Icon {...trailingIconProps} class={trailingIcon()} />
		</button>
	{/if}
</label>
