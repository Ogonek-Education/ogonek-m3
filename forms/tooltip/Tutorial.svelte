<script lang="ts">
  import { Button, HStack, Tooltip, VStack } from "$lib/components";
  import type { TutorialStep } from "$lib/utils";
  import { type Snippet } from "svelte";

  let {
    children,
    id,
    tutorialStepIndex = $bindable(),
    steps,
    stop,
  }: {
    children: Snippet;
    id: number;
    tutorialStepIndex: number;
    steps: readonly TutorialStep[];
    stop?: () => void;
  } = $props();

  $inspect(steps, "STEPS IN TUTORIAL");

  const isLastStep = $derived(
    steps ? tutorialStepIndex >= steps.length - 1 : false,
  );

  function nextStep() {
    if (isLastStep) {
      stop?.();
      return;
    }
    tutorialStepIndex += 1;
  }

  function prevStep() {
    if (tutorialStepIndex > 0) {
      tutorialStepIndex -= 1;
    }
  }

  const step = $derived(steps?.[id]);
  const isActive = $derived(id === tutorialStepIndex);
</script>

<Tooltip
  trigger={children}
  supportingText={step?.body}
  triggerClass="w-full"
  placement="bottom"
  interaction="manual"
  strategy="fixed"
  isOpen={isActive}
  style="tertiary"
  tutorial
>
  <VStack class="self-end">
    {#if tutorialStepIndex > 0}
      <Button variant="outlined" onclick={prevStep}>Назад</Button>
    {/if}
    <Button variant="bare" onclick={stop}>Пропустить</Button>
    <Button variant="filled" onclick={nextStep}
      >{isLastStep ? "Готово" : "Далее"}</Button
    >
  </VStack>
</Tooltip>
