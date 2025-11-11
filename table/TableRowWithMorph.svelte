<script lang="ts">
  import { TickMorph } from "$lib/components/legacy";
  import TableRow from "./TableRow.svelte";

  let { children, value, href, selected = $bindable() } = $props();
</script>

<div
  class="padding-default bg-primary border-transient flex items-center transition-all"
>
  <TickMorph bind:group={selected} {value} />
  <TableRow {href}>
    {@render children()}
  </TableRow>
</div>
