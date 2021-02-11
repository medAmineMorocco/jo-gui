import { CATEGORY } from "@utils/category";
import { round, groupBy, sum } from "@utils/utils";

const CO2_EQUIVALENT_IN_TONNE = 1000;

export function getTopActions(thematicsWithItsActionsByCategory) {
  return [
    ...thematicsWithItsActionsByCategory["Vie Professionnelle"].flatMap(
      (thematic) => {
        thematic.actions.map((action) => (action.category = CATEGORY.PRO));
        return thematic.actions;
      }
    ),
    ...thematicsWithItsActionsByCategory["Vie Personnelle"].flatMap(
      (thematic) => {
        thematic.actions.map((action) => (action.category = CATEGORY.PERSO));
        return thematic.actions;
      }
    ),
  ]
    .sort(function (a, b) {
      return a.reduction - b.reduction;
    })
    .slice(0, 3);
}

export function getBilanProAndPerso(bilan) {
  const bilanByCategory = groupBy(bilan, "category");

  const bilanPerso = round(
    sum(bilanByCategory["Vie Personnelle"], "value") / CO2_EQUIVALENT_IN_TONNE
  );
  const bilanPro = round(
    sum(bilanByCategory["Vie Professionnelle"], "value") /
      CO2_EQUIVALENT_IN_TONNE
  );

  return {
    bilanPro,
    bilanPerso,
    bilanByCategory,
  };
}

export function getNewBilanAfterReduction(bilan, checkedActions) {
  const checkedActionsByCategory = groupBy(checkedActions, "category");
  const checkedProActions = checkedActionsByCategory["Vie professionnelle"];
  const checkedPersoActions = checkedActionsByCategory["Vie personnelle"];

  const { bilanPro, bilanPerso } = getBilanProAndPerso(bilan);

  let bilanProAfterReduction = bilanPro;
  let withActionsProNewValue = 0;
  if (checkedProActions) {
    checkedProActions.forEach(
      (proAction) => (bilanProAfterReduction -= proAction.reduction)
    );
    withActionsProNewValue = round(sum(checkedProActions, "reduction"), 2);
  }

  let bilanPersoAfterReduction = bilanPerso;
  let withActionsPersoNewValue = 0;
  if (checkedPersoActions) {
    checkedPersoActions.forEach(
      (persoAction) => (bilanPersoAfterReduction -= persoAction.reduction)
    );
    withActionsPersoNewValue = round(sum(checkedPersoActions, "reduction"), 2);
  }

  return {
    bilanProAfterReduction:
      round(bilanProAfterReduction, 2) > 0
        ? round(bilanProAfterReduction, 2)
        : 0,
    bilanPersoAfterReduction:
      round(bilanPersoAfterReduction, 2) > 0
        ? round(bilanPersoAfterReduction, 2)
        : 0,
    withActionsProNewValue,
    withActionsPersoNewValue,
  };
}
