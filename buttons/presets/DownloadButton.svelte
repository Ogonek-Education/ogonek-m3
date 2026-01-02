<script lang="ts">
  import { zipSync } from "fflate";
  import { ButtonIcon } from "$lib/components/library";
  import logger from "$lib/logger";
  import { notificationStore } from "$lib/stores";
  import type { FileSmall, URLResponse } from "$lib/types";
  import type { components } from "$lib/types/gen/openapi";
  import Button from "../Button.svelte";

  type PresignedFileUrl = components["schemas"]["PresignedFileUrl"];
  type DownloadUrl = URLResponse | PresignedFileUrl;
  type DownloadItem = { url: string; name: string };

  let downloading = $state(false);
  let lastTriggerToken = $state<string | null>(null);

  const {
    urls,
    files = [],
    taskTitle,
    taskId,
    mobile = false,
  }: {
    urls?: DownloadUrl[];
    files?: FileSmall[];
    taskTitle?: string;
    taskId?: string;
    mobile?: boolean;
  } = $props();

  const downloadItems = $derived(buildDownloadItems(urls, files));

  $effect(() => {
    if (!downloading) return;
    if (!downloadItems.length) return;
    const token = downloadItems.map((item) => item.url).join("|");
    if (token === lastTriggerToken) return;
    lastTriggerToken = token;
    void startZipDownload(downloadItems);
  });

  function sanitizeFilename(name: string) {
    return name.replace(/[\\/:*?"<>|]+/g, "-").trim() || "file";
  }

  function baseTaskName() {
    const title = taskTitle?.trim();
    if (title) return title;
    return taskId ? `task-${taskId}` : "task";
  }

  function buildDownloadItems(
    urlsList: DownloadUrl[] | undefined,
    filesList: FileSmall[],
  ) {
    if (!urlsList?.length) return [];
    const nameById = new Map(filesList.map((file) => [file.id, file.name]));
    let pdfAssigned = false;

    return urlsList.map((item, index) => {
      const hasFileId = "fileId" in item && Boolean(item.fileId);
      const nameFromFiles = hasFileId ? nameById.get(item.fileId) : undefined;
      let name = nameFromFiles;

      if (!name) {
        if (!pdfAssigned) {
          pdfAssigned = true;
          name = `${baseTaskName()}.pdf`;
        } else {
          name = `file-${index + 1}`;
        }
      }

      return { url: item.url, name: sanitizeFilename(name) };
    });
  }

  function uniqueName(name: string, existing: Map<string, number>): string {
    const count = existing.get(name);
    if (!count) {
      existing.set(name, 1);
      return name;
    }
    const extensionIndex = name.lastIndexOf(".");
    const base = extensionIndex > 0 ? name.slice(0, extensionIndex) : name;
    const extension = extensionIndex > 0 ? name.slice(extensionIndex) : "";
    const nextCount = count + 1;
    existing.set(name, nextCount);
    return `${base}-${nextCount}${extension}`;
  }

  function triggerDownload(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  async function startZipDownload(items: DownloadItem[]) {
    downloading = true;

    try {
      const fetchedFiles = await Promise.all(
        items.map(async (item) => {
          const response = await fetch(item.url);
          if (!response.ok) {
            throw new Error(`Download failed: ${response.status}`);
          }
          const buffer = await response.arrayBuffer();
          return { name: item.name, data: new Uint8Array(buffer) };
        }),
      );

      const usedNames = new Map<string, number>();
      const entries: Record<string, Uint8Array> = {};
      for (const file of fetchedFiles) {
        const name = uniqueName(file.name, usedNames);
        entries[name] = file.data;
      }

      const zipData = zipSync(entries);
      const zipBuffer = new ArrayBuffer(zipData.byteLength);
      new Uint8Array(zipBuffer).set(zipData);
      const zipName = sanitizeFilename(`${baseTaskName()}.zip`);
      const blob = new Blob([zipBuffer], { type: "application/zip" });
      triggerDownload(blob, zipName);
    } catch (error) {
      logger.error({ error }, "Failed to build download zip");
      notificationStore.set("Не получилось скачать архив");
    } finally {
      downloading = false;
    }
  }

  function handleDownloadClick() {
    lastTriggerToken = null;
    downloading = true;
  }
</script>

{#if mobile}
  <ButtonIcon
    iconProps={{ name: downloading ? "hourglass_empty" : "download" }}
    type="submit"
    aria-label="Загрузить"
    variant="text"
    onclick={handleDownloadClick}
    formaction="?/downloadAll"
  />
{:else}
  <Button
    iconProps={{ name: downloading ? "hourglass_empty" : "download" }}
    type="submit"
    variant="text"
    onclick={handleDownloadClick}
    formaction="?/downloadAll">Загрузить</Button
  >
{/if}
