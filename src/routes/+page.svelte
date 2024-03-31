<script>
	import ImageBannerCarousel from '$lib/components/ui/homepage/ImageBannerCarousel.svelte';
	import SectionHeader from '$lib/components/ui/banner/SectionHeader.svelte';
	import MainBannerImage1 from '$lib/client/images/red_jordan_1_banner.webp';
	import MainBannerImage2 from '$lib/client/images/white_puma_banner.webp';
	import PreviewItemCarousel from '$lib/components/ui/product/PreviewItemCarousel.svelte';
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
