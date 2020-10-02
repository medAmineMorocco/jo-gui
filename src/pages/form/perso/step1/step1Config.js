export const optionsClasses = [
  { text: "A = 50", value: "A" },
  { text: "B = 70,5", value: "B" },
  { text: "C = 120,5", value: "C" },
  { text: "D = 190,5", value: "D" },
  { text: "E = 280,5", value: "E" },
  { text: "F = 390,5", value: "F" },
  { text: "G = 450", value: "G" },
];

export const optionsLogement = [
  { text: "Oui", value: "Oui" },
  { text: "Non", value: "Non" },
];

const options = [
  { text: "0", value: 0 },
  { text: "20", value: 20 },
  { text: "40", value: 40 },
  { text: "60", value: 60 },
  { text: "80", value: 80 },
];

export const selectDetailLunch = [
  {
    type: "select",
    firstText:
      "Réduire sa consommation annuelle d'Electricité de votre logement (kWh) de ",
    name: "lunch1",
    options: options,
    secondText: "%",
  },
  {
    type: "select",
    firstText:
      "Réduire sa consommation annuelle de Gaz naturel de votre logement (kWh PCS) de",
    name: "lunch2",
    options: options,
    secondText: "%",
  },
  {
    type: "select",
    firstText:
      "Réduire sa consommation annuelle de Fioul domestique de votre logement (L) de ",
    name: "lunch3",
    options: options,
    secondText: "%",
  },
  {
    type: "select",
    firstText:
      "Réduire sa consommation annuelle de bois de chauffage pour votre logement (kg) de",
    name: "lunch4",
    options: options,
    secondText: " %",
  },
  {
    type: "input",
    firstText: "Améliorer la performance énergétique du logement de ",
    name: "lunch5",
    secondText:
      "% grâce à des travaux de rénovation énergétique (isolation, chauffage …)",
  },
];
