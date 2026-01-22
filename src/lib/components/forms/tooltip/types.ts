import type { DivAttrs } from '$lib/utils/index.js';
import type { Placement } from '@floating-ui/dom';
import type { Snippet } from 'svelte';
import type { TooltipVariants } from './theme.js';
import type { FloatingParams } from '$lib/actions/floating.js';

export type TooltipProps = TooltipVariants &
	DivAttrs & {
		subhead?: string | null;
		tutorial?: boolean;
		children?: Snippet;
		supportingText?: string | null;
		text?: string | null;
		trigger?: Snippet;
		triggerClass?: string;
		placement?: Placement;
		offset?: number;
		openDelay?: number;
		closeDelay?: number;
		strategy?: FloatingParams['strategy'];
		isOpen?: boolean;
		interaction?: 'hover' | 'manual';
		variant?: 'rich' | 'snack';
		showArrow?: boolean;
		showScrim?: boolean;
	};
