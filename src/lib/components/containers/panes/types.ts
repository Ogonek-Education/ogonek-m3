import type { DivAttrs } from '$lib/utils/index.js';
import type { Snippet } from 'svelte';
import type { SinglePaneVariants, SplitPaneVariants, SupportingPaneVariants } from './theme.js';

export type SplitPaneProps = SplitPaneVariants &
	DivAttrs & {
		/** Left pane content. */
		left: Snippet;
		/** Right pane content. */
		right: Snippet;
		/** Initial left pane width in px. */
		leftWidth?: number;
		/** Minimum left pane width in px. */
		minLeft?: number;
		/** Maximum left pane width in px. */
		maxLeft?: number;
		/** LocalStorage key used to persist the split width. */
		storageKey?: string;
		/** Whether to persist split width. */
		persist?: boolean;
	};

export type SupportingPaneProps = SupportingPaneVariants &
	DivAttrs & {
		/** Main pane content. */
		main: Snippet;
		/** Supporting pane content. */
		supporting: Snippet;
		/** Optional class for the main pane. */
		mainClass?: string;
		/** Optional class for the supporting pane. */
		supportingClass?: string;
	};

export type SinglePaneProps = SinglePaneVariants &
	DivAttrs & {
		/** Pane content. */
		children: Snippet;
		/** Optional headline shown above content. */
		headline?: string;
		/** Optional root class. */
		class?: string;
		/** Optional content container class. */
		contentClass?: string;
	};
