<script>
	import ImageBannerCarousel from '$lib/components/ui/homepage/ImageBannerCarousel.svelte';
	import SectionHeader from '$lib/components/ui/banner/SectionHeader.svelte';
	import MainBannerImage1 from '$lib/client/images/reebok_green_shoes_1.jpg';
	import MainBannerImage2 from '$lib/client/images/reebok_green_shoes_2.jpg';
	import PreviewItemCarousel from '$lib/components/ui/product/PreviewItemCarousel.svelte';
	import ProductImage from '$lib/client/images/dunklow_bw_preview.png';

	const images = [MainBannerImage1, MainBannerImage2];

	const products = Array(10).fill({
		productImage: ProductImage,
		productName: 'Dunk Low B/W',
		gender: "Men's",
		price: 'US$115',
		rating: 4,
		ratingCount: '84',
		scale: '0.97'
	});
</script>

<div class="flex flex-col items-center w-full h-full">
	<!-- 1920x1080 Container -->
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<ImageBannerCarousel id="BannerCarousel" bannerImages={images} />
		<SectionHeader text="New Arrivals" />
		<div class="flex flex-col items-center w-full px-[17%] pb-[20px]">
			<PreviewItemCarousel {products} />
		</div>
		<!-- Subsection Image Banner -->
		<div class="w-full h-[472px] overflow-hidden py-[20px]">
			<img src={MainBannerImage2} alt="Banner" align="center" class="-mt-[120px]" />
		</div>
		<SectionHeader text="Most Popular" />
		<div class="flex flex-col items-center w-full px-[17%] pb-[50px]">
			<PreviewItemCarousel {products} />
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.white);
	}
</style>
