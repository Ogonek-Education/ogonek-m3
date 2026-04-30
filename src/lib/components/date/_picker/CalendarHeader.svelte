<script lang="ts">
	/**
	 * CalendarHeader displays the controls to navigate months and years.
	 * @internal
	 */
	import { Icon } from '$lib/utils/index.js';
	import { headerpicker } from '../theme.js';

	interface Props {
		/** The current view of the date picker. */
		currentView: 'calendar' | 'year' | 'month';
		/** The currently focused month (0-11). */
		focusedMonth: number;
		/** The currently focused year. */
		focusedYear: number;
		/** The earliest year selectable. */
		startYear: number;
		/** The latest year selectable. */
		endYear: number;
	}

	let {
		currentView = $bindable(),
		focusedMonth = $bindable(),
		focusedYear = $bindable(),
		startYear,
		endYear
	}: Props = $props();

	const yearClick = () => (currentView = currentView == 'calendar' ? 'year' : 'calendar');
	const monthClick = () => (currentView = currentView == 'calendar' ? 'month' : 'calendar');
	const getShortMonth = (month: number) =>
		new Date(0, month).toLocaleDateString(undefined, { month: 'short' });

	const { base, button, centralButton, icon, buttonWrapper } = headerpicker();
</script>

<div class={base()}>
	<div class={buttonWrapper()}>
		<button
			type="button"
			class={button()}
			onclick={() => (focusedMonth = (focusedMonth - 1 + 12) % 12)}
		>
			<Icon class={icon()} name="chevron_left" />
		</button>
		<button
			type="button"
			class={centralButton()}
			onclick={monthClick}
			disabled={currentView == 'year'}
		>
			{getShortMonth(focusedMonth)}
			<Icon class={icon()} name="arrow_drop_down" />
		</button>
		<button type="button" class={button()} onclick={() => (focusedMonth = (focusedMonth + 1) % 12)}>
			<Icon class={icon()} name="chevron_right" />
		</button>
	</div>
	<div class={buttonWrapper()}>
		<button
			type="button"
			class={button()}
			disabled={focusedYear <= startYear}
			onclick={() => focusedYear--}
		>
			<Icon class={icon()} name="chevron_left" />
		</button>
		<button
			type="button"
			class={centralButton()}
			onclick={yearClick}
			disabled={currentView == 'month'}
		>
			{focusedYear}
			<Icon class={icon()} name="arrow_drop_down" />
		</button>
		<button
			type="button"
			class={button()}
			disabled={focusedYear >= endYear}
			onclick={() => focusedYear++}
		>
			<Icon class={icon()} name="chevron_right" />
		</button>
	</div>
</div>
