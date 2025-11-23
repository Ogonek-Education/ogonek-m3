<script lang="ts">
  import type { Snippet } from "svelte";
  import { Heading, P } from "../../typography";
  import type { Icon as LucideIcon } from "@lucide/svelte";

  let { children, title = "Title", Icon }: Props = $props();
  type Props = { children: Snippet; title: string; Icon: typeof LucideIcon };
</script>

<section
  class="gap-default border-primary padding-default relative flex h-60 flex-col justify-between overflow-clip md:h-[318px]"
>
  <P>
    {@render children?.()}
  </P>

  <Heading>
    {title}
  </Heading>
  <Icon class="text-bg-tertiary absolute -right-8 -bottom-10 -z-10 size-36" />
</section>
