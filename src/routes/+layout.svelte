<script lang="ts">
	import { MaterialSymbolsProvider } from '$lib/index.js';
	import './layout.css';

	const { children } = $props();
</script>

<MaterialSymbolsProvider />

{@render children()}
