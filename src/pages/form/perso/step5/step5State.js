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
      question: "5f5570e5d882c",
      response: values["5f5570e5d882c"],
    },
    {
      type: "calendar",
      choices: ["5f5570ff217a4", "5f55715960e9a", "5f557184101ce"],
      question: "alimentation_question2",
      response: values["alimentation_question2"],
      actions: [
        {
          id: "5f60a1d33da5f",
          response: values["5f60a1d33da5f"] || 0,
        },
        {
          id: "5f60a1e56f9be",
          response: values["5f60a1e56f9be"] || 0,
        },
      ],
    },
    {
      type: "calendar",
      choices: ["5f5572735716e", "5f5572b1b9be9", "5f5572cda4e57"],
      question: "alimentation_question3",
      response: values["alimentation_question3"],
      actions: [
        {
          id: "5f60a1f6aa5d9",
          response: values["5f60a1f6aa5d9"] || 0,
        },
        {
          id: "5f60a209470be",
          response: values["5f60a209470be"] || 0,
        },
      ],
    },
    {
      type: "calendar",
      choices: ["5f5572e23ac37", "5f5572f94a692", "5f55732d44ed6"],
      question: "alimentation_question4",
      response: values["alimentation_question4"],
      actions: [
        {
          id: "5f60a21ef0fe9",
          response: values["5f60a21ef0fe9"] || 0,
        },
        {
          id: "5f60a24828ffa",
          response: values["5f60a24828ffa"] || 0,
        },
        {
          id: "5f60aa257b035",
          response: values["5f60aa257b035"],
        },
      ],
    },
    {
      question: "5f557459e6c45",
      response: values["5f557459e6c45"],
      actions: [
        {
          id: "5f60aa4172f98",
          response: values["5f60aa4172f98"] || 0,
        },
      ],
    },
    {
      question: "5f5574ead218e",
      response: values["5f5574ead218e"],
      actions: [
        {
          id: "5f60aa533bca6",
          response: values["5f60aa533bca6"] || false,
        },
      ],
    },
    {
      question: "5f557508ea4c5",
      response: values["5f557508ea4c5"],
      actions: [
        {
          id: "5f60aa6244f4d",
          response: values["5f60aa6244f4d"] || 0,
        },
      ],
    },
    {
      question: "5f557531751f2",
      response: values["5f557531751f2"],
      actions: [
        {
          id: "5f60aa7235bfe",
          response: values["5f60aa7235bfe"] || 0,
        },
      ],
    },
    {
      question: "5f55754725a12",
      response: values["5f55754725a12"],
      actions: [
        {
          id: "5f60aa83e4aad",
          response: values["5f60aa83e4aad"] || 0,
        },
      ],
    },
  ];
};
