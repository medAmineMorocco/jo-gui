import { getCurrentUser } from "./authService";
import { getBackendUrl } from "./config";

export function getUserProgess() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
  };
  return fetch(getBackendUrl() + "/api/user/progress", requestOptions)
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}
