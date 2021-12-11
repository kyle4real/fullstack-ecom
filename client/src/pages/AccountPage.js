import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Account from "../components/Account/Account";

import PageLayout from "../components/UI/PageLayout/PageLayout";

const AccountPage = () => {
    const { path, url } = useRouteMatch();

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
