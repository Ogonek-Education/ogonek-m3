<script lang="ts">
  import { Settings } from "@lucide/svelte";
  import SidebarItem from "./SidebarItem.svelte";
  import { page } from "$app/state";

  let href = page.params.role === "t" ? "/t/settings" : "/s/settings";
</script>

<SidebarItem {href} Icon={Settings} name="Настройки" />
