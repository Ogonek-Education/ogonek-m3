<script lang="ts">
  import { onMount } from "svelte";
  import type { HTMLInputAttributes } from "svelte/elements";
  import type { TransitionConfig } from "svelte/transition";
  import { Textfield, TimepickerInput } from "$lib/components";
  import { easeEmphasized } from "$lib/animation";
  import { clickOutside, positionFloating } from "$lib/actions";
  import { enterExit } from "$lib/animation";

  let {
    label = "Время",
    value = $bindable(),
    required = false,
    disabled = false,
    error = false,
    datePickerTitle = "Pick date",
    ...restProps
  }: {
    label?: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    datePickerTitle?: string;
  } & HTMLInputAttributes = $props();

  const id = $props.id();

  let picker = $state(false);
  let anchorEl = $state<HTMLDivElement>();
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
    trailingIconProps={{ name: "timer" }}
    trailingOnClick={() => (picker = !picker)}
  >
    {#snippet supportingText()}
      ЧЧ-ММ
    {/snippet}
  </Textfield>

  <button
    title="time-overlay"
    class="absolute inset-0 cursor-pointer"
    type="button"
    onclick={() => (picker = !picker)}
    data-cy="calendar-time-toggle"
  ></button>

  {#if picker}
    <div
      class="picker"
      use:positionFloating={{ anchor: anchorEl, offset: 12 }}
      transition:enterExit
    >
      <TimepickerInput
        time={value}
        close={() => (picker = false)}
        setTime={(t) => (value = t)}
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
