<script lang="ts" generics="T extends string | string[]">
	/**
	 * Material 3 Select.
	 *
	 * Select components allow users to choose one option from a list.
	 * Powered by bits-ui for accessibility and behavior.
	 *
	 * @see https://m3.material.io/components/menus/overview
	 */
	import { Select } from 'bits-ui';
	import { select as selectCls } from './theme.js';
	import { Icon } from '$lib/utils/index.js';
	import type { SelectProps } from './types.js';
	import clsx from 'clsx';
	import { enterExit } from '$lib/animation/enterExit.js';
	import { easeEmphasizedDecel } from '$lib/animation/easing.js';

	let {
		value = $bindable(),
		open = $bindable(false),
		disabled = false,
		items = [],
		label,
		placeholder,
		error = false,
		leadingIconProps,
		supportingText,
		class: className,
		triggerClass,
		contentClass,
		children,
		type = 'single',
		...restProps
	}: SelectProps<T> = $props();

	const cls = $derived(selectCls({ disabled, error }));

	// Determine if the label should be floating
	// It floats if it's open OR has a value
	const hasValue = $derived(
		value !== undefined &&
			value !== null &&
			(Array.isArray(value) ? value.length > 0 : value !== '')
	);
	const isFloating = $derived(open || hasValue);
</script>

<Select.Root
	bind:value={value as any}
	bind:open
	{disabled}
	type={type as any}
	{...restProps as any}
>
	<div class={cls.root({ class: className })}>
		<Select.Trigger class={cls.trigger({ class: triggerClass })}>
			{#if leadingIconProps}
				<Icon class={cls.leadingIcon()} {...leadingIconProps} />
			{/if}

			<div class={cls.inputWrapper()}>
				<Select.Value {placeholder} class={cls.value()} />
				{#if label}
					<span class={clsx(cls.label(), isFloating && cls.labelFloating())}>
						{label}
					</span>
				{/if}
			</div>

			<Icon name="arrow_drop_down" class={cls.trailingIcon()} />
		</Select.Trigger>

		<Select.Portal>
			<Select.Content forceMount class={cls.content({ class: contentClass })} sideOffset={4}>
				{#snippet child({ wrapperProps, props, open })}
					{#if open}
						<div {...wrapperProps}>
							<div
								{...props}
								class="max-w-sm min-w-64 rounded-xl bg-md-sys-color-surface-container-high ring-1 shadow-elevation-3 ring-md-sys-color-outline/40"
								transition:enterExit={{
									duration: 200,
									easing: easeEmphasizedDecel,
									mode: 'scale'
								}}
							>
								<Select.Viewport>
									{#if items && items.length > 0}
										{#each items as item}
											<Select.Item
												value={item.value}
												label={String(item.label ?? item.name ?? item.value)}
												disabled={item.disabled}
												class={cls.item()}
											>
												{#snippet children({ selected })}
													<span class="flex-1">{item.label ?? item.name ?? item.value}</span>
													{#if selected}
														<Icon aria-hidden="true" name="check" />
													{/if}
												{/snippet}
											</Select.Item>
										{/each}
									{/if}
									{@render children?.()}
								</Select.Viewport>
							</div>
						</div>
					{/if}
				{/snippet}
			</Select.Content>
		</Select.Portal>
	</div>

	{#if supportingText}
		<div class={cls.supportingText()}>
			<p>{@render supportingText()}</p>
		</div>
	{/if}
</Select.Root>
