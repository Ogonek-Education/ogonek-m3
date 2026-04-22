<script lang="ts">
	import type { MenuItemProps } from './types.js';
	import Icon from '$lib/utils/icon/Icon.svelte';
	import Layer from '$lib/utils/Layer.svelte';

	let { iconProps, disabled = false, onclick, children }: MenuItemProps = $props();
</script>

<button
	type="button"
	class="md-sys-typescale-label-large relative flex h-12 w-full cursor-pointer items-center gap-3 border-none bg-transparent px-3 text-md-sys-color-on-surface whitespace-nowrap disabled:cursor-default disabled:opacity-38"
	{disabled}
	{onclick}
>
	{#if iconProps}
		<Icon class="size-6 text-md-sys-color-on-surface-variant" {...iconProps} />
	{/if}
	{@render children()}
	<Layer />
</button>
