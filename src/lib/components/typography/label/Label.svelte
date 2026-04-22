<script lang="ts">
	import clsx from 'clsx';
	import { label } from './theme.js';
	import type { LabelProps } from './types.js';

	let {
		children,
		size = 'medium',
		emphasized,
		class: className,
		...restProps
	}: LabelProps = $props();
</script>

<p {...restProps} class={label({ class: clsx(className), emphasized, size })}>
	{@render children()}
</p>
