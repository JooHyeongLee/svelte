<script lang="ts">
  // export let googlemapKey;
  // import Map from './Map.svelte';
  export let ready;
  const proxy = 'CORS_PROXY_URL'
  
  fetch(`${proxy}/sample/test`)
  .then(function(response) {
      return response.text()
  }).then(function(body) {
      document.body.innerHTML = body
  })
</script>

<svelte:head>
	<!-- <script defer async
	src="https://maps.googleapis.com/maps/api/js?key={googlemapKey}&callback=initMap">
	</script> -->
</svelte:head>

<main>
  <h1>웹소켓 클라이언트입니다.</h1>
  { #if ready }
    <Map></Map>
  { /if }
</main>

<style>
:global(body) {
	padding: 0;
}
	main {
		text-align: left;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #000000;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

