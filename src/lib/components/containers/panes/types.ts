import type { DivAttrs } from '$lib/utils/index.js';
import type { Snippet } from 'svelte';
import type { SinglePaneVariants, SplitPaneVariants, SupportingPaneVariants } from './theme.js';

export type SplitPaneProps = SplitPaneVariants &
	DivAttrs & {
		left: Snippet;
		right: Snippet;
		leftWidth?: number;
		minLeft?: number;
		maxLeft?: number;
		storageKey?: string;
		persist?: boolean;
	};

export type SupportingPaneProps = SupportingPaneVariants &
	DivAttrs & {
		main: Snippet;
		supporting: Snippet;
		mainClass?: string;
		supportingClass?: string;
	};

export type SinglePaneProps = SinglePaneVariants &
	DivAttrs & {
		children: Snippet;
		headline?: string;
		class?: string;
		contentClass?: string;
	};
