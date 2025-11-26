<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { TransitionConfig } from "svelte/transition";
  import { Textfield } from "$lib/components";
  import { easeEmphasized } from "$lib/components";
  import DatePickerDocked from "./DatePickerDocked.svelte";
  import { clickOutside, positionFloating } from "$lib/actions";

  let {
    label = "Дата",
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
  let anchorEl = $state<HTMLDivElement>();

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
  bind:this={anchorEl}
  use:clickOutside={() => {
    picker = false;
  }}
>
  <Textfield
    {id}
    {label}
    {value}
    class="pointer-events-none"
    trailingIconProps={{ name: "calendar_month" }}
    trailingOnClick={() => (picker = !picker)}
  >
    {#snippet supportingText()}
      ДД-ММ-ГГГГ
    {/snippet}
  </Textfield>

  <button
    title="date-overlay"
    class="absolute inset-0 cursor-pointer"
    onclick={() => (picker = !picker)}
  ></button>

  {#if picker}
    <div
      class="picker"
      use:positionFloating={{ anchor: anchorEl, offset: 12 }}
      transition:enterExit
    >
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
  .picker {
    z-index: 1;
    position: absolute;
  }
</style>
