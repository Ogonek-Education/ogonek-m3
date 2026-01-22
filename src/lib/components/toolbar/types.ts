import type { DivAttrs, IconProps } from '$lib/utils/index.js';
import type { Snippet } from 'svelte';
import type { ToolbarItemVariants, ToolbarVariants } from './theme.js';

export type ToolbarProps = ToolbarVariants &
	DivAttrs & {
		children?: Snippet;
		fab?: Snippet;
	};

export type ToolbarItemProps = ToolbarItemVariants &
	DivAttrs & {
		icon: IconProps;
		label?: string;
	};
