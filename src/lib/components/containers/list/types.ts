import type { ButtonAttrs, DivAttrs, NotButton } from '$lib/utils/index.js';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLLabelAttributes } from 'svelte/elements';

export type ActionProps =
	| DivAttrs
	| ButtonAttrs
	| ({ label: true } & NotButton<HTMLLabelAttributes>)
	| ({ href: string | null } & NotButton<HTMLAnchorAttributes>);

export type ListitemProps = {
	/** Optional leading slot (icon/avatar). */
	leading?: Snippet;
	/** Marks item as selected. */
	selected?: boolean;
	/** Optional overline text. */
	overline?: string | null;
	/** Primary headline text. */
	headline?: string;
	/** Supporting text content. */
	supporting?: string | null;
	/** Optional trailing slot. */
	trailing?: Snippet;
	/** Number of text lines to reserve. */
	lines?: 1 | 2 | 3;
	/** Render as child element instead of default root. */
	asChild?: boolean;
} & ActionProps;
