import { tv, type VariantProps } from 'tailwind-variants';

export type SplitPaneVariants = VariantProps<typeof splitPane>;
export type SinglePaneVariants = VariantProps<typeof singlePane>;
export type SupportingPaneVariants = VariantProps<typeof supportingPane>;

export const splitPane = tv({
	slots: {
		left: 'top-0 bottom-0 overflow-y-scroll overflow-x-visible bg-md-sys-color-surface-container py-4 scrollbar-none hidden md:block',
		right: 'flex flex-col box-border ml-0 md:ml-[var(--splitpane-left-width)] ',
		handle:
			'handle group hidden md:block top-0 bottom-0 z-40 w-3 -ml-1 cursor-col-resize touch-none bg-transparent hover:bg-md-sys-color-outline/20 translate-x-1.5',
		handleGrip:
			'absolute left-1/2 top-1/2 flex h-12 w-1 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full bg-md-sys-color-secondary group-hover:w-0.5',
		handlePip: 'h-0.5 w-0.5 rounded-full bg-md-sys-color-on-primary/80',
		base: 'md:pl-4'
	},
	variants: {
		anchor: {
			viewport: {
				left: 'md:fixed',
				handle: 'fixed'
			},
			parent: {
				base: 'relative',
				left: 'md:absolute',
				handle: 'absolute'
			}
		},
		centered: {
			true: {
				base: 'max-w-5xl mx-auto'
			},
			false: {
				base: ''
			}
		},
		full: {
			true: {
				right: 'md:min-h-[calc(100dvh-30px)]'
			},
			false: ''
		},
		rounded: {
			true: {
				left: 'md:rounded-t-lg'
			},
			false: {
				left: ''
			}
		}
	},
	defaultVariants: {
		anchor: 'viewport',
		rounded: true
	}
});

export const singlePane = tv({
	slots: {
		base: 'flex flex-col box-border overflow-clip',
		content: 'flex flex-1 flex-col gap-3 w-full md:pb-12',
		headline: 'md-sys-typescale-title-medium mb-4'
	},
	variants: {
		background: {
			true: 'bg-md-sys-color-surface',
			false: ''
		},
		centered: {
			narrow: {
				content: 'max-w-2xl',
				base: 'items-center justify-center',
				headline: 'self-center'
			},
			medium: {
				content: 'max-w-5xl',
				base: 'items-center justify-center',
				headline: 'self-center'
			},
			none: ''
		},
		full: {
			true: 'min-h-dvh',
			false: ''
		},
		rounded: {
			true: {
				base: 'md:rounded-t-lg'
			},
			false: {
				base: ''
			}
		}
	},
	defaultVariants: {
		rounded: true
	}
});

export const supportingPane = tv({
	slots: {
		base: 'flex w-full flex-col gap-6 md:flex-row',
		main: 'bg-md-sys-color-surface box-border grow order-2 md:order-1',
		supporting:
			'text-md-sys-color-on-surface-container box-border md:sticky md:top-4 order-1 md:order-2 min-w-min md:w-80 overflow-y-scroll overflow-x-visible'
	},
	variants: {
		position: {
			right: {
				base: 'md:flex-row',
				supporting: ''
			},
			left: {
				base: 'md:flex-row-reverse',
				supporting: ''
			}
		},
		centered: {
			true: {
				base: 'max-w-6xl mx-auto'
			},
			false: {
				base: 'justify-between'
			}
		},
		full: {
			true: { base: 'min-h-dvh' },
			false: ''
		},
		rounded: {
			true: {
				main: 'rounded-t-lg'
			},
			false: {
				main: ''
			}
		}
	},
	defaultVariants: {
		position: 'right',
		centered: true,
		rounded: true
	}
});
