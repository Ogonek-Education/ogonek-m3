<script lang="ts">
	import type { IconProps } from './types.js';

	const {
		name,
		fill = 0,
		wght = 400,
		grad = 0,
		opsz = 24,
		class: className = 'size-6'
	}: IconProps = $props();
</script>

<div class={className}>
	<span
		class="material-symbols-rounded"
		style="font-size: 1em; font-variation-settings: 'FILL' {fill}, 'wght' {wght}, 'GRAD' {grad}, 'opsz' {opsz};"
	>{name}</span>
</div>
