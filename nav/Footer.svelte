<script>
  import { A, P } from "$lib/components/library";
  import { legalPages } from "$lib/utils";
</script>

<footer
  class=" bg-bg-primary border-primary z-40 flex w-full flex-col items-center justify-center rounded-none border-x-0 border-b-0 text-sm font-medium md:text-base"
>
  <dev
    class="mg:grid-cols-2 grid w-full justify-center gap-4 gap-y-8 md:gap-y-24 lg:grid-cols-4 lg:gap-24"
  >
    <div class="gap-narrow padding-wider flex min-w-fit flex-col">
      <P class="font-extrabold">Документы</P>
      {#each Object.entries(legalPages) as [slug, title]}
        <A href="/legal/{slug}">{title}</A>
      {/each}
    </div>

    <div
      class="md:border-primary padding-wider gap-narrow flex min-w-fit flex-1 flex-col rounded-none border-y-0"
    >
      <P class="font-extrabold">ИП</P>
      <P>Волков Данила Олегович</P>
      <P>ОГРНИП 321774600758976</P>
      <P>117042, г. Москва, ул. Южнобутовская, 60</P>

      <A href="mailto:danila.volkov@ogonek.app">danila.volkov@ogonek.app</A>
    </div>

    <div class="gap-narrow padding-wider flex flex-col">
      <P class="font-extrabold">Организация</P>
      <A href="/contact">Контакт</A>
      <A href="/why">Наша мотивация</A>
      <A href="/pricing">Расценки</A>
    </div>
    <P
      class="padding-wider md:border-primary rounded-none border-y-0 border-r-0"
      >© 2024-2025 Данила Волков</P
    >
  </dev>
</footer>
