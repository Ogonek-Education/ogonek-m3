<script lang="ts">
	import clsx from 'clsx';

	let { children, class: className = '' } = $props();
</script>

<div
	class={clsx(
		className,
		'border-primary padding-default gap-narrow grid max-h-max w-full shrink rounded-none border-x-0 px-0 md:rounded-2xl md:border-x-2 md:px-2.5'
	)}
>
	{@render children()}
</div>
