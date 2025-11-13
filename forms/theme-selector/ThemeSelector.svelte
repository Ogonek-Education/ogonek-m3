<script lang="ts">
  import { themeKeys, type DarkmodeProps, type Theme } from "./types";
  import { themes } from "./theme";
  import { onMount } from "svelte";
  import ThemePreview from "./ThemePreview.svelte";
  import { Heading, P } from "../../typography";
  import { HStack, InputMerger } from "../../layout";

  let {
    class: className,
    "aria-label": ariaLabel = "Toggle theme",
    ...restProps
  }: DarkmodeProps = $props();

  let currentTheme = $state<Theme>("auto");
  let systemPreference = $state<"light" | "dark">("light");

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

  onMount(() => {
    const stored = localStorage.getItem("THEME_PREFERENCE_KEY") as Theme;
    if (stored && stored in themes) {
      currentTheme = stored;
      applyTheme(stored);
    } else {
      currentTheme = "auto";
      applyTheme("auto");
    }
  });

  const applyTheme = (theme: Theme) => {
    const doc = document.documentElement;

    doc.classList.remove("dark");
    doc.removeAttribute("data-theme");

    if (theme === "auto") {
      if (systemPreference === "dark") {
        doc.setAttribute("data-theme", "dark");
      }
    } else if (theme === "light") {
    } else {
      doc.setAttribute("data-theme", theme);
    }
  };

  const setTheme = (theme: Theme) => {
    currentTheme = theme;
    applyTheme(theme);
    localStorage.setItem("THEME_PREFERENCE_KEY", theme);
  };
</script>

<HStack class="justify-between">
  <Heading>Тема</Heading>
  <div class="grid w-full grid-cols-2 gap-4 md:grid-cols-2">
    {#each themeKeys as key}
      <InputMerger>
        <ThemePreview
          theme={key}
          selected={currentTheme === key}
          onclick={() => setTheme(key)}
        />
      </InputMerger>
    {/each}
  </div>
</HStack>
