<script lang="ts">
  import { Body, Divider } from "$lib/components";
  import { legalPages } from "$lib/utils";
  import VStack from "../containers/stack/VStack.svelte";
  import { navOffset, padding } from "$lib/stores";
  import { page } from "$app/state";

  const segments = $derived(page.url.pathname.split("/").filter(Boolean));
  const [role, section, _maybeId] = $derived(segments);

  const isAppRoute = $derived(
    (role === "t" || role === "s" || role === "admin") &&
      section !== "dashboard",
  );
  const isDashboard = $derived(section === "dashboard");
  const footerPadding = $derived(
    $padding > 0
      ? $padding
      : isAppRoute || isDashboard
        ? 80 + Math.max($navOffset, 0)
        : 0,
  );

  const footerNavOffset = $derived(
    $padding > 0 && isAppRoute ? Math.max($navOffset, 0) : 0,
  );
</script>

<footer
  style={`--footer-padding: ${footerPadding}px; --footer-nav-offset: ${footerNavOffset}px`}
  class="footer overflow-hidden"
  class:lg:px-4={isAppRoute}
  class:lg:pr-4={isDashboard}
>
  <div
    class="bg-md-sys-color-surface flex flex-col items-center space-y-6 pt-6 pb-28 lg:items-start lg:pt-12 lg:pb-0 lg:pl-12"
    class:lg:ml-4={isAppRoute}
  >
    <Divider variant="wavy" />
    <VStack gap="lg" class="font-semibold">
      <Body><a class="text-link" href="/contact">Контакт</a></Body>
      <Body><a class="text-link" href="/why">Мотивация</a></Body>
      <Body><a class="text-link" href="/pricing">Расценки</a></Body>
    </VStack>

    <div
      class="flex w-full grid-rows-3 flex-col items-center gap-1 lg:grid lg:grid-cols-3 lg:items-end"
    >
      <div
        class="row-span-3 flex flex-col items-center gap-3 pb-10 lg:items-start"
      >
        <a href="/" class="md-sys-typescale-display-small font-serif">Ogonëk</a>
        <p class="md-sys-typescale-label-small">© 2024-2026 Данила Волков</p>
      </div>
      {#each Object.entries(legalPages) as [slug, title]}
        <a class="text-link md-sys-typescale-label-small" href="/legal/{slug}"
          >{title}</a
        >
      {/each}
    </div>
    <div
      class="md-sys-typescale-label-small flex flex-col items-center gap-1 pt-4 pb-4 lg:flex-row lg:items-start lg:gap-6"
    >
      <p>ИП Волков Данила Олегович</p>
      <p>ОГРНИП 321774600758976</p>
      <p>117042, г. Москва, ул. Южнобутовская, 60</p>
      <a href="mailto:danila.volkov@ogonek.app">danila.volkov@ogonek.app</a>
    </div>
  </div>
</footer>

<style>
  @media (min-width: 768px) {
    .footer {
      padding-left: var(--footer-padding, 0px);
      transition: padding-left 500ms
        var(--md-sys-motion-timing-function-emphasized-decel);
    }
  }

  @media (min-width: 1280px) {
    .footer {
      padding-left: calc(
        var(--footer-padding, 0px) + var(--footer-nav-offset, 0px)
      );
    }
  }
</style>
