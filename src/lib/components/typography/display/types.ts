import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface DisplayProps extends HTMLAttributes<HTMLElement> {
	/** Display text content. */
	children: Snippet;
}
