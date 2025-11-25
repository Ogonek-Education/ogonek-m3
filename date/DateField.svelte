<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { TransitionConfig } from "svelte/transition";
  import { Textfield } from "$lib/components";
  import { easeEmphasized } from "$lib/components";
  import DatePickerDocked from "./DatePickerDocked.svelte";
  import { clickOutside } from "$lib/actions";

  let {
    label,
    value = $bindable(),
    required = false,
    disabled = false,
    error = false,
    datePickerTitle = "Pick date",
    ...restProps
  }: {
    label: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    datePickerTitle?: string;
  } & HTMLInputAttributes = $props();

  const id = $props.id();

  let picker = $state(false);

  const enterExit = (_: Node): TransitionConfig => {
    return {
      duration: 400,
      easing: easeEmphasized,
      css: (t, u) => `clip-path: inset(-100% 0 ${u * 100}% 0 round 1rem);
transform-origin: top;
transform: scaleY(${(t * 0.3 + 0.7) * 100}%);
opacity: ${Math.min(t * 3, 1)};`,
    };
  };
</script>

<div
  class="relative w-full"
  use:clickOutside={() => {
    picker = false;
  }}
>
  <Textfield
    {id}
    {label}
    bind:value
    trailingIconProps={{ name: "calendar_month" }}
    trailingOnClick={() => (picker = !picker)}
  >
    {#snippet supportingText()}
      ДД-ММ-ГГГГ
    {/snippet}
  </Textfield>

  {#if picker}
    <div class="picker" transition:enterExit>
      <DatePickerDocked
        date={value}
        clearable={!required}
        close={() => (picker = false)}
        setDate={(d) => (value = d)}
      />
    </div>
  {/if}
</div>

<style>
  @position-try --picker-bottom-right {
    position-area: bottom center;
    justify-self: end;
    margin-block-start: 1rem;
  }
  @position-try --picker-top-left {
    position-area: top center;
    justify-self: start;
    margin-block-end: 1rem;
  }
  @position-try --picker-top-right {
    position-area: top center;
    justify-self: end;
    margin-block-end: 1rem;
  }

  .picker {
    @supports not (anchor-name: --a) {
      position: absolute;
      top: calc(100% + 1rem);
      right: 0;
    }
    @supports (anchor-name: --a) {
      position: fixed;
      position-anchor: var(--anchor-name);
      /* Default */
      position-area: bottom center;
      justify-self: start;
      margin-block-start: 1rem;
      /* Alternatives */
      position-try-fallbacks:
        --picker-bottom-right, --picker-top-left, --picker-top-right;
    }
    z-index: 1;
  }
</style>
