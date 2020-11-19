export const proItems = [
  {
    title: "Au bureau",
    description: "4 questions",
  },
  {
    title: "Empreinte numérique",
    description: "5 questions",
  },
  {
    title: "Restauration",
    description: "2 questions",
  },
  {
    title: "Trajets Domicile-travail",
    description: "3 questions",
  },
  {
    title: "Déplacements professionnels",
    description: "11 questions",
  },
];

export const persoItems = [
  {
    title: "À la maison",
    description: "12 questions",
  },
  {
    title: "Appareils et électroménager",
    description: "12 questions",
  },
  {
    title: "Véhicules et électronique",
    description: "15 questions",
  },
  {
    title: "Consommation internet",
    description: "2 questions",
  },
  {
    title: "Alimentation",
    description: "9 questions",
  },
  {
    title: "Déplacements personnels",
    description: "7 questions",
  },
  {
    title: "Services publics",
    description: "1 questions",
  },
];

export const CATEGORY = {
  PRO: "Vie professionnelle",
  PERSO: "Vie personnelle",
  RESULTS: "Résultats",
};

const config = {
  [CATEGORY.PRO]: proItems,
  [CATEGORY.PERSO]: persoItems,
};

export const getCategoryItems = (category) => {
  return config[category];
};
