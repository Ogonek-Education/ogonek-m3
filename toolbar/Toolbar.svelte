<script lang="ts">
  import { toolbar } from "./theme";

  const { children } = $props();

  const { base } = toolbar();
</script>

<div class={base()}></div>
