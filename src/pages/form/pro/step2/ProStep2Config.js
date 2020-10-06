export const QUESTION2_DEFAULT_VALUE = 16.5;

export const overlayItems = [
  {
    image: "/images/empreinte-pop-conseils.jpg",
    title: "comment connaître la taille de ta boîte mail ?",
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
    name: "ar_reduction_boite",
    options: [
      { text: "1", value: 1 },
      { text: "2", value: 2 },
      { text: "3", value: 3 },
      { text: "4", value: 4 },
    ],
    firstText: "Réduction du volume de la boîte mail de",
  },
  {
    type: "select",
    name: "ar_reduction_stockage",
    options: [
      { text: "1", value: 1 },
      { text: "2", value: 2 },
      { text: "3", value: 3 },
      { text: "4", value: 4 },
    ],
    firstText: "Réduction du volume de stockage en ligne de",
  },
];
