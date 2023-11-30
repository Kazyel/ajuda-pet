<script>
	import '../app.css';
	import Footer from '../components/Footer.svelte';
	import Navbar from '../components/Navbar.svelte';
</script>

<Navbar />

<main class="bg-primary-100/30 row-[span_7_/_span_7]">
	<slot />
</main>

<Footer />
