import type { IconProps } from '$lib/utils/index.js';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { SwitchVariants } from './theme.js';

export type SwitchProps = SwitchVariants &
	Omit<HTMLInputAttributes, 'size'> & {
		checked?: boolean;
		disabled?: boolean;
		checkedIconProps?: IconProps;
		uncheckedIconProps?: IconProps;
	};
