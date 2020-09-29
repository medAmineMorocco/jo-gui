import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemSelectWithDetails } from "@components/form/formItemSelectWithDetails/FormItemSelectWithDetails";
import { FormCounter } from "@components/form/formCounter/FormCounter.js";
import {
  LaptopOutlined,
  MobileOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
import {
  saveResponsesOfQuestionsStep,
  getResponsesOfQuestionsOfStep,
} from "@services/responseService";

// Au bureau
export function ProStep1({ step, setNextStep }) {
  const [form] = Form.useForm();

  const title_ordinateurs =
    "Nombre d'ordinateurs portable professionnels mis à votre disposition";
  const title_telephones =
    "Nombre de téléphones portables professionnels mis à votre disposition";
  const title_ecrans = "Nombre d'écrans additionels mis à votre disposition";

  const emplacementBureauOptions = [
    {
      text: "96 Bd Haussmann",
      value: "96 Bd Haussmann",
    },
    {
      text: "18 Bd Malesherbes",
      value: "18 Bd Malesherbes",
    },
  ];

  const subQuestions = {
    "96 Bd Haussmann": [
      {
        question:
          "Quote-part individuelle des émissions liées aux Services Généraux - Energie (kg éq CO2)",
        name: "emplacement_paris1",
        defaultResponse: 200,
      },
      {
        question:
          "Quote-part individuelle des émissions liées aux Services Généraux - Eau (kg éq CO2)",
        name: "emplacement_paris2",
        defaultResponse: 80,
      },
      {
        question:
          "Quote-part individuelle des émissions liées aux Services Généraux - Déchets (kg éq CO2)",
        name: "emplacement_paris3",
        defaultResponse: 100,
      },
      {
        question:
          "Quote-part individuelle des émissions liées aux Services Généraux - Consommables et services (kg éq CO2)",
        name: "emplacement_lyon1",
        defaultResponse: 1250,
      },
      {
        question:
          "Quote-part individuelle des émissions liées aux immobilisations (kg éq CO2)",
        name: "emplacement_lyon2",
        defaultResponse: 12.5,
      },
    ],
    "18 Bd Malesherbes": [
      {
        question:
          "Quote-part individuelle des émissions liées aux Services Généraux - Energie (kg éq CO2)",
        name: "emplacement_paris1",
        defaultResponse: 400,
      },
      {
        question:
          "Quote-part individuelle des émissions liées aux Services Généraux - Eau (kg éq CO2)",
        name: "emplacement_paris2",
        defaultResponse: 152.7777778,
      },
      {
        question:
          "Quote-part individuelle des émissions liées aux Services Généraux - Déchets (kg éq CO2)",
        name: "emplacement_paris3",
        defaultResponse: 1833.333333,
      },
      {
        question:
          "Quote-part individuelle des émissions liées aux Services Généraux - Consommables et services (kg éq CO2)",
        name: "emplacement_lyon1",
        defaultResponse: 1250,
      },
      {
        question:
          "Quote-part individuelle des émissions liées aux immobilisations (kg éq CO2)",
        name: "emplacement_lyon2",
        defaultResponse: 12.5,
      },
    ],
  };

  const [emplacementBureau, setEmplacementBureau] = useState(
    emplacementBureauOptions[0].value
  );

  const [nbrOrdinateurs, setNbrOrdinateurs] = useState(0);
  const [nbrTelephones, setNbrTelephones] = useState(0);
  const [nbrEcrans, setNbrEcrans] = useState(0);

  useEffect(() => {
    const setReponsesOfStep = (stepState) => {
      stepState.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });
      setEmplacementBureau(form.getFieldValue("emplacement_bureau"));
      setNbrOrdinateurs(form.getFieldValue("nombre_ordinateurs"));
      setNbrTelephones(form.getFieldValue("nombre_telephones"));
      setNbrEcrans(form.getFieldValue("nombre_ecrans"));
    };
    const stepState = getResponsesOfQuestionsOfStep(step);
    if (stepState) {
      setReponsesOfStep(stepState);
    }
  }, [form, step]);

  const onFinish = (values) => {
    const stepState = [
      {
        question: "emplacement_bureau",
        response: values["emplacement_bureau"],
      },
      {
        question: "nombre_ordinateurs",
        response: values["nombre_ordinateurs"],
      },
      {
        question: "nombre_telephones",
        response: values["nombre_telephones"],
      },
      {
        question: "nombre_ecrans",
        response: values["nombre_ecrans"],
      },
    ];

    subQuestions[values["emplacement_bureau"]].forEach((res) => {
      stepState.push({
        question: res.name,
        response: res.defaultResponse,
      });
    });

    saveResponsesOfQuestionsStep(stepState, step);
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.blur();
    setNextStep();
  };

  return (
    <ConfiguredForm
      id={step}
      form={form}
      onFinish={onFinish}
      basicInputs={["without"]}
    >
      <div className="wizard-content-right-form-parent">
        <div className="pro-step-title-container">
          <span className="pro-step-title">Au bureau</span>
        </div>

        <FormItemSelectWithDetails
          form={form}
          name="emplacement_bureau"
          tooltipTitle="Ces émissions concernent les consommations des bâtiments, rapportées à chaque collaborateur."
          label="Votre bureau est situé …"
          options={emplacementBureauOptions}
          subQuestions={subQuestions}
          selectedValue={emplacementBureau}
          setSelectedValue={setEmplacementBureau}
        />

        <div className="forms-margin">
          <FormCounter
            form={form}
            name="nombre_ordinateurs"
            iconCounter={LaptopOutlined}
            textCounter={title_ordinateurs}
            value={nbrOrdinateurs}
          />
        </div>

        <FormCounter
          form={form}
          name="nombre_telephones"
          iconCounter={MobileOutlined}
          textCounter={title_telephones}
          value={nbrTelephones}
        />

        <FormCounter
          form={form}
          name="nombre_ecrans"
          iconCounter={DesktopOutlined}
          textCounter={title_ecrans}
          value={nbrEcrans}
        />
      </div>
    </ConfiguredForm>
  );
}
