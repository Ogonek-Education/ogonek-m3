<script lang="ts">
  import type { Snippet } from "svelte";
  import { fly } from "svelte/transition";

  let {
    href,
    children,
    styling = "",
    deactivate = false,
    ...rest
  }: {
    href: string;
    styling?: string;
    children?: Snippet;
    deactivate?: boolean;
    [key: string]: unknown;
  } = $props();

  const baseStyle = `group gap-default border-primary bg-solid transition-all-100 relative flex min-h-40 w-full flex-col justify-between p-5 ${deactivate ? "" : "hover:none"}`;
</script>

{#if !deactivate}
  <a
    in:fly={{ y: 20 }}
    {href}
    class="
{styling} {baseStyle}
     "
  >
    {@render children?.()}
  </a>
{:else}
  <div
    in:fly={{ y: 20 }}
    class="
{styling} {baseStyle}
     "
  >
    {@render children?.()}
  </div>
{/if}
