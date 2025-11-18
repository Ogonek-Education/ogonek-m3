<script lang="ts">
  import { enhance } from "$app/forms";
  import { enhanceForm } from "$lib/utils";
  import type { Snippet } from "svelte";
  interface Props {
    children: Snippet;
    selected?: string[];
    [key: string]: unknown;
  }

  let { children, selected = $bindable(), ...rest }: Props = $props();
</script>

<form
  class="md:border-primary bg-primary order-2 flex h-[80dvh] w-full flex-col justify-between overflow-x-visible md:order-1"
  aria-label="Data table"
  {...rest}
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
