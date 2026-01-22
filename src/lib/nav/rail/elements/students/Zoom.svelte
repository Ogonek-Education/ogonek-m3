<script lang="ts">
  import RailItem from "../../RailItem.svelte";

  const { href } = $props();
</script>

<RailItem {href} iconProps={{ name: "videocam" }} name="Zoom" external={true} />
