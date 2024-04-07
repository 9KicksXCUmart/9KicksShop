<script>
	import DisBar from '$lib/components/ui/review/DistributionBar.svelte';

	const ratings = [5, 4, 3, 2, 1];

	export let id;
	export let ratingDistri;

</script>

<!-- Rating Distribution -->
<div id={id} class="flex flex-col">
	{#each ratings as i}
		<div class="flex flex-row items-center space-x-[10px]">
			<div class="flex flex-row place-items-center space-x-[2px]">
				{#each Array(i) as _, j}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
						<path
							d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
							fill="#a6a6a6"
						/>
					</svg>
				{/each}
				{#each Array(5-i) as _, j}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
						<path
							d="M10 0l2.47 7.55h8.02l-6.47 4.7 2.47 7.55L10 15.1l-6.47 4.7 2.47-7.55L0 7.55h8.02L10 0z"
							fill="#d9d9d9"
						/>
					</svg>
				{/each}
			</div>
			<DisBar percentage={ratingDistri[i-1]} />
			<span class="text-lg"> {ratingDistri[i-1]}  </span>
		</div>
	{/each}
</div>
