<script lang="ts">
  import RailItem from "../../RailItem.svelte";

  const { href } = $props();
</script>

<RailItem
  {href}
  iconProps={{ name: "video_call" }}
  name="Zoom"
  external={true}
/>
