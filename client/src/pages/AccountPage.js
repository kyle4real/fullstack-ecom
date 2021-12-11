import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import Account from "../components/Account/Account";

import PageLayout from "../components/UI/PageLayout/PageLayout";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const AccountPage = () => {
    const { path, url } = useRouteMatch();
    const { authData } = useSelector((state) => state.auth);

    return (
        <Switch>
            <Route exact path={path}>
                <PageLayout
                    layoutArr={[
                        {
                            type: "contain",
                            component: <Account />,
                        },
                    ]}
                />
            </Route>
        </Switch>
    );
};

export default AccountPage;
