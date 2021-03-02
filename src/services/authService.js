import { fetchWrapper } from "@utils/fetch";
import { getBackendUrl } from "./config";

export function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };

  return fetchWrapper(getBackendUrl() + "/auth/signin", requestOptions)
    .then(async (response) => {
      const json = await response.json();
      if (json.token) {
        sessionStorage.setItem("currentUser", JSON.stringify(json));
      }

      return json;
    })
    .catch((error) => {
      switch (error.status) {
        case 500:
          error = "Adresse mail ou mot de passe incorrect";
          break;
        case 400:
          error = "Adresse mail ou mot de passe incorrect";
          break;
        case 300:
          error = "Adresse mail ou mot de passe incorrect";
          break;
        default:
          error =
            "Service momentanement indisponible veuillez réessayer ultérieurement";
      }
      return Promise.reject(error);
    });
}

export function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem("currentUser"));
}
