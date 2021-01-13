export const actionReductionDataDejeuners = [
  {
    type: "select",
    name: "5f60a03929c5e",
    options: [{ text: "0", value: 0 }],
    firstText: "Consommer chaque semaine",
    secondText: "déjeuners à base de légumes plutôt que de viande rouge",
  },
  {
    type: "select",
    name: "5f60a04cb2a94",
    options: [{ text: "0", value: 0 }],
    firstText: "Consommer chaque semaine",
    secondText: "déjeuners à base de légumes plutôt que de viande blanche",
  },
];

export const curseurQuestion = (label, name, logo, max, value, setValue) => {
  return {
    label: label,
    name: name,
    logo: logo,
    min: 0,
    max: max,
    value: value,
    setValue: setValue,
  };
};

export const actionReductionDataCafe = [
  {
    type: "select",
    name: "5f60a05e206d2",
    options: [
      { text: "0", value: 0 },
      { text: "1", value: 1 },
      { text: "2", value: 2 },
      { text: "3", value: 3 },
      { text: "4", value: 4 },
      { text: "5", value: 5 },
      { text: "6", value: 6 },
      { text: "7", value: 7 },
      { text: "8", value: 8 },
      { text: "9", value: 9 },
      { text: "10", value: 10 },
    ],
    firstText: "Chaque jour privilégier",
    secondText: "tasses de café en vrac plutôt que de café en capsule",
    questionName: "5f5550724626b",
  },
  {
    type: "select",
    name: "5f60a06d650a3",
    options: [
      { text: "0", value: 0 },
      { text: "1", value: 1 },
      { text: "2", value: 2 },
      { text: "3", value: 3 },
      { text: "4", value: 4 },
      { text: "5", value: 5 },
      { text: "6", value: 6 },
      { text: "7", value: 7 },
      { text: "8", value: 8 },
      { text: "9", value: 9 },
      { text: "10", value: 10 },
    ],
    firstText: "Chaque jour privilégier",
    secondText: "tasses de thé plutôt que de café en vrac",
    questionName: "5f55508b92e6c",
  },
];
