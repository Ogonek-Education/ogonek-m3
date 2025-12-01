<script lang="ts">
  import RailItem from "../RailItem.svelte";
  import { writable } from "svelte/store";
  import { page } from "$app/state";

  const { lessonCount = 0 } = $props();
  const href = writable<string>(`/${page.params.role}/lessons`);
  $effect(() => {
    const path = page.url.pathname;
    if (path.includes("/lesson")) {
      $href = path;
    }
  });
</script>

<RailItem
  href={$href}
  data-cy="rail-lessons"
  iconProps={{ name: "book" }}
  name="Занятия"
  badge={lessonCount}
/>
