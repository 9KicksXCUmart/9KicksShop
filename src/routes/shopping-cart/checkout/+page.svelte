<script>
</script>

<div class="flex flex-col items-center w-full h-fit">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Order Checkout"/>
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
