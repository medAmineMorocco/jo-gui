import React, { Fragment, useEffect, useState } from "react";
import domtoimage from "dom-to-image";
import { Card, Spin } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import {
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";
import * as dompurify from "dompurify";
import {
  MOBILISER_CARD_TITLE,
  MOBILISER_SHARE_DESCRIPTION,
  MOBILISER_ARCH_DESCRIPTION,
  MOBILISER_STATS_TEXT,
  MOBILISER_MAIL_BODY,
  MOBILISER_POST_TEXT,
} from "@utils/constants";
import { notify } from "@utils/notification";
import { getResponsesSummary } from "@services/responseService";
import { getTopActions } from "@services/actionService";
import { getThematicsWithItsActionsByCategory } from "@services/thematicService";
import { round, sum, timeOutIf } from "@utils/utils";
import { requestState } from "@utils/requestState";
import "./mobiliserPage.css";

const CO2_EQUIVALENT_IN_TONNE = 1000;

export function MobiliserPage() {
  const [pageState, setPageState] = useState(requestState.LOADING);
  const [total, setTotal] = useState(0);
  const [reductionPercentage, setReductionPercentage] = useState(0);

  const manageErrorResponse = (msg) => {
    setTimeout(() => {
      setPageState(requestState.ERROR);
      notify(msg);
    }, 500);
  };

  const manageBilan = (bilan, thematicsWithItsActionsByCategory) => {
    timeOutIf(
      window.sessionStorage.getItem("bilan"),
      () => {
        window.sessionStorage.setItem("bilan", JSON.stringify(bilan));
      },
      () => {
        setTotal(round(sum(bilan, "value") / CO2_EQUIVALENT_IN_TONNE));

        const top3Actions = getTopActions(thematicsWithItsActionsByCategory);
        setReductionPercentage(round(sum(top3Actions, "gain") * -1));

        setPageState(requestState.SUCCESS);
      }
    );
  };

  useEffect(() => {
    Promise.all([getResponsesSummary(), getThematicsWithItsActionsByCategory()])
      .then(([bilan, thematicsWithItsActionsByCategory]) =>
        manageBilan(bilan, thematicsWithItsActionsByCategory)
      )
      .catch(() =>
        manageErrorResponse(
          "Votre bilan ne peut pas être récupéré, veuillez réessayer ultérieurement"
        )
      );
  }, []);

  const download = () => {
    domtoimage
      .toJpeg(document.getElementById("mobiliser-capture"))
      .then((dataUrl) => {
        var link = document.createElement("a");
        link.download = "Score card - Coach Climat.jpg";
        link.href = dataUrl;
        link.click();
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
    <Fragment>
      <div className="mobiliser-card-container">
        <Card
          className="mobiliser-card"
          id="mobiliser-capture"
          title={
            <span
              dangerouslySetInnerHTML={{
                __html: dompurify.sanitize(MOBILISER_CARD_TITLE),
              }}
            />
          }
          bordered={false}
        >
          <div className="mobiliser-card-body-container">
            <div className="arch-container">
              <div className="arch">
                <div className="arch-description-container">
                  <span className="arch-description">
                    {MOBILISER_ARCH_DESCRIPTION}
                  </span>
                </div>
                <div className="arch-stats-container">
                  <div className="arch-stats-number-container">
                    <span className="arch-stats-number">{total}</span>
                  </div>
                  <div className="arch-stats-text-container">
                    <span
                      className="arch-stats-text"
                      dangerouslySetInnerHTML={{
                        __html: dompurify.sanitize(MOBILISER_STATS_TEXT),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mobiliser-center">
              <span className="mobiliser-reduction">
                En 3 actions concrètes, j’ai un potentiel de réduction de{" "}
                <span style={{ color: "#006aff" }}>
                  {reductionPercentage}%{" "}
                </span>
                de mes émissions
              </span>
              <div>
                <img alt="" src="/images/paris-2024.png" width={200} />
              </div>
            </div>
          </div>
        </Card>
        <div className="share-container">
          <p
            className="share-description"
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(MOBILISER_SHARE_DESCRIPTION),
            }}
          />
          <div className="share-social-medias-container">
            <div>
              <DownloadOutlined
                aria-label="télécharger"
                style={{ color: "white" }}
                onClick={download}
              />
            </div>
            <div>
              <EmailShareButton
                url=" "
                subject="[Coach Climat] Toi aussi, fais le test !"
                body={MOBILISER_MAIL_BODY(total, reductionPercentage)}
              >
                <EmailIcon
                  aria-label="envoyer un émail"
                  size={32}
                  round={true}
                />
              </EmailShareButton>
            </div>
            <div>
              <TwitterShareButton
                url=" "
                title={MOBILISER_POST_TEXT(reductionPercentage)}
              >
                <TwitterIcon
                  aria-label="partager sur twitter"
                  size={32}
                  round={true}
                />
              </TwitterShareButton>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinIcon
                  aria-label="aller vers linkedin"
                  size={32}
                  round={true}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "200px" }} />
    </Fragment>
  );
}
