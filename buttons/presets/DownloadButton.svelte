<script lang="ts">
  import { ButtonIcon } from "$lib/components/library";
  import type { URLResponse } from "$lib/types";

  let downloadQueue = $state<URLResponse[]>([]);
  let currentDownloads = $state(0);
  let totalDownloads = $state(0);
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

    for (let i = 0; i < MAX_CONCURRENT; i++) {
      processQueue();
    }
  }
</script>

<ButtonIcon
  iconProps={{ name: "cloud_download" }}
  type="submit"
  variant="text"
  formaction="?/downloadAll">Загрузить</ButtonIcon
>
