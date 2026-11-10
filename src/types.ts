import type { Component } from 'svelte';

/** Configuration options for the top loading bar. */
export type SvelteTopLoaderProps = {
  /** Bar and spinner color. @default `"#635bff"` */
  color?: string;
  /** Initial progress from 0 to 1. @default `0.08` */
  initialPosition?: number;
  /** Delay between automatic progress increments, in milliseconds. @default `200` */
  crawlSpeed?: number;
  /** Progress bar thickness in pixels. @default `3` */
  height?: number;
  /** Automatically increment progress while active. @default `true` */
  crawl?: boolean;
  /** Display the spinner. @default `true` */
  showSpinner?: boolean;
  /** CSS easing function for progress transitions. @default `"ease"` */
  easing?: string;
  /** Transition duration in milliseconds. @default `200` */
  speed?: number;
  /** CSS box-shadow for the bar's leading edge; set to `false` to disable. */
  shadow?: string | false;
  /** NProgress template markup. */
  template?: string;
  /** CSS stacking order. @default `1600` */
  zIndex?: number;
  /** Place the bar and spinner at the bottom of the viewport. @default `false` */
  showAtBottom?: boolean;
  /** Start for same-page hash navigation. @default `true` */
  showForHashAnchor?: boolean;
  /** Nonce applied to the inline style element for CSP. */
  nonce?: string;
  /** Automatically track same-origin anchor clicks. Disable when using a router adapter. @default `true` */
  trackLinks?: boolean;
};

/** Svelte component that renders and configures the NProgress top loader. */
export declare const TopLoader: Component<SvelteTopLoaderProps>;

/** Imperative controls provided by {@link createTopLoader}. */
export interface TopLoaderActions {
  /** Start or resume the progress bar. */
  start: () => void;
  /** Complete the bar; pass `true` to complete immediately. */
  done: (force?: boolean) => void;
  /** Remove the progress bar from the DOM. */
  remove: () => void;
  /** Set progress to a value between 0 and 1. */
  setProgress: (value: number) => void;
  /** Increment progress by an optional amount. */
  inc: (amount?: number) => void;
  /** Perform one automatic progress increment. */
  trickle: () => void;
  /** Whether the progress bar is currently active. */
  isStarted: () => boolean;
  /** Whether the progress bar has been rendered. */
  isRendered: () => boolean;
  /** Get the CSS positioning strategy used by NProgress. */
  getPositioningCSS: () => 'translate3d' | 'translate' | 'margin';
}

/**
 * Create an imperative controller for NProgress.
 *
 * Use this to connect progress to programmatic navigation or asynchronous
 * work. The component itself configures the shared NProgress instance.
 * @returns NProgress control methods
 */
export declare function createTopLoader(): TopLoaderActions;
