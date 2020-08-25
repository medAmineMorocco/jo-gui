import { getCurrentUser } from "@services/authService";

export function fetchWrapper(url, requestOptions = { headers: authHeader() }) {
  return fetch(url, requestOptions)
    .then((response) => {
      if (!response.ok) {
        return Promise.reject(response);
      }
      return response;
    })
    .catch((error) => {
      console.error(`Response error for url: ${url}`, error);
      return Promise.reject(error);
    });
}

function authHeader() {
  const user = getCurrentUser();

  if (user && user.accessToken) {
    return { Authorization: `Bearer ${user.accessToken}` };
  } else {
    return {};
  }
}
