import type { AnchorButtonAttributes, IconProps } from '$lib/utils/index.js';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
import type {
	ButtonGroupVariants,
	ButtonIconVariants,
	ButtonMDVariants,
	FABMenuItemVariants,
	FABMenuVariants,
	FABVariants
} from './theme.js';
import type { Placement } from '@floating-ui/dom';

export interface ButtonGroupProps extends ButtonGroupVariants, HTMLAttributes<HTMLDivElement> {
	/** ButtonGroup content. */
	children: Snippet;
	/** Disables all buttons in the group. */
	disabled?: boolean;
}

export type HTMLButtonOrAnchorAttributes = HTMLButtonAttributes & HTMLAnchorAttributes;

export type ButtonMDProps = ButtonMDVariants &
	AnchorButtonAttributes & {
		/** Disables the button. */
		disabled?: boolean;
		/** Marks the button as selected (used for toggle-like UI). */
		selected?: boolean;
		/** Optional leading icon configuration. */
		iconProps?: IconProps;
		/** Optional `formaction` when used within a form. */
		formaction?: string;
		/** Shows a loading indicator and hides content. */
		loading?: boolean;
	};

export type ButtonIconProps = ButtonIconVariants &
	AnchorButtonAttributes & {
		/** Disables the icon button. */
		disabled?: boolean;
		/** Tooltip content; when omitted, tooltip is not shown. */
		tooltipContent?: string;
		/** Class added to the tooltip trigger wrapper. */
		triggerClass?: string;
		/** Icon configuration (required). */
		iconProps: IconProps;
		/** Optional `formaction` when used within a form. */
		formaction?: string;
		/** Click handler for button variant. */
		onclick?: () => void;
		/** Shows a loading indicator and hides the icon. */
		loading?: boolean;
		triggerPlacement?: Placement;
	};

export type FABProps = FABVariants &
	AnchorButtonAttributes & {
		/** Disables the FAB. */
		disabled?: boolean;
		/** Shows the extended label. */
		expanded?: boolean;
		/** Label text when extended. */
		label?: string;
		/** Enables menu mode for `FABMenuItem` children. */
		withMenu?: boolean;
		/** Icon configuration (required). */
		iconProps: IconProps;
		/** Optional `formaction` when used within a form. */
		formaction?: string;
		/** Optional menu items for `withMenu`. */
		children?: Snippet;
	};

export type FABMenuProps = FABMenuVariants &
	HTMLAttributes<HTMLUListElement> & {
		/** Menu items. Use `FABMenuItem` children. */
		children: Snippet;
	};

export type FABMenuItemProps = FABMenuItemVariants &
	AnchorButtonAttributes & {
		/** Shows a loading indicator and hides content. */
		loading?: boolean;
		/** Menu item content. */
		children: Snippet;
		/** Icon configuration (required). */
		iconProps: IconProps;
		/** Optional `formaction` when used within a form. */
		formaction?: string;
	};
