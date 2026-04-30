<script lang="ts">
	/**
	 * Material 3 Circular Progress Indicator.
	 *
	 * Circular progress indicators display progress by animating along an invisible circular track.
	 *
	 * @see https://m3.material.io/components/progress-indicators/overview#circular-progress-indicators
	 */
	import type { HTMLAttributes } from 'svelte/elements';

	let {
		percent,
		size = 48,
		thickness = 4,
		...extra
	}: {
		/** The current progress percentage (0-100). */
		percent: number;
		/** The size of the indicator in pixels. Defaults to 48. */
		size?: number;
		/** The thickness of the progress track in pixels. Defaults to 4. */
		thickness?: number;
	} & HTMLAttributes<SVGElement> = $props();

	let r = $derived(size / 2 - thickness / 2);
	let circumference = $derived(Math.PI * r * 2);
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 {size} {size}"
	xmlns="http://www.w3.org/2000/svg"
	class="rotate-[-90deg]"
	role="progressbar"
	{...extra}
>
	<circle
		cx={size / 2}
		cy={size / 2}
		{r}
		stroke="var(--color-md-sys-color-secondary-container)"
		stroke-width={thickness}
		fill="none"
	/>
	<circle
		cx={size / 2}
		cy={size / 2}
		{r}
		stroke="var(--color-md-sys-color-primary)"
		stroke-width={thickness}
		stroke-dasharray="{circumference} {circumference}"
		stroke-dashoffset={(percent / -100) * circumference + circumference}
		stroke-linecap="round"
		fill="none"
	/>
</svg>
