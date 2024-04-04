<script>
	import LowerNavBar from '$lib/components/ui/layout/LowerNavBar.svelte';
	import UpperNavBar from '$lib/components/ui/layout/UpperNavBar.svelte';
	import Footer from '$lib/components/ui/layout/Footer.svelte';
	import '../app.css';
</script>

<div class="min-h-screen">
	<UpperNavBar />
	<LowerNavBar />
	<slot />
</div>
<Footer />
