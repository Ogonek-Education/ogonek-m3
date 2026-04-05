<script lang="ts">
	import { clickOutside } from '$lib/actions/index.js';
	import type { DialogueProps } from './types.js';
	import { dialogue } from './theme.js';
	import Button from '../../buttons/Button.svelte';
	import clsx from 'clsx';

	let {
		withState = false,
		headline,
		supportingText,
		confirmText,
		confirmAction,
		loading = false,
		children,
		class: className,
		toggle = () => {},
		...rest
	}: DialogueProps = $props();

	const { base, inner, headlineContainer, buttonContainer, supportingTextContainer } =
		$derived(dialogue());
</script>

<div aria-label="scrim" class={`${base()} dialogue-base`}>
	<div
		class={`${inner({ class: clsx(className) })} dialogue-inner`}
		{...rest}
		use:clickOutside={() => {
			if (withState) {
				window.history.back();
			} else {
				toggle();
			}
		}}
	>
		{#if headline}
			<h1 class={headlineContainer()}>
				{headline}
			</h1>
		{/if}
		<p class={supportingTextContainer()}>
			{supportingText}
		</p>
		{@render children?.()}
		<div class={`${buttonContainer()} dialogue-buttons`}>
			<Button
				type="button"
				variant="text"
				data-cy="dialogue-cancel"
				onclick={() => {
					if (withState) {
						window.history.back();
					} else {
						toggle();
					}
				}}>Отмена</Button
			>
			<Button
				type="submit"
				{loading}
				variant="filled"
				formaction={confirmAction}
				data-cy="dialogue-confirm">{confirmText}</Button
			>
		</div>
	</div>
</div>

<style>
	.dialogue-base {
		opacity: 1;
	}

	.dialogue-inner {
		--dialogue-shape: 1rem;
	}
</style>
