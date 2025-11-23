<script lang="ts">
  import { Coffee, Fingerprint } from "@lucide/svelte";
  import RailItem from "../../RailItem.svelte";

  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/security`;
  const name = "Безопасность";
</script>

<RailItem {href} {name} iconProps={{ name: "security" }} />
