<script lang="ts">
  import RailItem from "../RailItem.svelte";
  import { page } from "$app/state";
</script>

<RailItem
  data-cy="rail-settings"
  href={"/" + page.params.role + "/settings"}
  iconProps={{ name: "settings" }}
  name="Настройки "
/>
