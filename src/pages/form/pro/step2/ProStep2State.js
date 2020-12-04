export const proStep2ActionReductionState = (values) => {
  return [
    {
      question: "empreinte-switch-1",
      response: values["empreinte-switch-1"] || false,
    },
  ];
};

export const proStep2State = (values) => {
  const stepState = [
    {
      question: "5f554eb63be47",
      response: values["5f554eb63be47"],
      actions: [
        {
          id: "5f60a00c2ead6",
          response: values["5f60a00c2ead6"],
        },
      ],
    },
    {
      question: "5f554eddc68dd",
      response: values["5f554eddc68dd"],
      actions: [
        {
          id: "5f60a01a6dc3a",
          response: values["5f60a01a6dc3a"],
        },
      ],
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
  ];
  return stepState;
};
