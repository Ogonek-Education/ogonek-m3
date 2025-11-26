<script lang="ts">
  import RailItem from "../../RailItem.svelte";
  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/money`;
  const name = "Подписка";
</script>

{#if page.params.role === "t"}
  <RailItem {href} {name} iconProps={{ name: "currency_ruble" }} />
{/if}
