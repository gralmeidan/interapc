<script lang="ts">
	import Magnify from '~icons/mdi/magnify';
	import AccountCircle from '~icons/mdi/account-circle';
	import Cart from '~icons/mdi/cart';
	import HelpCircle from '~icons/mdi/help-circle';
	import Menu from '~icons/mdi/menu';

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
			href: 'shop?q=Hardware'
		},
		{
			label: 'Pré-Montados',
			href: 'shop?q=Pré-Montados'
		},
		{
			label: 'Monitores',
			href: 'shop?q=Monitores'
		}
	];
</script>

<header class="navbar sticky top-0 z-50 block bg-neutral pb-0 text-neutral-content">
	<div class="flex items-center px-3">
		<a class="text-xl font-bold" href="/">InteraPC</a>
		<div class="grow px-14">
			<label
				class="input mx-auto flex h-fit w-full max-w-screen-lg items-center bg-neutral-content py-2 text-neutral"
			>
				<input
					type="text"
					class="grow placeholder:text-neutral placeholder:opacity-40"
					placeholder="Pesquise seu produto"
					autocorrect="off"
					spellcheck="false"
					onkeydown={(e) => {
						if (e.key === 'Enter') {
							window.location.href = `/shop?q=${(e.target as HTMLInputElement)?.value}`;
						}
					}}
				/>
				<Magnify />
			</label>
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
			<li>
				<button class="bg-black bg-opacity-10">Departamentos <Menu /></button>
			</li>
			{#each LINKS as link}
				<li>
					<a href={link.href}>{link.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
