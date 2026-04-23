import { tv, type VariantProps } from 'tailwind-variants';

// M3 Switch:
// Track  — 52×32dp, 2dp border
// Thumb  — 16dp unchecked / 24dp checked (scale 1.5×)
// Hover  — 40dp state layer ring around thumb
export const toggle = tv({
	slots: {
		root: 'group relative inline-flex h-8 w-[3.25rem] shrink-0 [print-color-adjust:exact]',

		// The input IS the track — styled as the pill background
		input: [
			'peer absolute inset-0 m-0 h-full w-full cursor-pointer appearance-none rounded-full',
			'border-2 border-md-sys-color-outline bg-md-sys-color-surface-container-highest',
			'checked:border-md-sys-color-primary checked:bg-md-sys-color-primary',
			'disabled:cursor-default',
			'disabled:border-md-sys-color-on-surface/12 disabled:bg-md-sys-color-surface-container-highest',
			'checked:disabled:border-transparent checked:disabled:bg-md-sys-color-on-surface/12',
			'transition-colors duration-200'
		].join(' '),

		// Thumb — absolute over track, uses group-has-[:checked] so icons inside also work
		handle: [
			'pointer-events-none absolute left-2 top-1/2 flex h-4 w-4 -translate-y-1/2',
			'items-center justify-center rounded-full',
			'bg-md-sys-color-outline',
			'transition-[left,transform,background-color] duration-200 ease-in-out',
			// checked: move right + scale up + on-primary color
			'group-has-[:checked]:left-[1.75rem] group-has-[:checked]:scale-[1.5] group-has-[:checked]:bg-md-sys-color-on-primary',
			// disabled
			'group-has-[:disabled]:bg-md-sys-color-on-surface/38',
			'group-has-[:checked:disabled]:bg-md-sys-color-surface',
			// hover (unchecked)
			'group-hover:bg-md-sys-color-on-surface-variant',
			// hover (checked) — overrides the hover above
			'group-has-[:checked]:group-hover:bg-md-sys-color-primary-container',
			// press
			'group-active:scale-[1.75] group-has-[:checked]:group-active:scale-[1.75]'
		].join(' '),

		// State layer ring around thumb
		hover: [
			'pointer-events-none absolute left-4 top-1/2 h-12 w-12',
			'-translate-x-1/2 -translate-y-1/2 rounded-full',
			'transition-[left,background-color] duration-200',
			'group-has-[:checked]:left-9',
			'group-has-[:disabled]:hidden',
			'group-hover:bg-md-sys-color-on-surface/8',
			'group-has-[:checked]:group-hover:bg-md-sys-color-primary/8'
		].join(' '),

		// Icon inside thumb — group-has-[:checked] works since root is the group
		icon: [
			'pointer-events-none flex h-4 w-4 items-center justify-center text-[16px]',
			'opacity-0 transition-opacity duration-150'
		].join(' ')
	},
	variants: {
		icons: {
			checked: {},
			both: {
				// unchecked thumb also grows to 24dp when 'both' icons mode
				handle: 'group-has-[&:not(:checked)]:scale-[1.5]'
			},
			none: {}
		}
	},
	defaultVariants: {
		icons: 'checked'
	}
});

export type SwitchVariants = VariantProps<typeof toggle>;
