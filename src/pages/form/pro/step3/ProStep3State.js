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
      choices: ["sub1", "sub2", "sub3"],
      question: "repas_question1",
      response: values["repas_question1"],
      actions: [
        {
          id: "restauration-action1",
          response: values["restauration-action1"] || 0,
        },
        {
          id: "restauration-action2",
          response: values["restauration-action2"] || 0,
        },
      ],
    },
    {
      question: "slider_1",
      response: values["slider_1"],
      actions: [
        {
          id: "restauration-action3",
          response: values["restauration-action3"] || 0,
        },
      ],
    },
    {
      question: "slider_2",
      response: values["slider_2"],
      actions: [
        {
          id: "restauration-action4",
          response: values["restauration-action4"] || 0,
        },
      ],
    },
    {
      question: "slider_3",
      response: values["slider_3"],
    },
  ];
  return stepState;
};
