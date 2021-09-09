import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthForm from "../components/AuthForm/AuthForm";
import Account from "../components/Account/Account";

import ProductTable from "./../components/Admin/ProductTable/ProductTable";

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

const userButtons = [
    {
        button: "Orders",
        to: "/orders",
        component: null,
        isExact: false,
    },
    {
        button: "Credentials",
        to: "/credentials",
        component: null,
        isExact: false,
    },
];
const adminButtons = [
    {
        button: "Products",
        to: "/products",
        component: <ProductTable />,
        isExact: true,
    },
    {
        button: "Credentials",
        to: "/credentials",
        component: null,
        isExact: false,
    },
    {
        button: "Orders",
        to: "/orders",
        component: null,
        isExact: false,
    },
];

const Auth = () => {
    const { path, url } = useRouteMatch();
    const { authData } = useSelector((state) => state.auth);

    const isLoggedIn = authData !== null;

    return (
        <>
            <Switch>
                <UserRoute exact path={path}>
                    <Account buttons={userButtons} />
                </UserRoute>
                {userButtons.map(({ to, button, component, isExact }, index) => (
                    <UserRoute path={`${path}${to}`} key={index} exact={isExact}>
                        {component ? component : <>{button}</>}
                    </UserRoute>
                ))}

                <AdminRoute exact path={`${path}/admin`}>
                    <Account buttons={adminButtons} />
                </AdminRoute>
                {adminButtons.map(({ to, button, component, isExact }, index) => (
                    <AdminRoute path={`${path}/admin${to}`} key={index} exact={isExact}>
                        {component ? component : <>{button}</>}
                    </AdminRoute>
                ))}
                <AdminRoute path={`${path}/admin/products/:id`}>
                    <>test</>
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
