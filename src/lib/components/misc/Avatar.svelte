<script lang="ts">
	/**
	 * Avatars can be used to represent people or objects.
	 *
	 * @see https://m3.material.io/components/avatars/overview
	 */
	import clsx from 'clsx';
	import { tv, type VariantProps } from 'tailwind-variants';
	import { Layer } from '$lib/utils/index.js';

	const {
		seed = 'ogonek',
		avatarUrl,
		alt = 'User avatar',
		class: className,
		size = 'lg',
		onclick
	}: {
		/** The seed for the generated avatar if no avatarUrl is provided. */
		seed?: string;
		/** The URL of the avatar image. If null or undefined, a generated avatar will be used. */
		avatarUrl?: string | null;
		/** The alt text for the avatar image. */
		alt?: string;
		/** Callback for when the avatar is clicked. If provided, the avatar is wrapped in a button. */
		onclick?: () => void;
		/** Additional CSS classes for the avatar element. */
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
