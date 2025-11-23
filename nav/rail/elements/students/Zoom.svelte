<script lang="ts">
  import { Video } from "@lucide/svelte";
  import SidebarItem from "../../RailItem.svelte";

  const { href } = $props();
</script>

<SidebarItem
  {href}
  iconProps={{ name: "video_call" }}
  name="Zoom"
  external={true}
/>
