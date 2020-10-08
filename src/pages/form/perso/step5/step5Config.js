import { ReactComponent as MeatSvg } from "@components/form/mealsOfWeek/meat.svg";
import { ReactComponent as ChickenSvg } from "@components/form/mealsOfWeek/chicken.svg";
import { ReactComponent as VegetablesSvg } from "@components/form/mealsOfWeek/vegetables.svg";

export const question2_subQuestions = [
  {
    name: "5f5570ff217a4",
    icon: MeatSvg,
  },
  {
    name: "5f55715960e9a",
    icon: ChickenSvg,
  },
  {
    name: "5f557184101ce",
    icon: VegetablesSvg,
  },
];

export const question3_subQuestions = [
  {
    name: "5f5572735716e",
    icon: MeatSvg,
  },
  {
    name: "5f5572b1b9be9",
    icon: ChickenSvg,
  },
  {
    name: "5f5572cda4e57",
    icon: VegetablesSvg,
  },
];

export const question4_subQuestions = [
  {
    name: "5f5572e23ac37",
    icon: MeatSvg,
  },
  {
    name: "5f5572f94a692",
    icon: ChickenSvg,
  },
  {
    name: "5f55732d44ed6",
    icon: VegetablesSvg,
  },
];

const options = [
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
];

export const selectDetail = [
  {
    type: "select",
    firstText: "Consommer chaque semaine",
    name: "5f60a1d33da5f",
    options: options,
    secondText: "diners à base de légumes plutôt que de viande issue de bétail",
  },
  {
    type: "select",
    firstText: "Consommer chaque semaine",
    name: "5f60a1e56f9be",
    options: options,
    secondText:
      "diners à base de légumes plutôt que de viande de volaille ou de poisson",
  },
  {
    type: "select",
    firstText: "Consommer le week-end",
    name: "5f60a1f6aa5d9",
    options: options,
    secondText:
      "déjeuners à base de légumes plutôt que de viande issue de bétail",
  },
  {
    type: "select",
    firstText: "Consommer le week-end",
    name: "5f60a209470be",
    options: options,
    secondText:
      "déjeuners à base de légumes plutôt que de viande de volaille ou de poisson",
  },
  {
    type: "select",
    firstText: "Consommer en vacances",
    name: "5f60a21ef0fe9",
    options: options,
    secondText:
      "déjeuners à base de légumes plutôt que de viande issue de bétail",
  },
  {
    type: "select",
    firstText: "Consommer en vacances",
    name: "5f60a24828ffa",
    options: options,
    secondText:
      "déjeuners à base de légumes plutôt que de viande de volaille ou de poisson",
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
    name: "5f60aa4172f98",
    options: [
      { text: "0", value: 0 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "75", value: 75 },
      { text: "100", value: 100 },
    ],
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
    name: "5f60aa6244f4d",
    options: [
      { text: "0", value: 0 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "75", value: 75 },
      { text: "100", value: 100 },
    ],
  },
  {
    type: "select",
    firstText: " Réduire sa consommation hebdomadaire de bière de",
    name: "5f60aa7235bfe",
    options: [
      { text: "0", value: 0 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "75", value: 75 },
      { text: "100", value: 100 },
    ],
  },
  {
    type: "select",
    firstText: "Réduire sa consommation hebdomadaire d’alcool de",
    name: "5f60aa83e4aad",
    options: [
      { text: "0", value: 0 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "75", value: 75 },
      { text: "100", value: 100 },
    ],
  },
];
