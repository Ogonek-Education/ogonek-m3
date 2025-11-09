<script lang="ts">
  import { formatDateOnly } from "$lib/utils";
  import CardClickable from "./CardClickable.svelte";
  import Badge from "./Badge.svelte";
  import { Heading } from "../library/typography";
  import { getBadgeConfig } from "$lib/utils";
  import SeenBadge from "./SeenBadge.svelte";
  import { VStack } from "../library";
  import type { TaskSmall } from "$lib/types";
  import { page } from "$app/state";

  let { task }: { task: TaskSmall } = $props();
  const formattedDate: string = formatDateOnly(task.dueDate);
  const href: string =
    page.params.role === "t" ? `/t/tasks/${task.id}` : `/s/tasks/${task.id}`;
  const badgeText: string = `Дедлайн ${formattedDate}`;
  const badgeConfig = getBadgeConfig(task.dueDate);
</script>

<CardClickable data-cy="task-card" {href}>
  <Heading tag="h3">
    {task.title}
  </Heading>
  <VStack>
    {#if !task.completed}
      <Badge config={badgeConfig}>{badgeText}</Badge>
    {:else}
      <Badge config="green">Выполнено</Badge>
    {/if}
  </VStack>
  <SeenBadge seen={task.seen} />
</CardClickable>
