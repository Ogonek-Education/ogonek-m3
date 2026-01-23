import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { labelt } from './theme.js';

export type LabelVariants = VariantProps<typeof labelt>;

export type LabelTProps = LabelVariants &
	HTMLAttributes<HTMLElement> & {
		/** Label text content. */
		children: Snippet;
	};
