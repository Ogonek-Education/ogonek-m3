<script lang="ts">
	/**
	 * The core App wrapper that gives default backgrounds and sets up tooltips and icons
	 */
	import { MaterialSymbolsProvider } from '$lib/utils/index.js';
	import { Tooltip } from 'bits-ui';
	import { app } from './theme.ts';
	import type { AppProps } from './types.ts';

	const { children, class: className, iconProviderProps = {}, ...restProps }: AppProps = $props();

	const baseCls = $derived(app({ class: className }));
</script>

<MaterialSymbolsProvider {...iconProviderProps} />
<Tooltip.Provider>
	<div class={baseCls} {...restProps}>
		{@render children()}
	</div>
</Tooltip.Provider>
