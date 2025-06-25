<script lang="ts">
	import AccountCircle from '~icons/mdi/account-circle';
	import Cart from '~icons/mdi/cart';
	import HelpCircle from '~icons/mdi/help-circle';
	import Menu from '~icons/mdi/menu';
	import SearchInput from './SearchInput.svelte';
	import MobileNav from './MobileNav.svelte';
	import { filters } from '$lib/state';
	import { goto } from '$app/navigation';

	const LINKS = [
		{
			label: 'Ofertas',
			href: '/#ofertas'
		},
		{
			label: 'Monte seu PC',
			href: '/custom/starter'
		},
		{
			label: 'Hardware',
			href: 'shop',
			query: 'Hardware'
		},
		{
			label: 'Pré-Montados',
			href: 'shop',
			query: 'Computador'
		},
		{
			label: 'Monitores',
			href: 'shop',
			query: 'Monitor'
		}
	];

	const SUB_MENU_LINKS = [
		{
			label: 'Processadores',
			href: 'shop',
			query: 'Processadores'
		},
		{
			label: 'Placas de Vídeo',
			href: 'shop',
			query: 'GPU'
		},
		{
			label: 'Memórias RAM',
			href: 'shop',
			query: 'RAM'
		},
		{
			label: 'Armazenamento',
			href: 'shop',
			query: 'Armazenamento'
		},
		{
			label: 'Placas Mãe',
			href: 'shop',
			query: 'Placa Mãe'
		},
		{
			label: 'Gabinetes',
			href: 'shop',
			query: 'Gabinete'
		},
		{
			label: 'Fontes',
			href: 'shop',
			query: 'Fonte'
		},
		{
			label: 'Coolers',
			href: 'shop',
			query: 'Cooler'
		},
		{
			label: 'Periféricos',
			href: 'shop',
			query: 'Periférico'
		}
	];

	function onClickLink(event: MouseEvent, link: (typeof LINKS)[0]) {
		if (link.query) {
			filters.query = link.query;
			goto(`/${link.href}`, {});
			event.preventDefault();
		}
	}
</script>

<header class="navbar sticky top-0 z-50 block bg-neutral pb-0 text-neutral-content">
	<!-- Desktop -->
	<div class="desktop">
		<div class="flex items-center px-3">
			<a class="text-xl font-bold" href="/">InteraPC</a>
			<div class="grow px-14">
				<SearchInput />
			</div>
			<div class="flex items-center gap-4">
				<div class="flex grow items-center gap-1 text-sm">
					<AccountCircle class="text-3xl" />
					<p>Olá, <b>Entre</b> ou<br /> <b>Cadastre-se</b></p>
				</div>
				<Cart class="grow text-xl" />
				<HelpCircle class="grow text-xl" />
			</div>
		</div>
		<nav>
			<ul class="menu menu-horizontal">
				<li class="custom-dropdown relative">
					<button class="bg-black bg-opacity-10">Departamentos <Menu /></button>
					<ul class="custom-dropdown-content rounded-b-md bg-neutral">
						{#each SUB_MENU_LINKS as link}
							<li>
								<a
									href={link.href}
									class="bg-black bg-opacity-10"
									onclick={(event) => onClickLink(event, link)}>{link.label}</a
								>
							</li>
						{/each}
					</ul>
				</li>
				{#each LINKS as link}
					<li>
						<a href={link.href} onclick={(event) => onClickLink(event, link)}>{link.label}</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
	<!-- Mobile -->
	<div class="mobile">
		<div class="flex items-center justify-between px-3">
			<div class="flex gap-4">
				<AccountCircle class="text-3xl" />
				<Cart class="text-3xl" />
			</div>
			<a class="text-xl font-bold" href="/">InteraPC</a>
			<MobileNav items={LINKS} />
		</div>
		<div class="p-4">
			<SearchInput />
		</div>
	</div>
</header>

<style>
	.mobile {
		display: none;
	}

	.desktop {
		display: block;
	}

	.custom-dropdown-content {
		display: none;
		position: absolute;
		top: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	.custom-dropdown:hover .custom-dropdown-content {
		display: block;
	}

	@media (max-width: 724px) {
		.desktop {
			display: none;
		}

		.mobile {
			display: block;
		}
	}
</style>
