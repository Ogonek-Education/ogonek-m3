import type { Snippet } from 'svelte';
import type { IconProps } from '$lib/utils/icon/types.js';

/**
 * Props for the MenuItem component.
 */
export interface MenuItemProps {
	/**
	 * Props for the leading icon.
	 */
	iconProps?: IconProps;
	/**
	 * Whether the menu item is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Callback function for the click event.
	 */
	onclick?: () => void;
	/**
	 * The content of the menu item, typically a label.
	 */
	children: Snippet;
}
