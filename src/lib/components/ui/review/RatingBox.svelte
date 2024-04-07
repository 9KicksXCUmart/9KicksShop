<script>
	export let id;
	export let averageRating = 0;
	export let ratingCount = 0;

	let color;
	let ratingText;

	if (averageRating >= 4.5) {
		color="#257500";
		ratingText="Superb";
	} else if (averageRating >= 4.0){
		color="#87c769";
		ratingText="Great";
	} else if (averageRating >= 3.0){
		color="#abc700";
		ratingText="Good";
	} else if (averageRating >= 2.0){
		color="#e8c033";
		ratingText="Decent";
	} else if (averageRating >= 1.0){
		color="#f87e63";
		ratingText="Bad";
	} else {
		color="#000000";
		ratingText="Nightmare!";
	}
	
	let boxStyling=`background-color: ${color}`;
	let textStyling=`font-size: 50px; color: ${color}`;
</script>


<!-- Rating Box -->
<div id={id} class="flex flex-col p-[10px] space-y-[10px]">
	<div class="flex flex-row items-center space-x-[16px]">
		<div class="flex place-content-center h-[70px] w-[120px] p-[5px] rounded-lg bg-[#257500]" style={boxStyling}>
			<span class="font-bold text-white" style="font-size:40px"> {averageRating} </span>
		</div>
		<span class="text-[#257500]" style={textStyling}> {ratingText} </span>
	</div>
	<span class="text-xl"> {ratingCount} Customer Rating(s) </span>
</div>
