export const equipment2ActionReductionState = (values) => {
  return [
    {
      question: "equipment-switch-1",
      response: values["equipment-switch-1"] || false,
    },
  ];
};

export const equipmentstep2State = (values) => {
  return [
    {
      question: "equipment_question1",
      response: values["equipment_question1"] || 0,
      actions: [
        {
          id: "equipment1",
          response: values["equipment1"] || 0,
        },
      ],
    },
    {
      question: "equipment_question2",
      response: values["equipment_question2"] || 0,
      actions: [
        {
          id: "equipment1",
          response: values["equipment1"] || 0,
        },
      ],
    },
    {
      question: "equipment_question3",
      response: values["equipment_question3"] || 0,
      actions: [
        {
          id: "equipment1",
          response: values["equipment1"] || 0,
        },
      ],
    },
    {
      question: "equipment_question4",
      response: values["equipment_question4"] || 0,
      actions: [
        {
          id: "equipment1",
          response: values["equipment1"] || 0,
        },
      ],
    },
    {
      question: "equipment_question5",
      response: values["equipment_question5"] || 0,
      actions: [
        {
          id: "equipment1",
          response: values["equipment1"] || 0,
        },
      ],
    },
    {
      question: "equipment_question6",
      response: values["equipment_question6"] || 0,
      actions: [
        {
          id: "equipment1",
          response: values["equipment1"] || 0,
        },
      ],
    },
    {
      question: "equipment_question7",
      response: values["equipment_question7"] || 0,
    },
    {
      question: "equipment_question8",
      response: values["equipment_question8"] || 0,
      actions: [
        {
          id: "equipment2",
          response: values["equipment2"] || 0,
        },
      ],
    },
    {
      question: "equipment_question9",
      response: values["equipment_question9"] || 0,
      actions: [
        {
          id: "equipment2",
          response: values["equipment2"] || 0,
        },
      ],
    },
    {
      question: "equipment_question10",
      response: values["equipment_question10"] || 0,
    },
    {
      question: "equipment_question11",
      response: values["equipment_question11"] || 0,
      actions: [
        {
          id: "equipment2",
          response: values["equipment2"] || 0,
        },
      ],
    },
    {
      question: "equipment_question12",
      response: values["equipment_question12"] || 0,
      actions: [
        {
          id: "equipment3",
          response: values["equipment3"] || 0,
        },
      ],
    },
  ];
};
