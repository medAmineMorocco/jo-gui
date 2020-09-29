export const proStep5ActionReductionState = (values) => {
  return [
    {
      question: "deplacement-switch-1",
      response: values["deplacement-switch-1"] || false,
    },
  ];
};

export const proStep5State = (values) => {
  const stepState = [
    {
      question: "nbrKmVoiture",
      response: values["nbrKmVoiture"] || 0,
      actions: [
        {
          id: "input1",
          response: values["input1"] || 0,
        },
      ],
    },
    {
      question: "question2_NbrTrajetsAr",
      response: values["question2_NbrTrajetsAr"] || 0,
      actions: [
        {
          id: "input2",
          response: values["input2"] || 0,
        },
      ],
    },
    {
      question: "question3_NbrTrajetsAr",
      response: values["question3_NbrTrajetsAr"] || 0,
      actions: [
        {
          id: "input2",
          response: values["input2"] || 0,
        },
      ],
    },
    {
      question: "question4_NbrTrajetsAr",
      response: values["question4_NbrTrajetsAr"] || 0,
      actions: [
        {
          id: "input2",
          response: values["input2"] || 0,
        },
      ],
    },
    {
      question: "question5_NbrTrajetsAr",
      response: values["question5_NbrTrajetsAr"] || 0,
      actions: [
        {
          id: "input2",
          response: values["input2"] || 0,
        },
      ],
    },
    {
      question: "question6_NbrTrajetsAr",
      response: values["question6_NbrTrajetsAr"] || 0,
      actions: [
        {
          id: "input2",
          response: values["input2"] || 0,
        },
      ],
    },
    {
      question: "question7_NbrTrajetsAr",
      response: values["question7_NbrTrajetsAr"] || 0,
      actions: [
        {
          id: "input2",
          response: values["input2"] || 0,
        },
      ],
    },
    {
      question: "question8_eco",
      response: values["question8_eco"] || 0,
      actions: [
        {
          id: "input3",
          response: values["input3"] || 0,
        },
      ],
    },
    {
      question: "question8_busi",
      response: values["question8_busi"] || 0,
      actions: [
        {
          id: "input3",
          response: values["input3"] || 0,
        },
      ],
    },
    {
      question: "question8_prem",
      response: values["question8_prem"] || 0,
      actions: [
        {
          id: "input3",
          response: values["input3"] || 0,
        },
      ],
    },
    {
      question: "question9_eco",
      response: values["question9_eco"] || 0,
      actions: [
        {
          id: "input3",
          response: values["input3"] || 0,
        },
      ],
    },
    {
      question: "question9_busi",
      response: values["question9_busi"] || 0,
      actions: [
        {
          id: "input3",
          response: values["input3"] || 0,
        },
      ],
    },
    {
      question: "question9_prem",
      response: values["question9_prem"] || 0,
      actions: [
        {
          id: "input3",
          response: values["input3"] || 0,
        },
      ],
    },
    {
      question: "question10_eco",
      response: values["question10_eco"] || 0,
      actions: [
        {
          id: "input4",
          response: values["input4"] || 0,
        },
      ],
    },
    {
      question: "question10_busi",
      response: values["question10_busi"] || 0,
      actions: [
        {
          id: "input4",
          response: values["input4"] || 0,
        },
      ],
    },
    {
      question: "question10_prem",
      response: values["question10_prem"] || 0,
      actions: [
        {
          id: "input4",
          response: values["input4"] || 0,
        },
      ],
    },
    {
      question: "question11_eco",
      response: values["question11_eco"] || 0,
      actions: [
        {
          id: "input4",
          response: values["input4"] || 0,
        },
      ],
    },
    {
      question: "question11_busi",
      response: values["question11_busi"] || 0,
      actions: [
        {
          id: "input4",
          response: values["input4"] || 0,
        },
      ],
    },
    {
      question: "question11_prem",
      response: values["question11_prem"] || 0,
      actions: [
        {
          id: "input4",
          response: values["input4"] || 0,
        },
      ],
    },
  ];
  return stepState;
};
