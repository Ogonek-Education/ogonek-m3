<script>
  import { Body, Button, Divider } from "$lib/components";

  let y = $state(0);
</script>

<svelte:window bind:scrollY={y} />
<header class="bg-md-sys-color-background md:pt-24">
  <nav class="top-4 left-0 z-40 hidden w-full md:fixed md:block">
    <div
      class=" mx-auto grid max-w-5xl grid-cols-3 items-center rounded-full px-6 py-3 transition-all duration-150"
      class:shadow-elevation-1={y > 20}
      class:bg-md-sys-color-surface-container={y > 20}
    >
      <a href="/" class="flex items-end gap-2">
        <img
          src="https://cdn.ogonek.app/assets/192.png"
          class="aspect-square size-6 shrink-0 rounded-full object-cover"
          alt="logo"
        />
        <Body class="font-serif">Ogonëk</Body>
        <Divider orientation="vertical" class="mx-1.5 my-1" />
        <small class="md-sys-typescale-label-small mb-0.5">
          для репетиторов
        </small>
      </a>
      <div class="flex gap-1 place-self-center">
        <Button variant="text" href="/pricing">Расценки</Button>
        <Button variant="text" href="/#faq">FAQ</Button>
        <Button variant="text" href="/why">О нас</Button>
      </div>
      <div class="flex gap-3 place-self-end self-end">
        <Button href="/login" variant="tonal">Вход</Button>
        <Button
          iconProps={{ name: "account_circle" }}
          variant="filled"
          href="/signup">Регистрация</Button
        >
      </div>
    </div>
  </nav>
</header>
