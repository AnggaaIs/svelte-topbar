<script lang="ts">
  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
</script>

<main>
  <h1>Navigation complete</h1>
  <p>Route loaded at {new Date(data.loadedAt).toLocaleTimeString()}.</p>
  <a href="/">Back to demo</a>
</main>
