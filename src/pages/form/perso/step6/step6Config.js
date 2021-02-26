import { TEXT_IMAGE_FRANCE, TEXT_IMAGE_MONDE } from "@utils/constants";

export const transportation_options = (
  onCarChange,
  onTrainChange,
  onPlaneChange
) => {
  return [
    {
      label: "Voiture",
      value: "Voiture",
      onChange: onCarChange,
    },
    {
      label: "Train",
      value: "Train",
      onChange: onTrainChange,
    },
    {
      label: "Avion",
      value: "Avion",
      onChange: onPlaneChange,
    },
  ];
};

export const question2_options = [
  { text: "Electrique", value: "Electrique" },
  { text: "Essence", value: "Essence" },
  { text: "Diesel", value: "Diesel" },
  { text: "GPL", value: "GPL" },
  { text: "Hybride essence", value: "hybride-essence" },
  { text: "Hybride diesel", value: "hybride-diesel" },
];

export const question3_questions = [
  {
    choice: "gasoline",
    response: {
      name: "5f55763a2d2b1",
      label: "L/100 km",
    },
  },
  {
    choice: "electric",
    response: {
      name: "5f55776c56494",
      label: "kWh/100 km",
    },
  },
];

export const actionReduction1_selectDetail = [
  {
    type: "input",
    firstText: "Réduire ses déplacements personnels en voiture de",
    name: "5f60aa994d161",
    questionName: "5f5575ba93b32",
    secondText:
      "km en favorisant les achats plus proches, des destinations plus proches et privilégiant la marche à pied",
  },
  {
    type: "select",
    firstText: "Eco-conduite",
    name: "5f60aaad99c98",
    options: [
      { text: "oui", value: true },
      { text: "non", value: false },
    ],
  },
];

export const question4_questions = [
  {
    name: "5f557851c481e",
    label: "≈ 250 km",
    defaultValue: 0,
  },
  {
    name: "5f5578d055227",
    label: "≈ 500 km",
    defaultValue: 0,
  },
  {
    name: "5f5578e039aea",
    label: "≈ 800 km",
    defaultValue: 0,
  },
];

export const question5_questions = [
  {
    name: "5f55791c16575",
    label: "Économie",
    defaultValue: 0,
  },
  {
    name: "5f55797b8b5f2",
    label: "Business",
    defaultValue: 0,
  },
  {
    name: "5f55799ed06a0",
    label: "Première",
    defaultValue: 0,
  },
];

export const actionReduction2_selectDetail = [
  {
    type: "select",
    firstText: "Prendre le TGV plutôt que l'avion pour",
    name: "5f60aac6c60bf",
    options: [{ text: "0", value: 0 }],
    secondText: "trajet(s) en vol court courrier",
  },
];

export const question6_questions = [
  {
    name: "5f5579c25b653",
    label: "Économie",
    defaultValue: 0,
  },
  {
    name: "5f5579df87f62",
    label: "Business",
    defaultValue: 0,
  },
  {
    name: "5f5579f265cce",
    label: "Première",
    defaultValue: 0,
  },
];

export const question7_questions = [
  {
    name: "5f557a0b076f3",
    label: "Économie",
    defaultValue: 0,
  },
  {
    name: "5f557a34ea334",
    label: "Business",
    defaultValue: 0,
  },
  {
    name: "5f557a44eafc4",
    label: "Première",
    defaultValue: 0,
  },
];

export const actionReduction3_selectDetail = [
  {
    type: "input",
    firstText: "Éviter",
    name: "5f60aadf53101",
    secondText:
      "des vols long courrier et privilégier les destinations accessibles en train",
  },
];

export const overlay_items_france = [
  {
    image: "/images/DistanceFrance.png",
    alt: TEXT_IMAGE_FRANCE,
  },
];

export const overlay_items_internationnal = [
  {
    image: "/images/DistanceMonde.png",
    alt: TEXT_IMAGE_MONDE,
  },
];
