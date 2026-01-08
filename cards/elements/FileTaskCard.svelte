<script lang="ts">
  import { enhanceForm } from "$lib/utils";
  import type { FileSmall } from "$lib/types";

  import { ButtonIcon } from "../../buttons";
  import Layer from "../../utils/Layer.svelte";
  import Icon from "../../utils/icon/Icon.svelte";
  import { enhance } from "$app/forms";

  let { file, userId }: { file: FileSmall; userId?: string } = $props();
  let downloading = $state(false);

  const resetDownloading = () => {
    downloading = false;
  };
</script>

<div
  class="bg-md-sys-color-surface-container-high shadow-elevation-1 hover:shadow-elevation-2 flex items-center gap-3 rounded-xl p-3 transition-shadow"
>
  <form
    method="POST"
    action="?/download"
    class="flex-1"
    onsubmit={() => (downloading = true)}
    use:enhance={enhanceForm({
      handlers: {
        success: async (result) => {
          try {
            const url = result.data?.url;
            if (!url) return;

            const iframe = document.createElement("iframe");
            iframe.style.display = "none";
            iframe.src = url;
            document.body.appendChild(iframe);

            await new Promise((resolve) => setTimeout(resolve, 5000));
            document.body.removeChild(iframe);
          } finally {
            resetDownloading();
          }
        },
        failure: resetDownloading,
        error: resetDownloading,
        redirect: resetDownloading,
      },
    })}
  >
    <input type="hidden" value={file.s3Key} name="key" />
    <button
      type="submit"
      data-cy="file-task-card"
      disabled={downloading}
      class="state-layer group focus-visible:outline-md-sys-color-primary relative flex w-full items-center gap-3 rounded-lg p-3 text-left focus-visible:outline-2"
    >
      <div
        class="bg-md-sys-color-primary-container text-md-sys-color-on-primary-container group-hover:bg-md-sys-color-primary group-hover:text-md-sys-color-on-primary flex size-10 items-center justify-center rounded-full transition-colors"
      >
        <Icon name="description" />
      </div>
      <div class="min-w-0 flex-1 space-y-1">
        <p
          class="md-sys-typescale-body-large text-md-sys-color-on-surface truncate"
        >
          {file.name}
        </p>
      </div>
      <div class="text-md-sys-color-primary flex items-center gap-1">
        <Icon name={downloading ? "hourglass_empty" : "download"} />
      </div>
      <Layer />
    </button>
  </form>
  {#if file.ownerId === userId}
    <form
      method="POST"
      action="?/deleteFile"
      class="shrink-0"
      use:enhance={enhanceForm({
        messages: {
          success: "Файл удален",
        },
        shouldUpdate: true,
      })}
    >
      <input type="hidden" value={file.id} name="fileId" />
      <ButtonIcon
        tooltipContent="Удалить файл"
        iconProps={{ name: "delete" }}
        formaction="?/deleteFile"
        type="submit"
        variant="text"
      ></ButtonIcon>
    </form>
  {/if}
</div>
