export const question1_questions = [
  {
    name: "question1_sub1",
    label: "en 4G",
    defaultValue: 0,
  },
  {
    name: "question1_sub2",
    label: "en Wifi",
    defaultValue: 0,
  },
];

export const question2_questions = [
  {
    name: "question2_sub1",
    label: "en 4G",
    defaultValue: 0,
  },
  {
    name: "question2_sub2",
    label: "en Wifi",
    defaultValue: 0,
  },
];

export const selectDetail = [
  {
    type: "select",
    firstText: "Consulter Internet en wifi plutôt qu'en 4G",
    name: "action1",
    options: [
      { text: "oui", value: true },
      { text: "non", value: false },
    ],
    secondText: "",
  },
  {
    type: "select",
    firstText:
      "Utiliser le wifi plutôt que la 4G pour le streaming vidéo et gaming",
    name: "action2",
    options: [
      { text: "oui", value: true },
      { text: "non", value: false },
    ],
    secondText: "",
  },
];

export const overlay_items = [
  {
    image: "/images/consommation-electrique.png",
  },
];
