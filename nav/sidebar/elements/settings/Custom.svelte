<script lang="ts">
  import { CircleUserRound, Palette } from "@lucide/svelte";
  import SidebarItem from "../../SidebarItem.svelte";
  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/customisation`;
  const name = "Кастомизация";
</script>

<SidebarItem {href} {name} Icon={Palette} />
