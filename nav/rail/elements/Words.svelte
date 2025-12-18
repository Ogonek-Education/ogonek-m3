<script lang="ts">
  import { page } from "$app/state";
  import { goto } from "$app/navigation";
  import { writable } from "svelte/store";
  import RailItem from "../RailItem.svelte";
  import texts from "$lib/texts";

  const { deckCount = 0 } = $props();
  const baseHref = $derived(`/${page.params.role}/flashcards`);
  const href = writable<string>(baseHref);

  $effect(() => {
    const path = page.url.pathname;
    if (path.includes("/flashcards")) {
      $href = path;
    }
  });

  function handleClick(event: MouseEvent) {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    const currentPath = page.url.pathname;
    if (currentPath.startsWith(baseHref) && currentPath !== baseHref) {
      event.preventDefault();
      goto(baseHref);
    }
  }
</script>

<RailItem
  data-cy="rail-flashcards"
  href={$href}
  iconProps={{ name: "note_stack" }}
  name={texts.flashcards.title}
  badge={deckCount}
  onclick={handleClick}
/>
