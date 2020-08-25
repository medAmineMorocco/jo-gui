import React from 'react';
import {Route, Redirect, BrowserRouter} from "react-router-dom";
import {LoginPage} from "@pages/login/LoginPage";
import {HomePage} from "@pages/home/HomePage";
import {IntroPage} from "@pages/intro/IntroPage";
import {getCurrentUser} from "@services/authService"
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/login" component={() => !getCurrentUser() ? <LoginPage/> : <Redirect to="/home"/>} />
            <Route exact path={["/", "/home"]} component={() => getCurrentUser() ? <HomePage/> : <Redirect to="/login"/>} />
            <Route exact path="/intro" component={() => getCurrentUser() ? <IntroPage/> : <Redirect to="/login"/>} />
        </BrowserRouter>
    );
}

export default App;
