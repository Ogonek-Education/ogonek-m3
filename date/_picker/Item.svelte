<script lang="ts">
  import { calendarpicker } from "../theme";

  let {
    disabled,
    today,
    selected,
    label,
    onclick,
  }: {
    disabled: boolean;
    today: boolean;
    selected: boolean;
    label: string;
    onclick: () => void;
  } = $props();

  const { item } = $derived(calendarpicker({ selected, today }));
</script>

<button
  type="button"
  class={item()}
  {disabled}
  {onclick}
  data-cy="calendar-picker-day"
>
  {label}
</button>
