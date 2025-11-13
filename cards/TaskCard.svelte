<script lang="ts">
  import { formatDateOnly } from "$lib/utils";
  import CardClickable from "./CardClickable.svelte";
  import Badge from "./badge/Badge.svelte";
  import { getBadgeConfig } from "$lib/utils";
  import SeenBadge from "./SeenBadge.svelte";
  import type { TaskSmall } from "$lib/types";
  import { page } from "$app/state";
  import { VStack } from "../layout";
  import { Heading } from "../typography";

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
  <VStack class="justify-center md:justify-start">
    {#if !task.completed}
      <Badge color={badgeConfig}>{badgeText}</Badge>
    {:else}
      <Badge color="green">Выполнено</Badge>
    {/if}
  </VStack>
  <SeenBadge seen={task.seen} />
</CardClickable>
