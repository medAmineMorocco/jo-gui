import React, { Fragment } from "react";
import { Header } from "@components/header/Header";
import { Login } from "@components/login/Login";

export function LoginPage() {
  return (
    <Fragment>
      <Header>
        <img
          className="logo"
          src="/images/paris-2024.png"
          alt="paris-2024"
          width="260px"
          height="132px"
        />
      </Header>
      <Login />
    </Fragment>
  );
}
