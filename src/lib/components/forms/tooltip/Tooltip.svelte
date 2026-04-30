<script lang="ts">
	import clsx from 'clsx';
	import Body from '../../typography/body/Body.svelte';
	import Title from '../../typography/title/Title.svelte';
	import { Layer } from '$lib/utils/index.js';
	import { tooltip } from './theme.js';
	import type { TooltipProps } from './types.js';
	import { Tooltip } from 'bits-ui';

	let {
		subhead,
		supportingText,
		children,
		trigger,
		triggerClass,
		delayDuration = 100,
		class: className,
		variant = 'snack',
		style = 'container',
		isOpen = $bindable(false),
		showArrow = false,
		triggerProps = {},
		contentProps = {},
		...restProps
	}: TooltipProps = $props();

	const {
		subhead: subheadCls,
		base,
		trigger: triggerCls,
		supportingText: supportingTextCls
	} = $derived(tooltip({ variant, style }));

	const baseCls = $derived(base({ class: clsx(className) }));

	/**
	 * ButtonIcons always have tooltips on, but not always with text
	 * This ensures we don't get ugly rectangles then
	 */
	const hasTooltipContent = $derived(
		Boolean(supportingText || subhead || (variant === 'rich' && children))
	);
</script>

<Tooltip.Root {...restProps} {delayDuration} bind:open={isOpen}>
	<Tooltip.Trigger {...triggerProps} class={triggerCls({ class: clsx(triggerClass) })}>
		{@render trigger?.()}
	</Tooltip.Trigger>
	<Tooltip.Portal>
		{#if showArrow}
			<Tooltip.Arrow />
		{/if}

		{#if hasTooltipContent}
			<Tooltip.Content {...contentProps} class={baseCls}>
				{#if variant === 'rich'}
					<Layer />
					{#if subhead}
						<Title class={subheadCls()}>
							{subhead}
						</Title>
					{/if}
					<Body class={supportingTextCls()}>
						{supportingText}
					</Body>
					{@render children?.()}
				{:else if supportingText}
					<Body class={supportingTextCls()}>
						{supportingText}
					</Body>
				{/if}
			</Tooltip.Content>
		{/if}
	</Tooltip.Portal>
</Tooltip.Root>
