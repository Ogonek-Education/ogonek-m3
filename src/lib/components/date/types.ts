import type { DateValue } from '@internationalized/date';
import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

/**
 * Common props for Date components.
 * 
 * Note: We use DateValue from @internationalized/date.
 * To create a DateValue from a string, use:
 * ```ts
 * import { parseDate } from '@internationalized/date';
 * const date = parseDate('2023-10-27');
 * ```
 */
export interface BaseDateProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The label for the date field.
	 * @default 'Date'
	 */
	label?: string;
	/**
	 * Whether the field is required.
	 * @default false
	 */
	required?: boolean;
	/**
	 * Whether the field is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Whether the field is in an error state.
	 * @default false
	 */
	error?: boolean;
	/**
	 * Supporting text snippet displayed below the field.
	 */
	supportingText?: Snippet;
}

export interface DateFieldProps extends BaseDateProps {
	/**
	 * The current value of the date field.
	 */
	value?: DateValue | undefined;
}

export interface DatePickerProps extends DateFieldProps {
	/**
	 * The title for the date picker overlay.
	 * @default 'Select date'
	 */
	datePickerTitle?: string;
}

export interface CalendarProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * The currently selected date.
	 */
	value?: DateValue | undefined;
	/**
	 * Whether the calendar is disabled.
	 */
	disabled?: boolean;
	/**
	 * The minimum date that can be selected.
	 */
	minValue?: DateValue;
	/**
	 * The maximum date that can be selected.
	 */
	maxValue?: DateValue;
}
