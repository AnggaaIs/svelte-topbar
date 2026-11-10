/** Minimal declarations for checking the optional SvelteKit adapter outside a generated SvelteKit app. */
declare module '$app/navigation' {
  /** Register a callback before an in-app navigation. */
  export function beforeNavigate(
    callback: (navigation: { willUnload: boolean; complete: Promise<void> }) => void
  ): void;

  /** Register a callback after an in-app navigation. */
  export function afterNavigate(callback: () => void): void;
}
