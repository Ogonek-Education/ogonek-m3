<script lang="ts">
  import { clickOutside } from "$lib/actions";
  import { fly } from "svelte/transition";
  import type { DialogueProps } from "./types";
  import { dialogue } from "./theme";
  import ButtonMD from "../buttons/ButtonMD.svelte";

  let {
    withState = true,
    headline,
    supportingText,
    confirmText,
    confirmAction,
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
    <div class={buttonContainer()}>
      <ButtonMD
        onclick={() => {
          if (withState) {
            window.history.back();
          } else {
            toggle();
          }
        }}
        color="text">Отмена</ButtonMD
      >
      <ButtonMD formaction={confirmAction} color="text">{confirmText}</ButtonMD>
    </div>
  </div>
</div>
