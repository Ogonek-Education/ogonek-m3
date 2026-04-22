import type { Snippet } from 'svelte';

export interface SideSheetProps {
	headline: string;
	children: Snippet;
	close: () => void;
}
