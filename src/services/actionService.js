import { CATEGORY, CATEGORY_CODE } from "@utils/category";
import { round } from "@utils/utils";

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

export function getNewValues(checked, bilan, data_category, data_reduction) {
  const bilanPro = bilan.find(
    (item) => item.category === CATEGORY_CODE[CATEGORY.PRO]
  );
  const bilanPerso = bilan.find(
    (item) => item.category === CATEGORY_CODE[CATEGORY.PERSO]
  );
  let withActionsProNewValue;
  let withActionsPersoNewValue;
  let bilanProAfterReduction;
  let bilanPersoAfterReduction;
  if (checked) {
    withActionsPersoNewValue =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PERSO]
        ? bilanPerso["avec actions"] + data_reduction * -1
        : bilanPerso["avec actions"];
    withActionsProNewValue =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PRO]
        ? bilanPro["avec actions"] + data_reduction * -1
        : bilanPro["avec actions"];
    bilanPersoAfterReduction = round(
      bilanPerso["sans actions"] - withActionsPersoNewValue,
      2
    );
    bilanProAfterReduction = round(
      bilanPro["sans actions"] - withActionsProNewValue,
      2
    );
  } else {
    withActionsPersoNewValue =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PERSO]
        ? bilanPerso["avec actions"] - data_reduction * -1
        : bilanPerso["avec actions"];
    withActionsProNewValue =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PRO]
        ? bilanPro["avec actions"] - data_reduction * -1
        : bilanPro["avec actions"];
    bilanPersoAfterReduction = round(
      bilanPerso["sans actions"] + bilanPerso["avec actions"],
      2
    );
    bilanProAfterReduction = round(
      bilanPro["sans actions"] + bilanPro["avec actions"],
      2
    );
  }

  return {
    bilanPersoAfterReduction,
    bilanProAfterReduction,
    withActionsProNewValue: round(withActionsProNewValue, 2),
    withActionsPersoNewValue: round(withActionsPersoNewValue, 2),
  };
}
