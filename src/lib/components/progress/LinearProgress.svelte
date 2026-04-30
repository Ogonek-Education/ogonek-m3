<script lang="ts">
	/**
	 * Material 3 Linear Progress Indicator.
	 *
	 * Linear progress indicators display progress along a fixed track.
	 *
	 * @see https://m3.material.io/components/progress-indicators/overview#linear-progress-indicators
	 */
	import clsx from 'clsx';
	import { tv } from 'tailwind-variants';

	let {
		percent,
		height = 4,
		class: className
	}: {
		/** The current progress percentage (0-100). */
		percent: number;
		/** The height of the progress bar in pixels. Defaults to 4. */
		height?: number;
		/** Additional CSS classes for the container. */
		class?: string;
	} = $props();

	const linearProgress = tv({
		slots: {
			container: 'flex gap-1',
			percent: 'bg-md-sys-color-primary rounded-full shrink',
			track: 'bg-md-sys-color-secondary-container rounded-full grow'
		}
	});

	const { container, percent: percentClass, track } = $derived(linearProgress());
</script>

<div
	class={container({ class: clsx(className) })}
	role="progressbar"
	style:height="{height / 16}rem"
>
	<div
		class={percentClass()}
		style:width="{percent}%"
	></div>
	<div class={track()}></div>
</div>
