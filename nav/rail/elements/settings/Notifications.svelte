<script lang="ts">
  import { Bell } from "@lucide/svelte";
  import SidebarItem from "../../RailItem.svelte";
  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/notifications`;
  const name = "Уведомления";
</script>

<SidebarItem {href} {name} iconProps={{ name: "notifications" }} />
