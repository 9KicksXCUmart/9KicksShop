<script>
	import LowerNavBar from '$lib/components/ui/layout/LowerNavBar.svelte';
	import UpperNavBar from '$lib/components/ui/layout/UpperNavBar.svelte';
	import '../app.css';
</script>

<UpperNavBar />
<LowerNavBar />
<slot />
