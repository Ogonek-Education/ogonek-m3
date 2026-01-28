<script lang="ts">
	import clsx from 'clsx';
	import { tv, type VariantProps } from 'tailwind-variants';
	import { page } from '$app/state';
	import { Layer } from '$lib/utils/index.js';

	const {
		seed = page.data.context?.user.name ?? 'ogonek',
		avatarUrl = page.data.context?.profile.avatarUrl,
		alt = 'User avatar',
		class: className,
		size = 'lg',
		onclick
	}: {
		seed?: string;
		avatarUrl?: string | null;
		alt?: string;
		onclick?: () => void;
		class?: string;
	} & AvatarVariants = $props();

	const materialPalette = ['e8f0fe', 'e8f5e9', 'fff7e6', 'fde7ec', 'e3f2fd'];
	const dicebearBaseUrl = 'https://api.dicebear.com/9.x/shapes/svg';
	const sizeMap = {
		sm: 48,
		md: 72,
		lg: 96
	} as const;

	const generatedAvatar = $derived.by(() => {
		const sizePx = sizeMap[size ?? 'lg'] ?? 96;
		const params = new URLSearchParams({
			seed,
			size: String(sizePx),
			radius: '50',
			backgroundColor: materialPalette.join(',')
		});

		return `${dicebearBaseUrl}?${params.toString()}`;
	});

	const src = $derived(avatarUrl ?? generatedAvatar);

	type AvatarVariants = VariantProps<typeof avatar>;
	const avatar = tv({
		slots: {
			base: 'aspect-square min-w-max shrink-0 rounded-full object-cover'
		},
		variants: {
			size: {
				sm: 'size-12',
				md: 'size-18',
				lg: 'size-24'
			}
		}
	});

	const { base } = $derived(avatar({ size }));
</script>

{#if !onclick}
	<img {src} {alt} class={base({ class: clsx(className) })} />
{:else}
	<button class="relative rounded-full" {onclick} type="button">
		<Layer />
		<img {src} {alt} class={base({ class: clsx(className) })} />
	</button>
{/if}
