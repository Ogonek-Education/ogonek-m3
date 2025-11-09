<script lang="ts">
  import type { Snippet } from "svelte";
  import { fly } from "svelte/transition";

  let {
    href,
    children,
    styling = "",
    ariaLabel = "",
    dataCy = "clickable-card",
    deactivate = false,
  }: {
    href: string;
    styling?: string;
    ariaLabel?: string;
    children?: Snippet;
    dataCy?: string;
    deactivate?: boolean;
  } = $props();

  const baseStyle = `group bg-clickable gap-default border-fat transition-all-100 relative flex min-h-40 w-full flex-col justify-between p-5 ${deactivate ? "" : "hover:none"}`;
</script>

{#if !deactivate}
  <a
    in:fly={{ y: 20 }}
    {href}
    data-cy={dataCy}
    aria-label={ariaLabel}
    class="
{styling} {baseStyle}
     "
  >
    {@render children?.()}
  </a>
{:else}
  <div
    in:fly={{ y: 20 }}
    data-cy={dataCy}
    aria-label={ariaLabel}
    class="
{styling} {baseStyle}
     "
  >
    {@render children?.()}
  </div>
{/if}
