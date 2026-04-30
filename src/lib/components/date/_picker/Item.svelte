<script lang="ts">
	/**
	 * Item represents a single day in the calendar picker.
	 * @internal
	 */
	import { calendarpicker } from '../theme.js';
	import { Layer } from '$lib/utils/index.js';

	interface Props {
		/** Whether the day is disabled. */
		disabled: boolean;
		/** Whether the day is today. */
		today: boolean;
		/** Whether the day is currently selected. */
		selected: boolean;
		/** The display label for the day. */
		label: string;
		/** Callback function when the day is clicked. */
		onclick: () => void;
	}

	let { disabled, today, selected, label, onclick }: Props = $props();

	const { item } = $derived(calendarpicker({ selected, today }));
</script>

<button type="button" class={item()} {disabled} {onclick} data-cy="calendar-picker-day">
	<Layer />
	{label}
</button>
