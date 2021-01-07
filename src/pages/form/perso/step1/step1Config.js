export const optionsClasses = [
  { text: "C = 120,5", value: "C" },
  { text: "A = 50", value: "A" },
  { text: "B = 70,5", value: "B" },
  { text: "D = 190,5", value: "D" },
  { text: "E = 280,5", value: "E" },
  { text: "F = 390,5", value: "F" },
  { text: "G = 450", value: "G" },
];

export const selectDetailLunch = [
  {
    type: "input",
    firstText:
      "Réduire sa consommation annuelle d'Electricité de votre logement (kWh) de ",
    name: "5f60a1229564b",
    secondText: "%",
    percentage: true,
  },
  {
    type: "input",
    firstText:
      "Réduire sa consommation annuelle de Gaz naturel de votre logement (kWh PCS) de",
    name: "5f7f26f4b6606",
    secondText: "%",
    percentage: true,
  },
  {
    type: "input",
    firstText:
      "Réduire sa consommation annuelle de Fioul domestique de votre logement (L) de ",
    name: "5f7f271841ce5",
    secondText: "%",
    percentage: true,
  },
  {
    type: "input",
    firstText:
      "Réduire sa consommation annuelle de bois de chauffage pour votre logement (kg) de",
    name: "5f7f2742cdf84",
    secondText: "%",
    percentage: true,
  },
  {
    type: "input",
    firstText: "Améliorer la performance énergétique du logement de ",
    name: "5f60a1399f5ab",
    secondText:
      "% grâce à des travaux de rénovation énergétique (isolation, chauffage …)",
    percentage: true,
  },
];

export const consommation_options = (
  onElectriqueChange,
  onGazChange,
  onFioulChange,
  onBoisChange
) => {
  return [
    {
      label: "Electricité",
      value: "Electricité",
      onChange: onElectriqueChange,
    },
    {
      label: "Gaz",
      value: "Gaz",
      onChange: onGazChange,
    },
    {
      label: "Fioul",
      value: "Fioul",
      onChange: onFioulChange,
    },
    {
      label: "Bois",
      value: "Bois",
      onChange: onBoisChange,
    },
  ];
};

export const live_in_options = [
  {
    label: "Appartement",
    value: "Appartement",
  },
  {
    label: "Maison",
    value: "Maison",
  },
];

export const consommation_details_options = [
  {
    label: "Oui",
    value: true,
  },
  {
    label: "Non",
    value: false,
  },
];

export const is_renewable_energy_options = [
  {
    label: "Oui",
    value: true,
  },
  {
    label: "Non",
    value: false,
  },
];

export const chauffage_options = [
  {
    label: "Chauffage collectif",
    value: "chauffage_collectif",
  },
  {
    label: "Eau chaude collective",
    value: "eau_chaude_collective",
  },
  {
    label: "les deux",
    value: "les_deux",
  },
  {
    label: "Aucun des deux",
    value: "Aucun_des_deux",
  },
];

export const energy_type_options = [
  {
    label: "Electricité",
    value: "Electricité",
  },
  {
    label: "Gaz",
    value: "Gaz",
  },
  {
    label: "Fioul",
    value: "Fioul",
  },
];

export const eau_chaude_energy_type_options = [
  {
    label: "Electricité",
    value: "Electricité",
  },
  {
    label: "Gaz",
    value: "Gaz",
  },
  {
    label: "Fioul",
    value: "Fioul",
  },
];

export const are_gaz_or_electricity_renewable_options = [
  {
    label: "Electricité renouvelable",
    value: "electricite_renouvelable",
  },
  {
    label: "Gaz renouvelable",
    value: "gaz_renouvelable",
  },
  {
    label: "Les deux",
    value: "les_deux",
  },
  {
    label: "Aucun des deux",
    value: "aucun_des_deux",
  },
];
