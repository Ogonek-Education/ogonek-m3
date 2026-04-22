import type { Snippet } from 'svelte';
import type { IconProps } from '$lib/utils/icon/types.js';

export interface MenuItemProps {
	iconProps?: IconProps;
	disabled?: boolean;
	onclick?: () => void;
	children: Snippet;
}
