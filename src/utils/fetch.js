export function fetchWrapper(url, requestOptions) {
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
