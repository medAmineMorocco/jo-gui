export const step6ActionReductionState = (values) => {
  return [
    {
      question: "action-reduction-switch-1",
      response: values["action-reduction-switch-1"] || false,
    },
    {
      question: "action-reduction-switch-2",
      response: values["action-reduction-switch-2"] || false,
    },
    {
      question: "action-reduction-switch-3",
      response: values["action-reduction-switch-3"] || false,
    },
  ];
};

export const step6State = (values) => {
  return [
    {
      question: "question_1",
      response: values["question_1"],
      actions: [
        {
          id: "action1",
          response: values["action1"] || 0,
        },
        {
          id: "action2",
          response: values["action2"] || false,
        },
      ],
    },
    {
      question: "question_2",
      response: values["question_2"],
      actions: [
        {
          id: "action3",
          response: values["action3"] || 0,
        },
      ],
    },
    {
      question: "litre",
      response: values["litre"],
      actions: [
        {
          id: "action3",
          response: values["action3"],
        },
      ],
    },
    {
      question: "kilowatt",
      response: values["kilowatt"],
      actions: [
        {
          id: "action3",
          response: values["action3"],
        },
      ],
    },
    {
      question: "question1_sub4",
      response: values["question1_sub4"],
      actions: [
        {
          id: "action3",
          response: values["action3"] || 0,
        },
      ],
    },
    {
      question: "question2_sub4",
      response: values["question2_sub4"],
      actions: [
        {
          id: "action3",
          response: values["action3"] || 0,
        },
      ],
    },
    {
      question: "question3_sub4",
      response: values["question3_sub4"],
      actions: [
        {
          id: "action3",
          response: values["action3"] || 0,
        },
      ],
    },
    {
      question: "question1_sub5",
      response: values["question1_sub5"],
      actions: [
        {
          id: "action3",
          response: values["action3"] || 0,
        },
      ],
    },
    {
      question: "question2_sub5",
      response: values["question2_sub5"],
      actions: [
        {
          id: "action3",
          response: values["action3"] || 0,
        },
      ],
    },
    {
      question: "question3_sub5",
      response: values["question3_sub5"],
      actions: [
        {
          id: "action3",
          response: values["action3"] || 0,
        },
      ],
    },
    {
      question: "question1_sub6",
      response: values["question1_sub6"],
      actions: [
        {
          id: "action4",
          response: values["action4"] || 0,
        },
      ],
    },
    {
      question: "question2_sub6",
      response: values["question2_sub6"],
      actions: [
        {
          id: "action4",
          response: values["action4"] || 0,
        },
      ],
    },
    {
      question: "question3_sub6",
      response: values["question3_sub6"],
      actions: [
        {
          id: "action4",
          response: values["action4"] || 0,
        },
      ],
    },
    {
      question: "question1_sub7",
      response: values["question1_sub7"],
      actions: [
        {
          id: "action4",
          response: values["action4"] || 0,
        },
      ],
    },
    {
      question: "question2_sub7",
      response: values["question2_sub7"],
      actions: [
        {
          id: "action4",
          response: values["action4"] || 0,
        },
      ],
    },
    {
      question: "question3_sub7",
      response: values["question3_sub7"],
      actions: [
        {
          id: "action4",
          response: values["action4"] || 0,
        },
      ],
    },
  ];
};
