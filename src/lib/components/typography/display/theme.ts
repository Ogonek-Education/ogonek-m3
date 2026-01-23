import { tv, type VariantProps } from 'tailwind-variants';

export type HeadingVariants = VariantProps<typeof display>;

export const display = tv({
	base: ' lg:md-sys-typescale-display-large md:md-sys-typescale-display-medium md-sys-typescale-display-small'
});
