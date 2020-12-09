export const stepState = (values) => {
  return {
    thematic: "DEPLACEMENTS_PROFESSIONNELS",
    questions: [
      {
        question: "5f5557936a4cd",
        response: values["5f5557936a4cd"],
      },
      {
        question: "5f5557c81d9d6",
        response: values["5f5557c81d9d6"],
      },
      {
        question: "5f5557ec74a11",
        response: values["5f5557ec74a11"],
      },
      {
        question: "5f555809e50b5",
        response: values["5f555809e50b5"],
      },
      {
        question: "5f5558209ce59",
        response: values["5f5558209ce59"],
      },
      {
        question: "5f55582edaeda",
        response: values["5f55582edaeda"],
      },
      {
        question: "5f55584be6d5b",
        response: values["5f55584be6d5b"],
      },
      {
        question: "5f55587eaf0e1",
        response: values["5f55587eaf0e1"],
      },
      {
        question: "5f555897f3a7b",
        response: values["5f555897f3a7b"],
      },
      {
        question: "5f5558b32689d",
        response: values["5f5558b32689d"],
      },
      {
        question: "5f5558d002ef1",
        response: values["5f5558d002ef1"],
      },
      {
        question: "5f5558f29483f",
        response: values["5f5558f29483f"],
      },
      {
        question: "5f5559164e7c5",
        response: values["5f5559164e7c5"],
      },
      {
        question: "5f55597082002",
        response: values["5f55597082002"],
      },
      {
        question: "5f55598f84ab3",
        response: values["5f55598f84ab3"],
      },
      {
        question: "5f555a0999cae",
        response: values["5f555a0999cae"],
      },
      {
        question: "5f555a4459b35",
        response: values["5f555a4459b35"],
      },
      {
        question: "5f555c744517e",
        response: values["5f555c744517e"],
      },
      {
        question: "5f555d17a49a0",
        response: values["5f555d17a49a0"],
      },
    ],
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      actions: [
        {
          action: "5f60a0c685332",
          response: values["5f60a0c685332"],
        },
        {
          action: "5f60a0d990f4e",
          response: values["5f60a0d990f4e"],
        },
        {
          action: "5f60a0f2df4e3",
          response: values["5f60a0f2df4e3"],
        },
        {
          action: "5f60a102140c9",
          response: values["5f60a102140c9"],
        },
      ],
    }),
    ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
      settings: [
        {
          setting: "deplacement-switch-1",
          response: values["deplacement-switch-1"] || false,
        },
      ],
    }),
  };
};
