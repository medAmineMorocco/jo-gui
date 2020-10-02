import { fetchWrapper } from "@utils/fetch";

export function login(email) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: "TEST" }),
  };

  return fetchWrapper(
    process.env.REACT_APP_BACKEND_URL + "/auth/signin",
    requestOptions
  )
    .then(async (response) => {
      const json = await response.json();
      if (json.token) {
        sessionStorage.setItem("currentUser", JSON.stringify(json));
      }

      return json;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

export function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem("currentUser"));
}
