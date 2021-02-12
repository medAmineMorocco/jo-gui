import React, { Fragment, useState } from "react";
import { Form } from "antd";
import * as dompurify from "dompurify";
import { StyledTitle } from "@components/title/StyledTitle";
import { BoxSides } from "@components/box/BoxSides";
import { useTabletOrMobileSize } from "@hooks/window";
import { login } from "@services/authService";
import { useHistory } from "react-router-dom";
import { FormItemInput } from "@components/form/formItemInput/FormItemInput";
import { Form as ConfiguredForm } from "@components/form/Form";
import { Button } from "@components/button/Button";
import { FormItemPassword } from "@components/form/formItemPassword/FormItemPassword";
import { Checkbox } from "@components/form/checkbox/Checkbox";

import {
  HERO_TITLE1,
  HERO_TITLE2,
  IDENTIFIER,
  PASSWORD,
  LOGIN,
  IDENTIFIER_REQUIRED,
  PASSWORD_REQUIRED,
  IDENTIFIER_NOT_VALID,
  TERMS_DESCRIPTION,
  CGU_MSG_ERROR,
} from "@utils/constants";
import { notify } from "@utils/notification";
import "./login.css";

export function Login() {
  const isMobileOrTablet = useTabletOrMobileSize();
  const history = useHistory();
  const [form] = Form.useForm();
  const [isCGUchecked, setCGUchecked] = useState(false);
  const [isCGUmsgErrorShown, setShowCGUmsgError] = useState(false);

  const onFinish = (values) => {
    if (isCGUchecked) {
      setShowCGUmsgError(false);
      login(values.email, values.password)
        .then(() => {
          history.push("/home");
        })
        .catch(async (error) => {
          if (error.status === 400) {
            form.setFields([
              {
                name: "email",
                errors: [IDENTIFIER_NOT_VALID],
              },
            ]);
          } else {
            notify(error.toString());
          }
        });
    } else {
      setShowCGUmsgError(true);
    }
  };

  const onFinishFailed = () => {
    if (isCGUchecked) {
      setShowCGUmsgError(false);
    } else {
      setShowCGUmsgError(true);
    }
  };

  const onCGUcheckChange = (value) => {
    setCGUchecked(value);
  };

  const openCGU = () => {
    window.open("/pdfs/SUS - 210203 - CONFIDENTIEL - CGU.pdf");
  };

  const titleWithForm = (
    <Fragment>
      <StyledTitle
        className="login-styled-title"
        title1={HERO_TITLE1}
        title2={HERO_TITLE2}
        color={"styled-title-container-main"}
      />
      <ConfiguredForm
        name="login"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        basicInputs={["login_email"]}
      >
        <div className="login-fields">
          <FormItemInput
            className="email-input"
            label={IDENTIFIER}
            name="email"
            rules={[
              { required: true, message: IDENTIFIER_REQUIRED },
              {
                pattern: new RegExp(/^\w+([.-]?\w+)+@paris2024\.org/g),
                message: IDENTIFIER_NOT_VALID,
              },
            ]}
          />
          <FormItemPassword
            className="password-input"
            label={PASSWORD}
            name="password"
            rules={[{ required: true, message: PASSWORD_REQUIRED }]}
          />
        </div>

        <div className="CGU-container">
          <Checkbox value={isCGUchecked} onChange={onCGUcheckChange} />
          <span
            className="CGU-description"
            onClick={openCGU}
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(TERMS_DESCRIPTION),
            }}
          ></span>
        </div>
        {isCGUmsgErrorShown && <p className="CGU-msg-error">{CGU_MSG_ERROR}</p>}

        <Form.Item className="login-submit">
          <Button text={LOGIN} htmlType="submit" style={{ float: "right" }} />
        </Form.Item>
      </ConfiguredForm>
    </Fragment>
  );

  if (isMobileOrTablet) {
    return <div className="login-container-mobile">{titleWithForm}</div>;
  } else {
    const left = <div className="left-side-login" />;
    const right = <div className="right-side-login">{titleWithForm}</div>;
    return <BoxSides left={left} right={right} height="64vh" />;
  }
}
