import type { Snippet } from 'svelte';
import type { DialogueVariants } from './theme.js';

export type DialogueProps = DialogueVariants & {
	/** Toggle handler for closing the dialogue. */
	toggle: () => void;
	/** When true, uses history state to close. */
	withState?: boolean;
	/** Supporting text content. */
	supportingText: string;
	/** Optional headline. */
	headline?: string;
	/** Confirm button label. */
	confirmText: string;
	/** Optional additional content. */
	children?: Snippet;
	/** Optional form action for the confirm button. */
	confirmAction?: string;
};
