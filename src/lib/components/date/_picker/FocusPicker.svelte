<script lang="ts">
	import { Icon } from '$lib/utils/index.js';
	import { focuspicker } from '../theme.js';

	const conditionalScroll = (node: Element, shouldScroll: boolean) => {
		if (shouldScroll) node.scrollIntoView({ block: 'nearest' });
	};

	let {
		options
	}: {
		options: { name: string; selected: boolean; activate: () => void }[];
	} = $props();

	const { base } = focuspicker();
</script>

<div class={base()}>
	{#each options as { name, selected, activate }}
		{@const { item } = focuspicker({ selected })}
		<button type="button" class={item()} onclick={activate} use:conditionalScroll={selected}>
			{#if selected}
				<Icon class="ml-3 size-6" name="check" />
			{:else}
				<div class="ml-3 block size-6"></div>
			{/if}
			{name}
		</button>
	{/each}
</div>
