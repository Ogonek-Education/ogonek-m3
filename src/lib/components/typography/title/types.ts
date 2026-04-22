import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { TitleVariants } from './theme.ts';

export type TitleProps = TitleVariants &
	HTMLAttributes<HTMLElement> & {
		/** Title text content. */
		children: Snippet;
	};
