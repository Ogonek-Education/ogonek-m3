<script lang="ts">
  import { Body } from "$lib/components";
  import { legalPages } from "$lib/utils";
  import VStack from "../containers/stack/VStack.svelte";
  import { navOffset, padding } from "$lib/stores";
</script>

<footer
  style={`--footer-padding: ${$padding}px; --footer-nav-offset: ${$navOffset}px`}
  class="footer bg-md-sys-color-surface-container flex flex-col items-center space-y-6 pt-6 pb-28 md:items-start md:pt-12 md:pb-0"
>
  <VStack class="font-semibold">
    <Body><a class="text-link" href="/contact">Контакт</a></Body>
    <Body><a class="text-link" href="/why">Мотивация</a></Body>
    <Body><a class="text-link" href="/pricing">Расценки</a></Body>
  </VStack>

  <div
    class="flex w-full grid-rows-3 flex-col items-center gap-1 md:grid md:grid-cols-3 md:items-end"
  >
    <div
      class="row-span-3 flex flex-col items-center gap-3 pb-10 md:items-start"
    >
      <a href="/" class="md-sys-typescale-display-small font-serif">Ogonëk</a>
      <p class="md-sys-typescale-label-small">© 2024-2025 Данила Волков</p>
    </div>
    {#each Object.entries(legalPages) as [slug, title]}
      <a class="text-link md-sys-typescale-label-small" href="/legal/{slug}"
        >{title}</a
      >
    {/each}
  </div>
  <div
    class="md-sys-typescale-label-small flex flex-col items-center gap-1 pt-4 pb-4 md:flex-row md:items-start md:gap-6"
  >
    <p>ИП Волков Данила Олегович</p>
    <p>ОГРНИП 321774600758976</p>
    <p>117042, г. Москва, ул. Южнобутовская, 60</p>
    <a href="mailto:danila.volkov@ogonek.app">danila.volkov@ogonek.app</a>
  </div>
</footer>

<style>
  @media (min-width: 768px) {
    .footer {
      padding-left: var(--footer-padding, 40rem);
      transition: padding-left 500ms
        var(--md-sys-motion-timing-function-emphasized-decel);
    }
  }

  @media (min-width: 1280px) {
    .footer {
      padding-left: calc(
        var(--footer-padding, 40rem) + var(--footer-nav-offset, 0px)
      );
    }
  }
</style>
