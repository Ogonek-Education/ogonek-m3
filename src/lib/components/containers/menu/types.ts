import type { Snippet } from 'svelte';
import type { IconProps } from '$lib/utils/index.js';

/**
 * Represents an item in the menu.
 */
export type MenuDataItem = {
	/** The display label of the item. */
	label: string;
	/** The unique value of the item. */
	value: string;
	/** Optional supporting text shown below the label. */
	helper?: string;
	/** Whether the item is disabled. */
	disabled?: boolean;
	/** Callback function when the item is selected. */
	onselect?: (value: string) => void;
};

/**
 * Props for the Menu component.
 */
export type MenuProps = {
	/** Array of menu items to display. */
	items: MenuDataItem[];
	/** Accessible label for the menu trigger. */
	label?: string;
	/** The value of the currently selected item. */
	selected?: string;
	/**
	 * Alignment of the menu relative to the trigger.
	 * @default 'start'
	 */
	align?: 'start' | 'end';
	/**
	 * Prefix for data-cy attributes on menu items.
	 * @default 'menu-item'
	 */
	itemDataCyPrefix?: string;
	/** Data-cy attribute for testing. */
	dataCy?: string;
	/** Data-cy attribute for testing. */
	'data-cy'?: string;
	/**
	 * The visual style of the trigger element.
	 * @default 'button'
	 */
	triggerVariant?: 'button' | 'textfield';
	/** Label for the textfield trigger. */
	triggerLabel?: string;
	/** Value for the textfield trigger. */
	triggerValue?: any;
	/** Props for the leading icon of the trigger. */
	triggerLeadingIconProps?: IconProps;
	/** Props for the trailing icon of the trigger. */
	triggerTrailingIconProps?: IconProps;
	/** Whether the menu trigger is disabled. */
	disabled?: boolean;
	/** Whether the menu trigger is in an error state. */
	error?: boolean;
	/** Additional CSS classes for the trigger element. */
	triggerClass?: string;
	/** Supporting text shown below the textfield trigger. */
	supportingText?: string;
	/** Callback function when an item is selected. */
	onselect?: (value: string) => void;
};
