<script lang="ts">
	import { Circle } from 'svelte-loading-spinners';
	export let size: string = '40';
	export let color: string = '#7D7D7D';
</script>

<Circle {size} {color} unit="px" duration="1s" />
