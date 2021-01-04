export const persostep2State = (values) => {
  const data = {
    thematic: "APPAREILS",
    questions: [
      {
        question: "5f556168dab39",
        response: values["5f556168dab39"],
      },
      {
        question: "5f5561e5eb854",
        response: values["5f5561e5eb854"],
      },
      {
        question: "5f55664839d67",
        response: values["5f55664839d67"],
      },
      {
        question: "5f55667459f85",
        response: values["5f55667459f85"],
      },
      {
        question: "5f55669ad8400",
        response: values["5f55669ad8400"],
      },
      {
        question: "5f5566c7a6e7c",
        response: values["5f5566c7a6e7c"],
      },
      {
        question: "5f5566d80117c",
        response: values["5f5566d80117c"],
      },
      {
        question: "5f5566f657df4",
        response: values["5f5566f657df4"],
      },
      {
        question: "5f5566f868949",
        response: values["5f5566f868949"],
      },
      {
        question: "5f556711c1671",
        response: values["5f556711c1671"],
      },
      {
        question: "5f55674380953",
        response: values["5f55674380953"],
      },
      {
        question: "5f5567451cb10",
        response: values["5f5567451cb10"],
      },
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
    ],
  };

  if (process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true") {
    const actionsData = {
      actions: [
        {
          action: "5f60a14ebb9b6",
          response: values["5f60a14ebb9b6"],
        },
        {
          action: "5f7f1f5c96681",
          response: values["5f7f1f5c96681"],
        },
        {
          action: "5f7f1f2367bd7",
          response: values["5f7f1f2367bd7"],
        },
      ],
      settings: [
        {
          setting: "equipment-switch-1",
          response: values["equipment-switch-1"] || false,
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
