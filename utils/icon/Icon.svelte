<script lang="ts">
  import type { IconProps } from "./types";

  const {
    name,
    fill = 0,
    wght = 400,
    grad = 0,
    opsz = 24,
    class: className = "size-6",
  }: IconProps = $props();
</script>

<div
  class={className}
  style="font-variation-settings: 'FILL' {fill}, 'wght' {wght}, 'GRAD' {grad}, 'opsz' {opsz};"
>
  <span class="material-symbols-outlined">{name}</span>
</div>
