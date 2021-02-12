import { CATEGORY } from "@utils/category";
import { ProStep0 } from "./pro/step0/ProStep0";
import { ProStep1 } from "./pro/step1/ProStep1";
import { ProStep2 } from "./pro/step2/ProStep2";
import { ProStep3 } from "./pro/step3/ProStep3";
import { ProStep4 } from "./pro/step4/ProStep4";
import { ProStep5 } from "./pro/step5/ProStep5";
import { PersoStep1 } from "./perso/step1/PersoStep1";
import { PersoStep2 } from "./perso/step2/PersoStep2";
import { PersoStep3 } from "./perso/step3/PersoStep3";
import { PersoStep4 } from "./perso/step4/PersoStep4";
import { PersoStep5 } from "./perso/step5/PersoStep5";
import { PersoStep6 } from "./perso/step6/PersoStep6";
import { PersoStep7 } from "./perso/step7/PersoStep7";

export const config = {
  0: {
    component: ProStep0,
    category: CATEGORY.PRO,
    progress: -1,
    previous: {
      category: "Introduction",
      details: "",
    },
    next: {
      category: CATEGORY.PRO,
      details: "Au bureau",
    },
  },
  1: {
    component: ProStep1,
    category: CATEGORY.PRO,
    progress: 0,
    previous: {
      category: CATEGORY.PRO,
      details: "Introduction",
    },
    next: {
      category: CATEGORY.PRO,
      details: "Utilisation du numérique (pro)",
    },
  },
  2: {
    component: ProStep2,
    category: CATEGORY.PRO,
    progress: 1,
    previous: {
      category: CATEGORY.PRO,
      details: "Au bureau",
    },
    next: {
      category: CATEGORY.PRO,
      details: "Restauration au bureau",
    },
  },
  3: {
    component: ProStep3,
    category: CATEGORY.PRO,
    progress: 2,
    previous: {
      category: CATEGORY.PRO,
      details: "Utilisation du numérique (pro)",
    },
    next: {
      category: CATEGORY.PRO,
      details: "Déplacements Domicile - Travail",
    },
  },
  4: {
    component: ProStep4,
    category: CATEGORY.PRO,
    progress: 3,
    previous: {
      category: CATEGORY.PRO,
      details: "Restauration au bureau",
    },
    next: {
      category: CATEGORY.PRO,
      details: "Déplacements professionnels",
    },
  },
  5: {
    component: ProStep5,
    category: CATEGORY.PRO,
    progress: 4,
    previous: {
      category: CATEGORY.PRO,
      details: "Déplacements Domicile - Travail",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "Logement",
    },
  },
  6: {
    component: PersoStep1,
    category: CATEGORY.PERSO,
    progress: 0,
    previous: {
      category: CATEGORY.PRO,
      details: "Déplacements Personnels Professionnels",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "Biens du foyer",
    },
  },
  7: {
    component: PersoStep2,
    category: CATEGORY.PERSO,
    progress: 1,
    previous: {
      category: CATEGORY.PERSO,
      details: "Logement",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "Biens personnels",
    },
  },
  8: {
    component: PersoStep3,
    category: CATEGORY.PERSO,
    progress: 2,
    previous: {
      category: CATEGORY.PERSO,
      details: "Biens du foyer",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "Utilisation du numérique (perso)",
    },
  },
  9: {
    component: PersoStep4,
    category: CATEGORY.PERSO,
    progress: 3,
    previous: {
      category: CATEGORY.PERSO,
      details: "Biens personnels",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "Alimentation personnelle",
    },
  },
  10: {
    component: PersoStep5,
    category: CATEGORY.PERSO,
    progress: 4,
    previous: {
      category: CATEGORY.PERSO,
      details: "Utilisation du numérique (perso)",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "Déplacements Personnels",
    },
  },
  11: {
    component: PersoStep6,
    category: CATEGORY.PERSO,
    progress: 5,
    previous: {
      category: CATEGORY.PERSO,
      details: "Alimentation personnelle",
    },
    next: {
      category: CATEGORY.PERSO,
      details: "Services publics",
    },
  },
  12: {
    component: PersoStep7,
    category: CATEGORY.PERSO,
    progress: 6,
    previous: {
      category: CATEGORY.PERSO,
      details: "Déplacements Personnels",
    },
    next: {
      category: CATEGORY.RESULTS,
      details: "",
    },
  },
};
