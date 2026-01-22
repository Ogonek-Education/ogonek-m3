import type { HTMLInputAttributes } from 'svelte/elements';
import type { CheckboxM3Variants } from './theme.js';

export type CheckboxProps = CheckboxM3Variants &
	Omit<HTMLInputAttributes, 'children' | 'color' | 'type'> & {
		label?: string;
		supportingText?: string;
		indeterminate?: boolean;
		group?: unknown[];
		value?: string | number | boolean;
	};
