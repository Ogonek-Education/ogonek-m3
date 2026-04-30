import type { Snippet } from 'svelte';
import type { SelectRootProps } from 'bits-ui';
import type { SelectVariants } from './theme.js';
import type { IconProps } from '$lib/utils/index.js';

/**
 * Represents an option in the Select component.
 */
export type SelectOptionType = {
	/**
	 * The display name of the option.
	 */
	label?: string;

	/**
	 * The display name of the option (alias for label).
	 */
	name?: string;

	/**
	 * The internal value of the option.
	 */
	value: string;

	/**
	 * Whether the option is disabled.
	 */
	disabled?: boolean;
	[key: string]: unknown;
};

/**
 * Props for the Select component.
 */
export interface SelectProps<T extends string | string[]>
	extends SelectVariants,
		Omit<SelectRootProps, 'children' | 'value' | 'type' | 'items'> {
	/**
	 * The type of select.
	 */
	type?: 'single' | 'multiple';

	/**
	 * The value of the selected item(s).
	 */
	value?: T;

	/**
	 * Custom options or additional content for the select element.
	 */
	children?: Snippet;

	/**
	 * Array of options to display in the select.
	 */
	items?: SelectOptionType[];

	/**
	 * The floating label text.
	 */
	label?: string;

	/**
	 * The placeholder text displayed when no option is selected.
	 */
	placeholder?: string;

	/**
	 * Supporting text shown below the select.
	 */
	supportingText?: Snippet;

	/**
	 * Props for the leading icon.
	 */
	leadingIconProps?: IconProps;

	/**
	 * Additional CSS classes for the root element.
	 */
	class?: string;

	/**
	 * Additional CSS classes for the trigger element.
	 */
	triggerClass?: string;

	/**
	 * Additional CSS classes for the content element.
	 */
	contentClass?: string;

	/**
	 * Whether the select is in an error state.
	 */
	error?: boolean;

	/**
	 * Name for the hidden input (for form submission).
	 */
	name?: string;
}
