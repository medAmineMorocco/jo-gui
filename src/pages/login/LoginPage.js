import React, { Fragment } from "react";
import { Header } from "@components/header/Header";
import { Login } from "@components/login/Login";

export function LoginPage() {
  return (
    <Fragment>
      <Header />
      <Login />
    </Fragment>
  );
}
