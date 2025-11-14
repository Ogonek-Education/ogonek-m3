<script lang="ts">
  import { Check } from "@lucide/svelte";
  import { Label } from "../label";
  import type { Theme } from "./types";
  import { themes } from "./theme";

  let {
    theme,
    onclick,
    selected = false,
    class: className,
  }: {
    theme: Theme;
    onclick?: () => void;
    selected?: boolean;
    class?: string;
  } = $props();

  const { colors, description, label } = $derived(themes[theme]);
  const darkColors = $derived(themes["dark"].colors);
</script>

{#snippet descriptionSnippet()}
  {description}
{/snippet}

<Label name={label} clarification={descriptionSnippet}>
  <button
    {onclick}
    type="button"
    class="group relative w-full overflow-hidden rounded-2xl border-2"
    class:border-accent={selected}
    class:border-primary={!selected}
    data-cy={`theme-option-${theme}`}
  >
    {#if theme === "auto"}
      {@render autoTheme()}
    {:else}
      {@render regularTheme()}
    {/if}

    {#if selected}
      <div
        class="absolute top-2 right-2 rounded-full p-1"
        style="background-color: {colors.accent};"
      >
        <Check class="text-text-white size-4"></Check>
      </div>
    {/if}
  </button>
</Label>

{#snippet regularTheme()}
  <div class="space-y-3 p-4" style="background-color: {colors.bgSolid};">
    <div class="flex items-center gap-2">
      <div
        class="h-3 w-3 rounded-full"
        style="background-color: {colors.accent};"
      ></div>
      <div
        class="h-3 w-3 rounded-full"
        style="background-color: {colors.secondary};"
      ></div>
      <div
        class="h-3 w-3 rounded-full"
        style="background-color: {colors.tertiary};"
      ></div>
    </div>
    <div
      class="space-y-2 rounded p-3"
      style="background-color: {colors.bgSecondary};"
    >
      <div
        class="h-2 w-3/4 rounded"
        style="background-color: {colors.primary};"
      ></div>
      <div
        class="h-2 w-full rounded"
        style="background-color: {colors.secondary};"
      ></div>
      <div
        class="h-2 w-1/2 rounded"
        style="background-color: {colors.tertiary};"
      ></div>
    </div>
    <div class="flex gap-2">
      <div
        class="h-6 flex-1 rounded px-3"
        style="background-color: {colors.accent};"
      ></div>
      <div
        class="h-6 flex-1 rounded border px-3"
        style="border-color: {colors.border};"
      ></div>
    </div>
  </div>
{/snippet}

{#snippet autoTheme()}
  <div class="flex flex-col items-stretch">
    <div class=" space-y-3 p-4" style="background-color: {colors.bgSolid};">
      <div class="flex items-center gap-1">
        <div
          class="h-2 w-2 rounded-full"
          style="background-color: {colors.accent};"
        ></div>
        <div
          class="h-2 w-2 rounded-full"
          style="background-color: {colors.secondary};"
        ></div>
      </div>
      <div
        class="space-y-1.5 rounded p-2"
        style="background-color: {colors.bgSecondary};"
      >
        <div
          class="h-1.5 w-3/4 rounded"
          style="background-color: {colors.primary};"
        ></div>
        <div
          class="h-1.5 w-full rounded"
          style="background-color: {colors.secondary};"
        ></div>
      </div>
    </div>
    <div class="space-y-3 p-4" style="background-color: {darkColors.bgSolid};">
      <div class="flex items-center gap-1">
        <div
          class="h-2 w-2 rounded-full"
          style="background-color: {darkColors.accent};"
        ></div>
        <div
          class="h-2 w-2 rounded-full"
          style="background-color: {darkColors.secondary};"
        ></div>
      </div>
      <div
        class="space-y-1.5 rounded p-2"
        style="background-color: {darkColors.bgSecondary};"
      >
        <div
          class="h-1.5 w-3/4 rounded"
          style="background-color: {darkColors.primary};"
        ></div>
        <div
          class="h-1.5 w-full rounded"
          style="background-color: {darkColors.secondary};"
        ></div>
      </div>
    </div>
  </div>
{/snippet}
