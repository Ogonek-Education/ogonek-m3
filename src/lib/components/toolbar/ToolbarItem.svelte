<script lang="ts">
	/**
	 * ToolbarItem represents an individual action or navigation element within a Toolbar.
	 * It typically consists of an icon and an optional label.
	 */
	import { Icon } from '$lib/utils/index.js';

	import { toolbaritem } from './theme.js';
	import type { ToolbarItemProps } from './types.js';

	const { icon, label }: ToolbarItemProps = $props();

	const { base, icon: iconCls } = $derived(toolbaritem());
</script>

<div class={base()}>
	<Icon {...icon} class={iconCls()} />
	{#if label}
		<p>{label}</p>
	{/if}
</div>
