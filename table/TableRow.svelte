<script lang="ts">
  import { goto } from "$app/navigation";
  import type { Snippet } from "svelte";
  import { fly } from "svelte/transition";

  interface Props {
    href: string;
    children: Snippet;
    styling?: string;
  }

  const { href, children, styling = "" }: Props = $props();

  function handleRowClick(event: KeyboardEvent | MouseEvent) {
    if (
      event instanceof KeyboardEvent &&
      event.key !== "Enter" &&
      event.key !== " "
    ) {
      return;
    }
    goto(href);
  }
</script>

<button
  in:fly={{ y: 20 }}
  class="gap-default flex w-full items-center justify-between p-2.5 py-5 {styling}"
  type="button"
  onclick={(e) => handleRowClick(e)}
  onkeydown={(e) => handleRowClick(e)}
  tabindex="0"
  data-cy="table-row-clickable"
>
  {@render children()}
</button>
