<script lang="ts">
	import type { IconProps } from '$lib/utils/index.js';
	import clsx from 'clsx';
	import { textfield } from '../forms/index.ts';
	import Icon from '$lib/utils/icon/Icon.svelte';
	import Button from '../buttons/Button.svelte';
	import { enterExit } from '$lib/animation/enterExit.js';
	import { clickOutside } from '$lib/actions/clickOutside.js';

	type MenuItem = {
		label: string;
		value: string;
		helper?: string;
		disabled?: boolean;
		onselect?: (item: unknown) => void;
	};

	type BaseProps = {
		items: MenuItem[];
		label?: string;
		selected: string;
		align?: 'start' | 'end';
		maxHeight?: number;
		itemDataCyPrefix?: string;
		dataCy?: string;
		'data-cy'?: string;
		triggerVariant?: 'button' | 'textfield';
		triggerLabel?: string;
		triggerValue?: any;
		triggerLeadingIconProps?: IconProps;
		triggerTrailingIconProps?: IconProps;
		disabled?: boolean;
		error?: boolean;
		triggerClass?: string;
		['data-cy']?: string;
		onselect: (item: unknown) => void;
	};

	let {
		items = [],
		label = 'Open menu',
		selected,
		align: alignProp = 'start',
		maxHeight = 320,
		onselect,
		itemDataCyPrefix = 'menu-item',
		triggerVariant = 'button',
		triggerLabel,
		triggerValue,
		triggerLeadingIconProps,
		triggerTrailingIconProps,
		disabled = false,
		error = false,
		dataCy,
		'data-cy': dataCyAttr,
		triggerClass
	}: BaseProps = $props();

	let open = $state(false);
	let coords = $state({ top: 0, left: 0, originX: 'left', originY: 'top' });

	const margin = 8;

	let anchorRect: DOMRect;

	const toDataCy = (value: string) => value.replace(/[^a-zA-Z0-9-_]+/g, '-');

	const triggerDataCy = $derived(dataCy ?? dataCyAttr);
	const textfieldCls = $derived(textfield({ disabled, error }));
	const wrapperClass = $derived(
		triggerVariant === 'textfield' ? 'relative w-full' : 'relative inline-block'
	);
</script>

<div class={wrapperClass} use:clickOutside={() => (open = false)}>
	{#if triggerVariant === 'textfield'}
		<div class="relative w-full">
			<button
				type="button"
				aria-haspopup="menu"
				aria-expanded={open}
				{disabled}
				data-cy={triggerDataCy}
				class={textfieldCls.base({ class: clsx('w-full', triggerClass) })}
				onclick={(e: MouseEvent) => {
					const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
					anchorRect = rect;
					open = !open;
				}}
			>
				{#if triggerLeadingIconProps}
					<Icon class={textfieldCls.leadingIcon()} {...triggerLeadingIconProps} />
				{/if}
				<div class={textfieldCls.inputWrapper()}>
					<span
						class={clsx(textfieldCls.input(), 'flex h-full items-center truncate pt-0 text-left')}
					>
						{triggerValue ?? label}
					</span>
					{#if triggerLabel}
						<span
							class={clsx(
								textfieldCls.label(),
								'top-1.5 -translate-y-1 md-sys-typescale-body-small'
							)}
						>
							{triggerLabel}
						</span>
					{/if}
				</div>
				{#if triggerTrailingIconProps}
					<Icon class={textfieldCls.trailingIcon()} {...triggerTrailingIconProps} />
				{/if}
			</button>

			<p
				class=" flex justify-between px-4 pt-1
      md-sys-typescale-body-small
      text-md-sys-color-on-surface-variant
      peer-invalid:text-md-sys-color-error"
			>
				У кого есть доступ к контенту
			</p>
		</div>
	{:else}
		<Button
			variant="filled"
			aria-haspopup="menu"
			aria-expanded={open}
			{disabled}
			data-cy={triggerDataCy}
			class={clsx('w-max', triggerClass)}
			type="button"
			onclick={(e: MouseEvent) => {
				const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
				anchorRect = rect;
				open = !open;
			}}
		>
			{label}
		</Button>
	{/if}

	{#if open}
		<div
			class="fixed z-50 max-w-sm min-w-64 overflow-auto rounded-xl bg-md-sys-color-surface-container-high ring-1 shadow-elevation-3 ring-md-sys-color-outline/40"
			style:top={`${coords.top}px`}
			style:left={`${coords.left}px`}
			style:transform-origin={`${coords.originY} ${coords.originX}`}
			style:max-height={`${maxHeight}px`}
			role="menu"
			tabindex="-1"
			transition:enterExit
			{@attach (menu) => {
				const menuRect = menu.getBoundingClientRect();

				let left = alignProp === 'end' ? anchorRect.right - menuRect.width : anchorRect.left;
				let top = anchorRect.bottom + 4;
				let originX: 'left' | 'right' = alignProp === 'end' ? 'right' : 'left';
				let originY: 'top' | 'bottom' = 'top';

				if (left + menuRect.width > window.innerWidth - margin) {
					left = Math.max(margin, window.innerWidth - menuRect.width - margin);
					originX = 'right';
				}
				if (left < margin) {
					left = margin;
					originX = 'left';
				}

				if (top + menuRect.height > window.innerHeight - margin) {
					const openAbove = anchorRect.top - menuRect.height - 4;
					if (openAbove >= margin) {
						top = openAbove;
						originY = 'bottom';
					} else {
						top = Math.max(margin, window.innerHeight - menuRect.height - margin);
					}
				}
				if (top < margin) {
					top = margin;
				}

				coords = { top, left, originX, originY };
			}}
		>
			{#each items as item (item.value)}
				<button
					type="button"
					class="flex w-full items-start gap-3 px-4 py-2 text-left transition hover:bg-md-sys-color-on-surface/8 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-md-sys-color-primary disabled:cursor-not-allowed disabled:opacity-60"
					class:bg-md-sys-color-secondary-container={item.value === selected}
					role="menuitemradio"
					aria-checked={item.value === selected}
					aria-disabled={item.disabled}
					data-cy={`${itemDataCyPrefix}-${toDataCy(item.value)}`}
					onclick={() => {
						onselect(item.value);
						open = false;
					}}
					disabled={item.disabled}
				>
					<div class="flex flex-1 flex-col gap-1">
						<span class="md-sys-typescale-body-large text-md-sys-color-on-surface">
							{item.label}
						</span>
						{#if item.helper}
							<span class="md-sys-typescale-body-medium text-md-sys-color-on-surface-variant">
								{item.helper}
							</span>
						{/if}
					</div>
					{#if item.value === selected}
						<Icon aria-hidden="true" name="check" />
					{/if}
				</button>
			{/each}
		</div>
	{/if}
</div>
