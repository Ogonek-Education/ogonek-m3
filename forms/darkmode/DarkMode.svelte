<script lang="ts">
  import { darkmode } from "./theme";
  import clsx from "clsx";
  import type { DarkmodeProps } from "./types";
  import { Moon, Sun } from "@lucide/svelte";

  let {
    class: className,
    lightIcon,
    darkIcon,
    size = "md",
    "aria-label": ariaLabel = "Dark mode",
    ...restProps
  }: DarkmodeProps = $props();

  const sizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const toggleTheme = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const isDark =
      target.ownerDocument.documentElement.classList.toggle("dark");
    if (target.ownerDocument === document)
      // we are NOT in the iFrame
      localStorage.setItem("THEME_PREFERENCE_KEY", isDark ? "dark" : "light");
  };
</script>

<svelte:head>
  <script lang="ts">
    if ("THEME_PREFERENCE_KEY" in localStorage) {
      localStorage.getItem("THEME_PREFERENCE_KEY") === "dark"
        ? window.document.documentElement.classList.add("dark")
        : window.document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        window.document.documentElement.classList.add("dark");
    }
  </script>
</svelte:head>

<button
  onclick={toggleTheme}
  aria-label={ariaLabel}
  type="button"
  {...restProps}
  class={darkmode({ class: clsx(className) })}
  tabindex={0}
>
  <span class="hidden dark:block">
    {#if lightIcon}
      {@render lightIcon()}
    {:else}
      <Sun />
    {/if}
  </span>
  <span class="block dark:hidden">
    {#if darkIcon}
      {@render darkIcon()}
    {:else}
      <Moon />
    {/if}
  </span>
</button>
