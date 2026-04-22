import type { TransitionConfig } from 'svelte/transition';
import type { TransitionOptions } from './transitionTypes.js';
import { easeEmphasized } from './easing.js';

export const enterExit = (node: Element, options: TransitionOptions = {}): TransitionConfig => {
	void node;
	return {
		delay: options.delay ?? 0,
		duration: options.duration ?? 300,
		easing: options.easing ?? easeEmphasized,
		css: (t) => `opacity: ${t};`
	};
};
