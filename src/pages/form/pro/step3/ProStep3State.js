export const stepState = (values) => {
  return {
    category: "RESTAURATION",
    questions: [
      {
        question: "5f55500f273e7",
        response: values["5f55500f273e7"],
      },
      {
        question: "5f5550293a164",
        response: values["5f5550293a164"],
      },
      {
        question: "5f5550530eaf3",
        response: values["5f5550530eaf3"],
      },
      {
        question: "5f5550724626b",
        response: values["5f5550724626b"],
      },
      {
        question: "5f55508b92e6c",
        response: values["5f55508b92e6c"],
      },
      {
        question: "5f5550b00730d",
        response: values["5f5550b00730d"],
      },
    ],
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      actions: [
        {
          action: "5f60a03929c5e",
          response: values["5f60a03929c5e"],
        },
        {
          action: "5f60a04cb2a94",
          response: values["5f60a04cb2a94"],
        },
        {
          action: "5f60a05e206d2",
          response: values["5f60a05e206d2"],
        },
        {
          action: "5f60a06d650a3",
          response: values["5f60a06d650a3"],
        },
      ],
    }),
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      settings: [
        {
          setting: "restauration-switch-1",
          response: values["restauration-switch-1"] || false,
        },
        {
          setting: "restauration-switch-2",
          response: values["restauration-switch-2"] || false,
        },
      ],
    }),
  };
};
