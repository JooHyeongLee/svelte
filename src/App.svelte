<script lang="ts">
  export let googlemapKey;
  import Map from './Map.svelte';
  export let ready;
</script>

<svelte:head>
	<script defer async
	src="https://maps.googleapis.com/maps/api/js?key={googlemapKey}&callback=initMap">
	</script>
</svelte:head>

<main>
	<h1>Test!</h1>
  { #if ready }
    <Map></Map>
  { /if }
</main>

<style>
:global(body) {
	padding: 0;
}
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

