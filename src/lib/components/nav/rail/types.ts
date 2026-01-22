import type { IconProps } from '$lib/utils/index.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { RailItemVariants, RailVariants } from './theme.js';

export interface RailItemProps extends RailItemVariants, HTMLAttributes<HTMLAnchorElement> {
	iconProps: IconProps;
	badge?: number;
	external?: boolean;
	href: string;
	selected?: boolean;
	name: string;

	disabled?: boolean;
}

export type RailProps = RailVariants &
	HTMLAttributes<HTMLDivElement> & {
		children: Snippet;
		showHelp?: boolean;
		expandable?: boolean;
		fab?: Snippet;
	};
