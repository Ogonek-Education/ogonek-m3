import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { StackVariants } from './theme.js';

export type StackProps = StackVariants &
	HTMLAttributes<HTMLDivElement> & {
		/** Stack content. */
		children: Snippet;
	};
