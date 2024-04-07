<script>
	export let productName;
	export let gender;
</script>

<div class="flex flex-col items-start w-full h-fit px-[17%] py-[10px] space-y-[10px]">
	<span class="text-black font-bold" style="font-size:50px">
		{productName}
	</span>
	<span class="text-black" style="font-size:40px">
		{gender}
	</span>
</div>
