<script lang="ts">
	import Rail from '$lib/components/nav/rail/Rail.svelte';
	import RailItem from '$lib/components/nav/rail/RailItem.svelte';
	import { ListItem, SplitPane, SupportingPane } from '$lib/index.ts';
</script>

<Rail expandable={false}>
	<RailItem name="Платежный аккаунт" href="/app" iconProps={{ name: 'house' }}></RailItem>
	<RailItem name="Circle" href="/app/circle" iconProps={{ name: 'circle' }} />
</Rail>

<SplitPane class="ml-24" leftClass="ml-24" anchor="viewport">
	{#snippet left()}
		<ListItem>Hello</ListItem>{/snippet}
	{#snippet right()}
		<SupportingPane anchor="viewport">
			{#snippet main()}{/snippet}
			{#snippet supporting()}
				SOSSAT{/snippet}
		</SupportingPane>{/snippet}
</SplitPane>
