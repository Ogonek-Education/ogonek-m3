<script lang="ts">
  import { Coffee, Fingerprint } from "@lucide/svelte";
  import SidebarItem from "../../RailItem.svelte";

  import { page } from "$app/state";

  const href = `/${page.params.role}/settings/security`;
  const name = "Безопасность";
</script>

<SidebarItem {href} {name} iconProps={{ name: "security" }} />
