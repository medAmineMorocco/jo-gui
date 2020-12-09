export const persostep4State = (values) => {
  const data = {
    thematic: "NUMERIQUE",
    questions: [
      {
        question: "5f556f699d325",
        response: values["5f556f699d325"],
      },
      {
        question: "5f556f8dc0a47",
        response: values["5f556f8dc0a47"],
      },
      {
        question: "5f556fa608550",
        response: values["5f556fa608550"],
      },
      {
        question: "5f556fc57b862",
        response: values["5f556fc57b862"],
      },
    ],
  };

  if (process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true") {
    return data;
  } else {
    const actionsData = {
      actions: [
        {
          action: "5f60a1b0cce8c",
          response: values["5f60a1b0cce8c"],
        },
        {
          action: "5f60a1bf061d4",
          response: values["5f60a1bf061d4"],
        },
      ],
      settings: [
        {
          setting: "action-reduction-switch-1",
          response: values["action-reduction-switch-1"] || false,
        },
      ],
    };
    return {
      ...data,
      ...actionsData,
    };
  }
};
