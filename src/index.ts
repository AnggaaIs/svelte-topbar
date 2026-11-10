export type { SvelteTopLoaderProps, TopLoaderActions } from './types';

export { default as TopLoader } from './TopLoader.svelte';
export { default } from './TopLoader.svelte';

/**
 * Return imperative controls for the shared NProgress instance.
 *
 * Use these methods to connect progress to programmatic navigation or async
 * work. Render `<TopLoader />` once so its options configure NProgress first.
 * @returns NProgress control methods
 */
export { createTopLoader } from './controller';
