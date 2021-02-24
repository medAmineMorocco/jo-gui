import React, { useEffect, useState } from "react";
import { Spin } from "antd";
import { Card } from "@components/card/Card";
import { ActionsTable } from "@components/actionsTable/ActionsTable";
import { PanelMesActions } from "@components/panelMesActions/PanelMesActions";
import { StackedBar } from "@components/stackedBar/StackedBar";
import {
  getThematicsWithItsActionsByCategory,
  getTopsAndFlops,
} from "@services/thematicService";
import { getResponsesSummary } from "@services/responseService";
import {
  getTopActions,
  getNewBilanAfterReduction,
  getBilanProAndPerso,
} from "@services/actionService";
import { notify } from "@utils/notification";
import { requestState } from "@utils/requestState";
import { CATEGORY, CATEGORY_CODE } from "@utils/category";
import { sum, timeOutIf, round } from "@utils/utils";
import * as dompurify from "dompurify";
import { useMobileSize } from "@hooks/window";
import {
  PALMARES_TITLE,
  PREMIERS_ACTIONS_TITLE,
  PROFESSIONAL_MENU_ITEM,
  PERSONAL_MENU_ITEM,
  PALMARES_TOPS_TITLE,
  PALMARES_FLOPS_TITLE,
  PALMARES_TOPS,
  PALMARES_FLOPS,
  REDUIRE_DESCRIPTION,
} from "@utils/constants";
import "./reduirePage.css";

const CO2_EQUIVALENT_IN_TONNE = 1000;

