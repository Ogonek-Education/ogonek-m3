<script lang="ts">
  import { RussianRuble } from "@lucide/svelte";
  import SidebarItem from "../../SidebarItem.svelte";
  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/money`;
  const name = "Подписка";
</script>

{#if page.params.role === "t"}
  <SidebarItem {href} {name} Icon={RussianRuble} />
{/if}
