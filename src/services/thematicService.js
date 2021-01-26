import { getCurrentUser } from "./authService";
import { getBackendUrl } from "./config";

export function getTopsAndFlops() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
  };
  const storedResponse = window.sessionStorage.getItem("topsAndFlops");
  if (storedResponse) {
    return JSON.parse(storedResponse);
  }
  return fetch(getBackendUrl() + "/api/emissions/sort", requestOptions)
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}

export function getThematicsWithItsActionsByCategory() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
  };
  const storedResponse = window.sessionStorage.getItem(
    "thematicsWithItsActionsByCategory"
  );
  if (storedResponse) {
    return JSON.parse(storedResponse);
  }
  return fetch(getBackendUrl() + "/api/category/reductions", requestOptions)
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}
