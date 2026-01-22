import type { Snippet } from 'svelte';
import type { HTMLSelectAttributes } from 'svelte/elements';
import type { SelectVariants } from './theme.js';

export type SelectOptionType<T> = {
	name: string | number;
	value: T;
	disabled?: boolean;
	[key: string]: unknown;
};

export interface SelectProps<T>
	extends SelectVariants, Omit<HTMLSelectAttributes, 'size' | 'disabled' | 'color'> {
	children?: Snippet;
	items?: SelectOptionType<T>[];
	elementRef?: HTMLSelectElement;
	disabled?: boolean;
	placeholder?: string;
}
