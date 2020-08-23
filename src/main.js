import App from './App.svelte';
import key from '../config/key'

const app = new App({
	target: document.body,
	props: {
    googlemapKey: key.googlemap,
    ready: false,
  },
});

window.initMap = function ready() {
	app.$set({ ready: true });
}

export default app;
