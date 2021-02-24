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

export function getNewBilanAfterReduction(
  initialBilan,
  checkedActions,
  lastUpdatedBilan
) {
  const checkedActionsByCategory = groupBy(checkedActions, "category");
  const checkedProActions = checkedActionsByCategory["Vie professionnelle"];
  const checkedPersoActions = checkedActionsByCategory["Vie personnelle"];

  const { bilanPro, bilanPerso } = getBilanProAndPerso(initialBilan);

  let bilanProAfterReduction = bilanPro;
  let withActionsProNewValue = 0;
  if (checkedProActions) {
    if (
      getThematicsOfActions(checkedProActions).size === 1 &&
      sum(checkedProActions, "reduction") > checkedProActions[0].totalThematic
    ) {
      withActionsProNewValue = getTotalThematicFromBilan(
        checkedProActions[0].thematic,
        initialBilan
      );
      bilanProAfterReduction =
        getBilanProAndPerso(initialBilan).bilanPro - withActionsProNewValue;
    } else {
      checkedProActions.forEach(
        (proAction) => (bilanProAfterReduction -= proAction.reduction)
      );
      withActionsProNewValue = round(sum(checkedProActions, "reduction"));
    }
  }

  let bilanPersoAfterReduction = bilanPerso;
  let withActionsPersoNewValue = 0;
  if (checkedPersoActions) {
    if (
      getThematicsOfActions(checkedPersoActions).size === 1 &&
      sum(checkedPersoActions, "reduction") >
        checkedPersoActions[0].totalThematic
    ) {
      withActionsPersoNewValue = getTotalThematicFromBilan(
        checkedPersoActions[0].thematic,
        initialBilan
      );
      bilanPersoAfterReduction =
        getBilanProAndPerso(initialBilan).bilanPerso - withActionsPersoNewValue;
    } else {
      checkedPersoActions.forEach(
        (persoAction) => (bilanPersoAfterReduction -= persoAction.reduction)
      );
      withActionsPersoNewValue = round(sum(checkedPersoActions, "reduction"));
    }
  }

  return {
    bilanProAfterReduction:
      round(bilanProAfterReduction) > 0 ? round(bilanProAfterReduction) : 0,
    bilanPersoAfterReduction:
      round(bilanPersoAfterReduction) > 0 ? round(bilanPersoAfterReduction) : 0,
    withActionsProNewValue,
    withActionsPersoNewValue,
  };
}

function getThematicsOfActions(actions) {
  return new Set(actions.map((action) => action.thematic));
}

function getTotalThematicFromBilan(thematic, bilan) {
  console.log("thematic", thematic);
  let round1 = round(
    bilan.find((bilanItem) => bilanItem.thematic === thematic).value /
      CO2_EQUIVALENT_IN_TONNE
  );
  console.log("round1", round1);
  return round1;
}
