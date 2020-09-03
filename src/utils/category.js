export const proItems = [
  {
    title: "Au bureau",
    description: "X questions",
  },
  {
    title: "Empreinte numérique",
    description: "X questions",
  },
  {
    title: "Restauration",
    description: "X questions",
  },
  {
    title: "Trajets",
    description: "X questions",
  },
  {
    title: "Déplacements",
    description: "X questions",
  },
];

export const persoItems = [
  {
    title: "A la maison",
    description: "X questions",
  },
  {
    title: "Equipement du logement",
    description: "X questions",
  },
  {
    title: "Biens matériels",
    description: "X questions",
  },
  {
    title: "Numérique",
    description: "X questions",
  },
  {
    title: "Alimentation",
    description: "X questions",
  },
  {
    title: "Déplacements",
    description: "X questions",
  },
  {
    title: "Services publics",
    description: "X questions",
  },
];

export const CATEGORY = {
  PRO: "vie professionnelle",
  PERSO: "vie personnelle",
};

const config = {
  [CATEGORY.PRO]: proItems,
  [CATEGORY.PERSO]: persoItems,
};

export const getCategoryItems = (category) => {
  return config[category];
};
