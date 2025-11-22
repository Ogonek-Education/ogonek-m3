<script lang="ts">
  import SidebarItem from "../SidebarItem.svelte";
  import { writable } from "svelte/store";
  import { page } from "$app/state";
  import texts from "$lib/texts";

  const { deckCount = 0 } = $props();
  const href = writable<string>(`/${page.params.role}/flashcards`);
  $effect(() => {
    const path = page.url.pathname;
    if (path.includes("/flashcards")) {
      $href = path;
    }
  });
</script>

<SidebarItem
  data-cy="sidebar-flashcards"
  href={$href}
  iconProps={{ name: "note_stack" }}
  name={texts.flashcards.title}
  badge={deckCount}
/>
