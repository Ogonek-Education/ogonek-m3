<script lang="ts">
  import type { Snippet } from "svelte";
  import { Plus } from "@lucide/svelte";
  import { P } from "$lib/components/library";

  let {
    children,
    toggle = $bindable(false),
  }: { children: Snippet; toggle?: boolean } = $props();
</script>

<button
  type="button"
  onclick={() => (toggle = true)}
  class="bg-translucent border-fat group flex justify-between p-2"
>
  <P class="opacity-40 group-hover:opacity-80">
    {@render children()}
  </P>
  <Plus class="opacity-40 group-hover:opacity-80"></Plus>
</button>
