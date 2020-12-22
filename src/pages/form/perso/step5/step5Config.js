export const curseurQuestion = (name, logo, max, value, setValue) => {
  return {
    label: "",
    name: name,
    logo: logo,
    min: 0,
    max: max,
    value: value,
    setValue: setValue,
  };
};

export const selectDetail = [
  {
    type: "select",
    firstText: "Consommer chaque semaine",
    name: "5f60a1d33da5f",
    options: [{ text: "0", value: 0 }],
    secondText: "dîner(s) à base de légumes plutôt que de viande rouge",
  },
  {
    type: "select",
    firstText: "Consommer chaque semaine",
    name: "5f60a1e56f9be",
    options: [{ text: "0", value: 0 }],
    secondText: "dîner(s) à base de légumes plutôt que de viande blanche",
  },
  {
    type: "select",
    firstText: "Consommer le week-end",
    name: "5f60a1f6aa5d9",
    options: [{ text: "0", value: 0 }],
    secondText: "déjeuner(s) à base de légumes plutôt que de viande rouge",
  },
  {
    type: "select",
    firstText: "Consommer le week-end",
    name: "5f60a209470be",
    options: [{ text: "0", value: 0 }],
    secondText: "déjeuner(s) à base de légumes plutôt que de viande blanche",
  },
  {
    type: "select",
    firstText: "Consommer en vacances",
    name: "5f60a21ef0fe9",
    options: [{ text: "0", value: 0 }],
    secondText: "déjeuner(s) à base de légumes plutôt que de viande rouge",
  },
  {
    type: "select",
    firstText: "Consommer en vacances",
    name: "5f60a24828ffa",
    options: [{ text: "0", value: 0 }],
    secondText: "déjeuner(s) à base de légumes plutôt que de viande blanche",
  },
  {
    type: "select",
    firstText: "Réduire le gaspillage alimentaire",
    name: "5f60aa257b035",
    options: [
      { text: "oui", value: true },
      { text: "non", value: false },
    ],
  },
];

export const selectDetail2 = [
  {
    type: "select",
    firstText: "Réduire sa consommation hebdomadaire de jus/sodas de",
    secondText: "litre(s)",
    name: "5f60aa4172f98",
    options: [{ text: "0", value: 0 }],
  },
  {
    type: "select",
    firstText: "Consommer l’eau du robinet",
    name: "5f60aa533bca6",
    options: [
      { text: "oui", value: true },
      { text: "non", value: false },
    ],
  },
  {
    type: "select",
    firstText: "Réduire sa consommation hebdomadaire de vin de",
    secondText: "litre(s)",
    name: "5f60aa6244f4d",
    options: [{ text: "0", value: 0 }],
  },
  {
    type: "select",
    firstText: " Réduire sa consommation hebdomadaire de bière de",
    secondText: "litre(s)",
    name: "5f60aa7235bfe",
    options: [{ text: "0", value: 0 }],
  },
  {
    type: "select",
    firstText: "Réduire sa consommation hebdomadaire d’alcool de",
    secondText: "litre(s)",
    name: "5f60aa83e4aad",
    options: [{ text: "0", value: 0 }],
  },
];
