<script lang="ts">
	import type { ButtonIconProps } from './types.js';
	import { Icon } from '$lib/utils/index.js';
	import { buttonIcon } from './theme.js';
	import clsx from 'clsx';
	import { LoadingIndicator } from '$lib/utils/index.js';
	import { Layer } from '$lib/utils/index.js';
	import { Tooltip } from '$lib/components/index.js';

	let {
		children,
		iconProps,
		variant = 'text',
		color = 'default',
		size = 'md',
		shape = 'round',
		variation = 'default',
		triggerClass = '',
		triggerPlacement = 'top',
		disabled,
		formaction,
		tooltipContent,
		onclick,
		loading,
		width = 'default',
		class: className,
		...restProps
	}: ButtonIconProps = $props();

	const { base, icon } = $derived(
		buttonIcon({
			variant,
			color,
			shape,
			variation,
			size,
			width
		})
	);

	const btnCls = $derived(base({ class: clsx(className) }));
</script>

<Tooltip
	{triggerClass}
	placement={triggerPlacement}
	variant="snack"
	supportingText={tooltipContent}
>
	{#snippet trigger()}
		{#if restProps.href !== undefined}
			<a {...restProps} class={btnCls}>
				<Icon class={icon()} {...iconProps} />
				<Layer />
			</a>
		{:else}
			<button {disabled} {onclick} {...restProps} class={btnCls} {formaction}>
				{#if loading}
					<LoadingIndicator />
				{:else}
					<Icon class={icon()} {...iconProps} />
					<Layer />
				{/if}
			</button>
		{/if}
	{/snippet}
</Tooltip>
