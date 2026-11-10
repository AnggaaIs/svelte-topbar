<script lang="ts">
  import { onMount } from "svelte";
  import NProgress from "nprogress";
  import { shouldTrackAnchorNavigation } from "./navigation";
  import { createTopLoaderStyles } from "./styles";

  let {
    color = "#29d",
    initialPosition = 0.08,
    crawlSpeed = 200,
    height = 3,
    crawl = true,
    showSpinner = true,
    easing = "ease",
    speed = 200,
    shadow,
    template = '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
    zIndex = 1600,
    showAtBottom = false,
    showForHashAnchor = true,
    nonce,
    trackLinks = true,
  }: import("./types").SvelteTopLoaderProps = $props();

  onMount(() => {
    const style = document.createElement("style");
    style.dataset.svelteToploader = "";
    if (nonce) style.nonce = nonce;
    style.textContent = createTopLoaderStyles({
      color,
      height,
      shadow,
      zIndex,
      showAtBottom,
    });
    document.head.append(style);

    NProgress.configure({
      showSpinner,
      trickle: crawl,
      trickleSpeed: crawlSpeed,
      minimum: initialPosition,
      easing,
      speed,
      template,
    });

    const removeBusy = () =>
      document.documentElement.classList.remove("nprogress-busy");
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;

      if (shouldTrackAnchorNavigation({
        href: anchor.href,
        currentHref: window.location.href,
        target: anchor.target,
        download: anchor.hasAttribute("download"),
        button: event.button,
        defaultPrevented: event.defaultPrevented,
        modified: event.ctrlKey || event.metaKey || event.shiftKey || event.altKey,
        showForHashAnchor
      })) {
        NProgress.start();
      }
    };
    const onHistory = () => {
      NProgress.done();
      removeBusy();
    };

    if (trackLinks) document.addEventListener("click", onClick);
    window.addEventListener("popstate", onHistory);
    window.addEventListener("hashchange", onHistory);
    window.addEventListener("pagehide", onHistory);

    return () => {
      if (trackLinks) document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onHistory);
      window.removeEventListener("hashchange", onHistory);
      window.removeEventListener("pagehide", onHistory);
      NProgress.remove();
      style.remove();
    };
  });
</script>
