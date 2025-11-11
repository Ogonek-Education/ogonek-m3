<script lang="ts">
  import clsx from "clsx";
  import type { DarkmodeProps, Theme } from "./types";
  import {
    Moon,
    Sun,
    Palette,
    Monitor,
    TreeDeciduous,
    Coffee,
    Atom,
  } from "@lucide/svelte";
  import { clickOutside } from "$lib/actions";
  import { themes, themeSelector } from "./theme";
  import { onMount } from "svelte";
  import ThemePreview from "./ThemePreview.svelte";
  import { Heading, P } from "../../typography";
  import { HStack, InputMerger } from "../../layout";
  import { Label } from "../label";

  let {
    class: className,
    "aria-label": ariaLabel = "Toggle theme",
    showThemeSelector = false,
    ...restProps
  }: DarkmodeProps = $props();

  let currentTheme = $state<Theme>("auto");
  let showDropdown = $state(false);
  let systemPreference = $state<"light" | "dark">("light");

  // Track system preference changes
  $effect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateSystemPreference = (
      e: MediaQueryListEvent | MediaQueryList,
    ) => {
      systemPreference = e.matches ? "dark" : "light";
      if (currentTheme === "auto") {
        applyTheme("auto");
      }
    };

    updateSystemPreference(mediaQuery);
    mediaQuery.addEventListener("change", updateSystemPreference);

    return () =>
      mediaQuery.removeEventListener("change", updateSystemPreference);
  });

  // Initialize theme on mount
  onMount(() => {
    const stored = localStorage.getItem("THEME_PREFERENCE_KEY") as Theme;
    if (stored && themes.some((t) => t.value === stored)) {
      currentTheme = stored;
      applyTheme(stored);
    } else {
      currentTheme = "auto";
      applyTheme("auto");
    }
  });

  const applyTheme = (theme: Theme) => {
    const doc = document.documentElement;

    // Remove all theme attributes and classes
    doc.classList.remove("dark");
    doc.removeAttribute("data-theme");

    // Apply new theme
    if (theme === "auto") {
      // Use system preference
      if (systemPreference === "dark") {
        doc.setAttribute("data-theme", "dark");
      }
      // light is default, no attribute needed
    } else if (theme === "light") {
      // light is default, no attribute needed
    } else {
      // dark, griso, gruvbox, atom
      doc.setAttribute("data-theme", theme);
    }
  };

  const setTheme = (theme: Theme) => {
    currentTheme = theme;
    applyTheme(theme);
    localStorage.setItem("THEME_PREFERENCE_KEY", theme);
    showDropdown = false;
  };
</script>

{#if !showThemeSelector}
  <div class="relative">
    <button
      onclick={() => (showDropdown = !showDropdown)}
      aria-label={ariaLabel}
      type="button"
      {...restProps}
      class={themeSelector({ class: clsx(className) })}
      tabindex={0}
    >
      {#if currentTheme === "auto"}
        <Monitor />
      {:else if currentTheme === "light"}
        <Sun />
      {:else if currentTheme === "dark"}
        <Moon />
      {:else if currentTheme === "griso"}
        <Coffee />
      {:else if currentTheme === "gruvbox"}
        <TreeDeciduous />
      {:else if currentTheme === "atom"}
        <Atom />
      {:else}
        <Palette />
      {/if}
    </button>

    {#if showDropdown}
      <div
        use:clickOutside={() => (showDropdown = false)}
        class="bg-bg-primary border-primary absolute right-0 bottom-10 z-50 w-48 border"
        role="menu"
      >
        {#each themes as theme}
          <button
            onclick={() => setTheme(theme.value)}
            class={clsx(
              "hover:bg-bg-secondary flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors first:rounded-t-2xl last:rounded-b-2xl",
              currentTheme === theme.value && "text-accent ",
            )}
            role="menuitem"
          >
            <theme.Icon></theme.Icon>
            {theme.label}
            {#if theme.value === "auto"}
              <span class="text-secondary ml-auto text-xs">
                ({systemPreference})
              </span>
            {/if}
          </button>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <HStack justify="between">
    <Heading>Тема</Heading>
    <div class="grid w-full grid-cols-2 gap-4 md:grid-cols-2">
      {#each themes as theme}
        <InputMerger>
          <Label
            name={theme.label}
            clarification={theme.fav ? favouriteTheme : undefined}
          >
            <ThemePreview
              theme={theme.value}
              selected={currentTheme === theme.value}
              onclick={() => setTheme(theme.value)}
            />
          </Label>
        </InputMerger>
      {/each}
    </div>
  </HStack>
{/if}

{#snippet favouriteTheme()}
  <P>Наш фаворит 💛</P>
{/snippet}
