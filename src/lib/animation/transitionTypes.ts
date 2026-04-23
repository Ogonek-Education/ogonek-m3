import type { cubicOut } from 'svelte/easing';

export type TransitionMode = 'fade' | 'scale' | 'slide-up' | 'dialog';

export interface TransitionOptions {
	delay?: number;
	duration?: number;
	easing?: typeof cubicOut;
	mode?: TransitionMode;
}
