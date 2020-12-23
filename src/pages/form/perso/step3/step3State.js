export const persostep3State = (values) => {
  const data = {
    thematic: "VEHICULES",
    questions: [
      {
        question: "5f5568d39449f",
        response: values["5f5568d39449f"],
      },
      {
        question: "5f5568e651349",
        response: values["5f5568e651349"],
      },
      {
        question: "5f5568f49b63c",
        response: values["5f5568f49b63c"],
      },
      {
        question: "5f55692a73b55",
        response: values["5f55692a73b55"],
      },
      {
        question: "5f5569516acd3",
        response: values["5f5569516acd3"],
      },
      {
        question: "5f5569587abe3",
        response: values["5f5569587abe3"],
      },
      {
        question: "5f55697727f39",
        response: values["5f55697727f39"],
      },
      {
        question: "5f55697f50057",
        response: values["5f55697f50057"],
      },
      {
        question: "5f55699e36c16",
        response: values["5f55699e36c16"],
      },
      {
        question: "5f556b379a8d1",
        response: values["5f556b379a8d1"],
      },
      {
        question: "5f556b3b7aeaf",
        response: values["5f556b3b7aeaf"],
      },
      {
        question: "5f556b6b5abc8",
        response: values["5f556b6b5abc8"],
      },
      {
        question: "5f556b6cefd5a",
        response: values["5f556b6cefd5a"],
      },
      {
        question: "5f556b94d465c",
        response: values["5f556b94d465c"],
      },
      {
        question: "5f556baea779b",
        response: values["5f556baea779b"],
      },
    ],
  };

  if (process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true") {
    const actionsData = {
      actions: [
        {
          action: "5f60a1676ff16",
          response: values["5f60a1676ff16"],
        },
        {
          action: "5f60a1760597b",
          response: values["5f60a1760597b"],
        },
        {
          action: "5f7ef2e5cfc27",
          response: values["5f7ef2e5cfc27"],
        },
        {
          action: "5f7ef314bc87c",
          response: values["5f7ef314bc87c"],
        },
        {
          action: "5f7ef33245f27",
          response: values["5f7ef33245f27"],
        },
        {
          action: "5f7ef357156a3",
          response: values["5f7ef357156a3"],
        },
        {
          action: "5f60a186aee7d",
          response: values["5f60a186aee7d"],
        },
        {
          action: "5f60a199c4870",
          response: values["5f60a199c4870"],
        },
      ],
      settings: [
        {
          setting: "materiels-switch-1",
          response: values["materiels-switch-1"] || false,
        },
        {
          setting: "materiels-switch-2",
          response: values["materiels-switch-2"] || false,
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
