import { tv, type VariantProps } from 'tailwind-variants';

export type TitleVariants = VariantProps<typeof title>;

export const title = tv({
	base: ' text-balance md-sys-typescale-title-small md:md-sys-typescale-title-medium lg:md-sys-typescale-title-large'
});
