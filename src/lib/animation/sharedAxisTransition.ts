import type { TransitionOptions } from './transitionTypes.js';

type SharedAxisOptions =
	| {
			direction: 'X' | 'Y';
			/**
			 * true if this element is on the top/left of things
			 * if it's first, then use transition: and set it to true
			 * if it's last, then use transition: and set it to false
			 * if it's in between, use separate in: and out: statements:
			 * > set it to false when it's interacting with the left side, and true when interacting with its right
			 * > in order to implement this, try something like using a prevPage variable:
			 * > ```
			 * > {:else if page == 1}
			 * > <div
			 * >   in:sharedAxisTransition={{
			 * >     direction: "X",
			 * >     rightSeam: prevPage > 1, (if we're transitioning from a page on the right, rightseam is true)
			 * >   }}
			 * >   out:sharedAxisTransition={{
			 * >     direction: "X",
			 * >     rightSeam: page > 1, (if we're transitioning to a page on the right, rightseam is true)
			 * >   }}
			 * > >
			 * > ```
			 *
			 * i went insane over figuring this out :)
			 */
			rightSeam: boolean;
	  }
	| {
			direction: 'Z';
			leaving: boolean /* set to true in out:, set to false in in: */;
	  };

/* protip: set a background color on the items, and utilize position relative + absolute to let them overlap */
export const sharedAxisTransition = (
	node: Element,
	options: TransitionOptions & SharedAxisOptions
) => {
	void node;
	void options;
	return {
		delay: 0,
		duration: 0
	};
};
