/** Input needed to decide whether a click should start the progress bar. */
export interface AnchorNavigationOptions {
  href: string;
  currentHref: string;
  target?: string;
  download?: boolean;
  button?: number;
  defaultPrevented?: boolean;
  modified?: boolean;
  showForHashAnchor?: boolean;
}

/**
 * Return whether an anchor click represents an in-app document navigation.
 * Exported separately so the rules can be tested without a browser DOM.
 */
export function shouldTrackAnchorNavigation({
  href,
  currentHref,
  target,
  download = false,
  button = 0,
  defaultPrevented = false,
  modified = false,
  showForHashAnchor = true
}: AnchorNavigationOptions): boolean {
  if (defaultPrevented || button !== 0 || modified || download) return false;
  if (target && target.toLowerCase() !== '_self') return false;

  try {
    const current = new URL(currentHref);
    const next = new URL(href, current);

    if (next.origin !== current.origin || !['http:', 'https:'].includes(next.protocol)) return false;
    if (next.href === current.href) return false;

    const sameDocument =
      current.origin === next.origin &&
      current.pathname === next.pathname &&
      current.search === next.search;
    if (sameDocument && (!showForHashAnchor || current.hash === next.hash)) return false;

    return true;
  } catch {
    return false;
  }
}
