export function getBackendUrl() {
  return window.REACT_APP_BACKEND_URL || process.env.REACT_APP_BACKEND_URL;
}
