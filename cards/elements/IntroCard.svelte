<script lang="ts">
  import type { Snippet } from "svelte";
  import { Headline, Body } from "../../typography";

  let { children, title = "Title" }: Props = $props();
  type Props = { children: Snippet; title: string };
</script>

<section
  class="gap-default border-primary padding-default relative flex h-60 flex-col justify-between overflow-clip md:h-[318px]"
>
  <Body>
    {@render children?.()}
  </Body>

  <Headline>
    {title}
  </Headline>
</section>
