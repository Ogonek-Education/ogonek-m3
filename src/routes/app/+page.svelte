<script lang="ts">
	import ListItem from '$lib/components/containers/list/ListItem.svelte';
	import SplitPane from '$lib/components/containers/panes/SplitPane.svelte';
	import SupportingPane from '$lib/components/containers/panes/SupportingPane.svelte';
	import Rail from '$lib/components/nav/rail/Rail.svelte';
	import RailItem from '$lib/components/nav/rail/RailItem.svelte';
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
