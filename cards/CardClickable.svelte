<script lang="ts">
  import type { Snippet } from "svelte";
  import { fly } from "svelte/transition";

  let {
    href,
    children,
    styling = "",
    aria-label = "",
    data-cy = "clickable-card",
    deactivate = false,
  }: {
    href: string;
    styling?: string;
    aria-label?: string;
    children?: Snippet;
    data-cy?: string;
    deactivate?: boolean;
  } = $props();

  const baseStyle = `group bg-clickable gap-default border-fat transition-all-100 relative flex min-h-40 w-full flex-col justify-between p-5 ${deactivate ? "" : "hover:none"}`;
</script>

{#if !deactivate}
  <a
    in:fly={{ y: 20 }}
    {href}
    data-cy={data - cy}
    aria-label={aria - label}
    class="
{styling} {baseStyle}
     "
  >
    {@render children?.()}
  </a>
{:else}
  <div
    in:fly={{ y: 20 }}
    data-cy={data - cy}
    aria-label={aria - label}
    class="
{styling} {baseStyle}
     "
  >
    {@render children?.()}
  </div>
{/if}
