import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { DisplayVariants } from './theme.ts';

export type DisplayProps = DisplayVariants &
	HTMLAttributes<HTMLElement> & {
		/** Display text content. */
		children: Snippet;
	};
