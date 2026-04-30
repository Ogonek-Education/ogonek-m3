import type { IconProps } from '$lib/utils/index.js';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { TabVariants } from './theme.js';

/**
 * Props for the Tab component.
 */
export type TabProps = TabVariants &
	HTMLAnchorAttributes & {
		/** Props passed to the Icon component. */
		iconProps: IconProps;
		/** The text label for the tab. */
		name: string;
		/** The unique value identifier for this tab. */
		value: string;
		/** The URL this tab points to. */
		href: string;
		/** Whether the tab is currently active. */
		active?: boolean;
	};

/**
 * Props for the TabHolder component.
 */
export type TabHolderProps = HTMLAnchorAttributes & {
	/** The value of the currently selected tab. */
	tab: string;
	/** Whether to use the secondary tab style. */
	secondary?: boolean;
	/** The list of tab items to display. */
	items: TabProps[];
};
