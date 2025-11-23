<script lang="ts">
  import { enhanceForm } from "$lib/utils";
  import { enhance } from "$app/forms";
  import type { FileSmall } from "$lib/types";
  import {
    Image,
    X,
    Activity,
    Play,
    Paperclip,
    TextInitial,
  } from "@lucide/svelte";
  import { LabelT } from "../../typography";
  import { ButtonIcon } from "../../buttons";

  let { file, userId }: { file: FileSmall; userId?: string } = $props();
  let downloading = $state(false);
</script>

{#snippet icon(mimeType: string)}
  {#if mimeType.startsWith("image/")}
    <Image class="text-default size-5" />
  {:else if mimeType.startsWith("audio/")}
    <Activity class="text-default size-5" />
  {:else if mimeType.startsWith("video/")}
    <Play class="text-default size-5" />
  {:else if mimeType.startsWith("text/")}
    <TextInitial class="text-default size-5" />
  {:else}
    <Paperclip class="text-default size-5" />
  {/if}
{/snippet}
<div class="gap-default flex w-full items-center">
  <form
    method="POST"
    action="?/download"
    class="flex w-full"
    use:enhance={enhanceForm({
      handlers: {
        success: async (result) => {
          const url = result.data?.url;

          const iframe = document.createElement("iframe");
          iframe.style.display = "none";
          iframe.src = url;
          document.body.appendChild(iframe);

          await new Promise((resolve) => setTimeout(resolve, 5000));
          document.body.removeChild(iframe);
        },
      },
    })}
  >
    <input type="hidden" value={file.s3Key} name="key" />
    <button
      type="submit"
      data-cy="file-task-card"
      disabled={downloading}
      class="group border-primary bg-clickable gap-default padding-default relative flex h-13 w-full items-center justify-between"
    >
      <LabelT>
        {file.name.split(".").shift()?.slice(0, 15)}
      </LabelT>

      {@render icon(file.mimeType || "")}
    </button>
  </form>
  {#if file.ownerId === userId}
    <form
      method="POST"
      action="?/deleteFile"
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
        iconProps={{ name: "close" }}
        formaction="?/deleteFile"
        type="submit"
      ></ButtonIcon>
    </form>
  {/if}
</div>
