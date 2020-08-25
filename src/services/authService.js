import { fetchWrapper } from "@utils/fetch";

export function login(email) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email }),
  };

  return fetchWrapper(process.env.REACT_APP_SIGNIN_URL, requestOptions)
    .then(async (response) => {
      const json = await response.json();
      if (json.accessToken) {
        localStorage.setItem("currentUser", JSON.stringify(json));
      }

      return json;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}
