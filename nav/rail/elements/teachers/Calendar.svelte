<script lang="ts">
  import SidebarItem from "../../RailItem.svelte";
  import { page } from "$app/state";
  import { writable } from "svelte/store";

  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  const href = writable<string>(
    `/${page.params.role}/calendar/${year}/${month}`,
  );
  $effect(() => {
    const path = page.url.pathname;
    if (path.includes("/calendar")) {
      $href = path;
    }
  });
</script>

<SidebarItem
  class="hidden md:flex"
  href={$href}
  name="Календарь"
  iconProps={{ name: "calendar_month" }}
/>
