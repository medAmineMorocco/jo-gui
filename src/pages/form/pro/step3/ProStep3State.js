export const proStep3ActionReductionState = (values) => {
  return [
    {
      question: "restauration-switch-1",
      response: values["restauration-switch-1"] || false,
    },
    {
      question: "restauration-switch-2",
      response: values["restauration-switch-2"] || false,
    },
  ];
};

export const proStep3State = (values) => {
  const stepState = [
    {
      type: "calendar",
      choices: ["5f55500f273e7", "5f5550293a164", "5f5550530eaf3"],
      question: "repas_question1",
      response: values["repas_question1"],
      actions: [
        {
          id: "5f60a03929c5e",
          response: values["5f60a03929c5e"] || 0,
        },
        {
          id: "5f60a04cb2a94",
          response: values["5f60a04cb2a94"] || 0,
        },
      ],
    },
    {
      question: "5f5550724626b",
      response: values["5f5550724626b"],
      actions: [
        {
          id: "5f60a05e206d2",
          response: values["5f60a05e206d2"] || 0,
        },
      ],
    },
    {
      question: "5f55508b92e6c",
      response: values["5f55508b92e6c"],
      actions: [
        {
          id: "5f60a06d650a3",
          response: values["5f60a06d650a3"] || 0,
        },
      ],
    },
    {
      question: "5f5550b00730d",
      response: values["5f5550b00730d"],
    },
  ];
  return stepState;
};
