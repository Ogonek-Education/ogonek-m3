import { tv } from 'tailwind-variants';

export const label = tv({
	base: '',
	variants: {
		emphasized: {
			true: 'font-semibold',
			false: 'font-medium'
		},
		size: {
			small: 'md-sys-label-display-small',
			medium: 'md-sys-label-display-medium',
			large: 'md-sys-label-display-large'
		}
	}
});
