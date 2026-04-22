import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export interface ConnectedButtonsProps extends HTMLAttributes<HTMLDivElement> {
	children: Snippet;
}
