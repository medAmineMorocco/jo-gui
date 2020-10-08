import { getCurrentUser } from "./authService";

export async function getUserProgess() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
  };
  return fetch(
    process.env.REACT_APP_BACKEND_URL + "/api/user/progress",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}
