<script lang="ts">
	import { onMount } from 'svelte';
	import {
		VStack,
		ButtonIcon,
		FAB,
		FABMenuItem,
		Display,
		Title,
		Headline,
		Body,
		Label,
		Divider,
		Rail,
		RailItem,
		Card,
		Dialogue,
		Textfield,
		Snackbar,
		DateField,
		LoadingIndicator,
		TimepickerInput,
		ListItem,
		Icon,
		Multipart,
		WordCard,
		Navbar,
		Lessons,
		Tasks,
		Tooltip,
		Words,
		Slider,
		Button,
		Search,
		card as cardTheme
	} from '$lib/index.ts';
	import { nanoid } from 'nanoid';

	let showModal = $state(false);
	let showModal2 = $state(false);
	let showModal3 = $state(false);
	let showAnswerDemo = $state(false);
	let selectedQuality = $state<number | null>(null);

	type DemoMultipart = { label: string; props: Record<string, unknown> };
	let multipartDemos: DemoMultipart[] = $state([]);

	const createDemoFile = (
		name: string,
		size: number,
		status: 'waiting' | 'uploading' | 'complete' | 'error',
		percentComplete = 0,
		errorMessage?: string
	) => {
		const bytes = Math.round((percentComplete / 100) * size);
		return {
			id: nanoid(),
			file: new File([new Uint8Array(size)], name, {
				type: 'application/octet-stream'
			}),
			progress: {
				uploaded: status === 'complete' ? 1 : 0,
				total: 1,
				bytes,
				totalBytes: size,
				percentComplete
			},
			status,
			errorMessage
		};
	};

	onMount(() => {
		multipartDemos = [
			{
				label: 'Пустое состояние',
				props: { readonly: true }
			},
			{
				label: 'Загрузка в процессе',
				props: {
					readonly: true,
					initialUploads: [createDemoFile('Lesson video.mp4', 2_100_000, 'uploading', 42)]
				}
			},
			{
				label: 'Успех и ошибка',
				props: {
					readonly: true,
					initialUploads: [
						createDemoFile('Homework.docx', 870_000, 'complete', 100),
						createDemoFile('Screenshot.png', 430_000, 'error', 75, 'Сбой сети')
					]
				}
			}
		];
	});

	const flashcardFilled = $derived(cardTheme({ type: 'filled' }).base);
	const flashcardOutlined = $derived(cardTheme({ type: 'outlined' }).base);

	const demoCard = {
		id: '1',
		deck: 'Spanish A2',
		tagTone: 'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container',
		front: 'hablar',
		back: 'Yo hablo, tú hablas, él/ella habla. Для формального «вы» используйте «usted habla».',
		tip: 'Спрягайте с местоимением, чтобы закрепить ударение.'
	};

	const qualityButtons = [
		{
			value: 0,
			label: 'Сложно',
			helper: 'Покажем раньше',
			tone: 'bg-md-sys-color-error-container text-md-sys-color-on-error-container',
			icon: 'close'
		},
		{
			value: 3,
			label: 'Норм',
			helper: 'Чуть позже',
			tone: 'bg-md-sys-color-tertiary-container text-md-sys-color-on-tertiary-container',
			icon: 'refresh'
		},
		{
			value: 5,
			label: 'Легко',
			helper: 'Увидите нескоро',
			tone: 'bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container',
			icon: 'check'
		}
	];

	const toggleAnswerDemo = () => {
		selectedQuality = null;
		showAnswerDemo = !showAnswerDemo;
	};

	const chooseQuality = (value: number) => {
		selectedQuality = value;
		setTimeout(() => {
			showAnswerDemo = false;
			selectedQuality = null;
		}, 700);
	};

	let toggle = $state(true);
</script>

<svelte:head>
	<title>Brand Assets | Ogonëk</title>
</svelte:head>

<Navbar>
	<Words />
	<Lessons />
	<Tasks />
