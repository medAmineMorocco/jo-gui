export const stepState = (values) => {
  return {
    category: "TRAJETS_DOMICILE_TRAVAIL",
    questions: [
      {
        question: "5f55554022dc3",
        response: values["5f55554022dc3"],
      },
      {
        question: "5f55561b34276",
        response: values["5f55561b34276"],
      },
      {
        question: "5f555681b8e00",
        response: values["5f555681b8e00"],
      },
    ],
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      actions: [
        {
          action: "5f60a09bc059e",
          response: values["5f60a09bc059e"],
        },
        {
          action: "5f60a0ad1f52f",
          response: values["5f60a0ad1f52f"],
        },
      ],
    }),
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      settings: [
        {
          setting: "trajets-switch-1",
          response: values["trajets-switch-1"] || false,
        },
      ],
    }),
  };
};
