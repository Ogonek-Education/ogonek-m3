<script lang="ts">
  import { timepicker } from "./theme";
  import ButtonIcon from "../buttons/ButtonIcon.svelte";
  import Button from "../buttons/Button.svelte";
  import type { TimepickerProps } from "./types";

  const {
    label = "Введите время",
    value = $bindable("09:41"),
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

  let hours = $state(value.split(":")[0]);
  let minutes = $state(value.split(":")[1]);

  const h = $derived(hours.padStart(2, "0"));
  const m = $derived(minutes.padStart(2, "0"));

  const output = $derived(`${h}:${m}`);
</script>

<input type="hidden" {name} value={output} />

<div class={base()}>
  <div class={headline()}>{label}</div>
  <div class={clockDiv()}>
    <div class={inputWrapper()}>
      <input class={timeInput()} bind:value={hours} id="hour" />
      <p class={timeInputSupportingText()}>Часы</p>
    </div>
    <span class={fieldSeparator()}> : </span>
    <div class={inputWrapper()}>
      <input
        class={timeInput()}
        bind:value={minutes}
        id="minute"
        type="number"
      />
      <p class={timeInputSupportingText()}>Минуты</p>
    </div>
  </div>
  <div class={buttonDiv()}>
    <ButtonIcon iconProps={{ name: "schedule" }} />
    <div>
      <Button variant="text">Отмена</Button>
      <Button variant="text">Готово</Button>
    </div>
  </div>
</div>
