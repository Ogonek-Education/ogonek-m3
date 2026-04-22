<script lang="ts">
	import type { Snippet } from 'svelte';
	import ButtonIcon from '$lib/components/buttons/ButtonIcon.svelte';

	let {
		headline,
		children,
		close
	}: {
		headline: string;
		children: Snippet;
		close: () => void;
	} = $props();
</script>

<div class="flex flex-col">
	<div class="flex items-center justify-between p-6">
		<span class="md-sys-typescale-title-large text-md-sys-color-on-surface-variant">{headline}</span>
		<ButtonIcon variant="text" iconProps={{ name: 'close' }} onclick={close} />
	</div>
	{@render children()}
</div>
