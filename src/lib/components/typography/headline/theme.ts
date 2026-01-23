import { tv, type VariantProps } from 'tailwind-variants';

export type headlineVariants = VariantProps<typeof headline>;

export const headline = tv({
	base: ' text-balance md-sys-typescale-headline-small md:md-sys-typescale-headline-medium lg:md-sys-typescale-headline-large'
});
