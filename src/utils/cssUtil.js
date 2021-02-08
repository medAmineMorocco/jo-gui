export function getColor(color) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(color);
}
