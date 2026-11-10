import type { SvelteTopLoaderProps } from "./types";

/** Build the global NProgress styles from component props. */
export function createTopLoaderStyles({
  color = "#29d",
  height = 3,
  shadow,
  zIndex = 1600,
  showAtBottom = false,
}: Pick<
  SvelteTopLoaderProps,
  "color" | "height" | "shadow" | "zIndex" | "showAtBottom"
>): string {
  const edge = showAtBottom ? "bottom" : "top";
  const spinnerEdge = showAtBottom ? "bottom" : "top";
  const boxShadow =
    shadow === false
      ? ""
      : `box-shadow:${shadow || `0 0 10px ${color},0 0 5px ${color}`}`;

  return `#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:${zIndex};${edge}:0;left:0;width:100%;height:${height}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${boxShadow};opacity:1;transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${zIndex};${spinnerEdge}:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;
}
