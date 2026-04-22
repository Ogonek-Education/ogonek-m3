<script lang="ts">
	import clsx from 'clsx';
	import { headline } from './theme.js';
	import type { HeadlineProps } from './types.js';

	let {
		children,
		size = 'medium',
		emphasized,
		class: className,
		...restProps
	}: HeadlineProps = $props();

	let headlineCls = $derived(headline({ class: clsx(className), emphasized, size }));
</script>

<h2 {...restProps} class={headlineCls}>
	{@render children()}
</h2>
