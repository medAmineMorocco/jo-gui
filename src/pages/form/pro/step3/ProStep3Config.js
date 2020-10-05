import { ReactComponent as MeatSvg } from "@components/form/mealsOfWeek/meat.svg";
import { ReactComponent as ChickenSvg } from "@components/form/mealsOfWeek/chicken.svg";
import { ReactComponent as VegetablesSvg } from "@components/form/mealsOfWeek/vegetables.svg";

export const question1_subQuestions = [
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

export const actionReductionDataDejeuners = [
  {
    type: "select",
    name: "restauration-action1",
    options: [
      { text: "1", value: 1 },
      { text: "2", value: 2 },
      { text: "3", value: 3 },
      { text: "4", value: 4 },
    ],
    firstText: "Consommer chaque semaine",
    secondText:
      "déjeuners à base de légumes plutôt que de viande issue de bétail",
  },
  {
    type: "select",
    name: "restauration-action2",
    options: [
      { text: "1", value: 1 },
      { text: "2", value: 2 },
      { text: "3", value: 3 },
      { text: "4", value: 4 },
    ],
    firstText: "Consommer chaque semaine",
    secondText:
      "déjeuners à base de légumes plutôt que de viande issue de volaille",
  },
];

export const curseurQuestion = (label, name, logo, value, setValue) => {
  const question = {
    label: label,
    name: name,
    min: 0,
    max: 10,
    logo: logo,
    value: value,
    setValue: setValue,
  };
  return question;
};

export const actionReductionDataCafe = [
  {
    type: "select",
    name: "restauration-action3",
    options: [
      { text: "1", value: 1 },
      { text: "2", value: 2 },
      { text: "3", value: 3 },
      { text: "4", value: 4 },
    ],
    firstText: "Chaque jour privilégier",
    secondText: "tasses de café en vrac plutôt que de café en capsule",
  },
  {
    type: "select",
    name: "restauration-action4",
    options: [
      { text: "1", value: 1 },
      { text: "2", value: 2 },
      { text: "3", value: 3 },
      { text: "4", value: 4 },
    ],
    firstText: "Chaque jour privilégier",
    secondText: "tasses de thé plutôt que de café en vrac",
  },
];
