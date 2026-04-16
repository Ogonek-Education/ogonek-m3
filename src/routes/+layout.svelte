<script lang="ts">
	import { MaterialSymbolsProvider } from '$lib/index.js';
	import './layout.css';

	const { children } = $props();

	const icons = ['menu', 'house', 'circle'];
</script>

<MaterialSymbolsProvider extraIcons={icons} />

{@render children()}
