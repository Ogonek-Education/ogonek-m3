<script lang="ts">
  import clsx from "clsx";
  import { timepicker } from "./theme";
  import { parse, isValid, isBefore, isAfter } from "date-fns";
  import type { TimepickerProps } from "./types";
  import { ButtonGroup } from "../../buttons";
  import { Input } from "../input";
  import { Clock8 } from "@lucide/svelte";

  let {
    id = "time",
    endId = "time-end",
    value = $bindable("00:00"),
    endValue = $bindable("00:00"),
    min = "",
    max = "",
    type = "default",
    required = true,
    disabled = false,
    inputColor,
    Icon,
    iconClass = "h-5 w-5 text-gray-500 dark:text-gray-400",
    optionLabel = "Options",
    options = [],
    size = "md",
    divClass,
    inputClass,
    onselect,
  }: TimepickerProps = $props();

  // Generate theme classes
  const styles = timepicker({ disabled });

  // State
  let selectedOption = $state("");
  let showTimerange = $state(false);

  // Helper functions using date-fns
  function parseTime(time: string): Date | null {
    if (!time) return null;
    const parsed = parse(time, "HH:mm", new Date());
    return isValid(parsed) ? parsed : null;
  }

  function timeToMinutes(time: string): number {
    const date = parseTime(time);
    return date ? date.getHours() * 60 + date.getMinutes() : 0;
  }

  function isValidTimeFormat(time: string): boolean {
    return parseTime(time) !== null;
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

  function handleTimeChange(event: Event, isEndTime: boolean = false): void {
    const target = event.target as HTMLInputElement;
    const newValue = target.value;

    // Validate time format
    if (!isValidTimeFormat(newValue)) {
      target.value = isEndTime ? endValue : value;
      return;
    }

    // Validate against min/max constraints
    if (!isTimeInRange(newValue, min, max)) {
      target.value = isEndTime ? endValue : value;
      return;
    }

    // Use date-fns for reliable time comparison
    const newValueMinutes = timeToMinutes(newValue);
    const valueMinutes = timeToMinutes(value);
    const endValueMinutes = timeToMinutes(endValue);

    if (isEndTime) {
      if (newValueMinutes < valueMinutes) {
        // Only update start time if it respects min/max constraints
        if (isTimeInRange(newValue, min, max)) {
          value = newValue;
        } else {
          target.value = endValue;
          return;
        }
      } else {
        endValue = newValue;
      }
    } else {
      if (newValueMinutes > endValueMinutes) {
        // Only update end time if it respects min/max constraints
        if (isTimeInRange(newValue, min, max)) {
          endValue = newValue;
        } else {
          target.value = value;
          return;
        }
      } else {
        value = newValue;
      }
    }

    notifyChange();
  }

  function notifyChange(): void {
    if (onselect) {
      onselect({
        time: value,
        endTime: endValue,
        [optionLabel ? optionLabel.toLowerCase() : "options"]:
          selectedOption || options[0]?.value || "",
      });
    }
  }

  // Ensure initial values are valid
  $effect(() => {
    if (!isValidTimeFormat(value)) {
      value = "00:00";
    }
    if (!isValidTimeFormat(endValue)) {
      endValue = "00:00";
    }
  });
</script>

<ButtonGroup {size} class={styles.buttonGroup({ class: clsx(divClass) })}>
  {#if type === "default"}
    <Input
      {id}
      color={inputColor}
      type="time"
      {min}
      {max}
      {required}
      {disabled}
      class={styles.input({
        class: clsx(styles.inputWithIcon(), inputClass),
      })}
      bind:value
      oninput={(e: any) => handleTimeChange(e)}
      onchange={(e: any) => handleTimeChange(e)}
    />
    <div class={styles.iconWrapper()}>
      {#if Icon}
        <Icon class={iconClass} />
      {:else}
        <Clock8 />
      {/if}
    </div>
  {:else if type === "range"}
    <div class={styles.rangeInputWrapper()}>
      <Input
        {id}
        color={inputColor}
        type="time"
        {min}
        {max}
        {required}
        {disabled}
        class={styles.input({
          class: clsx(styles.rangeInput(), inputClass),
        })}
        bind:value
        oninput={(e: any) => handleTimeChange(e)}
        onchange={(e: any) => handleTimeChange(e)}
      />
      <button
        type="button"
        class={styles.rangeButton()}
        onclick={() => document.getElementById(id)?.click()}
        aria-label="Open time picker"
      >
        {#if Icon}
          <Icon class={iconClass} />
        {:else}
          <Clock8 />
        {/if}
      </button>
    </div>
    <span class={styles.rangeSeparator()}>-</span>
    <div class={styles.rangeInputWrapper()}>
      <Input
        id={endId}
        color={inputColor}
        type="time"
        {min}
        {max}
        {required}
        {disabled}
        class={styles.input({
          class: clsx(styles.rangeInput()),
        })}
        bind:value={endValue}
        oninput={(e: any) => handleTimeChange(e, true)}
        onchange={(e: any) => handleTimeChange(e, true)}
      />
      <button
        type="button"
        class={styles.rangeButton()}
        onclick={() => document.getElementById(endId)?.click()}
        aria-label="Open end time picker"
      >
        {#if Icon}
          <Icon class={iconClass} />
        {:else}
          <Clock8 />
        {/if}
      </button>
    </div>
  {/if}
</ButtonGroup>
