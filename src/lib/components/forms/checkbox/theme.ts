import { tv, type VariantProps } from 'tailwind-variants';

export const checkbox = tv({
	slots: {
		root: 'inline-flex min-h-10 select-none items-start gap-3 text-md-sys-color-on-surface min-h-4.5',
		container: 'relative inline-flex size-[18px] shrink-0',
		control:
			'layer-container absolute -inset-[11px] rounded-full text-md-sys-color-on-surface-variant state-layer before:rounded-full hover:before:bg-current/8 active:before:bg-current/10 peer-focus-visible:outline peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-md-sys-color-secondary transition-[outline-color,outline-width,outline-offset] duration-150 ease-out',
		box: 'absolute inset-[11px] rounded-[4px] border-2 border-current bg-md-sys-color-surface transition-[background-color,border-color,box-shadow] duration-150 ease-out',
		checkIcon:
			'pointer-events-none absolute inset-0 m-auto size-5 text-md-sys-color-on-primary opacity-0 scale-75 transition-all duration-150 ease-out',
		indeterminateIcon:
			'pointer-events-none absolute inset-0 m-auto block h-0.5 w-3 rounded-full bg-md-sys-color-on-primary opacity-0 scale-75 transition-all duration-150 ease-out',
		label: 'md-sys-typescale-body-large leading-5 text-md-sys-color-on-surface',
		supporting: 'md-sys-typescale-body-medium text-md-sys-color-on-surface-variant'
	},
	variants: {
		state: {
			unchecked: {},
			checked: {
				control: 'text-md-sys-color-primary',
				box: 'bg-md-sys-color-primary',
				checkIcon: 'opacity-100 scale-100'
			},
			indeterminate: {
				control: 'text-md-sys-color-primary',
				box: 'bg-md-sys-color-primary',
				indeterminateIcon: 'opacity-100 scale-100'
			}
		},
		error: {
			true: {
				control: 'text-md-sys-color-error peer-focus-visible:outline-md-sys-color-error',
				box: 'border-md-sys-color-error',
				label: 'text-md-sys-color-error',
				supporting: 'text-md-sys-color-error'
			}
		},
		align: {
			start: 'items-start',
			center: 'items-center'
		},
		disabled: {
			true: {
				root: 'cursor-default',
				control: 'pointer-events-none text-md-sys-color-on-surface/38 before:hidden',
				box: 'border-md-sys-color-on-surface/38',
				checkIcon: 'text-md-sys-color-on-surface/38',
				indeterminateIcon: 'bg-md-sys-color-on-surface/38',
				label: 'text-md-sys-color-on-surface/38',
				supporting: 'text-md-sys-color-on-surface/38'
			}
		}
	},
	compoundVariants: [
		{
			state: 'checked',
			disabled: true,
			control: 'text-md-sys-color-on-surface/38',
			box: 'bg-md-sys-color-on-surface/12 border-transparent'
		},
		{
			state: 'indeterminate',
			disabled: true,
			control: 'text-md-sys-color-on-surface/38',
			box: 'bg-md-sys-color-on-surface/12 border-transparent'
		}
	],
	defaultVariants: {
		state: 'unchecked',
		align: 'start'
	}
});

export type CheckboxM3Variants = VariantProps<typeof checkbox>;
