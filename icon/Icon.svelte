<script lang="ts">
  import { dev } from "$app/environment";

  const {
    name,
    fill = 0,
    wght = 400,
    grad = 0,
    opsz = 24,
  }: {
    name: string;
    fill?: 0 | 1;
    wght?: number; // 100..700
    grad?: number; // -50..200
    opsz?: number; // 20..48
  } = $props();
</script>

<div
  style="font-variation-settings: 'FILL' {fill}, 'wght' {wght}, 'GRAD' {grad}, 'opsz' {opsz};"
>
  <span class="material-symbols-outlined">{name}</span>
</div>
