import type { PageLoad } from './$types';

/** Deliberately slow route so the top loader can be observed manually. */
export const load: PageLoad = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return { loadedAt: Date.now() };
};
