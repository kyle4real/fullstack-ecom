import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect, useRouteMatch } from "react-router";
import AuthForm from "../components/AuthForm/AuthForm";

const Auth = () => {
    const { path, url } = useRouteMatch();

    const isAuth = false;

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
