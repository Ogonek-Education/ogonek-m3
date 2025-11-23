<script lang="ts">
  import SidebarItem from "../RailItem.svelte";
  import { page } from "$app/state";
  import { writable } from "svelte/store";

  const { taskCount = 0 } = $props();
  const href = writable<string>(`/${page.params.role}/tasks`);
  $effect(() => {
    const path = page.url.pathname;
    if (path.includes("/task")) {
      $href = path;
    }
  });
</script>

<SidebarItem
  data-cy="sidebar-tasks"
  href={$href}
  iconProps={{ name: "assignment" }}
  name="Задания"
  badge={taskCount}
/>
