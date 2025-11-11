<script lang="ts">
  import { Label } from "../label";
  import type { Theme } from "./types";

  let {
    theme,
    onclick,
    selected = false,
  }: {
    theme: Theme;
    onclick?: () => void;
    selected?: boolean;
  } = $props();

  // Hardcode the actual color values for each theme
  const themeColors: Record<
    Theme,
    {
      bgSolid: string;
      bgSecondary: string;
      accent: string;
      primary: string;
      secondary: string;
      tertiary: string;
      border: string;
    }
  > = {
    light: {
      bgSolid: "#ffffff",
      bgSecondary: "#f5f5f4",
      accent: "#e85f5c",
      primary: "#0c0a09",
      secondary: "#57534e",
      tertiary: "#a8a29e",
      border: "#e7e5e4",
    },
    dark: {
      bgSolid: "#0c0a09",
      bgSecondary: "#1c1917",
      accent: "#e85f5c",
      primary: "#fafaf9",
      secondary: "#a8a29e",
      tertiary: "#78716c",
      border: "#292524",
    },
    griso: {
      bgSolid: "#1e1e2e",
      bgSecondary: "#313244",
      accent: "#f38ba8",
      primary: "#cdd6f4",
      secondary: "#bac2de",
      tertiary: "#a6adc8",
      border: "#45475a",
    },
    gruvbox: {
      bgSolid: "#282828",
      bgSecondary: "#3c3836",
      accent: "#fabd2f",
      primary: "#ebdbb2",
      secondary: "#d5c4a1",
      tertiary: "#bdae93",
      border: "#504945",
    },
    atom: {
      bgSolid: "#1d1f21",
      bgSecondary: "#282a2e",
      accent: "#81a2be",
      primary: "#c5c8c6",
      secondary: "#969896",
      tertiary: "#707070",
      border: "#373b41",
    },
    auto: {
      bgSolid: "#ffffff",
      bgSecondary: "#f5f5f4",
      accent: "#e85f5c",
      primary: "#0c0a09",
      secondary: "#57534e",
      tertiary: "#a8a29e",
      border: "#e7e5e4",
    },
  };

  const colors = $derived(themeColors[theme]);
  const darkColors = $derived(themeColors.dark);
</script>

<button
  {onclick}
  type="button"
  class="group relative w-full overflow-hidden rounded-2xl border-2"
  class:border-accent={selected}
  class:border-primary={!selected}
>
  {#if theme === "auto"}
    <!-- Split preview for auto -->
    <div class="flex h-full">
      <div
        class="w-1/2 space-y-3 p-4"
        style="background-color: {colors.bgSolid};"
      >
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
      <div
        class="w-1/2 space-y-3 p-4"
        style="background-color: {darkColors.bgSolid};"
      >
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
  {:else}
    <!-- Regular theme preview -->
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
  {/if}

  {#if selected}
    <div
      class="absolute top-2 right-2 rounded-full p-1"
      style="background-color: {colors.accent};"
    >
      <svg class="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path
          fill-rule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
  {/if}
</button>
