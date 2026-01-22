import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { SnackBarVariants } from './theme.js';

export interface Toast {
	message?: string;
	showClose?: boolean;
	label?: string;
	static?: boolean;
}

export type SnackBarProps = SnackBarVariants &
	HTMLAttributes<HTMLDivElement> & {
		message?: string | Snippet;
		fixed?: boolean;
		callback?: () => void;
		label?: string;
		showClose?: boolean;
		static?: boolean;
	};
