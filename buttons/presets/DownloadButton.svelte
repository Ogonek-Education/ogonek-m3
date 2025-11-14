<script lang="ts">
  import { Button, Heading, P } from "$lib/components/library";
  import type { URLResponse } from "$lib/types";

  let downloadQueue = $state<URLResponse[]>([]);
  let currentDownloads = $state(0);
  let totalDownloads = $state(0);
  let isDownloading = $state(false);
  let hasTriggered = $state(false);
  const MAX_CONCURRENT = 3;

  const {
    urls,
  }: {
    urls?: URLResponse[];
  } = $props();

  $effect(() => {
    if (urls && urls.length > 0 && !hasTriggered) {
      hasTriggered = true;
      startBulkDownload(urls);
    }
  });

  async function downloadFile(url: string) {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = url;
    document.body.appendChild(iframe);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    document.body.removeChild(iframe);
  }

  async function processQueue() {
    if (downloadQueue.length === 0 || currentDownloads >= MAX_CONCURRENT) {
      if (currentDownloads === 0) isDownloading = false;
      return;
    }

    const url = downloadQueue.shift()!;
    currentDownloads++;
    await downloadFile(url.url);
    currentDownloads--;
    totalDownloads++;

    processQueue();
  }

  async function startBulkDownload(urls: URLResponse[]) {
    downloadQueue = [...urls];
    totalDownloads = 0;
    isDownloading = true;

    for (let i = 0; i < MAX_CONCURRENT; i++) {
      processQueue();
    }
  }
</script>

<Button
  class="gap-narrow h-full items-end"
  type="submit"
  formaction="?/downloadAll"
  ><Heading tag="h3">Загрузить</Heading>

  {#if urls}
    <P class="mr-3 self-center">
      {totalDownloads} / {downloadQueue.length +
        currentDownloads +
        totalDownloads}
    </P>
  {/if}
</Button>
