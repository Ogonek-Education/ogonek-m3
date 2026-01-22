import type { cubicOut } from 'svelte/easing';

export interface TransitionOptions {
	delay?: number;
	duration?: number;
	easing?: typeof cubicOut;
}
