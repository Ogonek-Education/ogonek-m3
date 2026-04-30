<script lang="ts">
	/**
	 * Buttons help people take actions, such as sending an email, sharing a document, or liking a comment.
	 *
	 * - Filled: High emphasis
	 * - Tonal: Medium-high emphasis
	 * - Outlined: Medium emphasis
	 * - Text: Low emphasis
	 * - Elevated: High emphasis
	 *
	 * @see https://m3.material.io/components/all-buttons
	 */
	import type { ButtonMDProps } from './types.js';
	import { Icon } from '$lib/utils/index.js';
	import { button } from './theme.js';
	import clsx from 'clsx';
	import { LoadingIndicator } from '$lib/utils/index.js';
	import { Layer } from '$lib/utils/index.js';

	let {
		children,
		iconProps,
		variant = 'filled',
		color = 'default',
		size = 'md',
		shape = 'round',
		disabled,
		selected,
		formaction,
		loading,
		class: className,
		...restProps
	}: ButtonMDProps = $props();

	const { base, icon } = $derived(button({ variant, color, shape, size, selected }));
	const btnCls = $derived(base({ class: clsx(className) }));
</script>

{#if restProps.href !== undefined}
	<a {...restProps} class={btnCls}>
		{#if iconProps}
			<Icon class={icon()} {...iconProps} />
		{/if}
		<Layer />

		{@render children?.()}
	</a>
{:else}
	<button {disabled} {...restProps} class={btnCls} {formaction}>
		{#if iconProps}
			{#if loading}
				<LoadingIndicator container={variant === 'filled'} class={icon()} />
			{:else}
				<Icon class={icon()} {...iconProps} />
				{@render children?.()}
			{/if}
		{:else if loading}
			<LoadingIndicator container={variant === 'filled'} />
		{:else}
			{@render children?.()}
		{/if}
		<Layer />
	</button>
{/if}
