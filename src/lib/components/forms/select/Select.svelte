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
			<Select.Content class={cls.content({ class: contentClass })} sideOffset={4}>
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
										<Icon name="check" class="size-5" />
									{/if}
								{/snippet}
							</Select.Item>
						{/each}
					{/if}
					{@render children?.()}
				</Select.Viewport>
			</Select.Content>
		</Select.Portal>
	</div>

	{#if supportingText}
		<div class={cls.supportingText()}>
			<p>{@render supportingText()}</p>
		</div>
	{/if}
</Select.Root>
