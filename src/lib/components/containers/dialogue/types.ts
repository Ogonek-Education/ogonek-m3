import type { Snippet } from 'svelte';
import type { DialogueVariants } from './theme.js';

export type DialogueProps = DialogueVariants & {
	toggle: () => void;
	withState?: boolean;
	supportingText: string;
	headline?: string;
	confirmText: string;
	children?: Snippet;
	confirmAction?: string;
};
