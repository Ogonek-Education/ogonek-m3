<script lang="ts">
  import { P, Heading } from "../library";

  let { children, title = "Title" } = $props();
</script>

<section
  class="gap-default border-fat flex h-60 flex-col justify-between p-5 md:h-[318px] md:p-2.5"
>
  <P>
    {@render children?.()}
  </P>

  <Heading>
    {title}
  </Heading>
</section>
