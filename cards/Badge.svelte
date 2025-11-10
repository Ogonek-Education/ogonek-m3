<script lang="ts">
  import type { Snippet } from "svelte";
  import type { BadgeConfig } from "$lib/types";
  import { P } from "../typography";

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
          color: "bg-red/12 text-red border-red",
        };
      case "yellow":
        return {
          color: "bg-yellow/12 text-yellow border-yellow",
        };
      case "green":
        return {
          color: "bg-green/12 border-green ",
        };
      case "red":
        return {
          color: "bg-red/12 text-red border-red",
        };
      case "normal":
      default:
        return {
          color: "bg-blue/12 border-blue/60 ",
        };
    }
  }

  const badgeConfig = getBadgeConfig(config);
</script>

<div
  class={`
      inline-flex min-w-fit items-center  rounded-2xl border-3 px-2.5 py-1
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
