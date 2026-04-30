<script lang="ts">
	/**
	 * FocusPicker is used to select a month or year from a list.
	 * @internal
	 */
	import { Icon, Layer } from '$lib/utils/index.js';
	import { focuspicker } from '../theme.js';

	const conditionalScroll = (node: Element, shouldScroll: boolean) => {
		if (shouldScroll) node.scrollIntoView({ block: 'nearest' });
	};

	interface Props {
		/** Array of options to display in the picker. */
		options: {
			/** Display name of the option. */
			name: string;
			/** Whether the option is currently selected. */
			selected: boolean;
			/** Callback function when the option is selected. */
			activate: () => void;
		}[];
	}

	let { options }: Props = $props();

	const { base } = focuspicker();
</script>

<div class={base()}>
	{#each options as { name, selected, activate }}
		{@const { item } = focuspicker({ selected })}
		<button type="button" class={item()} onclick={activate} use:conditionalScroll={selected}>
			<Layer />
			{#if selected}
				<Icon class="ml-3 size-6 text-[24px]" name="check" />
			{:else}
				<div class="ml-3 block size-6 text-[24px]"></div>
			{/if}
			{name}
		</button>
	{/each}
</div>
