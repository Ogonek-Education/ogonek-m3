import type { DivAttrs, IconProps } from '$lib/utils/index.js';
import type { Snippet } from 'svelte';
import type { ToolbarItemVariants, ToolbarVariants } from './theme.js';

/**
 * Props for the Toolbar component.
 * Toolbars provide a container for primary actions and navigation at the bottom or top of a screen.
 */
export type ToolbarProps = ToolbarVariants &
	DivAttrs & {
		/** The main content of the toolbar, typically ToolbarItem components. */
		children?: Snippet;
		/** 
		 * An optional Floating Action Button (FAB) to be rendered within or next to the toolbar.
		 * Usually placed on the right side in bottom app bars.
		 */
		fab?: Snippet;
	};

/**
 * Props for the ToolbarItem component.
 * Represents an individual action or navigation item within a Toolbar.
 */
export type ToolbarItemProps = ToolbarItemVariants &
	DivAttrs & {
		/** 
		 * Configuration for the icon to be displayed in the item.
		 */
		icon: IconProps;
		/** 
		 * Optional text label displayed below or next to the icon.
		 */
		label?: string;
	};
