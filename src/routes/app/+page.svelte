<script lang="ts">
	import SinglePane from '$lib/components/containers/panes/SinglePane.svelte';
	import Rail from '$lib/components/nav/rail/Rail.svelte';
	import RailItem from '$lib/components/nav/rail/RailItem.svelte';
</script>

<SinglePane
	><Rail expandable={false} rounded>
		<RailItem name="Платежный аккаунт" href="/app" iconProps={{ name: 'house' }}></RailItem>

		<RailItem name="Circle" href="/app/circle" iconProps={{ name: 'circle' }} />
	</Rail></SinglePane
>
