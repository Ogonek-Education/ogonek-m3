<script lang="ts">
	import { toolbar } from './theme.js';
	import type { ToolbarProps } from './types.js';

	const { children, fab }: ToolbarProps = $props();

	const { base, items } = toolbar();
</script>

<div class={base()}>
	<div class={items()}>
		{@render children?.()}
	</div>
	{@render fab?.()}
</div>
