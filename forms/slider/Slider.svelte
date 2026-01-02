<script lang="ts">
  import clsx from "clsx";
  import Icon from "../../utils/icon/Icon.svelte";
  import { Spring } from "svelte/motion";
  import { slider } from "./theme";
  import type { SliderProps } from "./types";

  let {
    value = $bindable(),
    min = 0,
    max = 100,
    step = "any",
    disabled = false,
    showValue = true,
    size = "xs",
    leadingIconProps,
    trailingIconProps,
    stops = false,
    endStops = true,
    vertical = false,
    format = (n: number) => {
      return n.toFixed(0);
    },
    class: className,
    ...extra
  }: SliderProps = $props();

  const {
    root,
    input,
    leadingIcon,
    leadingIconPop,
    trailingIcon,
    trailingIconPop,
    trackFill,
    trackRest,
    stopBase,
    stopFill,
    stopRest,
    handle: handleCls,
    value: valueCls,
  } = $derived(slider({ size, vertical }));

  let offsetWidth = $state(600);
  let offsetHeight = $state(600);
  let inlineSize = $derived(vertical ? offsetHeight : offsetWidth);

  const valueDisplayed = new Spring(value, { stiffness: 0.3, damping: 1 });
  const updateValue = (
    e: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) => {
    const newValue = Number(e.currentTarget.value);
    e.preventDefault();
    value = newValue;
  };
  $effect(() => {
    valueDisplayed.target = value;
  });

  const range = $derived(max - min);
  const handlePosition = $derived((valueDisplayed.current - min) / range);
  const stopList = $derived.by(() => {
    const output: number[] = [];
    const add = (stopValue: number) => {
      if (leadingIconProps && stopValue == 0) return;
      if (trailingIconProps && stopValue == 1) return;
      output.push(stopValue);
    };

    if (stops && typeof step == "number") {
      for (let i = 0; i <= range; i += step) add(i / range);
    }
    if (endStops && !output.includes(1)) {
      add(1);
    }

    return output;
  });
</script>

<div
  class={root({ class: clsx(className) })}
  style:--handle={handlePosition - 0.5}
  bind:offsetWidth
  bind:offsetHeight
>
  <input
    type="range"
    oninput={updateValue}
    value={valueDisplayed.current}
    {min}
    {max}
    {step}
    {disabled}
    {...extra}
    class={input({ class: clsx(vertical && "translate-x-0 translate-y-1/2") })}
  />
  <div
    class={trackFill({
      class: clsx(
        vertical &&
          "[clip-path:inset(calc(100%-var(--handle-left))_0_0_0_round_var(--m3-slider-track-in-shape)_var(--m3-slider-track-in-shape)_var(--track-radius)_var(--track-radius))]",
      ),
    })}
  >
    {#each stopList as stop}
      <div
        class={clsx(
          stopBase(),
          stopFill(),
          vertical
            ? "-translate-x-1/2 translate-y-1/2"
            : "-translate-x-1/2 -translate-y-1/2",
        )}
        style:--x={stop - 0.5}
      ></div>
    {/each}
  </div>
  <div
    class={trackRest({
      class: clsx(
        vertical &&
          "[clip-path:inset(0_0_var(--handle-right)_0_round_var(--track-radius)_var(--track-radius)_var(--m3-slider-track-in-shape)_var(--m3-slider-track-in-shape))]",
      ),
    })}
  >
    {#each stopList as stop}
      <div
        class={clsx(
          stopBase(),
          stopRest(),
          vertical
            ? "-translate-x-1/2 translate-y-1/2"
            : "-translate-x-1/2 -translate-y-1/2",
        )}
        style:--x={stop - 0.5}
      ></div>
    {/each}
  </div>
  {#if leadingIconProps}
    <Icon
      class={leadingIcon({
        class: clsx(
          leadingIconProps.class,
          inlineSize * handlePosition < (size == "xl" ? 48 : 40) &&
            leadingIconPop(),
          vertical && "translate-x-[-50%] translate-y-0",
        ),
      })}
      {...leadingIconProps}
    />
  {/if}
  {#if trailingIconProps}
    <Icon
      class={trailingIcon({
        class: clsx(
          trailingIconProps.class,
          inlineSize * (1 - handlePosition) < (size == "xl" ? 48 : 40) &&
            trailingIconPop(),
          vertical && "translate-x-[-50%] translate-y-0",
        ),
      })}
      {...trailingIconProps}
    />
  {/if}
  <div
    class={handleCls({
      class: clsx(vertical ? "translate-y-1/2" : "-translate-x-1/2"),
    })}
  ></div>
  {#if showValue}
    <div
      class={valueCls({
        class: clsx(
          vertical
            ? "translate-x-0 translate-y-1/2 rotate-90"
            : "-translate-x-1/2",
        ),
      })}
    >
      {format(value)}
    </div>
  {/if}
</div>

<style>
  @layer tokens {
    :root {
      --m3-slider-track-out-shape: 0.5rem;
      --m3-slider-track-in-shape: 0.125rem;
      --m3-slider-handle-shape: calc(infinity * 1px);
    }
  }
</style>
