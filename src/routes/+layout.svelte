<script lang="ts">
	import { MaterialSymbolsProvider } from '$lib/index.js';
	import './layout.css';

	const { children } = $props();

	const icons = [
		'menu',
		'house',
		'circle',
		'note_stack',
		'assignment',
		'book',
		'notifications',
		'mail',
		'chat'
	];
</script>

<MaterialSymbolsProvider extraIcons={icons} />

{@render children()}
