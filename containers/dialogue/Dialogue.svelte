<script lang="ts">
  import { clickOutside } from "$lib/actions";
  import { fly } from "svelte/transition";
  import type { DialogueProps } from "./types";
  import { dialogue } from "./theme";
  import Button from "../../buttons/Button.svelte";
  import { isLoading } from "$lib/stores";

  let {
    withState = true,
    headline,
    supportingText,
    confirmText,
    confirmAction,
    children,
    toggle = () => {},
  }: DialogueProps = $props();

  const {
    base,
    inner,
    headlineContainer,
    buttonContainer,
    supportingTextContainer,
  } = $derived(dialogue());
</script>

<div aria-label="scrim" in:fly={{ y: 20 }} class={base()}>
  <div
    class={inner()}
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
    <div class={buttonContainer()}>
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
        variant="filled"
        formaction={confirmAction}
        data-cy="dialogue-confirm"
        >{confirmText}</Button
      >
    </div>
  </div>
</div>
