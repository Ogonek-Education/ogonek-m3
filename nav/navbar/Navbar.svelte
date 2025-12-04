<script lang="ts">
  import { navbar } from "./theme";

  const { children } = $props();

  const { base } = $derived(navbar());
</script>

<div class={base()}>
  {@render children()}
</div>
