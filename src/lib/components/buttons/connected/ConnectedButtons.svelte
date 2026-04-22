<script lang="ts">
	import type { ConnectedButtonsProps } from './types.js';

	let { children, ...rest }: ConnectedButtonsProps = $props();
</script>

<div
	class="grid grid-flow-col auto-cols-fr gap-0.5 overflow-hidden rounded-full"
	{...rest}
>
	{@render children()}
</div>
