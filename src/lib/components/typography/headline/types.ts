import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface HeadlineProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
}
