export const stepState = (values) => {
  return {
    thematic: "EMPREINTE_NUMERIQUE",
    questions: [
      {
        question: "5f554eb63be47",
        response: values["5f554eb63be47"],
      },
      {
        question: "5f554eddc68dd",
        response: values["5f554eddc68dd"],
      },
      {
        question: "5f554f1127cec",
        response: values["5f554f1127cec"],
      },
      {
        question: "5f554f36de849",
        response: values["5f554f36de849"],
      },
      {
        question: "5f554fb2238b4",
        response: values["5f554fb2238b4"],
      },
    ],
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      actions: [
        {
          action: "5f60a00c2ead6",
          response: values["5f60a00c2ead6"],
        },
      ],
    }),
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      settings: [
        {
          setting: "empreinte-switch-1",
          response: values["empreinte-switch-1"] || false,
        },
      ],
    }),
  };
};
