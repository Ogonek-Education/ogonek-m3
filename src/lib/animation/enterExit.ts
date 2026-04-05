import type { TransitionConfig } from 'svelte/transition';

export const enterExit = (_: Node): TransitionConfig => {
	return {
		duration: 0
	};
};
