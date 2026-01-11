<script lang="ts">
  import { Button, Tooltip, VStack } from "$lib/components";
  import { tutorial } from "$lib/stores";
  import type { Placement } from "@floating-ui/dom";
  import { type Snippet } from "svelte";

  let {
    children,
    triggerClass = "size-full",
    slug,
    showArrow = true,
    showScrim = true,
  }: {
    children: Snippet;
    triggerClass?: string;
    slug?: string | string[];
    showArrow?: boolean;
    showScrim?: boolean;
  } = $props();

  const { activeStep, stepIndex, isLastStep, prev, next, steps } = tutorial;

  const slugs = $derived(Array.isArray(slug) ? slug : [slug]);
  const step = $derived(
    $activeStep && slugs.includes($activeStep.slug)
      ? $activeStep
      : $steps?.find((item) => item.slug === slugs[0]),
  );
  const isActive = $derived(
    Boolean($activeStep && slugs.includes($activeStep.slug)),
  );
</script>

{#if slug}
  <Tooltip
    trigger={children}
    supportingText={step?.body}
    {triggerClass}
    placement={(step?.position ?? "bottom") as Placement}
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
        <Button variant="text" type="button" onclick={prev}>Назад</Button>
      {/if}
      <Button
        class="bg-md-sys-color-tertiary"
        variant="filled"
        type="button"
        onclick={next}>{$isLastStep ? "Готово" : "Далее"}</Button
      >
    </VStack>
  </Tooltip>
{:else}
  {@render children()}
{/if}
