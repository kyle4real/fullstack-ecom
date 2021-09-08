import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect, useRouteMatch } from "react-router";
import AuthForm from "../components/AuthForm/AuthForm";
import { useSelector } from "react-redux";

const Auth = () => {
    const { path, url } = useRouteMatch();
    const { authData } = useSelector((state) => state.auth);

    const isAuth = authData !== null;

    return (
        <>
            <Switch>
                <Route exact path={`${path}/`}>
                    {isAuth ? <>Authorized</> : <Redirect to={`${url}/login`} />}
                </Route>
                <Route path={`${path}/login`}>
                    <AuthForm login />
                </Route>
                <Route path={`${path}/register`}>
                    <AuthForm />
                </Route>
            </Switch>
        </>
    );
};

export default Auth;