export function ReduirePage() {
  const [pageState, setPageState] = useState(requestState.LOADING);
  const [tops, setTops] = useState([]);
  const [flops, setFlops] = useState([]);
  const [proThematics, setProThematics] = useState([]);
  const [persoThematics, setPersoThematics] = useState([]);
  const [topActions, setTopActions] = useState([]);
  const [totalTopActions, setTotalTopActions] = useState([]);
  const [bilan, setBilan] = useState([]);
  const isMobile = useMobileSize();

  const manageErrorResponse = (msg) => {
    setTimeout(() => {
      setPageState(requestState.ERROR);
      notify(msg);
    }, 500);
  };

  useEffect(() => {
    Promise.all([
      getTopsAndFlops(),
      getThematicsWithItsActionsByCategory(),
      getResponsesSummary(),
    ])
      .then(([topsAndFlops, thematicsWithItsActionsByCategory, bilan]) => {
        timeOutIf(
          window.sessionStorage.getItem("topsAndFlops") &&
            window.sessionStorage.getItem(
              "thematicsWithItsActionsByCategory"
            ) &&
            window.sessionStorage.getItem("bilan"),
          () => {
            window.sessionStorage.setItem(
              "topsAndFlops",
              JSON.stringify(topsAndFlops)
            );
            window.sessionStorage.setItem(
              "thematicsWithItsActionsByCategory",
              JSON.stringify(thematicsWithItsActionsByCategory)
            );
            window.sessionStorage.setItem("bilan", JSON.stringify(bilan));
          },
          () => {
            setTops(topsAndFlops["top3"].map((top) => top.thematic));
            setFlops(topsAndFlops["flop3"].map((flop) => flop.thematic));
            setProThematics(
              thematicsWithItsActionsByCategory["Vie Professionnelle"]
            );
            setPersoThematics(
              thematicsWithItsActionsByCategory["Vie Personnelle"]
            );
            const top3Actions = getTopActions(
              thematicsWithItsActionsByCategory
            );
            setTopActions(top3Actions);
            setTotalTopActions(round(sum(top3Actions, "gain") * -1));
            const { bilanPro, bilanPerso } = getBilanProAndPerso(bilan);
            setBilan([
              {
                category: CATEGORY_CODE[CATEGORY.PERSO],
                "sans actions": bilanPerso,
                "sans actionsColor": "#17B7B0",
                "avec actions": 0,
                "avec actionsColor": "grey",
              },
              {
                category: CATEGORY_CODE[CATEGORY.PRO],
                "sans actions": bilanPro,
                "sans actionsColor": "#3EDE8E",
                "avec actions": 0,
                "avec actionsColor": "grey",
              },
            ]);
            setPageState(requestState.SUCCESS);
          }
        );
      })
      .catch(() =>
        manageErrorResponse("Erreur serveur, veuillez réessayer ultérieurement")
      );
  }, []);

  const onCheckAction = () => {
    const storedBilan = JSON.parse(window.sessionStorage.getItem("bilan"));
    setTimeout(() => {
      const checkedActions = [
        ...document.querySelectorAll(".ant-checkbox-checked"),
      ].map((el) => {
        const input = el.childNodes[0];
        const thematic = input.getAttribute("data-thematic");
        return {
          category: input.getAttribute("data-category"),
          thematic,
          totalThematic: round(
            storedBilan.find((bilanItem) => bilanItem.thematic === thematic)
              .value / CO2_EQUIVALENT_IN_TONNE
          ),
          reduction: Number(input.getAttribute("data-reduction")) * -1,
        };
      });
      const {
        bilanProAfterReduction,
        bilanPersoAfterReduction,
        withActionsProNewValue,
        withActionsPersoNewValue,
      } = getNewBilanAfterReduction(
        JSON.parse(window.sessionStorage.getItem("bilan")),
        checkedActions,
        bilan
      );
      const newBilan = [
        {
          category: CATEGORY_CODE[CATEGORY.PERSO],
          "sans actions": bilanPersoAfterReduction,
          "sans actionsColor": "#17B7B0",
          "avec actions": withActionsPersoNewValue,
          "avec actionsColor": "grey",
        },
        {
          category: CATEGORY_CODE[CATEGORY.PRO],
          "sans actions": bilanProAfterReduction,
          "sans actionsColor": "#3EDE8E",
          "avec actions": withActionsProNewValue,
          "avec actionsColor": "grey",
        },
      ];
      setBilan(newBilan);
    });
  };

  if (pageState === requestState.LOADING) {
    return (
      <div className="loading-spinner">
        <Spin />
      </div>
    );
  } else if (pageState === requestState.ERROR) {
    return <></>;
  }
  return (
    <>
      <div className="cards-section">
        <div>
          <h3 className="reduire-title-section">{PALMARES_TITLE}</h3>
          <div className="palmares-section">
            <div>
              <Card
                title={
                  <div
                    dangerouslySetInnerHTML={{
                      __html: dompurify.sanitize(PALMARES_TOPS_TITLE),
                    }}
                  />
                }
                backgroundColor="#006AFF"
                borderRadiusRight={isMobile ? "24px" : "0"}
              >
                <ol className="palmares-tops-flops">
                  {tops.length > 0 ? (
                    tops.map((top, key) => <li key={key}>{top}</li>)
                  ) : (
                    <p className="text-if-no-thematic-card">
                      Vous êtes au-dessus de la moyenne française pour toutes
                      vos thématiques. Mais bonne nouvelle: il sera d'autant
                      plus facile de réduire vos émissions !
                    </p>
                  )}
                </ol>
                <p
                  className="palmares-mentions"
                  dangerouslySetInnerHTML={{
                    __html:
                      tops.length > 0 ? dompurify.sanitize(PALMARES_TOPS) : "",
                  }}
                ></p>
              </Card>
            </div>
            <div>
              <Card
                title={PALMARES_FLOPS_TITLE}
                backgroundColor="#006AFF"
                borderRadiusLeft={isMobile ? "24px" : "0"}
              >
                <ol className="palmares-tops-flops">
                  {flops.length > 0 ? (
                    flops.map((flop, key) => <li key={key}>{flop}</li>)
                  ) : (
                    <p className="text-if-no-thematic-card">
                      Bravo, tu es plus bas-carbone qu'un français moyen toute
                      catégorie !
                    </p>
                  )}
                </ol>
                <p className="palmares-mentions">
                  {flops.length > 0 ? PALMARES_FLOPS : ""}
                </p>
              </Card>
            </div>
          </div>
        </div>
        <div>
          <h3 className="reduire-title-section">{PREMIERS_ACTIONS_TITLE}</h3>
          <div className="card-right-result">
            <Card
              title={`DEJA ${totalTopActions} % DE REDUCTION POSSIBLE !`}
              backgroundColor="#7872F4"
            >
              <ActionsTable
                columns={["Actions de réductions", "% Gain"]}
                actions={topActions}
                onChange={onCheckAction}
                showCheckBox={false}
              />
            </Card>
          </div>
        </div>
      </div>
      <div
        className="reduire-description-section"
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(REDUIRE_DESCRIPTION),
        }}
      />
      <div className="bars-graph-section">
        <div className="bars-container">
          <StackedBar data={bilan} />
        </div>
      </div>
      <div className="panels-section section-reduire">
        <div>
          <h3 className="reduire-title-section">{PROFESSIONAL_MENU_ITEM}</h3>
          {proThematics.map(({ thematic, actions }, key) => (
            <div key={key} style={{ marginBottom: "24px" }}>
              <PanelMesActions
                thematic={thematic}
                actions={actions.map((action) => {
                  return { ...action, category: CATEGORY.PRO, thematic };
                })}
                onChange={onCheckAction}
                backgroundColor="#3EDE8E"
              />
            </div>
          ))}
        </div>
        <div>
          <h3 className="reduire-title-section">{PERSONAL_MENU_ITEM}</h3>
          {persoThematics.map(({ thematic, actions }, key) => (
            <div key={key} style={{ marginBottom: "24px" }}>
              <PanelMesActions
                thematic={thematic}
                actions={actions.map((action) => {
                  return { ...action, category: CATEGORY.PERSO, thematic };
                })}
                onChange={onCheckAction}
                backgroundColor="#17B7B0"
              />
            </div>
          ))}
        </div>
      </div>
      <div style={{ height: "100px" }} />
    </>
  );
}
