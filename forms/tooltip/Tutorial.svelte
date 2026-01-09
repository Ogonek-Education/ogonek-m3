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
    id: number | number[];
    showArrow?: boolean;
    showScrim?: boolean;
  } = $props();

  const { activeStep, stepIndex, isLastStep, prev, next, stop, steps } =
    tutorial;

  const ids = $derived(Array.isArray(id) ? id : [id]);
  const step = $derived(
    $activeStep && ids.includes($activeStep.id)
      ? $activeStep
      : $steps?.find((item) => item.id === ids[0]),
  );
  const isActive = $derived(
    Boolean($activeStep && ids.includes($activeStep.id)),
  );

  $inspect($steps);
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
    <Button class="bg-md-sys-color-tertiary" variant="filled" onclick={next}
      >{$isLastStep ? "Готово" : "Далее"}</Button
    >
  </VStack>
</Tooltip>
