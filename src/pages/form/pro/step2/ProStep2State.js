export const proStep2ActionReductionState = (values) => {
  return [
    {
      question: "empreinte-switch-1",
      response: values["empreinte-switch-1"] || false,
    },
  ];
};

export const proStep2State = (values) => {
  const stepState = [
    {
      question: "taille_boite",
      response: values["taille_boite"],
      actions: [
        {
          id: "ar_reduction_boite",
          response: values["ar_reduction_boite"],
        },
      ],
    },
    {
      question: "taille_stockage",
      response: values["taille_stockage"],
      actions: [
        {
          id: "ar_reduction_stockage",
          response: values["ar_reduction_stockage"],
        },
      ],
    },
    {
      question: "nbr_recherche",
      response: values["nbr_recherche"],
    },
    {
      question: "nbr_conference",
      response: values["nbr_conference"],
    },
    {
      question: "nbr_streaming",
      response: values["nbr_streaming"],
    },
  ];
  return stepState;
};
