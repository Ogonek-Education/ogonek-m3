<script lang="ts">
  import clsx from "clsx";
  import type { DarkmodeProps } from "./types";
  import {
    Moon,
    Sun,
    Palette,
    Icon,
    Monitor,
    TreeDeciduous,
    Coffee,
    Atom,
  } from "@lucide/svelte";
  import { clickOutside } from "$lib/actions";
  import { darkmode } from "./theme";

  type Theme = "light" | "dark" | "griso" | "gruvbox" | "atom" | "auto";

  let {
    class: className,
    "aria-label": ariaLabel = "Toggle theme",
    showThemeSelector = false,
    ...restProps
  }: DarkmodeProps = $props();

  let currentTheme = $state<Theme>("auto");
  let showDropdown = $state(false);
  let systemPreference = $state<"light" | "dark">("light");

  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const themes: { value: Theme; label: string; Icon?: typeof Icon }[] = [
    { value: "auto", label: "Auto", Icon: Monitor },
    { value: "light", label: "Light", Icon: Sun },
    { value: "dark", label: "Dark", Icon: Moon },
    { value: "griso", label: "Griso", Icon: Coffee },
    { value: "gruvbox", label: "Gruvbox", Icon: TreeDeciduous },
    { value: "atom", label: "Atom", Icon: Atom },
  ];

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
  $effect(() => {
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

  const cycleTheme = (ev: MouseEvent) => {
    const currentIndex = themes.findIndex((t) => t.value === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  const getEffectiveTheme = () => {
    if (currentTheme === "auto") {
      return systemPreference;
    }
    return currentTheme;
  };
</script>

<svelte:head>
  <script>
    (function () {
      const stored = localStorage.getItem("THEME_PREFERENCE_KEY");
      const themes = ["light", "dark", "griso", "gruvbox", "atom", "auto"];

      if (stored && themes.includes(stored)) {
        if (stored === "auto") {
          if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.setAttribute("data-theme", "dark");
          }
        } else if (stored === "light") {
          // light is default, no attribute needed
        } else {
          // dark, griso, gruvbox, atom
          document.documentElement.setAttribute("data-theme", stored);
        }
      } else {
        // Default to auto
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.setAttribute("data-theme", "dark");
        }
      }
    })();
  </script>
</svelte:head>
<div class="relative">
  <button
    onclick={() => (showDropdown = !showDropdown)}
    aria-label={ariaLabel}
    type="button"
    {...restProps}
    class={darkmode({ class: clsx(className) })}
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
      class="bg-bg-solid border-primary absolute right-0 bottom-10 z-50 w-48 border"
      role="menu"
    >
      {#each themes as theme}
        <button
          onclick={() => setTheme(theme.value)}
          class={clsx(
            "hover:bg-bg-material flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors first:rounded-t-2xl last:rounded-b-2xl",
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
