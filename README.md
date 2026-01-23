# ogonek-m3

Svelte components and utilities inspired by Material Design 3.

> This project borrows heavily from m3-svelte.

## Install

```bash
pnpm add ogonek-m3
```

## Material Symbols (icons)

Use the provider component once near the root of your app to load the baseline icons,
and extend it with any extra icons you need.

```svelte
<script lang="ts">
	import { MaterialSymbolsProvider } from 'ogonek-m3';
</script>

<MaterialSymbolsProvider extraIcons={['search', 'add']} />
```

## Theme CSS conversion (Material Theme Builder)

[Material Theme Builder](https://material-foundation.github.io/material-theme-builder/) exports a CSS file with a theme selector (e.g. `.light { ... }`).
Use the CLI to convert that file into the format used by this package.

```bash
npx ogonek-m3-theme path/to/theme.css path/to/output.css
```

The converter:

- Remaps variables from `--md-` to `--color-md-`
- Wraps the output in `@layer base` and `[data-theme="..."]`

## Components

The package exports Svelte components from `ogonek-m3`. All components accept a `class` prop and the usual HTML attributes for their element.

### Typography

```svelte
<script lang="ts">
	import { Display, Headline, Title, Body, Label, Kbd } from 'ogonek-m3';
</script>

<Display>Display</Display>
<Headline>Headline</Headline>
<Title>Title</Title>
<Body>Body copy that wraps at sensible widths.</Body>
<Label type="prominent">Prominent label</Label>
<Kbd position="absolute">⌘K</Kbd>
```

Props highlights:

- `Label`: `type="default" | "prominent"`
- `Kbd`: `position="absolute" | "relative"`

### Containers

Stacks:

```svelte
<script lang="ts">
	import { HStack, VStack } from 'ogonek-m3';
</script>

<HStack gap="lg" size="w">
	<div>Left</div>
	<div>Right</div>
</HStack>

<VStack gap="sm" size="h">
	<div>Top</div>
	<div>Bottom</div>
</VStack>
```

Pane layouts:

```svelte
<script lang="ts">
	import { SplitPane, SinglePane, SupportingPane } from 'ogonek-m3';
</script>

{#snippet left()}
	<nav>Nav</nav>
{/snippet}

{#snippet right()}
	<main>Main</main>
{/snippet}

<SplitPane leftWidth={280} storageKey="nav" persist {left} {right} />

<SinglePane headline="Settings" centered="medium" padding="md">
	<p>Content</p>
</SinglePane>

{#snippet main()}
	<section>Primary content</section>
{/snippet}

{#snippet supporting()}
	<aside>Secondary content</aside>
{/snippet}

<SupportingPane {main} {supporting} position="right" />
```

Other container helpers:

```svelte
<script lang="ts">
	import { Divider, Dialogue, ListItem } from 'ogonek-m3';
	let open = true;
</script>

<Divider orientation="horizontal" variant="inset" />

<ListItem headline="Profile" supporting="Signed in" />

{#if open}
	<Dialogue
		headline="Delete item?"
		supportingText="This action cannot be undone."
		confirmText="Delete"
		toggle={() => (open = false)}
	/>
{/if}
```

### Buttons

```svelte
<script lang="ts">
	import { Button, ButtonIcon, FAB, FABMenuItem } from 'ogonek-m3';
</script>

<Button variant="filled" color="primary" size="md">
	Save
</Button>

<Button
	variant="outlined"
	iconProps={{ name: 'add' }}
>
	New
</Button>

<ButtonIcon
	variant="text"
	iconProps={{ name: 'search' }}
	tooltipContent="Search"
/>

<FAB
	iconProps={{ name: 'edit' }}
	expanded
	label="Compose"
/>

<FAB withMenu iconProps={{ name: 'add' }}>
	<FABMenuItem iconProps={{ name: 'note_add' }}>New note</FABMenuItem>
	<FABMenuItem iconProps={{ name: 'event' }}>New event</FABMenuItem>
</FAB>
```

Button props highlights:

- `variant`: `filled | tonal | outlined | text | elevated | bare` (buttons), `filled | tonal | outlined | text | elevated` (icon)
- `color`: `default | primary | secondary | tertiary | error`
- `size`: `sm | md` (plus xs/lg/xl where supported)
- `shape`: `round | square`
- `loading`: swaps content for a loader
- `iconProps`: `{ name: string, fill?, wght?, grad?, opsz? }`
- `href`: render as an anchor instead of a button
