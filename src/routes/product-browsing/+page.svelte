<script>
	import PageHeader from '$lib/components/ui/banner/PageHeader.svelte';
	import SortOption from '$lib/components/ui/dropdown/SortOption.svelte';
	import FilterPanel from '$lib/components/ui/product-browsing/FilterPanel.svelte';

	const menuItems = [
		'Alphabetical (A to Z)',
		'Price (Low to High)',
		'Price (High to Low)',
		'Rating (Low to High)',
		'Rating (High to Low)'
	];
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<PageHeader text="Sneakers" />
		<div
			class="flex flex-row justify-between items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]"
		>
			<FilterPanel />
			<SortOption {menuItems} />
		</div>
	</div>
</div>
