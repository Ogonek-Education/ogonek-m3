<script lang="ts">
  import RailItem from "../../RailItem.svelte";
  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/notifications`;
  const name = "Уведомления";
</script>

<RailItem {href} {name} iconProps={{ name: "notifications" }} />
