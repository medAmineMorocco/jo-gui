export function getColor(color) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(color);
}

export function getColorWithAlpha(color, alpha) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(color)
    .replace(")", `, ${alpha})`)
    .replace("rgb", "rgba");
}
