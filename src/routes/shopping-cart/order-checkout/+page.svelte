<script>
	import TextBanner from '$lib/components/ui/banner/PageHeader.svelte';
	import SummaryPanel from '$lib/components/ui/shopping-cart/Summary.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import InputPanel from '$lib/components/ui/input/InputPanel_2S1L.svelte';
	import DeliveryOptionButton from '$lib/components/ui/button/DeliveryOptionButton.svelte';
</script>

<div class="flex flex-col items-center w-full h-fit">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<TextBanner text="Order Checkout"/>
		<div class="flex flex-row justify-between items-start w-full h-fit px-[17%] py-[1%] space-x-[6%]">
			<!-- Checkout Info Panel -->
			<div class="flex flex-col space-y-[15px] w-[60%] h-fit">
				<div class="flex flex-col space-y-[20px] w-full">
					<!-- Personal Information -->
					<InputPanel
						panelName="Personal Information"
						shortColumnName_1="First Name*"
						shortColumnPrefilled_1="LAM"
						shortColumnName_2="Last Name*"
						shortColumnPrefilled_2="CHI FUNG"
						longColumnName="Email Address*"
						longColumnPrefilled="1155123456@link.cuhk.edu.hk"
					/>
					<hr>

					<!-- Shipping Information -->
					<InputPanel
						panelName="Shipping Information"
						shortColumnName_1="Country*"
						shortColumnPrefilled_1="Hong Kong SAR, China"
						shortColumnName_2="State/District*"
						shortColumnPrefilled_2="Kowloon"
						longColumnName="Street Address*"
						longColumnPrefilled="The Chinese University of Hong Kong"
					/>
					<hr>

					<!-- Payment Information -->
					<div class="flex flex-col space-y-[15px]">
						<span class="text-3xl font-bold"> Payment Method </span>
						<!-- Card Number -->
						<div class="flex flex-col space-y-[10px]">
							<span class="text-lg font-semibold"> Card Number* </span>
							<Input class="w-[600px] h-[35px] text-lg bg-[#f8fbf6]" placeholder="1234 4567 7890 1234"/>
						</div>
						<div class="flex flex-row space-x-[60px]">
							<!-- Expiry Month -->
							<div class="flex flex-col space-y-[10px]">
								<span class="text-lg font-semibold"> Expiry Month* </span>
								<Input class="w-[80px] h-[35px] text-lg bg-[#f8fbf6]" placeholder="MM"/>
							</div>
							<!-- Expiry Year -->
							<div class="flex flex-col space-y-[10px]">
								<span class="text-lg font-semibold"> Expiry Year* </span>
								<Input class="w-[80px] h-[35px] text-lg bg-[#f8fbf6]" placeholder="YY"/>
							</div>
							<!-- CVV -->
							<div class="flex flex-col space-y-[10px]">
								<span class="text-lg font-semibold"> CVV* </span>
								<Input class="w-[100px] h-[35px] text-lg bg-[#f8fbf6]" placeholder="CVV"/>
							</div>
						</div>
					</div>
					<hr>

					<!-- Delivery Option -->
					<div class="flex flex-col space-y-[15px]">
						<span class="text-3xl font-bold"> Delivery Option </span>
						<div class="flex flex-row py-[11px] space-x-[22px]">
							<DeliveryOptionButton
								id="Normal Delivery"
								color="#d3ffd8"
								buttonName="Normal Delivery"
								buttonCaption="7 to 14 working days"
							/>
							<DeliveryOptionButton
								id="Express Delivery"
								color="#e7e7e7"
								buttonName="Express Delivery"
								buttonCaption="2 to 3 working days"
							/>
						</div>
					</div>

					<!-- spacer -->
					<div class="h-[60px]"></div>
				</div>
			</div>
			<!-- Summary -->
			<SummaryPanel buttonText="Confirm" />	
		</div>
	</div>
</div>
<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
