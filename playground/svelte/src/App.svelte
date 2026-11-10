<script lang="ts">
  import TopLoader, { createTopLoader } from "svelte-topbar";

  const loader = createTopLoader();
  let loading = $state(false);

  function testLoader() {
    if (loading) return;
    loading = true;
    loader.start();
    window.setTimeout(() => {
      loader.done();
      loading = false;
    }, 1200);
  }
</script>

<TopLoader color="#5555dd" showSpinner={false} />

<main>
  <h1>Svelte TopLoader</h1>
  <p>Demo sederhana untuk Svelte.</p>
  <button onclick={testLoader} disabled={loading}
    >{loading ? "Loading…" : "Test loader"}</button
  >
  <a href="/?page=2">Test navigasi link</a>
</main>
