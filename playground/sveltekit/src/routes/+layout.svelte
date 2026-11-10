<script lang="ts">
	import TopLoader from "svelte-topbar";
	import { trackSvelteKitNavigation } from "svelte-topbar/sveltekit";
  import "../app.css";
  import favicon from "#lib/assets/favicon.svg";
  import type { LayoutProps } from "./$types";

  trackSvelteKitNavigation();
  let { children }: LayoutProps = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<TopLoader trackLinks={false} color="#7c3aed" showSpinner={true} />
{@render children()}
