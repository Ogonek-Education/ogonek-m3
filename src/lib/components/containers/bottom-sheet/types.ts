import type { Snippet } from 'svelte';

export interface BottomSheetProps {
	children: Snippet;
	close: (reason: 'esc' | 'click' | 'low') => void;
}
