# svelte-toploader

A tiny top loading bar for Svelte 5, powered by [`nprogress`](https://github.com/rstacruz/nprogress). Drop it in your app and get a progress bar for normal links, or control it yourself.

## Install

```bash
# Bun
bun add svelte-toploader

# npm
npm install svelte-toploader

# pnpm
pnpm add svelte-toploader

# Yarn
yarn add svelte-toploader
```

`nprogress` comes with the package, so you don't need to install it yourself. This package needs Svelte 5. The SvelteKit adapter is optional and only for SvelteKit apps.

## Usage

Add the component once near the top of your app. Same-origin links are tracked by default, and SSR is fine too.

```svelte
<script>
  import TopLoader from 'svelte-toploader';
</script>

<TopLoader color="#29d" showSpinner={false} />
```

### Props

| Prop                | Type              | Default            | Description                                                                                       |
| ------------------- | ----------------- | ------------------ | ------------------------------------------------------------------------------------------------- |
| `color`             | `string`          | `"#29d"`           | Bar and spinner color.                                                                            |
| `initialPosition`   | `number`          | `0.08`             | Initial progress, from 0 to 1.                                                                    |
| `crawlSpeed`        | `number`          | `200`              | Auto-increment interval in milliseconds.                                                          |
| `height`            | `number`          | `3`                | Bar thickness in pixels.                                                                          |
| `crawl`             | `boolean`         | `true`             | Enable automatic progress increments.                                                             |
| `showSpinner`       | `boolean`         | `true`             | Show the spinner.                                                                                 |
| `easing`            | `string`          | `"ease"`           | CSS easing for transitions.                                                                       |
| `speed`             | `number`          | `200`              | Transition duration in milliseconds.                                                              |
| `shadow`            | `string \| false` | Color-based shadow | Set to `false` to disable.                                                                        |
| `template`          | `string`          | NProgress default  | Custom NProgress template markup.                                                                 |
| `zIndex`            | `number`          | `1600`             | Stacking order.                                                                                   |
| `showAtBottom`      | `boolean`         | `false`            | Place the bar and spinner at the viewport bottom.                                                 |
| `showForHashAnchor` | `boolean`         | `true`             | Start for same-page hash navigation.                                                              |
| `nonce`             | `string`          | —                  | CSP nonce for the inline style element.                                                           |
| `trackLinks`        | `boolean`         | `true`             | Automatically track eligible same-origin anchor clicks. Disable when using the SvelteKit adapter. |

### Manual controls

```svelte
<script lang="ts">
  import { createTopLoader } from 'svelte-toploader';
  const loader = createTopLoader();
</script>

<button onclick={async () => {
  loader.start();
  try {
    await doWork();
  } finally {
    loader.done();
  }
}}>Load data</button>
```

`createTopLoader()` returns `start`, `done`, `remove`, `setProgress`, `inc`, `trickle`, `isStarted`, `isRendered`, and `getPositioningCSS` controls for NProgress. NProgress is a shared singleton, so render one loader component and use these methods to control that instance.

### SvelteKit navigation

SvelteKit has navigation lifecycle callbacks (not a router hook). Add the optional adapter to your root `+layout.svelte`:

```svelte
<script lang="ts">
  import TopLoader from 'svelte-toploader';
  import { trackSvelteKitNavigation } from 'svelte-toploader/sveltekit';

  trackSvelteKitNavigation();
</script>

<TopLoader trackLinks={false} />
<slot />
```

The adapter uses SvelteKit's `beforeNavigate` and `afterNavigate` callbacks. It's a separate import, so regular Svelte apps don't need `@sveltejs/kit`.

## Development

```sh
bun install
bun run test
bun run check
bun run build
bun run package:check
```

Unit tests use Bun's built-in test runner, so there's no separate test package to install.

Only the generated `dist` files go into the published package. `prepack` builds everything automatically when npm or Bun packs it.

### Demo projects

Example apps live in [`playground/`](./playground/): a minimal Svelte + Vite demo and a SvelteKit demo with the navigation adapter. Check the [playground README](./playground/README.md) for run steps.

MIT © 2026 Angga Islami (AnggaaIs). See [LICENSE](./LICENSE).
