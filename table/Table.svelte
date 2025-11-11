<script lang="ts">
  import { enhance } from "$app/forms";
  import { enhanceForm } from "$lib/utils";
  import type { Snippet } from "svelte";
  interface Props {
    children: Snippet;
    selected?: string[];
  }

  let { children, selected = $bindable() }: Props = $props();
</script>

<form
  class="border-primary bg-primary flex h-[80dvh] w-full flex-col justify-between overflow-x-visible"
  aria-label="Data table"
  method="POST"
  use:enhance={enhanceForm({
    messages: { success: "Успех" },
    handlers: {
      success: async () => {
        selected = [];
      },
    },
    shouldUpdate: true,
  })}
>
  {@render children()}
</form>
