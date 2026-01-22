<script lang="ts">
	import { Icon, Layer } from '$lib/utils/index.js';
	import { tab } from './theme.js';
	import type { TabProps } from './types.js';

	const { iconProps, active, name, value, ...restProps }: TabProps = $props();

	const { base, icon, label: labelCls } = $derived(tab({ active }));
</script>

<a {...restProps} class={base()}>
	<Icon {...iconProps} class={icon()} />
	<Layer />
	<p class={labelCls()}>{name}</p>
</a>
