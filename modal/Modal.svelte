<script lang="ts">
  import { clickOutside } from "$lib/actions";

  let {
    children,
    soft = false,
    withState = true,
    toggle = () => {},
  } = $props();
</script>

<div
  aria-label="Dark Overlay"
  class="fixed inset-0 z-40 flex items-center justify-center {soft
    ? 'bg-none'
    : 'bg-stone-900/10'} backdrop-grayscale"
>
  <div
    class="border-fat gap-default bg-solid padding-wider relative z-50 flex w-full max-w-4xl flex-col items-center justify-between"
    use:clickOutside={() => {
      if (withState) {
        window.history.back();
      } else {
        toggle();
      }
    }}
  >
    {@render children?.()}
  </div>
</div>
