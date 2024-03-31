<script>
	import ImageBannerCarousel from '$lib/components/ui/homepage/ImageBannerCarousel.svelte';
	import SectionHeader from '$lib/components/ui/banner/SectionHeader.svelte';
	import MainBannerImage1 from '$lib/client/images/red_jordan_1_banner.webp';
	import MainBannerImage2 from '$lib/client/images/white_puma_banner.webp';
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<ImageBannerCarousel
			id="BannerCarousel"
			bannerImage1={MainBannerImage1}
			bannerImage2={MainBannerImage2}
		/>
		<SectionHeader
			text="New Arrivals"
		/>
		<div class="flex flex-col items-center w-full px-[17%] py-[1%]">
			<!-- Product Preview Item-->
			<div class="flex flex-col">
				<!-- Product Image -->
				<!-- Product Name -->
				<!-- Product Gender -->
				<!-- Product Price -->
				<!-- Product Rating + Rating Count -->
			</div>
		</div>
		<SectionHeader
			text="Most Popular"
		/>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
