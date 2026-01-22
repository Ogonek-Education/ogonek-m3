import type { AppbarVariants } from '$lib/components/index.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type AppBarProps = AppbarVariants &
	HTMLAttributes<HTMLElementTagNameMap['nav']> & {
		children?: Snippet;
		title: string;
		subtitle?: string;
		leading?: Snippet;
		trailing?: Snippet;
		showBack?: boolean;
	};
