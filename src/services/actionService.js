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
    bilanPersoAfterReduction =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PERSO]
        ? round(bilanPerso["sans actions"] - withActionsPersoNewValue, 2)
        : bilanPerso["sans actions"];
    bilanProAfterReduction =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PRO]
        ? round(bilanPro["sans actions"] - withActionsProNewValue, 2)
        : bilanPro["sans actions"];
  } else {
    withActionsPersoNewValue =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PERSO]
        ? bilanPerso["avec actions"] - data_reduction * -1
        : bilanPerso["avec actions"];
    withActionsProNewValue =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PRO]
        ? bilanPro["avec actions"] - data_reduction * -1
        : bilanPro["avec actions"];
    bilanPersoAfterReduction =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PERSO]
        ? round(bilanPerso["sans actions"] + bilanPerso["avec actions"], 2)
        : bilanPerso["sans actions"];
    bilanProAfterReduction =
      CATEGORY_CODE[data_category] === CATEGORY_CODE[CATEGORY.PRO]
        ? round(bilanPro["sans actions"] + bilanPro["avec actions"], 2)
        : bilanPro["sans actions"];
  }

  return {
    bilanPersoAfterReduction,
    bilanProAfterReduction,
    withActionsProNewValue: round(withActionsProNewValue, 2),
    withActionsPersoNewValue: round(withActionsPersoNewValue, 2),
  };
}
