import type { Snippet } from 'svelte';
import type { HTMLSelectAttributes } from 'svelte/elements';
import type { SelectVariants } from './theme.js';

/**
 * Represents an option in the Select component.
 */
export type SelectOptionType<T> = {
	/**
	 * The display name of the option.
	 */
	name: string | number;

	/**
	 * The internal value of the option.
	 */
	value: T;

	/**
	 * Whether the option is disabled.
	 */
	disabled?: boolean;
	[key: string]: unknown;
};

/**
 * Props for the Select component.
 */
export interface SelectProps<T>
	extends SelectVariants,
		Omit<HTMLSelectAttributes, 'size' | 'disabled' | 'color'> {
	/**
	 * Custom options or additional content for the select element.
	 */
	children?: Snippet;

	/**
	 * Array of options to display in the select.
	 */
	items?: SelectOptionType<T>[];

	/**
	 * Reference to the HTML select element.
	 */
	elementRef?: HTMLSelectElement;

	/**
	 * Whether the select is disabled.
	 */
	disabled?: boolean;

	/**
	 * The placeholder text displayed when no option is selected.
	 */
	placeholder?: string;
}
