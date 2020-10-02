export function fetchWrapper(url, requestOptions) {
  return fetch(url, requestOptions)
    .then((response) => {
      if (response.status === 401) {
        sessionStorage.clear();
        if (window.location.pathname !== "/login") {
          window.location.href = "/";
        } else {
          return Promise.reject(new Error("Vous n'êtes pas autorisé"));
        }
      }
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
