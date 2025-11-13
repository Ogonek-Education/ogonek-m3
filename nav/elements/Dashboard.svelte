<script lang="ts">
  import { ArrowLeft, House } from "@lucide/svelte";
  import SidebarItem from "./SidebarItem.svelte";
  import { page } from "$app/state";

  function getHref(role: string) {
    switch (role) {
      case "s":
        return "/s/dashboard";
      case "t":
        return "/t/dashboard";
      default:
        return "/admin/dashboard";
    }
  }
  let href = getHref(page.params.role);

  const isSettings = $derived(page.url.pathname.includes("settings"));
</script>

<SidebarItem {href} name="Главная" Icon={isSettings ? ArrowLeft : House} />
