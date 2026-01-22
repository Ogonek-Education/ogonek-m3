import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface DisplayProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
}
