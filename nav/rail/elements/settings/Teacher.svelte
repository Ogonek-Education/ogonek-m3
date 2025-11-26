<script lang="ts">
  import RailItem from "../../RailItem.svelte";

  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/teacher`;
  const name = "Преподаватель";
</script>

{#if page.params.role === "t"}
  <RailItem {href} {name} iconProps={{ name: "coffee" }} />
{/if}
