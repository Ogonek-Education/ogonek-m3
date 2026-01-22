import { tv } from 'tailwind-variants';

export const datetimepicker = tv({
	slots: {
		base: 'flex relative overflow-hidden flex-col bg-md-sys-color-surface-container-high w-[360px] h-[460px] rounded-lg px-3 justify-between shadow-elevation-3 pb-3',
		buttons: 'pt-2 -my-2 -mx-2 flex '
	}
});

export const headerpicker = tv({
	slots: {
		base: 'flex justify-between items-center pt-5 pb-7.5 z-10',
		buttonWrapper: 'flex group',
		button: 'text-md-sys-color-on-surface-variant disabled:opacity-38',
		icon: 'size-6 text-md-sys-color-on-surface relative state-layer hover:before:bg-md-sys-color-on-surface/8 before:rounded-full',
		centralButton:
			'flex-1 inline-flex text-md-sys-color-on-surface-variant disabled:opacity-40 size-6 items-center justify-center md-sys-typescale-label-large relative state-layer hover:before:bg-md-sys-color-on-surface/8 before:rounded-full px-10'
	},
	variants: {
		choosing: {
			true: '',
			false: ''
		}
	}
});

export const calendarpicker = tv({
	slots: {
		base: 'grid grid-cols-7 gap-1 items-center justify-center',
		item: 'disabled:text-md-sys-color-on-surface/38 inline-flex size-10 items-center justify-center rounded-full state-layer hover:before:bg-md-sys-color-on-surface-variant/8 relative before:rounded-full md-sys-typescale-body-large ',
		weekday:
			'md-sys-typescale-body-large text-sys-color-on-surface inline-flex items-center justify-center pb-2 size-10'
	},
	variants: {
		selected: {
			true: {
				item: 'text-md-sys-color-on-primary hover:before:bg-md-sys-color-on-primary hover:before:opacity-8 bg-md-sys-color-primary'
			},
			false: { item: 'text-md-sys-color-on-surface' }
		},
		today: {
			true: {
				item: 'outline outline-md-sys-color-primary text-md-sys-color-primary hover:before:bg-md-sys-color-primary/8'
			},
			false: ''
		}
	},
	compoundVariants: [
		{
			selected: true,
			today: true,
			class: {
				item: 'text-md-sys-color-on-primary'
			}
		}
	]
});

export const focuspicker = tv({
	slots: {
		base: 'flex flex-col overflow-auto mb-5 flex-[1_0]',
		item: 'text-md-sys-color-on-surface md-sys-typescale-body-large inline-flex h-12 relative hover:before:bg-md-sys-color-on-surface/8 gap-4 shrink-0 items-center state-layer'
	},
	variants: {
		selected: {
			true: {
				item: 'text-md-sys-color-on-surface-variant bg-md-sys-color-surface-variant'
			},
			false: { item: 'text-md-sys-color-on-surface' }
		}
	}
});
