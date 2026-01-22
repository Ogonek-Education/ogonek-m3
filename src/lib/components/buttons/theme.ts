import { tv, type VariantProps } from 'tailwind-variants';

// Variants
export type ButtonVariants = VariantProps<typeof button>;
export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;
export type FABVariants = VariantProps<typeof fab>;
export type FABMenuVariants = VariantProps<typeof fabMenu>;
export type ButtonMDVariants = VariantProps<typeof button>;
export type ButtonIconVariants = VariantProps<typeof buttonIcon>;
export type FABMenuItemVariants = VariantProps<typeof fabMenuItem>;

export const button = tv({
	slots: {
		base: 'md-component-button-base group min-w-max md-sys-typescale-button-label',
		icon: ''
	},
	variants: {
		variant: {
			elevated: '',
			filled: '',
			tonal: '',
			outlined: '',
			text: '',
			bare: ''
		},
		color: {
			default: '',
			primary: '',
			secondary: '',
			tertiary: '',
			error: ''
		},
		size: {
			xs: '',
			sm: {
				base: 'h-10 gap-2 px-4',
				icon: 'size-5'
			},
			md: {
				base: 'h-14 px-6 gap-2',
				icon: 'size-6'
			},
			lg: '',
			xl: ''
		},
		shape: {
			round: 'rounded-full before:rounded-full',
			square: 'rounded-md'
		},
		selected: {
			true: 'bg-md-sys-color-primary text-md-sys-color-on-primary rounded-md',
			false: 'rounded-full'
		}
	},
	compoundVariants: [
		{
			variant: 'filled',
			color: 'default',
			class: { base: 'md-component-button-filled-primary' }
		},
		{
			variant: 'filled',
			color: 'primary',
			class: { base: 'md-component-button-filled-primary' }
		},
		{
			variant: 'filled',
			color: 'secondary',
			class: { base: 'md-component-button-filled-secondary' }
		},
		{
			variant: 'filled',
			color: 'tertiary',
			class: { base: 'md-component-button-filled-tertiary' }
		},
		{
			variant: 'filled',
			color: 'error',
			class: { base: 'md-component-button-filled-error' }
		},
		{
			variant: 'tonal',
			color: 'default',
			class: { base: 'md-component-button-tonal-primary' }
		},
		{
			variant: 'tonal',
			color: 'primary',
			class: { base: 'md-component-button-tonal-primary' }
		},
		{
			variant: 'tonal',
			color: 'secondary',
			class: { base: 'md-component-button-tonal-secondary' }
		},
		{
			variant: 'tonal',
			color: 'tertiary',
			class: { base: 'md-component-button-tonal-tertiary' }
		},
		{
			variant: 'tonal',
			color: 'error',
			class: { base: 'md-component-button-tonal-error' }
		},
		{
			variant: 'outlined',
			color: 'default',
			class: { base: 'md-component-button-outline-default' }
		},
		{
			variant: 'outlined',
			color: 'primary',
			class: { base: 'md-component-button-outline-primary' }
		},
		{
			variant: 'outlined',
			color: 'secondary',
			class: { base: 'md-component-button-outline-secondary' }
		},
		{
			variant: 'outlined',
			color: 'tertiary',
			class: { base: 'md-component-button-outline-tertiary' }
		},
		{
			variant: 'outlined',
			color: 'error',
			class: { base: 'md-component-button-outline-error' }
		},
		{
			variant: 'text',
			color: 'default',
			class: { base: 'md-component-button-text-default' }
		},
		{
			variant: 'text',
			color: 'primary',
			class: { base: 'md-component-button-text-primary' }
		},
		{
			variant: 'text',
			color: 'secondary',
			class: { base: 'md-component-button-text-secondary' }
		},
		{
			variant: 'text',
			color: 'tertiary',
			class: { base: 'md-component-button-text-tertiary' }
		},
		{
			variant: 'text',
			color: 'error',
			class: { base: 'md-component-button-text-error' }
		},
		{
			variant: 'elevated',
			color: 'default',
			class: { base: 'md-component-button-elevated-default' }
		},
		{
			variant: 'elevated',
			color: 'primary',
			class: { base: 'md-component-button-elevated-primary' }
		},
		{
			variant: 'elevated',
			color: 'secondary',
			class: { base: 'md-component-button-elevated-secondary' }
		},
		{
			variant: 'elevated',
			color: 'tertiary',
			class: { base: 'md-component-button-elevated-tertiary' }
		},
		{
			variant: 'elevated',
			color: 'error',
			class: { base: 'md-component-button-elevated-error' }
		}
	]
});

