<script lang="ts">
  import RailItem from "../RailItem.svelte";
  import { page } from "$app/state";

  function getHref(role: string) {
    switch (role) {
      case "s":
        return "/s/dashboard";
      case "t":
        return "/t/dashboard";
      default:
        return "/admin/dashboard";
    }
  }
  let href = getHref(page.params.role);
</script>

<RailItem {href} name="Главная" iconProps={{ name: "home" }}></RailItem>
