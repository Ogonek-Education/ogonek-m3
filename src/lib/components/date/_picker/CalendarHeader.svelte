<script lang="ts">
	import { Icon } from '$lib/utils/index.js';
	import { headerpicker } from '../theme.js';

	let {
		currentView = $bindable(),
		focusedMonth = $bindable(),
		focusedYear = $bindable(),
		startYear,
		endYear
	}: {
		currentView: 'calendar' | 'year' | 'month';
		focusedMonth: number;
		focusedYear: number;
		startYear: number;
		endYear: number;
	} = $props();

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
