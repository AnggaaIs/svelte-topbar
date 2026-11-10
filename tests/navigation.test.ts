import { describe, expect, test } from 'bun:test';
import { shouldTrackAnchorNavigation } from '../src/navigation';

const page = 'https://example.com/docs?lang=en';

describe('shouldTrackAnchorNavigation', () => {
  test('tracks a same-origin page navigation', () => {
    expect(shouldTrackAnchorNavigation({ href: '/account', currentHref: page })).toBe(true);
  });

  test('tracks a changed hash when hash tracking is enabled', () => {
    expect(shouldTrackAnchorNavigation({ href: '#details', currentHref: page })).toBe(true);
  });

  test('skips hash navigation when disabled or unchanged', () => {
    expect(shouldTrackAnchorNavigation({ href: '#details', currentHref: page, showForHashAnchor: false })).toBe(false);
    expect(shouldTrackAnchorNavigation({ href: page, currentHref: page })).toBe(false);
  });

  test('skips external URLs and non-http schemes', () => {
    expect(shouldTrackAnchorNavigation({ href: 'https://other.example/path', currentHref: page })).toBe(false);
    expect(shouldTrackAnchorNavigation({ href: 'mailto:hi@example.com', currentHref: page })).toBe(false);
  });

  test('skips modified, prevented, non-primary and download clicks', () => {
    const base = { href: '/next', currentHref: page };
    expect(shouldTrackAnchorNavigation({ ...base, modified: true })).toBe(false);
    expect(shouldTrackAnchorNavigation({ ...base, defaultPrevented: true })).toBe(false);
    expect(shouldTrackAnchorNavigation({ ...base, button: 1 })).toBe(false);
    expect(shouldTrackAnchorNavigation({ ...base, download: true })).toBe(false);
  });

  test('skips links opening another browsing context but allows _self', () => {
    expect(shouldTrackAnchorNavigation({ href: '/next', currentHref: page, target: '_blank' })).toBe(false);
    expect(shouldTrackAnchorNavigation({ href: '/next', currentHref: page, target: '_self' })).toBe(true);
  });

  test('returns false for malformed URLs', () => {
    expect(shouldTrackAnchorNavigation({ href: 'http://[', currentHref: page })).toBe(false);
  });
});
