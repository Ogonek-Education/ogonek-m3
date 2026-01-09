<script lang="ts">
  import { Button, Tooltip, VStack } from "$lib/components";
  import { tutorial } from "$lib/stores";
  import { type Snippet } from "svelte";

  let {
    children,
    triggerClass = "w-full",
    id,
    showArrow = true,
    showScrim = true,
  }: {
    children: Snippet;
    triggerClass?: string;
    id: number;
    showArrow?: boolean;
    showScrim?: boolean;
  } = $props();

  const { activeStep, stepIndex, isLastStep, prev, next, stop, steps } =
    tutorial;

  const step = $derived($steps?.find((item) => item.id === id));
  const isActive = $derived(id === $activeStep?.id);
</script>

<Tooltip
  trigger={children}
  supportingText={step?.body}
  {triggerClass}
  placement="bottom"
  interaction="manual"
  strategy="fixed"
  isOpen={isActive && $tutorial.isActive}
  style="primary"
  tutorial
  {showArrow}
  {showScrim}
>
  <VStack class="self-end">
    {#if $stepIndex > 0}
      <Button variant="text" onclick={prev}>Назад</Button>
    {/if}
    <Button variant="bare" onclick={stop}>Пропустить</Button>
    <Button class="bg-md-sys-color-tertiary" variant="filled" onclick={next}
      >{$isLastStep ? "Готово" : "Далее"}</Button
    >
  </VStack>
</Tooltip>
