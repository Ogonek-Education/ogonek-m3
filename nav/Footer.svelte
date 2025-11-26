<script>
  import { legalPages } from "$lib/utils";
</script>

<footer
  class=" bg-bg-primary border-primary z-40 flex w-full flex-col items-center justify-center rounded-none border-x-0 border-b-0 pb-20 text-sm font-medium md:text-base"
>
  <dev
    class="mg:grid-cols-2 grid w-full justify-center gap-4 gap-y-8 md:gap-y-24 lg:grid-cols-4 lg:gap-24"
  >
    <div class="gap-narrow padding-wider flex min-w-fit flex-col">
      <p class="font-extrabold">Документы</p>
      {#each Object.entries(legalPages) as [slug, title]}
        <a href="/legal/{slug}">{title}</a>
      {/each}
    </div>

    <div
      class="padding-wider gap-narrow flex min-w-fit flex-1 flex-col rounded-none"
    >
      <p class="font-extrabold">ИП</p>
      <p>Волков Данила Олегович</p>
      <p>ОГРНИП 321774600758976</p>
      <p>117042, г. Москва, ул. Южнобутовская, 60</p>

      <a href="mailto:danila.volkov@ogonek.app">danila.volkov@ogonek.app</a>
    </div>

    <div class="gap-narrow padding-wider flex flex-col">
      <p class="font-extrabold">Организация</p>
      <a href="/contact">Контакт</a>
      <a href="/why">Наша мотивация</a>
      <a href="/pricing">Расценки</a>
    </div>
    <p class="padding-wider">© 2024-2025 Данила Волков</p>
  </dev>
</footer>
