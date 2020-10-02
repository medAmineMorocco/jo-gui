import { fetchWrapper } from "../utils/fetch";
import { getCurrentUser } from "./authService";

export function saveResponsesOfQuestionsStep(stepState, step) {
  let state = getItem("responses");
  if (!state) {
    state = {};
  }
  state[step] = stepState;
  setItem("responses", state);
}

export function getResponsesOfQuestionsOfStep(step) {
  const responses = getItem("responses");
  if (responses) {
    return responses[step];
  }
  return null;
}

export function saveSettingsStep(stepState, step) {
  let state = getItem("settings");
  if (!state) {
    state = {};
  }
  state[step] = stepState;
  setItem("settings", state);
}

export function getSettingsOfStep(step) {
  const settings = getItem("settings");
  if (settings) {
    return settings[step];
  }
  return null;
}

export function saveResponses() {
  const responses = getItem("responses");
  const flatResponses = Object.values(responses).flat();
  const finalResponses = mapCalendarQuestions(flatResponses);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCurrentUser().token}`,
    },
    body: JSON.stringify(finalResponses),
  };
  return fetchWrapper(
    process.env.REACT_APP_BACKEND_URL + "/api/response",
    requestOptions
  )
    .then((response) => {
      sessionStorage.removeItem("responses");
      sessionStorage.removeItem("settings");
      return Promise.resolve(response);
    })
    .catch((error) => Promise.reject(error));
}

function mapCalendarQuestions(questions) {
  return questions
    .map((question) => {
      if (question.type && question.type === "calendar") {
        const newQuestions = [];
        question.choices.forEach((choice) => {
          const newQuestion = {
            question: choice,
            response: Object.keys(question.response).filter(
              (key) => question.response[key] === choice
            ),
            actions: question.actions,
          };
          newQuestions.push(newQuestion);
        });
        return newQuestions;
      }
      return question;
    })
    .flat();
}

function setItem(item, state) {
  sessionStorage.setItem(item, JSON.stringify(state));
}

function getItem(item) {
  return JSON.parse(sessionStorage.getItem(item));
}
