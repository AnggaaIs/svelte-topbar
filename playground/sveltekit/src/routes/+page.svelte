<script lang="ts">
	import { goto } from '$app/navigation';
	import { createTopLoader } from 'svelte-toploader';

	const loader = createTopLoader();
	let loading = $state(false);

	function simulateLoad() {
		if (loading) return;
		loading = true;
		loader.start();
		window.setTimeout(() => {
			loader.done();
			loading = false;
		}, 1400);
	}
</script>

<main>
	<h1>Svelte TopLoader</h1>
	<p>Demo sederhana untuk SvelteKit.</p>
	<button onclick={simulateLoad} disabled={loading}>{loading ? 'Loading…' : 'Test loader'}</button>
	<button onclick={() => goto('/slow')}>Test navigasi</button>
</main>
