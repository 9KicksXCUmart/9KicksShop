<script>
	import ImageBannerCarousel from '$lib/components/ui/homepage/ImageBannerCarousel.svelte';
	import SectionHeader from '$lib/components/ui/banner/SectionHeader.svelte';
	import MainBannerImage1 from '$lib/client/images/reebok_green_shoes_1.jpg';
	import MainBannerImage2 from '$lib/client/images/reebok_green_shoes_2.jpg';
	import PreviewItemCarousel from '$lib/components/ui/product/PreviewItemCarousel.svelte';

	const images = [
		MainBannerImage1,
		MainBannerImage2
	];
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<ImageBannerCarousel
			id="BannerCarousel"
			bannerImages={images}
		/>
		<SectionHeader
			text="New Arrivals"
		/>
		<div class="flex flex-col items-center w-full px-[17%] pb-[20px]">
			<PreviewItemCarousel/>
		</div>
		<!-- Subsection Image Banner -->
		<div class="w-full h-[472px] overflow-hidden py-[20px]">
			<img src={MainBannerImage2} alt="Banner" align="center" class="-mt-[120px]">
		</div>
		<SectionHeader
			text="Most Popular"
		/>
		<div class="flex flex-col items-center w-full px-[17%] pb-[20px]">
			<PreviewItemCarousel/>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
