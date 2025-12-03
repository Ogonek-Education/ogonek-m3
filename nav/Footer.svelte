<script lang="ts">
  import { Body } from "$lib/components";
  import { legalPages } from "$lib/utils";
  import VStack from "../containers/stack/VStack.svelte";
  import { padding } from "$lib/stores";
</script>

<footer
  style={`padding-left: ${$padding}px`}
  class="bg-md-sys-color-surface-container space-y-6 pt-12"
>
  <VStack class="font-semibold">
    <Body><a class="text-link" href="/contact">Контакт</a></Body>
    <Body><a class="text-link" href="/why">Мотивация</a></Body>
    <Body><a class="text-link" href="/pricing">Расценки</a></Body>
  </VStack>

  <div class="grid w-full grid-cols-3 grid-rows-3 items-end">
    <div class="row-span-3">
      <p class="md-sys-typescale-display-small font-serif">Ogonëk</p>
      <p class="md-sys-typescale-label-small">© 2024-2025 Данила Волков</p>
    </div>
    {#each Object.entries(legalPages) as [slug, title]}
      <a class="text-link md-sys-typescale-label-small" href="/legal/{slug}"
        >{title}</a
      >
    {/each}
  </div>
  <VStack class="md-sys-typescale-label-small pt-4 pb-4">
    <p>ИП Волков Данила Олегович</p>
    <p>ОГРНИП 321774600758976</p>
    <p>117042, г. Москва, ул. Южнобутовская, 60</p>
    <a href="mailto:danila.volkov@ogonek.app">danila.volkov@ogonek.app</a>
  </VStack>
</footer>
