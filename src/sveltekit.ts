import { afterNavigate, beforeNavigate } from '$app/navigation';
import * as NProgress from 'nprogress';

/**
 * Connect the shared top loader to SvelteKit's client-side navigation lifecycle.
 *
 * Call this during component initialization, typically in the root
 * `+layout.svelte`. It registers SvelteKit lifecycle callbacks; it is not a
 * router instance and does not replace SvelteKit's `goto` API.
 *
 * @example
 * ```svelte
 * <script lang="ts">
 *   import { trackSvelteKitNavigation } from 'svelte-topbar/sveltekit';
 *   trackSvelteKitNavigation();
 * </script>
 *
 * <TopLoader trackLinks={false} />
 * ```
 */
export function trackSvelteKitNavigation(): void {
  beforeNavigate((navigation) => {
    if (navigation.willUnload) return;

    NProgress.start();

    // `complete` rejects if a navigation is cancelled or fails. Settle the
    // loader either way so it cannot remain visible after an aborted route.
    void navigation.complete.then(
      () => NProgress.done(),
      () => NProgress.done()
    );
  });

  afterNavigate(() => {
    NProgress.done();
  });
}
