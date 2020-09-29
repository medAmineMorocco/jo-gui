export const proStep4ActionReductionState = (values) => {
  return [
    {
      question: "trajets-switch-1",
      response: values["trajets-switch-1"] || true,
    },
  ];
};

export const proStep4State = (values) => {
  const stepState = [
    {
      question: "distance",
      response: values["distance"],
      actions: [
        {
          id: "ar_mode_deplacement",
          response: values["ar_mode_deplacement"],
        },
        {
          id: "ar_nbr_jours_travail_domicile",
          response: values["ar_nbr_jours_travail_domicile"] || 0,
        },
      ],
    },
    {
      question: "mode_deplacement",
      response: values["mode_deplacement"],
      actions: [
        {
          id: "ar_mode_deplacement",
          response: values["ar_mode_deplacement"],
        },
        {
          id: "ar_nbr_jours_travail_domicile",
          response: values["ar_nbr_jours_travail_domicile"] || 0,
        },
      ],
    },
  ];

  if (
    values["mode_deplacement"] !== "metro-tramway" &&
    values["mode_deplacement"] !== "train-rer" &&
    values["mode_deplacement"] !== "tgv"
  ) {
    stepState.push({
      question: "motorisation",
      response: values["motorisation"],
      actions: [
        {
          id: "ar_mode_deplacement",
          response: values["ar_mode_deplacement"],
        },
        {
          id: "ar_nbr_jours_travail_domicile",
          response: values["ar_nbr_jours_travail_domicile"] || 0,
        },
      ],
    });
  }
  return stepState;
};
