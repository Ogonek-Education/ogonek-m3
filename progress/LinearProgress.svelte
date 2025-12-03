<script lang="ts">
  import { tv } from "tailwind-variants";

  let { percent, height = 4 }: { percent: number; height?: number } = $props();

  const linearProgress = tv({
    slots: {
      container: "flex gap-1",
      percent: "bg-md-sys-color-primary rounded-full shrink transition-[width]",
      track: "bg-md-sys-color-secondary-container rounded-full grow",
    },
  });

  const {
    container,
    percent: percentClass,
    track,
  } = $derived(linearProgress());
</script>

<div class={container()} role="progressbar" style:height="{height / 16}rem">
  <div class={percentClass()} style:width="{percent}%"></div>
  <div class={track()}></div>
</div>
