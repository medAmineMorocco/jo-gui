import React, { Fragment } from "react";
import { Form } from "antd";
import { StyledTitle } from "@components/title/StyledTitle";
import { BoxSides } from "@components/box/BoxSides";
import { useWindowSize } from "@hooks/window";
import { login } from "@services/authService";
import { useHistory } from "react-router-dom";
import { FormItemInput } from "@components/form/formItemInput/FormItemInput";
import { Form as ConfiguredForm } from "@components/form/Form";
import { Button } from "@components/button/Button";

import {
  HERO_TITLE1,
  HERO_TITLE2,
  IDENTIFIER,
  LOGIN,
  IDENTIFIER_REQUIRED,
  IDENTIFIER_NOT_VALID,
} from "@utils/constants";
import { notify } from "@utils/notification";
import "./login.css";

export function Login() {
  const isMobile = useWindowSize();
  const history = useHistory();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    login(values.email)
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
          const description = await error.text();
          notify(description);
        }
      });
  };

  const titleWithForm = (
    <Fragment>
      <StyledTitle title1={HERO_TITLE1} title2={HERO_TITLE2} />
      <ConfiguredForm
        name="login"
        form={form}
        onFinish={onFinish}
        basicInputs={["login_email"]}
      >
        <FormItemInput
          className="email-input"
          label={IDENTIFIER}
          name="email"
          rules={[
            { required: true, message: IDENTIFIER_REQUIRED },
            {
              pattern: new RegExp(/^\w+([.-]?\w+)+@paris2024.org/g),
              message: IDENTIFIER_NOT_VALID,
            },
          ]}
        />

        <Form.Item className="login-submit">
          <Button text={LOGIN} htmlType="submit" style={{ float: "right" }} />
        </Form.Item>
      </ConfiguredForm>
    </Fragment>
  );

  if (isMobile) {
    return <div className="login-container-mobile">{titleWithForm}</div>;
  } else {
    const left = <div className="left-side-login" />;
    const right = <div className="right-side-login">{titleWithForm}</div>;
    return <BoxSides left={left} right={right} height="64vh" />;
  }
}
