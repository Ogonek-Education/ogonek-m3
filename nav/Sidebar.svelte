<script lang="ts">
  import { readOnly } from "$lib/stores";
  import type { Snippet } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { Heading } from "../typography";
  import Button from "../buttons/Button.svelte";
  import { HStack } from "$lib";
  let { children }: { children?: Snippet } = $props();
</script>

<div
  class="
    bg-bg-primary border-border-primary hover:border-border-hover fixed z-40
    h-full w-full
    flex-col overflow-visible rounded-none py-2 transition-all md:relative md:flex md:w-50 md:border-l-2 lg:w-60 xl:w-70 2xl:w-75"
>
  <div
    class="flex flex-col overflow-visible"
    in:fly={{ y: 20, duration: 400, easing: quintOut }}
  >
    {@render children?.()}
  </div>
  {#if $readOnly}
    <HStack class="padding-default mt-auto">
      <Heading tag="h2" class="self-center">Режим чтения</Heading>
      <Button href="/pricing">Купить подписку</Button>
    </HStack>
  {/if}
</div>
