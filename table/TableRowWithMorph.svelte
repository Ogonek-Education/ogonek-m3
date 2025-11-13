<script lang="ts">
  import { TickMorph } from "$lib/components/legacy";
  import TableRow from "./TableRow.svelte";

  let { children, value, href, selected = $bindable() } = $props();
</script>

<div
  class="md:padding-default bg-primary border-transient flex items-center transition-all"
>
  <TickMorph class="hidden md:inline-flex" bind:group={selected} {value} />
  <TableRow {href}>
    {@render children()}
  </TableRow>
</div>