export const buttonIcon = tv({
	slots: {
		base: 'md-component-button-base group max-w-max',
		icon: ''
	},
	variants: {
		variant: {
			elevated: '',
			filled: '',
			tonal: '',
			outlined: '',
			text: ''
		},
		color: {
			default: '',
			primary: '',
			secondary: '',
			tertiary: '',
			error: ''
		},
		size: {
			xs: '',
			sm: {
				base: 'size-10 gap-2',
				icon: 'size-5'
			},
			md: {
				base: 'size-14 gap-2',
				icon: 'size-6'
			},
			lg: '',
			xl: ''
		},
		width: {
			narrow: '',
			wide: '',
			default: 'aspect-square'
		},
		shape: {
			round: 'rounded-full before:rounded-full',
			square: 'rounded-xl'
		},
		variation: {
			toggle: '',
			default: ''
		}
	},
	compoundVariants: [
		{
			variant: 'filled',
			color: 'default',
			class: { base: 'md-component-button-filled-primary' }
		},
		{
			variant: 'filled',
			color: 'primary',
			class: { base: 'md-component-button-filled-primary' }
		},
		{
			variant: 'filled',
			color: 'secondary',
			class: { base: 'md-component-button-filled-secondary' }
		},
		{
			variant: 'filled',
			color: 'tertiary',
			class: { base: 'md-component-button-filled-tertiary' }
		},
		{
			variant: 'filled',
			color: 'error',
			class: { base: 'md-component-button-filled-error' }
		},
		{
			variant: 'tonal',
			color: 'default',
			class: { base: 'md-component-button-tonal-primary' }
		},
		{
			variant: 'tonal',
			color: 'primary',
			class: { base: 'md-component-button-tonal-primary' }
		},
		{
			variant: 'tonal',
			color: 'secondary',
			class: { base: 'md-component-button-tonal-secondary' }
		},
		{
			variant: 'tonal',
			color: 'tertiary',
			class: { base: 'md-component-button-tonal-tertiary' }
		},
		{
			variant: 'tonal',
			color: 'error',
			class: { base: 'md-component-button-tonal-error' }
		},
		{
			variant: 'outlined',
			color: 'default',
			class: { base: 'md-component-button-outline-default' }
		},
		{
			variant: 'outlined',
			color: 'primary',
			class: { base: 'md-component-button-outline-primary' }
		},
		{
			variant: 'outlined',
			color: 'secondary',
			class: { base: 'md-component-button-outline-secondary' }
		},
		{
			variant: 'outlined',
			color: 'tertiary',
			class: { base: 'md-component-button-outline-tertiary' }
		},
		{
			variant: 'outlined',
			color: 'error',
			class: { base: 'md-component-button-outline-error' }
		},
		{
			variant: 'text',
			color: 'default',
			class: { base: 'md-component-button-text-default' }
		},
		{
			variant: 'text',
			color: 'primary',
			class: { base: 'md-component-button-text-primary' }
		},
		{
			variant: 'text',
			color: 'secondary',
			class: { base: 'md-component-button-text-secondary' }
		},
		{
			variant: 'text',
			color: 'tertiary',
			class: { base: 'md-component-button-text-tertiary' }
		},
		{
			variant: 'text',
			color: 'error',
			class: { base: 'md-component-button-text-error' }
		},
		{
			variant: 'elevated',
			color: 'default',
			class: { base: 'md-component-button-elevated-default' }
		},
		{
			variant: 'elevated',
			color: 'primary',
			class: { base: 'md-component-button-elevated-primary' }
		},
		{
			variant: 'elevated',
			color: 'secondary',
			class: { base: 'md-component-button-elevated-secondary' }
		},
		{
			variant: 'elevated',
			color: 'tertiary',
			class: { base: 'md-component-button-elevated-tertiary' }
		},
		{
			variant: 'elevated',
			color: 'error',
			class: { base: 'md-component-button-elevated-error' }
		}
	]
});

export const buttonGroup = tv({
	base: 'inline-flex rounded-lg shadow-xs',
	variants: {
		size: {
			sm: '',
			md: '',
			lg: ''
		}
	},
	defaultVariants: {
		size: 'md'
	}
});

export const fab = tv({
	slots: {
		base: 'md-component-button-base relative z-50 before:rounded-lg',
		icon: '',
		label: 'text-medium '
	},
	variants: {
		config: {
			primary: {
				base: 'md-component-button-filled-primary shadow-elevation-1 hover:shadow-elevation-2 rounded-lg focus:before:bg-md-sys-color-on-primary/10 active:before:bg-md-sys-color-on-primary/10',
				icon: 'text-md-sys-color-on-primary',
				label: 'text-md-sys-color-on-primary'
			},
			secondary: {
				base: 'md-component-button-filled-secondary shadow-elevation-1 hover:shadow-elevation-2 rounded-lg focus:before:bg-md-sys-color-on-secondary/10 active:before:bg-md-sys-color-on-secondary/10',
				icon: 'text-md-sys-color-on-secondary',
				label: 'text-md-sys-color-on-secondary'
			},
			tertiary: {
				base: 'md-component-button-filled-tertiary shadow-elevation-1 hover:shadow-elevation-2 rounded-lg focus:before:bg-md-sys-color-on-tertiary/10 active:before:bg-md-sys-color-on-tertiary/10',
				icon: 'text-md-sys-color-on-tertiary',
				label: 'text-md-sys-color-on-tertiary'
			}
		},
		expanded: {
			true: 'gap-2 px-4',
			false: 'aspect-square'
		},
		size: {
			regular: {
				base: 'h-14',
				icon: 'size-6',
				label: 'md-sys-typescale-fab-label'
			},
			medium: {
				base: 'h-20',
				icon: 'size-7'
			},
			large: {
				base: 'h-24',
				icon: 'size-9'
			}
		}
	}
});

export const fabMenu = tv({
	slots: {
		base: 'gap-2 pb-2 flex flex-col absolute z-50 overflow-visible p-1'
	},
	variants: {
		position: { top: 'top-16' }
	}
});

export const fabMenuItem = tv({
	slots: {
		base: 'md-component-button-base group relative max-w-max h-14 rounded-full before:rounded-full gap-2 px-6 md-sys-typescale-fab-label z-50 shadow-elevation-2 hover:shadow-elevation-3',
		icon: 'size-6'
	},
	variants: {
		variant: {
			primary: 'md-component-button-filled-primary',
			secondary: 'md-component-button-tonal-secondary',
			tertiary: 'md-component-button-outline-tertiary'
		}
	}
});
