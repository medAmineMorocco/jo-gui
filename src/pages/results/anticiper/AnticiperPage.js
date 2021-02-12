import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { getUserProgess } from "@services/userService";
import { getResponsesSummary } from "@services/responseService";
import { getBilanProAndPerso } from "@services/actionService";
import { notify } from "@utils/notification";
import { requestState } from "@utils/requestState";
import { ChartResult } from "@components/result/chartResult/ChartResult";
import { TimelineChart } from "@components/timelineChart/TimelineChart";
import { averages } from "./averages";
import { round, timeOutIf } from "@utils/utils";
import "./anticiperPage.css";

export function AnticiperPage() {
  const history = useHistory();
  const [pageState, setPageState] = useState(requestState.LOADING);
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const CO2_EQUIVALENT_IN_TONNE = 1000;

  const manageErrorResponse = (msg) => {
    setTimeout(() => {
      setPageState(requestState.ERROR);
      notify(msg);
    }, 500);
  };

  const manageBilan = (bilan) => {
    timeOutIf(
      window.sessionStorage.getItem("bilan"),
      () => {
        window.sessionStorage.setItem("bilan", JSON.stringify(bilan));
      },
      () => {
        const { bilanByCategory, bilanPro, bilanPerso } = getBilanProAndPerso(
          bilan
        );

        setData1([
          {
            id: "Vie Professionnelle",
            value: round(bilanPro),
            color: "#3EDE8E",
          },
          {
            id: "Vie Personnelle",
            value: round(bilanPerso),
            color: "#17B7B0",
          },
        ]);
        setData2(
          bilanByCategory["Vie Professionnelle"].map((item) => {
            return {
              ...item,
              id: item.thematic,
              value: round(item.value / CO2_EQUIVALENT_IN_TONNE),
            };
          })
        );
        setData3(
          bilanByCategory["Vie Personnelle"].map((item) => {
            return {
              ...item,
              id: item.thematic,
              value: round(item.value / CO2_EQUIVALENT_IN_TONNE),
            };
          })
        );
        setPageState(requestState.SUCCESS);
      }
    );
  };

  const getUserSummary = useCallback(() => {
    getUserProgess()
      .then((response) => {
        if (!window.sessionStorage.getItem("progress")) {
          window.sessionStorage.setItem("progress", JSON.stringify(response));
        }
        if (response.progress === "VIE_PROFESIONAL") {
          history.push("/home");
        } else if (response.progress === "RESULTATS") {
          getResponsesSummary()
            .then((bilan) => manageBilan(bilan))
            .catch(() =>
              manageErrorResponse(
                "Ton bilan ne peut pas être récupéré, veuillez réessayer ultérieurement"
              )
            );
        }
      })
      .catch(() =>
        manageErrorResponse(
          "Ton état d'avancement ne peut pas être récupéré, veuillez réessayer ultérieurement"
        )
      );
  }, [history]);

  useEffect(() => {
    getUserSummary();
  }, [getUserSummary]);
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
      <div className="anticiper-body-container">
        <div className="left-container-anticiper">
          <h3 className="anticiper-title">Votre empreinte carbone</h3>
          <ChartResult
            dataCircle1={data1}
            dataCircle2={data2}
            dataCircle3={data3}
          />
        </div>
        <div className="right-container-anticiper">
          <h3 className="anticiper-title">Où vous situez vous ?</h3>
          <TimelineChart
            items={[
              ...averages,
              {
                value: round(Number(data1[0].value) + Number(data1[1].value)),
                description: "Vous êtes ici !",
                color: "#D7C378",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
