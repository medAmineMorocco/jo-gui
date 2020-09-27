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

function setItem(item, state) {
  sessionStorage.setItem(item, JSON.stringify(state));
}

function getItem(item) {
  return JSON.parse(sessionStorage.getItem(item));
}
