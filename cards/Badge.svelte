<script lang="ts">
  import type { Snippet } from "svelte";
  import { Helper, P } from "../library";
  import type { BadgeConfig } from "$lib/types";

  const {
    config = "normal",
    styling = "",
    children,
  }: { config?: BadgeConfig; styling?: string; children: Snippet } = $props();

  function getBadgeConfig(config: BadgeConfig) {
    switch (config) {
      case "overdue":
        return {
          text: "Просрочено",
          color:
            "bg-red-600/12 text-red-700 dark:text-red-500 border-red-600  ",
        };
      case "yellow":
        return {
          color: "bg-school/12 dark:text-school text-school-dark border-school",
        };
      case "green":
        return {
          color:
            "bg-apple/12 dark:border-apple-dark border-apple text-apple-dark dark:text-apple",
        };
      case "red":
        return {
          color:
            "bg-red-600/12 text-red-700 dark:text-red-500 border-red-600  ",
        };
      case "normal":
      default:
        return {
          color:
            "bg-moonstone/12 border-moonstone/60 text-moonstone-dark dark:text-moonstone dark:bg-moonstone-dark-100/12",
        };
    }
  }

  const badgeConfig = getBadgeConfig(config);
</script>

<div
  class={`
      inline-flex min-w-fit items-center rounded-2xl border-3 px-2.5 py-1
      font-medium
      ${badgeConfig.color} ${styling}
    `}
>
  <P>
    {#if badgeConfig.text}
      {badgeConfig.text}
    {:else}
      {@render children()}
    {/if}
  </P>
</div>
