<script lang="ts">
  import TickMorph from "../TickMorph.svelte";
  import TableRow from "./TableRow.svelte";

  let { children, value, href, selected = $bindable() } = $props();
</script>

<div
  class="padding-default bg-solid bg-clickable border-transient flex items-center"
>
  <TickMorph bind:group={selected} {value} />
  <TableRow {href}>
    {@render children()}
  </TableRow>
</div>
