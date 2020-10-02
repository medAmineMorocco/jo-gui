export const step4ActionReductionState = (values) => {
  return [
    {
      question: "action-reduction-switch-1",
      response: values["action-reduction-switch-1"] || false,
    },
  ];
};
export const step4State = (values) => {
  return [
    {
      question: "question1_sub1",
      response: values["question1_sub1"],
      actions: [
        {
          id: "action1",
          response: values["action1"] || false,
        },
      ],
    },
    {
      question: "question1_sub2",
      response: values["question1_sub2"],
      actions: [
        {
          id: "action1",
          response: values["action1"] || false,
        },
      ],
    },
    {
      question: "question2_sub1",
      response: values["question2_sub1"],
      actions: [
        {
          id: "action2",
          response: values["action2"] || false,
        },
      ],
    },
    {
      question: "question2_sub2",
      response: values["question2_sub2"],
      actions: [
        {
          id: "action2",
          response: values["action2"] || false,
        },
      ],
    },
  ];
};
