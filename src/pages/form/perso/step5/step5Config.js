import { ReactComponent as MeatSvg } from "@components/form/mealsOfWeek/meat.svg";
import { ReactComponent as ChickenSvg } from "@components/form/mealsOfWeek/chicken.svg";
import { ReactComponent as VegetablesSvg } from "@components/form/mealsOfWeek/vegetables.svg";

export const question2_subQuestions = [
  {
    name: "sub1",
    icon: MeatSvg,
  },
  {
    name: "sub2",
    icon: ChickenSvg,
  },
  {
    name: "sub3",
    icon: VegetablesSvg,
  },
];

export const question3_subQuestions = [
  {
    name: "sub4",
    icon: MeatSvg,
  },
  {
    name: "sub5",
    icon: ChickenSvg,
  },
  {
    name: "sub6",
    icon: VegetablesSvg,
  },
];

export const question4_subQuestions = [
  {
    name: "sub7",
    icon: MeatSvg,
  },
  {
    name: "sub8",
    icon: ChickenSvg,
  },
  {
    name: "sub9",
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
    name: "action1",
    options: options,
    secondText: "diners à base de légumes plutôt que de viande issue de bétail",
  },
  {
    type: "select",
    firstText: "Consommer chaque semaine",
    name: "action2",
    options: options,
    secondText:
      "diners à base de légumes plutôt que de viande de volaille ou de poisson",
  },
  {
    type: "select",
    firstText: "Consommer le week-end",
    name: "action3",
    options: options,
    secondText:
      "déjeuners à base de légumes plutôt que de viande issue de bétail",
  },
  {
    type: "select",
    firstText: "Consommer le week-end",
    name: "action4",
    options: options,
    secondText:
      "déjeuners à base de légumes plutôt que de viande de volaille ou de poisson",
  },
  {
    type: "select",
    firstText: "Consommer en vacances",
    name: "action5",
    options: options,
    secondText:
      "déjeuners à base de légumes plutôt que de viande issue de bétail",
  },
  {
    type: "select",
    firstText: "Consommer en vacances",
    name: "action6",
    options: options,
    secondText:
      "déjeuners à base de légumes plutôt que de viande de volaille ou de poisson",
  },
  {
    type: "select",
    firstText: "Réduire le gaspillage alimentaire",
    name: "action7",
    options: [
      { text: "oui", value: true },
      { text: "non", value: false },
    ],
    secondText: "",
  },
];

export const selectDetail2 = [
  {
    type: "select",
    firstText: "Réduire sa consommation hebdomadaire de jus/sodas de",
    name: "action8",
    options: [
      { text: "0", value: 0 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "75", value: 75 },
      { text: "100", value: 100 },
    ],
    secondText: "",
  },
  {
    type: "select",
    firstText: "Consommer l’eau du robinet",
    name: "action9",
    options: [
      { text: "oui", value: true },
      { text: "non", value: false },
    ],
    secondText: "",
  },
  {
    type: "select",
    firstText: "Réduire sa consommation hebdomadaire de vin de",
    name: "action10",
    options: [
      { text: "0", value: 0 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "75", value: 75 },
      { text: "100", value: 100 },
    ],
    secondText: "",
  },
  {
    type: "select",
    firstText: " Réduire sa consommation hebdomadaire de bière de",
    name: "action11",
    options: [
      { text: "0", value: 0 },
      { text: "25", value: 25 },
      { text: "50", value: 50 },
      { text: "75", value: 75 },
      { text: "100", value: 100 },
    ],
    secondText: "",
  },
  {
    type: "select",
    firstText: "Réduire sa consommation hebdomadaire d’alcool de",
    name: "action12",
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
