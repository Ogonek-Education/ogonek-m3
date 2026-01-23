import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { KbdVariants } from './theme.js';

export type KbdProps = HTMLAttributes<HTMLElement> &
	KbdVariants & {
		/** Keyboard hint content. */
		children: Snippet;
	};
