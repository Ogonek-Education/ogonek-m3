<script lang="ts">
  import { timepicker } from "./theme.js";
  import Button from "../buttons/Button.svelte";
  import type { TimepickerProps } from "./types.js";
  import { ButtonIcon } from "../buttons/index.js";

  const {
    label = "Введите время",
    time = "09:41",
    close,
    setTime,
    name = "startTime",
  }: TimepickerProps = $props();

  const {
    base,
    headline,
    fieldSeparator,
    timeInput,
    timeInputSupportingText,
    clockDiv,
    buttonDiv,
    inputWrapper,
  } = timepicker();

  let hours = $state(time.split(":")[0]);
  let minutes = $state(time.split(":")[1]);

  const h = $derived(
    String(
      Math.min(23, Math.max(0, Number.parseInt(String(hours ?? "0"), 10) || 0)),
    ).padStart(2, "0"),
  );
  const m = $derived(
    String(
      Math.min(
        59,
        Math.max(0, Number.parseInt(String(minutes ?? "0"), 10) || 0),
      ),
    ).padStart(2, "0"),
  );

  const output = $derived(`${h}:${m}`);
</script>

<input type="hidden" {name} value={output} />

<div class={base()}>
  <div class={headline()}>{label}</div>
  <div class={clockDiv()}>
    <div class={inputWrapper()}>
      <input
        class={timeInput()}
        bind:value={hours}
        id="hour"
        type="text"
        inputmode="numeric"
        data-cy="calendar-time-hours"
      />
      <p class={timeInputSupportingText()}>Часы</p>
    </div>
    <span class={fieldSeparator()}> : </span>
    <div class={inputWrapper()}>
      <input
        class={timeInput()}
        bind:value={minutes}
        id="minute"
        type="text"
        inputmode="numeric"
        data-cy="calendar-time-minutes"
      />
      <p class={timeInputSupportingText()}>Минуты</p>
    </div>
  </div>
  <div class={buttonDiv()}>
    <ButtonIcon iconProps={{ name: "schedule" }} />
    <div>
      <Button
        variant="text"
        type="button"
        onclick={() => {
          close();
        }}>Отмена</Button
      >
      <Button
        variant="text"
        type="button"
        onclick={() => {
          setTime(output);
          close();
        }}
        data-cy="calendar-time-confirm">Готово</Button
      >
    </div>
  </div>
</div>
