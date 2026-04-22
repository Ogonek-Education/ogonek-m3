import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { label } from './theme.js';

export type LabelVariants = VariantProps<typeof label>;

export type LabelProps = LabelVariants &
	HTMLAttributes<HTMLElement> & {
		/** Label text content. */
		children: Snippet;
	};
