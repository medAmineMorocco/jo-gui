export function saveResponsesOfQuestionsStep(stepState, step) {
  const state = getItem("responses");
  let newState = {};
  if (state) {
    newState = Object.entries(state).filter(([stepKey]) => stepKey !== step);
  }
  newState[step] = stepState;
  sessionStorage.setItem("responses", JSON.stringify(newState));
}

export function getResponsesOfQuestionsOfStep(step) {
  const responses = getItem("responses");
  if (responses) {
    return responses[step];
  }
  return null;
}

function getItem(item) {
  return JSON.parse(sessionStorage.getItem(item));
}
