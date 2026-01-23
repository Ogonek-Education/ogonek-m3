import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { HrVariants } from './theme.js';

export interface HrProps extends HrVariants, HTMLAttributes<HTMLElement> {
	/** Optional content (unused in Divider). */
	children?: Snippet;
}
