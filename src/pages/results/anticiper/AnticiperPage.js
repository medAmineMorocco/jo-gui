import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { getUserProgess } from "@services/userService";
import { getResponsesSummary } from "@services/responseService";
import { notify } from "@utils/notification";
import { requestState } from "@utils/requestState";
import "./anticiperPage.css";

export function AnticiperPage() {
  const history = useHistory();
  const [pageState, setPageState] = useState(requestState.LOADING);

  const manageErrorResponse = (msg) => {
    setTimeout(() => {
      setPageState(requestState.ERROR);
      notify(msg);
    }, 500);
  };

  const getUserSummary = useCallback(() => {
    getUserProgess()
      .then(async (response) => {
        if (response.progress === "VIE_PROFESIONAL") {
          history.push("/home");
        } else if (response.progress === "RESULTATS") {
          getResponsesSummary()
            .then((bilan) => {
              setTimeout(() => {
                console.log(bilan);
                setPageState(requestState.SUCCESS);
              }, 500);
            })
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
  return <div>AnticiperPage</div>;
}
