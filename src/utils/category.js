export const proItems = [
  {
    title: "Au bureau",
    description: "4 questions",
  },
  {
    title: "Utilisation du numérique (pro)",
    description: "5 questions",
  },
  {
    title: "Restauration au bureau",
    description: "2 questions",
  },
  {
    title: "Déplacements Domicile - Travail",
    description: "3 questions",
  },
  {
    title: "Déplacements Professionnels",
    description: "11 questions",
  },
];

export const persoItems = [
  {
    title: "Logement",
    description: "12 questions",
  },
  {
    title: "Biens du foyer",
    description: "12 questions",
  },
  {
    title: "Biens personnels",
    description: "15 questions",
  },
  {
    title: "Utilisation du numérique (perso)",
    description: "2 questions",
  },
  {
    title: "Alimentation personnelle",
    description: "9 questions",
  },
  {
    title: "Déplacements Personnels",
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

export const CATEGORY_CODE = {
  [CATEGORY.PRO]: "Pro",
  [CATEGORY.PERSO]: "Perso",
};

const config = {
  [CATEGORY.PRO]: proItems,
  [CATEGORY.PERSO]: persoItems,
};

export const getCategoryItems = (category) => {
  return config[category];
};
