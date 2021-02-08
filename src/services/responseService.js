import { fetchWrapper } from "../utils/fetch";
import { getCurrentUser } from "./authService";
import { getBackendUrl } from "./config";

export function saveResponsesOfStep(stepState) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
    body: JSON.stringify(stepState),
  };

  return fetchWrapper(
    getBackendUrl() + "/api/response/thematic",
    requestOptions
  );
}

export function getResponsesOfStep(thematic) {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
  };

  return fetchWrapper(
    getBackendUrl() + `/api/response/thematic/${thematic}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}

export function getResponsesSummary() {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
  };

  const storedResponse = window.sessionStorage.getItem("bilan");
  if (storedResponse) {
    return Promise.resolve(JSON.parse(storedResponse));
  }
  return fetchWrapper(getBackendUrl() + `/api/results`, requestOptions)
    .then((response) => response.json())
    .catch((error) => Promise.reject(error));
}
