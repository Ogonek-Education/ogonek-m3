import { tv, type VariantProps } from 'tailwind-variants';

export type headlineVariants = VariantProps<typeof headline>;

export const headline = tv({
	base: 'font-serif text-balance md-sys-typescale-headline-small md:md-sys-typescale-headline-medium lg:md-sys-typescale-headline-large'
});
