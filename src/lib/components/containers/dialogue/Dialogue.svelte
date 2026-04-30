<script lang="ts">
	/**
	 * Dialogs provide important information or prompt users for a decision.
	 * 
	 * A dialog is a type of modal window that appears in front of app content 
	 * to provide critical information or ask for a decision. 
	 * Dialogs disable all app functionality when they appear, and remain 
	 * on screen until confirmed, dismissed, or a required action has been taken.
	 * 
	 * @see https://m3.material.io/components/dialogs/overview
	 */
	import { clickOutside } from '$lib/actions/index.js';
	import type { DialogueProps } from './types.js';
	import { dialogue } from './theme.js';
	import Button from '../../buttons/Button.svelte';
	import clsx from 'clsx';
	import { enterExit } from '$lib/animation/enterExit.js';
	import { easeEmphasizedDecel, easeEmphasizedAccel } from '$lib/animation/easing.js';

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

<div
	aria-label="scrim"
	class={`${base()} dialogue-base`}
	in:enterExit={{ duration: 300, easing: easeEmphasizedDecel }}
	out:enterExit={{ duration: 200, easing: easeEmphasizedAccel }}
>
	<div
		class={`${inner({ class: clsx(className) })} dialogue-inner`}
		{...rest}
		in:enterExit={{ duration: 400, easing: easeEmphasizedDecel, mode: 'dialog' }}
		out:enterExit={{ duration: 200, easing: easeEmphasizedAccel, mode: 'dialog' }}
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
