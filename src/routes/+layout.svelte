<script lang="ts">
	import { App } from '$lib/index.js';
	import './layout.css';

	const { children } = $props();

	// These icons will be pre-loaded by the MaterialSymbolsProvider inside App
	const icons = [
		'menu',
		'house',
		'circle',
		'note_stack',
		'assignment',
		'book',
		'notifications',
		'mail',
		'chat',
		'settings',
		'search',
		'favorite',
		'share',
		'delete',
		'edit',
		'add',
		'info',
		'help',
		'warning',
		'check',
		'calendar_month',
		'person',
		'close'
	];
</script>

<App iconProviderProps={{ extraIcons: icons }}>
	{@render children()}
</App>
