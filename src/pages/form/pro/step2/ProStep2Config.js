import {
  EMPREINTE_OVERLAY_TITLE,
  EMREINTE_OVERLAY_IMAGE,
} from "@utils/constants";

export const QUESTION2_DEFAULT_VALUE = 16.5;

export const overlayItems = [
  {
    image: "/images/empreinte-pop-conseils.jpg",
    alt: EMREINTE_OVERLAY_IMAGE,
    title: EMPREINTE_OVERLAY_TITLE,
  },
];

export const curseurQuestions = (label, name, value, setValue) => {
  return [
    {
      label: label,
      name: name,
      min: 0,
      max: 10,
      value: value,
      setValue: setValue,
    },
  ];
};

export const actionReductionData = [
  {
    type: "select",
    name: "5f60a00c2ead6",
    options: [{ text: "0", value: 0 }],
    firstText: "Réduction du volume de la boîte mail de",
    questionName: "5f554eb63be47",
    secondText: "Go",
  },
  {
    type: "input",
    name: "5f60a01a6dc3a",
    firstText: "Réduction du volume de stockage en ligne de",
    questionName: "5f554eddc68dd",
    secondText: "Mo",
  },
];
