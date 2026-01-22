import type { IconProps } from '$lib/utils/index.js';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { TabVariants } from './theme.js';

export type TabProps = TabVariants &
	HTMLAnchorAttributes & {
		iconProps: IconProps;
		name: string;
		value: string;
		href: string;
	};

export type TabHolderProps = HTMLAnchorAttributes & {
	tab: string;
	secondary?: boolean;
	items: TabProps[];
};
