<script lang="ts">
	/**
	 * DateField is a text field that allows users to enter a date or pick it from a calendar.
	 *
	 * @see https://m3.material.io/components/date-pickers/guidelines
	 */
	import type { Snippet } from 'svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { Textfield } from '$lib/components/index.js';
	import DatePickerDocked from './DatePickerDocked.svelte';
	import { clickOutside, positionFloating } from '$lib/actions/index.js';
	import { enterExit } from '$lib/animation/enterExit.js';
	import { easeEmphasizedDecel, easeEmphasizedAccel } from '$lib/animation/easing.js';

	interface Props extends HTMLInputAttributes {
		/**
		 * The label for the date field.
		 * @default 'Дата'
		 */
		label?: string;
		/**
		 * The current value of the date field in ISO format (YYYY-MM-DD).
		 */
		value?: string;
		/**
		 * Whether the date field is required.
		 * @default false
		 */
		required?: boolean;
		/**
		 * Whether the date field is disabled.
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * Whether the date field is in an error state.
		 * @default false
		 */
		error?: boolean;
		/**
		 * The title for the date picker overlay.
		 * @default 'Pick date'
		 */
		datePickerTitle?: string;
		/**
		 * Supporting text snippet displayed below the field.
		 */
		supportingText?: Snippet;
	}

	let {
		label = 'Дата',
		value = $bindable(),
		required = false,
		disabled = false,
		error = false,
		datePickerTitle = 'Pick date',
		supportingText,
		...restProps
	}: Props = $props();

	const id = $props.id();
	const inputProps = restProps as Record<string, unknown>;

	let picker = $state(false);
	let anchorEl = $state<HTMLDivElement>();
</script>

<div
	class="relative w-full"
	bind:this={anchorEl}
	use:clickOutside={() => {
		picker = false;
	}}
>
	{#if supportingText}
		<Textfield
			{id}
			{label}
			{value}
			{error}
			{disabled}
			{supportingText}
			class="pointer-events-none"
			trailingIconProps={{ name: 'calendar_month' }}
			trailingOnClick={() => (picker = !picker)}
			{...inputProps}
		/>
	{:else}
		<Textfield
			{id}
			{label}
			{value}
			{error}
			{disabled}
			class="pointer-events-none"
			trailingIconProps={{ name: 'calendar_month' }}
			trailingOnClick={() => (picker = !picker)}
			{...inputProps}
		>
			{#snippet supportingText()}
				ДД-ММ-ГГГГ
			{/snippet}
		</Textfield>
	{/if}

	<button
		title="date-overlay"
		class="absolute inset-0 cursor-pointer"
		type="button"
		onclick={() => (picker = !picker)}
		data-cy="calendar-date-toggle"
	></button>

	{#if picker}
		<div
			class="picker"
			use:positionFloating={{ anchor: anchorEl, offset: 12 }}
			in:enterExit={{ duration: 200, easing: easeEmphasizedDecel, mode: 'scale' }}
			out:enterExit={{ duration: 150, easing: easeEmphasizedAccel, mode: 'scale' }}
			style="transform-origin: top center;"
		>
			<DatePickerDocked
				date={value}
				clearable={!required}
				close={() => (picker = false)}
				setDate={(d) => (value = d)}
			/>
		</div>
	{/if}
</div>

<style>
	.picker {
		z-index: 40;
		position: absolute;
		padding: 1px;
	}
</style>
