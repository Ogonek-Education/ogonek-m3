<script lang="ts">
  import { timepicker } from "./theme";
  import ButtonIcon from "../buttons/ButtonIcon.svelte";
  import ButtonMD from "../buttons/ButtonMD.svelte";
  import type { TimepickerProps } from "./types";

  const { label = "Enter time" }: TimepickerProps = $props();

  const { base, headline, fieldSeparator, timeInput, timeInputSupportingText } =
    timepicker();
</script>

<div class={base()}>
  <div class={headline()}>{label}</div>
  <div>
    <div>
      <input class={timeInput()} id="hour" type="text" />
      <p class={timeInputSupportingText()}>Часы</p>
    </div>
    <span class={fieldSeparator()}> : </span>
    <div>
      <input class={timeInput()} id="minute" type="text" />
      <p class={timeInputSupportingText()}>Минуты</p>
    </div>
  </div>
  <div>
    <ButtonIcon iconProps={{ name: "schedule" }} />
    <ButtonMD>Отмена</ButtonMD>
    <ButtonMD>Готово</ButtonMD>
  </div>
</div>
