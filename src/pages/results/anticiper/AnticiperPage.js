import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { getUserProgess } from "@services/userService";
import { getResponsesSummary } from "@services/responseService";
import { notify } from "@utils/notification";
import { requestState } from "@utils/requestState";
import { ChartResult } from "@components/result/chartResult/ChartResult";
import { TimelineChart } from "@components/timelineChart/TimelineChart";
import { averages } from "./averages";
import { groupBy, sum } from "@utils/utils";
import "./anticiperPage.css";

export function AnticiperPage() {
  const history = useHistory();
  const [pageState, setPageState] = useState(requestState.LOADING);
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();

  const manageErrorResponse = (msg) => {
    setTimeout(() => {
      setPageState(requestState.ERROR);
      notify(msg);
    }, 500);
  };

  const manageBilan = (bilan) => {
    setTimeout(() => {
      const bilanByCategory = groupBy(bilan, "category");
      setData1([
        {
          id: "Vie Professionnelle",
          value: Math.round(sum(bilanByCategory["Vie Professionnelle"])),
          color: "#1A18BA",
        },
        {
          id: "Vie Personnelle",
          value: Math.round(sum(bilanByCategory["Vie Personnelle"])),
          color: "#69B6FF",
        },
      ]);
      setData2(
        bilanByCategory["Vie Professionnelle"].map((item) => {
          return { ...item, id: item.thematic, value: Math.round(item.value) };
        })
      );
      setData3(
        bilanByCategory["Vie Personnelle"].map((item) => {
          return { ...item, id: item.thematic, value: Math.round(item.value) };
        })
      );
      setPageState(requestState.SUCCESS);
    }, 500);
  };

  const getUserSummary = useCallback(() => {
    getUserProgess()
      .then(async (response) => {
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
          <h3 className="anticiper-title">Votre empreinte mesure</h3>
          <ChartResult
            dataCircle1={data1}
            dataCircle2={data2}
            dataCircle3={data3}
          />
        </div>
        <div className="right-container-anticiper">
          <h3 className="anticiper-title">Et se situe</h3>
          <TimelineChart
            items={[
              ...averages,
              {
                value: sum(data1).toFixed(2),
                description: "Tu es ici !",
                color: "#006AFF",
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
