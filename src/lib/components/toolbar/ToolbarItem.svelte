<script lang="ts">
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
