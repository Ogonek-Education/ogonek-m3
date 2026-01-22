<script lang="ts">
	import type { Snippet } from 'svelte';
	import { navbar } from './theme.js';

	const { children, fab }: { children: Snippet; fab?: Snippet } = $props();

	const { base, items, fab: fabCls } = $derived(navbar());
</script>

<div class={base()}>
	{#if fab}
		<div class={fabCls()}>
			{@render fab?.()}
		</div>
	{/if}
	<div class={items()}>
		{@render children()}
	</div>
</div>
