<script lang="ts">
  import { Layer } from "$lib/components";
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

  const { item } = calendarpicker({ selected, today });
</script>

<button
  type="button"
  class={item()}
  {disabled}
  class:today
  class:selected
  {onclick}
>
  <Layer />
  {label}
</button>
