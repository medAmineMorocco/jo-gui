export const house1ActionReductionState = (values) => {
  return [
    {
      question: "lunch-switch-1",
      response: values["lunch-switch-1"] || false,
    },
  ];
};

export const housestep1State = (values) => {
  return [
    {
      question: "house_question1",
      response: values["house_question1"] || 0,
    },
    {
      question: "house_question2",
      response: values["house_question2"] || 0,
      actions: [
        {
          id: "lunch1",
          response: values["lunch1"] || 0,
        },
      ],
    },
    {
      question: "house_question3",
      response: values["house_question3"] || 0,
      actions: [
        {
          id: "lunch2",
          response: values["lunch2"] || 0,
        },
      ],
    },
    {
      question: "house_question4",
      response: values["house_question4"] || 0,
      actions: [
        {
          id: "lunch3",
          response: values["lunch3"] || 0,
        },
      ],
    },
    {
      question: "house_question5",
      response: values["house_question5"] || 0,
      actions: [
        {
          id: "lunch4",
          response: values["lunch4"] || 0,
        },
      ],
    },
    {
      question: "house_question6",
      response: values["house_question6"] || 0,
      actions: [
        {
          id: "lunch5",
          response: values["lunch5"] || 0,
        },
      ],
    },
    {
      question: "house_question7",
      response: values["house_question7"] || 0,
    },
    {
      question: "house_question8",
      response: values["house_question8"] || 0,
    },
    {
      question: "house_question9",
      response: values["house_question9"] || 0,
    },
    {
      question: "house_question10",
      response: values["house_question10"] || 0,
    },
    {
      question: "house_question11",
      response: values["house_question11"] || 0,
    },
  ];
};
