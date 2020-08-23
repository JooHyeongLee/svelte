<script>
	let container;
	let map;
  let zoom = 8;
  let center = { lat: 37.5642135 ,lng: 127.0016985 };
  let polyline = []

  import { onMount } from 'svelte';
    
	onMount(async () => {
    let xmlDoc = await parsing('test.gpx')
    let trkpt = xmlDoc.getElementsByTagName('trkpt')

    for (let i = 0; i < trkpt.length; i++) {
      polyline.push({
        lat: parseFloat(trkpt[i].getAttribute('lat')),
        lng: parseFloat(trkpt[i].getAttribute('lon'))
      })
    }
		map = new google.maps.Map(container, {
        zoom,
        center,
    });
    setPolyline()
    setMarker()
  });
  async function parsing(file) {
    let rawFile = new XMLHttpRequest();
    return new Promise((resolve, reject)=>{
      rawFile.open("GET", file, false);
      rawFile.onreadystatechange = function() {
        if(rawFile.readyState === 4){
            if(rawFile.status === 200 || rawFile.status == 0){
              let allText = rawFile.responseText;
              let parser = new DOMParser();
              let xmlDoc = parser.parseFromString(allText,"text/xml");
              resolve(xmlDoc)
            } else {
              reject("Error")
            }
        }
      }
      rawFile.send(null);
    })
  }

  function setPolyline() {
    const flightPath = new google.maps.Polyline({
      path: polyline,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    flightPath.setMap(map);
  }
  
  function setMarker() {
    let myLatLng = {lat: polyline[0].lat, lng: polyline[0].lng};

    let marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }
</script>

<style>
.full-screen {
    width: 100vw;
    height: 100vh;
}
</style>

<div class="full-screen" bind:this={container}></div>
