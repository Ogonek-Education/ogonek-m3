<script lang="ts">
  import RailItem from "../../RailItem.svelte";
  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/account`;
  const name = "Основные";
</script>

<RailItem {href} {name} iconProps={{ name: "settings" }} />
