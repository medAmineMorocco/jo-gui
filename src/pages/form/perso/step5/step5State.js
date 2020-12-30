export const persostep5State = (values) => {
  const data = {
    thematic: "ALIMENTATIONS",
    questions: [
      {
        question: "5f5570e5d882c",
        response: values["5f5570e5d882c"],
      },
      {
        question: "5f5570ff217a4",
        response: values["5f5570ff217a4"],
      },
      {
        question: "5f55715960e9a",
        response: values["5f55715960e9a"],
      },
      {
        question: "5fe086093c517",
        response: values["5fe086093c517"],
      },
      {
        question: "5f557184101ce",
        response: values["5f557184101ce"],
      },
      {
        question: "5fe085c49e973",
        response: values["5fe085c49e973"],
      },
      {
        question: "5f557459e6c45",
        response: values["5f557459e6c45"],
      },
      {
        question: "5f5574ead218e",
        response: values["5f5574ead218e"],
      },
      {
        question: "5f557508ea4c5",
        response: values["5f557508ea4c5"],
      },
      {
        question: "5f557531751f2",
        response: values["5f557531751f2"],
      },
      {
        question: "5f55754725a12",
        response: values["5f55754725a12"],
      },
    ],
  };

  if (process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true") {
    const actionsData = {
      actions: [
        {
          action: "5f60a1d33da5f",
          response: values["5f60a1d33da5f"],
        },
        {
          action: "5f60a1e56f9be",
          response: values["5f60a1e56f9be"],
        },
        {
          action: "5f60aa257b035",
          response: values["5f60aa257b035"],
        },
        {
          action: "5f60aa4172f98",
          response: values["5f60aa4172f98"],
        },
        {
          action: "5f60aa533bca6",
          response: values["5f60aa533bca6"],
        },
        {
          action: "5f60aa6244f4d",
          response: values["5f60aa6244f4d"],
        },
        {
          action: "5f60aa7235bfe",
          response: values["5f60aa7235bfe"],
        },
        {
          action: "5f60aa83e4aad",
          response: values["5f60aa83e4aad"],
        },
      ],
      settings: [
        {
          setting: "alimentation-switch-1",
          response: values["alimentation-switch-1"] || false,
        },
        {
          setting: "alimentation-switch-2",
          response: values["alimentation-switch-2"] || false,
        },
      ],
    };
    return {
      ...data,
      ...actionsData,
    };
  } else {
    return data;
  }
};
