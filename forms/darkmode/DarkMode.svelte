<script lang="ts">
  import { darkmode } from "./theme";
  import clsx from "clsx";
  import type { DarkmodeProps } from "./types";
  import { Moon, Sun, Palette, Icon } from "@lucide/svelte";

  type Theme = "light" | "dark" | "griso" | "gruvbox" | "nord";

  let {
    class: className,
    lightIcon,
    darkIcon,
    size = "md",
    "aria-label": ariaLabel = "Toggle theme",
    showThemeSelector = false, // New prop to show dropdown vs toggle
    ...restProps
  }: DarkmodeProps = $props();

  let currentTheme = $state<Theme>("light");
  let showDropdown = $state(false);

  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const themes: { value: Theme; label: string; Icon?: typeof Icon }[] = [
    { value: "light", label: "Light", Icon: Sun },
    { value: "dark", label: "Dark", Icon: Moon },
    { value: "griso", label: "Griso", Icon: Palette },
  ];

  // Initialize theme on mount
  $effect(() => {
    const stored = localStorage.getItem("THEME_PREFERENCE_KEY") as Theme;
    if (stored && themes.some((t) => t.value === stored)) {
      currentTheme = stored;
      applyTheme(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      currentTheme = "dark";
      applyTheme("dark");
    }
  });

  const applyTheme = (theme: Theme) => {
    const doc = document.documentElement;

    // Remove all theme classes
    doc.classList.remove("dark");
    themes.forEach((t) => doc.removeAttribute("data-theme"));

    // Apply new theme
    if (theme === "dark") {
      doc.classList.add("dark");
    } else if (theme !== "light") {
      doc.setAttribute("data-theme", theme);
    }
  };

  const setTheme = (theme: Theme) => {
    currentTheme = theme;
    applyTheme(theme);
    localStorage.setItem("THEME_PREFERENCE_KEY", theme);
    showDropdown = false;
  };

  // Simple toggle between light/dark (original behavior)
  const toggleTheme = (ev: MouseEvent) => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  // Cycle through all themes
  const cycleTheme = (ev: MouseEvent) => {
    const currentIndex = themes.findIndex((t) => t.value === currentTheme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };
</script>

<svelte:head>
  <script>
    (function () {
      const stored = localStorage.getItem("THEME_PREFERENCE_KEY");
      const themes = ["light", "dark", "griso"];

      if (stored && themes.includes(stored)) {
        if (stored === "dark") {
          document.documentElement.classList.add("dark");
        } else if (stored !== "light") {
          document.documentElement.setAttribute("data-theme", stored);
        }
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
    })();
  </script>
</svelte:head>

{#if showThemeSelector}
  <div class="relative">
    <button
      onclick={() => (showDropdown = !showDropdown)}
      aria-label={ariaLabel}
      type="button"
      {...restProps}
      class={darkmode({ class: clsx(className) })}
      tabindex={0}
    >
      <Palette class={sizes[size]} />
    </button>

    {#if showDropdown}
      <div
        class="bg-solid border-border-default absolute right-0 z-50 w-48"
        role="menu"
      >
        {#each themes as theme}
          <button
            onclick={() => setTheme(theme.value)}
            class={clsx(
              "hover:bg-bg-material w-full px-4 py-2 text-left text-sm transition-colors",
              "flex items-center gap-2",
              currentTheme === theme.value && "bg-bg-material text-accent",
            )}
            role="menuitem"
          >
            <theme.Icon />
            {theme.label}
          </button>
        {/each}
      </div>
    {/if}
  </div>
{:else}
  <!-- Simple toggle button (cycles through themes) -->
  <button
    onclick={cycleTheme}
    aria-label={ariaLabel}
    type="button"
    {...restProps}
    class={darkmode({ class: clsx(className) })}
    tabindex={0}
  >
    {#if currentTheme === "light"}
      {#if lightIcon}
        {@render lightIcon()}
      {:else}
        <Sun class={sizes[size]} />
      {/if}
    {:else if currentTheme === "dark"}
      {#if darkIcon}
        {@render darkIcon()}
      {:else}
        <Moon class={sizes[size]} />
      {/if}
    {:else}
      <Palette class={sizes[size]} />
    {/if}
  </button>
{/if}
