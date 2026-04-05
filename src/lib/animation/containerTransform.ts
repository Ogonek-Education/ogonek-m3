import type { TransitionConfig } from 'svelte/transition';
import type { TransitionOptions } from './transitionTypes.js';

interface ContainerOptions {
	fallback?: (
		node: Element,
		params: TransitionOptions & ContainerOptions & ContainerParamOptions,
		intro: boolean
	) => TransitionConfig;
	bgContainerZ?: number;
	fgContainerZ?: number;
}

interface ContainerParamOptions {
	key: string;
}

type ClientRectMap = Map<string, { rect: DOMRect; node: Element }>;

const getBackgroundColor = (node: Element, defaultColor?: string): string => {
	if (!defaultColor) {
		const tmp = document.createElement('div');
		document.body.appendChild(tmp);
		defaultColor = getComputedStyle(tmp).backgroundColor;
		tmp.remove();
	}
	const color = getComputedStyle(node).backgroundColor;
	if (color != defaultColor) return color;
	if (node.parentElement) return getBackgroundColor(node.parentElement, defaultColor);
	return defaultColor;
};

const parseColor = (color: string) => {
	const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
	if (match) {
		const [r, g, b, opacity = 1.0] = match.slice(1, 5).map((val) => val && parseFloat(val));
		if (
			typeof r != 'number' ||
			typeof g != 'number' ||
			typeof b != 'number' ||
			typeof opacity != 'number'
		) {
			throw new Error('something went down in the color parser, see previous info');
		}
		return [r, g, b, opacity];
	}
	return [0, 0, 0, 0];
};

export const containerTransform = ({
	fallback,
	...defaults
}: TransitionOptions & ContainerOptions) => {
	void defaults;
	/* This code is based on the crossfade function from Svelte. Svelte is under the MIT license.
  https://github.com/sveltejs/svelte/blob/master/src/runtime/transition/index.ts
  If you have an idea for cleaning up this mess of code, please make a PR. */
	const to_receive: ClientRectMap = new Map();
	const to_send: ClientRectMap = new Map();

	function calcTransition(
		from: DOMRect,
		fromNode: Element,
		node: Element,
		params: TransitionOptions & ContainerOptions
	): TransitionConfig {
		void from;
		void fromNode;
		void node;
		void params;
		return {
			delay: 0,
			duration: 0
		};
	}

	function makeTransition(items: ClientRectMap, counterparts: ClientRectMap, intro: boolean) {
		return (
			node: Element,
			params: TransitionOptions & ContainerOptions & ContainerParamOptions
		) => {
			items.set(params.key, {
				rect: node.getBoundingClientRect(),
				node
			});
			return () => {
				const counterpart = counterparts.get(params.key);
				if (counterpart) {
					counterparts.delete(params.key);
					return calcTransition(counterpart.rect, counterpart.node, node, params);
				}

				// if the node is disappearing altogether
				// (i.e. wasn't claimed by the other list)
				// then we need to supply an outro
				items.delete(params.key);
				return fallback ? fallback(node, params, intro) : {};
			};
		};
	}

	return [makeTransition(to_send, to_receive, false), makeTransition(to_receive, to_send, true)];
};

export const parseSize = (size: string) =>
	(size.endsWith('px')
		? +size.slice(0, -2)
		: size.endsWith('rem')
			? +size.slice(0, -3) * 16
			: null) || 0;
