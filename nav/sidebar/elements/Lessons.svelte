<script lang="ts">
  import { BookOpenCheck } from "@lucide/svelte";
  import SidebarItem from "../SidebarItem.svelte";
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

<SidebarItem
  href={$href}
  data-cy="sidebar-lessons"
  Icon={BookOpenCheck}
  name="Занятия"
  badge={lessonCount}
/>
