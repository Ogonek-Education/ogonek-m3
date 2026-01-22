import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import type { card } from './theme.js';

export type CardVariants = VariantProps<typeof card>;

export type CardProps = CardVariants &
	HTMLAttributes<HTMLDivElement> &
	HTMLAnchorAttributes & {
		children: Snippet;
		href?: string;
	};
