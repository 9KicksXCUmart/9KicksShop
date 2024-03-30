<script>
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import CartItem from '$lib/components/ui/shopping-cart/CartItem.svelte';
	import SummaryPanel from '$lib/components/ui/shopping-cart/Summary.svelte';
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Shopping Cart"/>
		<div class="flex flex-row justify-between items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]">
			<!-- Cart Item List -->
			<div class="flex flex-col space-y-[15px] w-[40%] h-[1300px]">
				<CartItem productImage={ProductImage}/>

				<CartItem productImage={ProductImage}/>
			</div>
			<!-- Summary -->
			<SummaryPanel/>	
		</div>
	</div>
</div>
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
