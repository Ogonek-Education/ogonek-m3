<script lang="ts">
  import { formatDateOnly } from "$lib/utils";
  import Card from "../Card.svelte";
  import { getBadgeConfig } from "$lib/utils";
  import type { TaskSmall } from "$lib/types";
  import { page } from "$app/state";
  import { VStack } from "../../layout";
  import { Heading } from "../../typography";

  let { task }: { task: TaskSmall } = $props();
  const formattedDate: string = formatDateOnly(task.dueDate);
  const href: string =
    page.params.role === "t" ? `/t/tasks/${task.id}` : `/s/tasks/${task.id}`;
  const badgeText: string = `Дедлайн ${formattedDate}`;
  const badgeConfig = getBadgeConfig(task.dueDate);
</script>

<Card data-cy="task-card" {href}>
  <Heading class="text-center md:text-left" tag="h3">
    {task.title}
  </Heading>
</Card>
