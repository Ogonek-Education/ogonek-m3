<script lang="ts">
	import clsx from 'clsx';
	import type { SupportingPaneProps } from './types.js';
	import { supportingPane } from './theme.js';
	import { ButtonIcon } from '$lib/components/index.js';
	import { easeEmphasizedDecel } from '$lib/animation/index.js';
	import { fly } from 'svelte/transition';

	const {
		main,
		supporting,
		position = 'right',
		centered = false,
		class: className,
		mainClass,
		full = true,
		supportingClass,
		collapsible
	}: SupportingPaneProps = $props();

	let entered = $state(false);
	let supportingVisible = $state(true);
	const supportingId = 'supporting-pane';

	const {
		base,
		main: mainCls,
		supporting: supportingCls
	} = $derived(supportingPane({ position, centered, full }));
</script>

<div class={base({ class: clsx(className) })}>
	<div class={mainCls({ class: clsx('relative', mainClass) })}>
		{#if collapsible}
			<div class="top-3 right-3 z-10 hidden h-12 w-12 md:absolute md:block">
				<ButtonIcon
					triggerClass=""
					variant="text"
					tooltipContent={supportingVisible ? 'Скрыть панель' : 'Показать панель'}
					size="sm"
					iconProps={{
						name: supportingVisible ? 'right_panel_close' : 'right_panel_open'
					}}
					aria-controls={supportingId}
					aria-expanded={supportingVisible}
					aria-label={supportingVisible ? 'Hide supporting pane' : 'Show supporting pane'}
					onclick={() => {
						supportingVisible = !supportingVisible;
					}}
				/>
			</div>
		{/if}
		{@render main()}
	</div>
	{#if supportingVisible}
		<aside
			id={supportingId}
			class={supportingCls({
				class: clsx(supportingClass)
			})}
			data-entered={entered}
			data-position={position}
			in:fly={{ x: 100, easing: easeEmphasizedDecel }}
		>
			{@render supporting()}
		</aside>
	{/if}
</div>
