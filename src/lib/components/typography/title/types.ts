import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface TitleProps extends HTMLAttributes<HTMLElement> {
	/** Title text content. */
	children: Snippet;
}
