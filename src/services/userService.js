export async function getUserProgess() {
  return fetch(process.env.REACT_APP_BACKEND_URL + "/api/user/progress")
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}