</Navbar>
<div class="bg-md-sys-color-background flex flex-col gap-12 p-12">
	<Display>Buttons</Display>
	<VStack class="items-end">
		<Title>Default</Title>
		<Button>Regular</Button>
		<Button iconProps={{ name: 'home' }}>Regular Icon</Button>
		<Button variant="tonal">Tonal</Button>
		<Button variant="outlined">Outlined</Button>
		<Button variant="text">Text</Button>
		<Button
			variant="bare"
			onclick={() => {
				toggle = !toggle;
			}}
			selected={toggle}>Selected</Button
		>
		<Button variant="bare" selected={!toggle}>Unselected</Button>
	</VStack>
	<VStack class="items-end">
		<Title>FAB</Title>
		<FAB withMenu iconProps={{ name: 'home' }} color="text">
			<FABMenuItem iconProps={{ name: 'home' }}>Домой</FABMenuItem>
			<FABMenuItem iconProps={{ name: 'search' }}>Поиск</FABMenuItem>
		</FAB>
		<FAB label="Home" expanded iconProps={{ name: 'home' }} color="text"></FAB>
	</VStack>

	<VStack>
		<Title>Icon</Title>
		<ButtonIcon iconProps={{ name: 'home' }} />
	</VStack>
	<Display>Tooltips</Display>
	<div class="flex flex-wrap items-center gap-6">
		<Tooltip
			subhead="Домой"
			supportingText="Наведи или сфокусируйся на иконке, чтобы увидеть текст подсказки."
		>
			{#snippet trigger()}
				<ButtonIcon aria-label="Домой" iconProps={{ name: 'home' }} />
			{/snippet}
		</Tooltip>
		<Tooltip
			placement="bottom"
			subhead="Быстрая подсказка"
			supportingText="Доступна кнопкой Tab и закрывается, когда курсор уходит."
		>
			{#snippet trigger()}
				<Button variant="outlined" iconProps={{ name: 'info' }}>Подсказка снизу</Button>
			{/snippet}
			{#snippet children()}
				<Button variant="text">Действие</Button>
			{/snippet}
		</Tooltip>
	</div>
	<Divider />
	<Display>Typography</Display>

	<div class="grid grid-cols-3 items-end gap-12">
		<Display>Display</Display>
		<Headline>Headline</Headline>
		<Title>Title</Title>
		<Body>Body</Body>
		<Label>Label</Label>
	</div>
	<Divider />
	<Display>Navigation</Display>
	<Title>Rail</Title>
	<VStack>
		<Rail>
			<RailItem name="Главная" href="/" iconProps={{ name: 'home' }}></RailItem>

			<RailItem name="Задания" href="/" iconProps={{ name: 'assignment' }}></RailItem>

			<RailItem name="Занятия" href="/" iconProps={{ name: 'book' }}></RailItem>
		</Rail>
		<Rail>
			<RailItem badge={3} name="Главная" href="/" iconProps={{ name: 'home' }}></RailItem>

			<RailItem badge={3} name="Задания" href="/" iconProps={{ name: 'assignment' }}></RailItem>

			<RailItem badge={-1} name="Занятия" href="/" iconProps={{ name: 'book' }}></RailItem>
		</Rail>
	</VStack>
	<Display>Cards</Display>
	<div class="flex gap-2">
		<Card>Elevated</Card>
		<Card type="outlined">Outline</Card>
		<Card type="filled">Filled</Card>
	</div>
	<Display>Flashcards</Display>
	<div class="grid gap-6 xl:grid-cols-2">
		<div class="space-y-3">
			<Title>Учебная карточка</Title>
			<Body class="text-md-sys-color-on-surface-variant">
				Лицо и оборот одной карточки: компактный текст, статус и мягкая подсветка темы колоды.
			</Body>
			<div class="grid gap-3 md:grid-cols-2">
				<WordCard card={demoCard} />
				<WordCard card={demoCard} forceTurn />
			</div>
		</div>
	</div>
	<Display>Learning view</Display>
	<div class="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
		<div
			class={flashcardFilled({
				class: 'bg-md-sys-color-surface-container-high shadow-elevation-2 space-y-5 px-6 py-6'
			})}
			aria-label="Learning flashcard demo"
		>
			<div class="flex items-center justify-between">
				<Label class={`rounded-full px-3 py-1 ${demoCard.tagTone}`}>
					{demoCard.deck}
				</Label>
				<Label class="text-md-sys-color-primary">
					{showAnswerDemo ? 'Ответ' : 'Вопрос'}
				</Label>
			</div>
			{#if !showAnswerDemo}
				<div class="space-y-2">
					<Display class="text-md-sys-color-on-surface leading-tight">
						{demoCard.front}
					</Display>
					<Body class="text-md-sys-color-on-surface-variant">
						Говорить; используется с предлогом «con», чтобы подчеркнуть собеседника.
					</Body>
				</div>
				<div class="text-md-sys-color-on-surface-variant flex items-center justify-between text-sm">
					<div class="flex items-center gap-2">
						<Icon name="volume_up" class="text-md-sys-color-primary" />
						<span>Прослушать</span>
					</div>
					<Button variant="tonal" onclick={toggleAnswerDemo}>Показать ответ</Button>
				</div>
			{:else}
				<div class="space-y-3">
					<Title class="text-md-sys-color-on-surface">Я говорю, ты говоришь, он/она говорит</Title>
					<Body class="text-md-sys-color-on-surface-variant">
						{demoCard.back}
					</Body>
					<Label class="text-md-sys-color-tertiary flex items-center gap-2">
						<Icon name="tips_and_updates" />
						{demoCard.tip}
					</Label>
				</div>
				<div class="grid gap-3 md:grid-cols-3">
					{#each qualityButtons as quality (quality.value)}
						<button
							type="button"
							class={`focus-visible:outline-md-sys-color-primary flex flex-col gap-1 rounded-xl px-4 py-3 text-left transition focus-visible:outline-2 ${quality.tone} ${selectedQuality === quality.value ? 'ring-md-sys-color-primary ring-2' : ''}`}
							onclick={() => chooseQuality(quality.value)}
						>
							<div class="flex items-center justify-between">
								<span class="font-medium">{quality.label}</span>
								<Icon name={quality.icon} />
							</div>
							<span class="text-sm opacity-80">{quality.helper}</span>
						</button>
					{/each}
				</div>
				<Button variant="text" class="self-start" onclick={toggleAnswerDemo}>Скрыть ответ</Button>
			{/if}
		</div>
		<div class="space-y-3">
			<Title>Экран обучения</Title>
			<Body class="text-md-sys-color-on-surface-variant">
				Тонкие контейнеры, контрастные чипы и крупная типографика. Кнопки оценки — три уровня без
				ввода текста.
			</Body>
			<div class="grid gap-3">
				<div
					class={flashcardOutlined({
						class:
							'bg-md-sys-color-surface-container-low flex items-center justify-between px-5 py-4'
					})}
				>
					<div class="space-y-1">
						<Label class="text-md-sys-color-primary">Очередь</Label>
						<Title>12 карточек</Title>
					</div>
					<div class="flex gap-2">
						<Label
							class="bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container rounded-full px-3 py-1"
							>Новые · 5</Label
						>
						<Label
							class="bg-md-sys-color-tertiary-container text-md-sys-color-on-tertiary-container rounded-full px-3 py-1"
							>Повторить · 7</Label
						>
					</div>
				</div>
				<div
					class={flashcardOutlined({
						class: 'bg-md-sys-color-surface-container-low space-y-2 px-5 py-4'
					})}
				>
					<Label class="text-md-sys-color-primary">Прогресс</Label>
					<div class="flex items-center justify-between text-sm">
						<span class="text-md-sys-color-on-surface-variant">Сессия</span>
						<span class="text-md-sys-color-on-surface font-medium">8/12</span>
					</div>
					<div
						class="bg-md-sys-color-surface-container-highest h-2 w-full overflow-hidden rounded-full"
					>
						<div class="bg-md-sys-color-primary h-full w-2/3"></div>
					</div>
					<div class="text-md-sys-color-on-surface-variant grid grid-cols-3 gap-2 text-sm">
						<div
							class="bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container rounded-lg px-3 py-1"
						>
							Легко · 3
						</div>
						<div
							class="bg-md-sys-color-tertiary-container text-md-sys-color-on-tertiary-container rounded-lg px-3 py-1"
						>
							Норм · 5
						</div>
						<div
							class="bg-md-sys-color-error-container text-md-sys-color-on-error-container rounded-lg px-3 py-1"
						>
							Сложно · 2
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Display>Dialogues</Display>
	<Button
		onclick={() => {
			showModal = !showModal;
		}}>Показать хуй</Button
	>
	<Button
		onclick={() => {
			showModal2 = !showModal2;
		}}>Показать хуй 2</Button
	>
	<Button
		onclick={() => {
			showModal3 = !showModal3;
		}}>Показать хуй 3</Button
	>
	{#if showModal}
		<Dialogue
			withState={false}
			supportingText="Не то чтобы совсем, а все ж-таки давно, жил на Руси кто-то там великий"
			confirmAction="?/update"
			confirmText="Пизда"
			toggle={() => (showModal = !showModal)}
		/>
	{/if}
	{#if showModal2}
		<Dialogue
			withState={false}
			headline="Reset settings?"
			supportingText="Sure you want to delete this?"
			confirmAction="?/update"
			confirmText="Пизда"
			toggle={() => (showModal2 = !showModal2)}
		/>
	{/if}
	{#if showModal3}
		<Dialogue
			withState={false}
			supportingText="Anim sunt eiusmod deserunt Lorem. Tempor dolor voluptate fugiat elit sint ipsum ea. Enim proident velit sit Lorem esse. Nostrud cupidatat ut duis aute consectetur veniam pariatur voluptate exercitation. Pariatur ea adipisicing magna et duis enim veniam est exercitation consectetur mollit consequat. Aliquip consectetur nisi ipsum do minim nulla duis esse excepteur nisi. Quis do pariatur velit officia officia tempor eu aute."
			confirmAction="?/update"
			headline="This is unclear"
			confirmText="Lorem"
			toggle={() => (showModal3 = !showModal3)}
		/>
	{/if}
	<div class="grid grid-cols-2 gap-4">
		<div class="max-w-5xl space-y-4">
			<Display>Text Fields</Display>
			<Textfield label="test" value="HELLO" id="test"
				>{#snippet supportingText()}
					Just type it
				{/snippet}</Textfield
			>
			<Textfield label="no support text" id="test"></Textfield>
			<Textfield leadingIconProps={{ name: 'search' }} label="Search" id="test"></Textfield>
			<Textfield disabled label="Disabled" id="test"></Textfield>

			<Textfield error trailingIconProps={{ name: 'warning' }} label="Error" id="test"></Textfield>
		</div>
		<div class="space-y-4">
			<Display>Snackbar</Display>
			<Snackbar message="Hello" label="Dismiss" fixed={false}></Snackbar>

			<Snackbar message="With icon" label="Dismiss" showClose fixed={false}></Snackbar>

			<Snackbar
				message="Duis est labore proident sint ex irure enim non dolore elit amet sunt quis."
				fixed={false}
			></Snackbar>
		</div>
	</div>
	<Display>Search</Display>
	<div class="grid grid-cols-2 gap-4">
		<Search />
		<Search trailingIconProps={{ name: 'search' }} />
	</div>
	<Display>Time</Display>
	<div class="grid grid-cols-2 gap-4">
		<DateField label="Дата" />
		<LoadingIndicator />
		<LoadingIndicator container />
		<TimepickerInput
			setTime={(t) => console.debug('set time', t)}
			close={() => console.debug('closed')}
			time="09:41"
		/>
	</div>
	<Display>Multipart</Display>
	<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
		{#each multipartDemos as demo (demo.label)}
			<div class=" bg-md-sys-color-surface-container space-y-3 rounded-xl p-6">
				<Title>{demo.label}</Title>
				<Multipart {...demo.props} />
			</div>
		{/each}
	</div>
	<Display>Lists</Display>

	<div class="grid grid-cols-2 gap-4">
		<ul class="max-w-5xl">
			{#each Array(5).fill( { headline: 'Lesson', overline: 'Interesting', supporting: 'Adipisicing ullamco veniam enim aliqua cupidatat velit deserunt ipsum ad incididunt.', href: '/' } ) as lesson}
				<ListItem
					headline={lesson.headline}
					overline={lesson.overline}
					supporting={lesson.supporting}
					href={lesson.href}
				></ListItem>
			{/each}
		</ul>
		<ul class="max-w-5xl">
			{#each Array(5).fill( { headline: 'Task', supporting: 'Adipisicing ullamco veniam enim aliqua cupidatat velit deserunt ipsum ad incididunt.', href: '/' } ) as lesson}
				<ListItem
					headline={lesson.headline}
					overline={lesson.overline}
					supporting={lesson.supporting}
					href={lesson.href}
					>{#snippet trailing()}
						<Icon name="check" />
					{/snippet}</ListItem
				>
			{/each}
		</ul>
	</div>
	<Display>Slider</Display>
	<Slider value={5} />
</div>
