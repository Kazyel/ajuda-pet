<script>
	import Cards from '../components/Cards.svelte';
	import Ong from '/cards/ong.svg';
</script>

<section class="flex items-center h-full justify-center">
	<div class="grid grid-cols-2 place-items-center gap-8 grid-rows-3">
		<Cards href="/ongs" text="Ongs" svg={Ong} alt="Ícone de ONG" />
		<Cards href="/medicaments" text="Doações de Medicamentos" />
		<Cards href="/racao" text="Doação de rações" />
		<Cards href="/resgate" text="Chame pelo Resgate" />
		<Cards href="/adote" text="Adote" />
		<Cards href="/voluntario" text="Seja voluntário" />
	</div>
</section>
