import * as NProgress from 'nprogress';
import type { TopLoaderActions } from './types';

/**
 * Create a small controller for the shared NProgress instance.
 *
 * Render one `<TopLoader />` component to configure the progress bar, then use
 * this controller for manual progress updates or programmatic navigation.
 * @returns NProgress control methods
 */
export function createTopLoader(): TopLoaderActions {
  return {
    start: () => NProgress.start(),
    done: (force?: boolean) => NProgress.done(force),
    remove: () => NProgress.remove(),
    setProgress: (value: number) => NProgress.set(value),
    inc: (amount?: number) => NProgress.inc(amount),
    trickle: () => NProgress.trickle(),
    isStarted: () => NProgress.isStarted(),
    isRendered: () => NProgress.isRendered(),
    getPositioningCSS: () => NProgress.getPositioningCSS()
  };
}
