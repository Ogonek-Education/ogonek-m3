import type { HTMLInputAttributes } from 'svelte/elements';
import type { CheckboxM3Variants } from './theme.js';

export type CheckboxProps = CheckboxM3Variants &
	Omit<HTMLInputAttributes, 'children' | 'color' | 'type'> & {
		/**
		 * The text label for the checkbox.
		 */
		label?: string;
		/**
		 * Supporting text displayed below the label.
		 */
		supportingText?: string;
		/**
		 * Whether the checkbox is in an indeterminate state.
		 */
		indeterminate?: boolean;
		/**
		 * Array for grouping multiple checkboxes.
		 */
		group?: unknown[];
		/**
		 * The value associated with the checkbox.
		 */
		value?: string | number | boolean;
		/**
		 * Whether the checkbox is checked.
		 * @bindable
		 */
		checked?: boolean;
		/**
		 * Whether the checkbox is disabled.
		 */
		disabled?: boolean;
		/**
		 * Whether the checkbox is in an error state.
		 */
		error?: boolean;
		/**
		 * Vertical alignment of the checkbox relative to its label.
		 * @default 'start'
		 */
		align?: 'start' | 'center';
	};
