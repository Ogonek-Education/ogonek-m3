<script lang="ts">
	/**
	 * Toolbar component acts as a container for actions and navigation, often used as a bottom app bar.
	 *
	 * @see https://m3.material.io/components/bottom-app-bar/overview
	 */
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
