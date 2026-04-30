<script lang="ts">
	/**
	 * Material 3 Switch.
	 *
	 * Switches toggle the state of a single setting on or off.
	 *
	 * @see https://m3.material.io/components/switch/overview
	 */
	import clsx from 'clsx';
	import { Icon } from '$lib/utils/index.js';
	import { toggle } from './theme.js';
	import type { SwitchProps } from './types.js';

	// MUST BE WRAPPED IN A <label>
	let {
		checked = $bindable(false),
		disabled = false,
		checkedIconProps = { name: 'check' },
		uncheckedIconProps = { name: 'close' },
		icons = 'checked',
		class: className,
		...extra
	}: SwitchProps = $props();

	let startX: number | undefined = $state();
	const handleMouseUp = (e: MouseEvent) => {
		if (!startX) return;
		const distance = e.clientX - startX;
		if (distance > 16 && !checked) checked = true;
		if (distance < -16 && checked) checked = false;
		startX = undefined;
	};

	const { root, input, handle, hover, icon } = $derived(toggle({ icons }));
</script>

<svelte:window onpointerup={handleMouseUp} />
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class={root({ class: clsx(className) })}
	onpointerdown={(e) => {
		if (!disabled) startX = e.clientX;
	}}
	ondragstart={(e) => e.preventDefault()}
>
	<input
		type="checkbox"
		role="switch"
		{disabled}
		bind:checked
		{...extra}
		class={input()}
		onkeydown={(e) => {
			if (e.code == 'Enter') checked = !checked;
			if (e.code == 'ArrowLeft') checked = false;
			if (e.code == 'ArrowRight') checked = true;
		}}
	/>
	<div class={handle()}>
		{#if icons !== 'none'}
			<!-- checked icon: visible when checked -->
			<Icon
				class={icon({ class: 'group-has-[:checked]:opacity-100' })}
				{...checkedIconProps}
			/>
			{#if icons === 'both'}
				<!-- unchecked icon: visible when not checked -->
				<Icon
					class={icon({ class: 'opacity-100 group-has-[:checked]:opacity-0' })}
					{...uncheckedIconProps}
				/>
			{/if}
		{/if}
	</div>
	<div class={hover()}></div>
</div>
