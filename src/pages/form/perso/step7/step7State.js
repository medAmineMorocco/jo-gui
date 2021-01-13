export const persostep7State = (values) => {
  return {
    thematic: "SERVICES",
    questions: [
      {
        question: "5f557a78e938b",
        response: 1283.76,
      },
    ],
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      actions: [],
    }),
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      settings: [],
    }),
  };
};
