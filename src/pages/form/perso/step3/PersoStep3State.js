export const persoStep3ActionReductionState = (values) => {
  return [
    {
      question: "materiels_switch1",
      response: values["materiels_switch1"] || false,
    },
    {
      question: "materiels_switch2",
      response: values["materiels_switch2"] || false,
    },
  ];
};

export const persoStep3State = (values) => {
  const stepState = [
    {
      question: "materiels_question1",
      response: values["materiels_question1"],
      actions: [
        {
          id: "materiels_action1",
          response: values["materiels_action1"] || 0,
        },
      ],
    },
    {
      question: "materiels_question2",
      response: values["materiels_question2"],
      actions: [
        {
          id: "materiels_action1",
          response: values["materiels_action1"] || 0,
        },
      ],
    },
    {
      question: "materiels_question3",
      response: values["materiels_question3"],
      actions: [
        {
          id: "materiels_action1",
          response: values["materiels_action1"] || 0,
        },
      ],
    },
    {
      question: "materiels_question4",
      response: values["materiels_question4"],
    },
    {
      question: "materiels_question5",
      response: values["materiels_question5"],
      actions: [
        {
          id: "materiels_action2",
          response: values["materiels_action2"] || 0,
        },
      ],
    },
    {
      question: "materiels_question6",
      response: values["materiels_question6"],
    },
    {
      question: "materiels_question7",
      response: values["materiels_question7"],
      actions: [
        {
          id: "materiels_action3",
          response: values["materiels_action3"] || 0,
        },
      ],
    },
    {
      question: "materiels_question8",
      response: values["materiels_question8"],
    },
    {
      question: "materiels_question9",
      response: values["materiels_question9"],
      actions: [
        {
          id: "materiels_action4",
          response: values["materiels_action4"] || 0,
        },
      ],
    },
    {
      question: "materiels_question10",
      response: values["materiels_question10"],
      actions: [
        {
          id: "materiels_action5",
          response: values["materiels_action5"] || 0,
        },
      ],
    },
    {
      question: "materiels_question11",
      response: values["materiels_question11"],
    },
    {
      question: "materiels_question12",
      response: values["materiels_question12"],
      actions: [
        {
          id: "materiels_action6",
          response: values["materiels_action6"] || 0,
        },
      ],
    },
    {
      question: "materiels_question13",
      response: values["materiels_question13"],
    },
    {
      question: "materiels_question14",
      response: values["materiels_question14"],
      actions: [
        {
          id: "materiels_action8",
          response: values["materiels_action8"] || 0,
        },
      ],
    },
    {
      question: "materiels_question15",
      response: values["materiels_question15"],
      actions: [
        {
          id: "materiels_action7",
          response: values["materiels_action7"] || 0,
        },
      ],
    },
  ];
  return stepState;
};
