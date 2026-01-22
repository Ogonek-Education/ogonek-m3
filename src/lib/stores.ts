import { writable } from 'svelte/store';

function createToggleStore() {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		true: () => set(true),
		false: () => set(false),
		toggle: () => {
			let currentValue;
			subscribe((value) => {
				currentValue = value;
			})();
			set(!currentValue);
		}
	};
}

export const isLoading = createToggleStore();
export const mobileMenuOpen = createToggleStore();
export const collapseStore = writable(true);
export const padding = writable(0);
