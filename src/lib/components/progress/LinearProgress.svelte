<script lang="ts">
  import clsx from "clsx";
  import { tv } from "tailwind-variants";

  let {
    percent,
    height = 4,
    class: className,
  }: { percent: number; height?: number; class?: string } = $props();

  const linearProgress = tv({
    slots: {
      container: "flex gap-1",
      percent: "bg-md-sys-color-primary rounded-full shrink",
      track: "bg-md-sys-color-secondary-container rounded-full grow",
    },
  });

  const {
    container,
    percent: percentClass,
    track,
  } = $derived(linearProgress());
</script>

<div
  class={container({ class: clsx(className) })}
  role="progressbar"
  style:height="{height / 16}rem"
>
  <div
    class={percentClass()}
    style:width="{percent}%"
    style="transition: var(--md-sys-motion-easing-fast);"
  ></div>
  <div class={track()}></div>
</div>
