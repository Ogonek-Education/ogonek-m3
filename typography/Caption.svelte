<script lang="ts">
  import { type CaptionConfig } from "$lib/types";
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  let {
    children,
    config = "default",
    maxWidth = true,
    styling = "",
    ...rest
  }: {
    children: Snippet;
    config?: CaptionConfig;
    maxWidth?: boolean;
    styling?: string;
  } & HTMLAttributes<HTMLParagraphElement> = $props();
  const configClasses: Record<CaptionConfig, string> = {
    default: "text-stone-500 dark:text-stone-400",
    success: "text-apple-dark dark:text-apple",
    warning: "text-orange-500 dark:text-orange-400",
    error: "text-red-500 dark:text-red-400",
    none: "",
  };

  const classes = $derived(`${configClasses[config]} ${styling}`.trim());
</script>

<p
  {...rest}
  class="{maxWidth ? 'min-w-max' : 'w-full'} text-xs font-medium {classes}"
>
  {@render children?.()}
</p>
