import { getCurrentUser } from "./authService";
import { getBackendUrl } from "./config";

export function getUserProgess() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
  };

  const storedResponse = window.sessionStorage.getItem("progress");
  if (storedResponse) {
    return Promise.resolve(JSON.parse(storedResponse));
  }
  return fetch(getBackendUrl() + "/api/user/progress", requestOptions)
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}
