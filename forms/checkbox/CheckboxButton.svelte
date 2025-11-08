<script lang="ts">
  import clsx from "clsx";
  import Checkbox from "./Checkbox.svelte";
  import { checkboxButton } from "./theme";
  import type { CheckboxButtonProps } from "./types";
  import { Button } from "../../buttons";

  let {
    children,
    class: className,
    group = $bindable(),
    checked = $bindable(false),
    inline,
    pill,
    size,
    color,
    ...restProps
  }: CheckboxButtonProps = $props();

  let buttonClass: string = $derived(
    checkboxButton({ inline, checked, class: clsx(className) }),
  );
</script>

<Button tag="label" {pill} {size} {color} class={buttonClass}>
  <Checkbox bind:group bind:checked {...restProps} class="sr-only"></Checkbox>
  {@render children?.()}
</Button>
