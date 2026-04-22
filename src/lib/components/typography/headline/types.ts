import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { HeadlineVariants } from './theme.ts';

export type HeadlineProps = HeadlineVariants &
	HTMLAttributes<HTMLElement> & {
		/** Headline text content. */
		children: Snippet;
	};
