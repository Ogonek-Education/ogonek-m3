import { tv, type VariantProps } from 'tailwind-variants';

export const toggle = tv({
	slots: {
		root: 'switch-root group relative inline-flex h-8 w-[3.25rem] [print-color-adjust:exact]',
		input:
			'peer h-8 w-[3.25rem] appearance-none m-0 rounded-full border-[0.125rem] border-[var(--m3c-outline)] bg-[var(--m3c-surface-container-highest)] transition-[background-color,border-color] duration-200 ease-[var(--m3-easing)] enabled:cursor-pointer disabled:cursor-default disabled:border-[--translucent(var(--m3c-outline),0.12)] disabled:bg-[--translucent(var(--m3c-surface-container-highest),0.12)] checked:border-[var(--m3c-primary)] checked:bg-[var(--m3c-primary)] checked:disabled:border-transparent checked:disabled:bg-[--translucent(var(--m3c-on-surface),0.12)] [@media(forced-colors:active)]:checked:bg-[canvastext]',
		handle:
			'handle absolute left-2 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--m3c-outline)] text-[var(--m3c-on-on-primary)] transition-[background-color,color,transform,left,scale] duration-200 ease-[var(--m3-easing-fast-spatial)] peer-checked:left-[1.75rem] peer-checked:scale-[1.5] peer-checked:bg-[var(--m3c-on-primary)] peer-disabled:bg-[--translucent(var(--m3c-on-surface),0.38)] peer-checked:peer-disabled:bg-[var(--m3c-surface)] group-hover:bg-[var(--m3c-on-surface-variant)] group-hover:peer-checked:bg-[var(--m3c-primary-container)] group-hover:peer-checked:text-[var(--m3c-on-primary-container)] peer-disabled:group-hover:bg-[--translucent(var(--m3c-on-surface),0.38)] group-active:scale-[1.75] [@media(forced-colors:active)]:bg-[canvastext] [@media(forced-colors:active)]:peer-checked:bg-[canvas]',
		hover:
			'hover absolute left-4 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-[background-color] duration-200 ease-[var(--m3-easing-fast)] peer-checked:left-9 peer-disabled:hidden group-hover:bg-[--translucent(var(--m3c-on-surface),0.08)] group-hover:peer-checked:bg-[--translucent(var(--m3c-primary),0.08)]',
		icon: 'switch-icon flex h-4 w-4 items-center justify-center opacity-0 transition-[opacity,transform,scale] duration-200 ease-[var(--m3-easing-fast-spatial)]'
	},
	variants: {
		icons: {
			checked: {},
			both: {
				handle: 'peer-[&:not(:checked)]:scale-[1.5]',
				icon: 'peer-[&:not(:checked)]:text-[var(--m3c-surface-container-highest)]'
			},
			none: {}
		}
	},
	defaultVariants: {
		icons: 'checked'
	}
});

export type SwitchVariants = VariantProps<typeof toggle>;
