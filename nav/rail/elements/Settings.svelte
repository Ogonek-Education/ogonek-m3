<script lang="ts">
  import RailItem from "../RailItem.svelte";
  import { writable } from "svelte/store";
  import { page } from "$app/state";
  import texts from "$lib/texts";
</script>

<RailItem
  data-cy="rail-settings"
  href={"/" + page.params.role + "/settings"}
  iconProps={{ name: "settings" }}
  name="Настройки "
/>
