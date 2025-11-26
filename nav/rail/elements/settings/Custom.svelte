<script lang="ts">
  import RailItem from "../../RailItem.svelte";
  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/customisation`;
  const name = "Кастомизация";
</script>

<RailItem {href} {name} iconProps={{ name: "palette" }} />
