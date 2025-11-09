<script lang="ts">
  import { ChevronLeft, ChevronRight } from "@lucide/svelte";
  import { currentPage } from "$lib/stores";
  import { Button, Secondary } from "$lib/components/library";

  const { page, count, perPage, totalPages } = $props();
  const isFirstPage = $derived(page === 1);

  const isLastPage = $derived(page >= totalPages);
</script>

<div class="flex items-center justify-between">
  <Secondary>
    Показано {(page - 1) * perPage + 1}–{Math.min(page * perPage, count)} из {count}
  </Secondary>

  <div class="gap-default flex">
    {#if count > perPage}
      <Button
        tooltipContent="Предыдущая"
        Icon={ChevronLeft}
        disabled={isFirstPage}
        onclick={() => currentPage.decrease()}
      />

      <Button
        tooltipContent="Следующая"
        Icon={ChevronRight}
        disabled={isLastPage}
        onclick={() => {
          currentPage.increase();
        }}
      />
    {/if}
  </div>
</div>
