<script lang="ts">
	import { linear, trackOpacity } from './_wavy.js';

	let {
		width = 600,
		height = 10,
		thickness = 4,
		percent,
		class: className
	}: {
		width?: number;
		height?: number;
		thickness?: number;
		percent: number;
		class?: string;
	} = $props();

	let left = $derived(thickness * 0.5);
	let right = $derived(width - thickness * 0.5);
	let percentX = $derived((percent / 100) * (right - left) + left);
	let wavePath = $derived(linear(height / 2 - thickness / 2, height / 2, left, percentX, 0));
</script>

<svg viewBox="0 0 {width} {height}" class={className}>
	<path
		fill="none"
		stroke="var(--color-md-sys-color-primary)"
		stroke-width={thickness}
		stroke-linecap="round"
		d={wavePath}
	/>
	<line
		fill="none"
		stroke="var(--color-md-sys-color-secondary-container)"
		stroke-width={thickness}
		stroke-linecap="round"
		x1={percentX + thickness + 4}
		y1={height / 2}
		x2={right}
		y2={height / 2}
		opacity={trackOpacity(right, percentX + thickness + 4)}
	/>
</svg>
