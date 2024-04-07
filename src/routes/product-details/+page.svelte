<script>
	import ProductHeader from '$lib/components/ui/banner/ProductHeader.svelte';
	import SectionHeader from '$lib/components/ui/banner/SectionHeader.svelte';
	import LeftArrowButton from '$lib/components/ui/button/LeftArrowButton.svelte';
	import InfoPanel from '$lib/components/ui/product/InfoPanel.svelte';
	import ProductImageCarousel from '$lib/components/ui/product/ProductImageCarousel.svelte';
	import PreviewItemCarousel from '$lib/components/ui/product/PreviewItemCarousel.svelte';
	import ProductImage1 from '$lib/client/images/dunklow_bw_preview.png';
	import ProductImage2 from '$lib/client/images/dunklow_bw_preview_2.webp';
	import ProductImage3 from '$lib/client/images/dunklow_bw_preview_3.webp';
	import ProductImage4 from '$lib/client/images/dunklow_bw_preview_4.webp';
	import ProductImage5 from '$lib/client/images/dunklow_bw_preview_5.webp';

	const sortBy = [
		'Alphabetical (A to Z)',
		'Price (Low to High)',
		'Price (High to Low)',
		'Rating (Low to High)',
		'Rating (High to Low)'
	];

	let sizeStock = [
		{ size: 1, quantity: 13 },
		{ size: 1.5, quantity: 0 },
		{ size: 2, quantity: 34 },
		{ size: 2.5, quantity: 2 },
		{ size: 3, quantity: 35 },
		{ size: 3.5, quantity: 58 },
		{ size: 4, quantity: 98 },
		{ size: 4.5, quantity: 4567 },
		{ size: 5, quantity: 654 },
		{ size: 5.5, quantity: 4 },
		{ size: 6, quantity: 3 },
		{ size: 6.5, quantity: 2 },
		{ size: 7, quantity: 6 },
		{ size: 7.5, quantity: 39 },
		{ size: 8, quantity: 234 },
		{ size: 8.5, quantity: 3 },
		{ size: 9, quantity: 2 },
		{ size: 9.5, quantity: 1 },
		{ size: 10, quantity: 3 },
		{ size: 10.5, quantity: 6 },
		{ size: 11, quantity: 0 },
		{ size: 12, quantity: 0 },
		{ size: 13, quantity: 23 },
		{ size: 14, quantity: 34 }
	];

	const productImages = [ProductImage1, ProductImage2, ProductImage3, ProductImage4, ProductImage5];

	const quantitys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	let selectedSize;
	let rating = 3;
	let price = 115.00;

	const products = Array(10).fill({
		productImage: ProductImage1,
		productName: 'Dunk Low B/W',
		gender: "Men's",
		price: 'US$115',
		rating: 4,
		ratingCount: '84',
		scale: '0.97'
	});
</script>

<div class="flex flex-col items-center w-full h-fit">
	<div class="flex flex-col items-center w-[1920px] h-fit">
		<!-- Return to Previous Page-->
		<div class="flex w-full h-fit px-[17%]">
			<div class="flex flex-row justify-start w-full -py-[30px]">
				<LeftArrowButton text="Previous Page" />
			</div>
		</div>

		<ProductHeader productName="Nike Dunk Low BW" gender="Men's" />
		
		<div class="flex flex-col items-start w-full h-fit px-[17%] py-[1%]">
			<div class="flex flex-row w-full justify-between items-center px-[20px]">
				<ProductImageCarousel productImages={productImages} />
				<!-- InfoPanel-->
				<InfoPanel 
					sizeStock={sizeStock}
					quantitys={quantitys}
					selectedSize={selectedSize}
					rating={rating}
					price={price}
				/>
			</div>
		</div>
		<SectionHeader text="Similar Items" />
		<div class="flex flex-col items-start w-full h-fit px-[17%]">
			<PreviewItemCarousel products={products} />
		</div>
		
		<SectionHeader text="Reviews" />
		<!-- Rating Box -->
		<!-- Rating Distribution -->
		<!-- Review Box -->
		

	</div>
</div>
