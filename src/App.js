import React from 'react';
import {Route, Redirect, BrowserRouter} from "react-router-dom";
import {LoginPage} from "@pages/login/LoginPage";
import {HomePage} from "@pages/home/HomePage";
import {getCurrentUser} from "@services/authService"
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/login" component={() => !getCurrentUser() ? <LoginPage/> : <Redirect to="/home"/>} />
            <Route path={["/", "/home"]} component={() => getCurrentUser() ? <HomePage/> : <Redirect to="/login"/>} />
        </BrowserRouter>
    );
}

export default App;
