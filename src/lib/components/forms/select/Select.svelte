<script lang="ts" generics="T">
	/**
	 * Material 3 Select.
	 *
	 * Select components (implemented here via native select) allow users to choose one option from a list.
	 *
	 * @see https://m3.material.io/components/menus/overview
	 */
	import { select as selectCls } from './theme.js';
	import clsx from 'clsx';
	import type { SelectProps } from './types.js';

	let {
		children,
		items,
		value = $bindable(),
		disabled = false,
		size = 'md',
		elementRef = $bindable(),
		placeholder = 'Выберите вариант ...',
		class: className,
		...restProps
	}: SelectProps<T> = $props();

	const { base } = $derived(selectCls({ disabled, size }));
</script>

<select
	{disabled}
	{...restProps}
	bind:value
	bind:this={elementRef}
	class={base({ class: clsx(className) })}
>
	{#if placeholder}
		<option disabled selected={value === '' || value === undefined} value="">{placeholder}</option>
	{/if}

	{#if items}
		{#each items as item}
			<option value={item.value} disabled={item.disabled}>{item.name}</option>
		{/each}
	{/if}

	{#if children}
		{@render children()}
	{/if}
</select>
