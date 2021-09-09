import React from "react";
import { Switch, Route } from "react-router-dom";
import { Redirect, useRouteMatch } from "react-router";
import AuthForm from "../components/AuthForm/AuthForm";
import { useSelector } from "react-redux";
import UserAccount from "./UserAccount";
import AdminAccount from "./AdminAccount";

const AdminRoute = ({ children, ...restOfProps }) => {
    const { authData } = useSelector((state) => state.auth);

    const isLoggedIn = authData !== null;
    const isAdmin = isLoggedIn && authData?.isAdmin;
    return (
        <Route {...restOfProps}>
            {!isLoggedIn ? (
                <Redirect to="/account/login" />
            ) : !isAdmin ? (
                <Redirect to="/account" />
            ) : (
                children
            )}
        </Route>
    );
};

const UserRoute = ({ children, ...restOfProps }) => {
    const { authData } = useSelector((state) => state.auth);

    const isLoggedIn = authData !== null;
    const isUser = isLoggedIn && !authData?.isAdmin;
    return (
        <Route {...restOfProps}>
            {!isLoggedIn ? (
                <Redirect to="/account/login" />
            ) : !isUser ? (
                <Redirect to="/account/admin" />
            ) : (
                children
            )}
        </Route>
    );
};

const Auth = () => {
    const { path, url } = useRouteMatch();
    const { authData } = useSelector((state) => state.auth);

    const isLoggedIn = authData !== null;

    return (
        <>
            <Switch>
                <UserRoute exact path={path}>
                    <UserAccount />
                </UserRoute>
                <AdminRoute exact path={`/account/admin`}>
                    <AdminAccount />
                </AdminRoute>
                <Route path={`/account/login`}>
                    {isLoggedIn ? <Redirect to={url} /> : <AuthForm login />}
                </Route>
                <Route path={`/account/register`}>
                    {isLoggedIn ? <Redirect to={url} /> : <AuthForm />}
                </Route>
            </Switch>
        </>
    );
};

export default Auth;
