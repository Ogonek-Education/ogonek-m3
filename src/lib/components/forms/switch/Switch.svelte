<script lang="ts">
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
		if (!disabled) {
			startX = e.clientX;
		}
	}}
	ondragstart={(e) => {
		e.preventDefault();
	}}
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
		{#if icons != 'none'}
			<Icon
				class={icon({
					class: clsx(
						'checked-icon hidden peer-checked:flex peer-checked:scale-[0.667] peer-checked:opacity-100',
						checkedIconProps.class
					)
				})}
				{...checkedIconProps}
			/>
			{#if icons == 'both'}
				<Icon
					class={icon({
						class: clsx(
							'unchecked-icon flex scale-[0.667] opacity-100 peer-checked:hidden',
							uncheckedIconProps.class
						)
					})}
					{...uncheckedIconProps}
				/>
			{/if}
		{/if}
	</div>
	<div class={hover()}></div>
</div>
