<script lang="ts">
  import clsx from "clsx";
  import { parse, isValid, isBefore, isAfter } from "date-fns";
  import { Input } from "../..";
  import { Clock } from "@lucide/svelte";
  import type { TimepickerProps } from "./types";

  let {
    id = "time",
    value = $bindable("00:00"),
    min = "",
    max = "",
    required = false,
    disabled = false,
    iconClass = "h-5 w-5 text-stone-500 dark:text-stone-400",
    inputClass = "",
    onchange,
  }: TimepickerProps = $props();

  // Validation helpers
  function parseTime(time: string): Date | null {
    if (!time) return null;
    const parsed = parse(time, "HH:mm", new Date());
    return isValid(parsed) ? parsed : null;
  }

  function isTimeInRange(
    time: string,
    minTime: string,
    maxTime: string,
  ): boolean {
    const timeDate = parseTime(time);
    if (!timeDate) return false;

    if (minTime) {
      const minDate = parseTime(minTime);
      if (minDate && isBefore(timeDate, minDate)) return false;
    }

    if (maxTime) {
      const maxDate = parseTime(maxTime);
      if (maxDate && isAfter(timeDate, maxDate)) return false;
    }

    return true;
  }

  function handleInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    // Validate format
    if (!parseTime(newValue)) {
      target.value = value;
      return;
    }

    // Validate range
    if (min || max) {
      if (!isTimeInRange(newValue, min, max)) {
        target.value = value;
        return;
      }
    }

    value = newValue;
    onchange?.(value);
  }

  // Ensure valid initial value
  $effect(() => {
    if (!parseTime(value)) {
      value = "00:00";
    }
  });
</script>

<div class={clsx("relative")}>
  <Input
    {id}
    type="time"
    {min}
    {max}
    {required}
    {disabled}
    class={clsx("block w-full ps-10", inputClass)}
    bind:value
    oninput={handleInput}
    onchange={handleInput}
  />
  <div
    class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
  >
    <Clock class={iconClass} />
  </div>
</div>
