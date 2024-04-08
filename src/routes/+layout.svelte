<script>
	import LowerNavBar from '$lib/components/layout/LowerNavBar.svelte';
	import UpperNavBar from '$lib/components/layout/UpperNavBar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '../app.css';
</script>

<svelte:head>
	<title>9Kicks</title>
</svelte:head>
<div class="min-h-[90vh]">
	<UpperNavBar />
	<LowerNavBar />
	<slot />
</div>
<Footer />
