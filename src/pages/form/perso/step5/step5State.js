export const step5ActionReductionState = (values) => {
  return [
    {
      question: "action-reduction-switch-1",
      response: values["action-reduction-switch-1"] || false,
    },
    {
      question: "action-reduction-switch-2",
      response: values["action-reduction-switch-2"] || false,
    },
  ];
};

export const step5State = (values) => {
  return [
    {
      question: "alimentation_question1",
      response: values["alimentation_question1"],
    },
    {
      type: "calendar",
      choices: ["sub1", "sub2", "sub3"],
      question: "alimentation_question2",
      response: values["alimentation_question2"],
      actions: [
        {
          id: "action1",
          response: values["action1"] || 0,
        },
        {
          id: "action2",
          response: values["action2"] || 0,
        },
      ],
    },
    {
      type: "calendar",
      choices: ["sub4", "sub5", "sub6"],
      question: "alimentation_question3",
      response: values["alimentation_question3"],
      actions: [
        {
          id: "action3",
          response: values["action3"] || 0,
        },
        {
          id: "action4",
          response: values["action4"] || 0,
        },
      ],
    },
    {
      type: "calendar",
      choices: ["sub7", "sub8", "sub9"],
      question: "alimentation_question4",
      response: values["alimentation_question4"],
      actions: [
        {
          id: "action5",
          response: values["action5"] || 0,
        },
        {
          id: "action6",
          response: values["action6"] || 0,
        },
        {
          id: "action7",
          response: values["action7"],
        },
      ],
    },
    {
      question: "alimentation_question5",
      response: values["alimentation_question5"],
      actions: [
        {
          id: "action8",
          response: values["action8"] || 0,
        },
      ],
    },
    {
      question: "alimentation_question6",
      response: values["alimentation_question6"],
      actions: [
        {
          id: "action9",
          response: values["action9"] || 0,
        },
      ],
    },
    {
      question: "alimentation_question7",
      response: values["alimentation_question7"],
      actions: [
        {
          id: "action10",
          response: values["action10"] || 0,
        },
      ],
    },
    {
      question: "alimentation_question8",
      response: values["alimentation_question8"],
      actions: [
        {
          id: "action11",
          response: values["action11"] || 0,
        },
      ],
    },
    {
      question: "alimentation_question9",
      response: values["alimentation_question9"],
      actions: [
        {
          id: "action12",
          response: values["action12"] || 0,
        },
      ],
    },
  ];
};
