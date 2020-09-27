export const question2_options = [
  { text: "Essence", value: "Essence" },
  { text: "Diesel", value: "Diesel" },
  { text: "Electrique", value: "Electrique" },
];

export const question3_questions = [
  {
    choice: "gasoline",
    response: {
      name: "litre",
      label: "L/100 km",
    },
  },
  {
    choice: "electric",
    response: {
      name: "kilowatt",
      label: "kWh/100 km",
    },
  },
];

export const actionReduction1_selectDetail = [
  {
    type: "input",
    firstText: "Réduire ses déplacements personnels en voiture de",
    name: "action1",
    secondText: "",
  },
  {
    type: "select",
    firstText: "Eco-conduite",
    name: "action2",
    options: [
      { text: "oui", value: true },
      { text: "non", value: false },
    ],
    secondText: "",
  },
];

export const question4_questions = [
  {
    name: "question1_sub4",
    label: "≈ 250 km",
    defaultValue: 0,
  },
  {
    name: "question2_sub4",
    label: "≈ 500 km",
    defaultValue: 0,
  },
  {
    name: "question3_sub4",
    label: "≈ 800 km",
    defaultValue: 0,
  },
];

export const question5_questions = [
  {
    name: "question1_sub5",
    label: "Économie",
    defaultValue: 0,
  },
  {
    name: "question2_sub5",
    label: "Business",
    defaultValue: 0,
  },
  {
    name: "question3_sub5",
    label: "Première",
    defaultValue: 0,
  },
];

export const actionReduction2_selectDetail = [
  {
    type: "select",
    firstText: "Prendre le TGV plutôt que l'avion pour",
    name: "action3",
    options: [
      { text: "0", value: 0 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "75", value: 75 },
      { text: "100", value: 100 },
    ],
    secondText: "",
  },
];

export const question6_questions = [
  {
    name: "question1_sub6",
    label: "Économie",
    defaultValue: 0,
  },
  {
    name: "question2_sub6",
    label: "Business",
    defaultValue: 0,
  },
  {
    name: "question3_sub6",
    label: "Première",
    defaultValue: 0,
  },
];

export const question7_questions = [
  {
    name: "question1_sub7",
    label: "Économie",
    defaultValue: 0,
  },
  {
    name: "question2_sub7",
    label: "Business",
    defaultValue: 0,
  },
  {
    name: "question3_sub7",
    label: "Première",
    defaultValue: 0,
  },
];

export const actionReduction3_selectDetail = [
  {
    type: "input",
    firstText: "Annuler",
    name: "action4",
    secondText:
      "des vols long courrier et privilégier les destinations accessibles en train",
  },
];
