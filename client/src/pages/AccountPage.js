import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Account from "../components/Account/Account";

import PageLayout from "../components/UI/PageLayout/PageLayout";
import ProtectedRoute from "../routes/ProtectedRoute";
import AdminCollectionPage from "./AdminCollectionPage";
import AdminCollectionsPage from "./AdminCollectionsPage";
import AdminOrdersPage from "./AdminOrdersPage";
import AdminProductNewPage from "./AdminProductNewPage";
import AdminProductPage from "./AdminProductPage";
import AdminProductsPage from "./AdminProductsPage";
import CredentialsPage from "./CredentialsPage";

const AccountPage = () => {
    const { path } = useRouteMatch();

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
            <Route exact path={`${path}/credentials`}>
                <CredentialsPage />
            </Route>
            {/* PRODUCTS */}
            <ProtectedRoute exact path={`${path}/admin/products`} roles={["admin"]}>
                <AdminProductsPage />
            </ProtectedRoute>
            <ProtectedRoute exact path={`${path}/admin/products/new`} roles={["admin"]}>
                <AdminProductNewPage />
            </ProtectedRoute>
            <ProtectedRoute exact path={`${path}/admin/products/:product`} roles={["admin"]}>
                <AdminProductPage />
            </ProtectedRoute>
            {/* COLLECTIONS */}
            <ProtectedRoute exact path={`${path}/admin/collections`} roles={["admin"]}>
                <AdminCollectionsPage />
            </ProtectedRoute>
            <ProtectedRoute exact path={`${path}/admin/collections/:collection`} roles={["admin"]}>
                <AdminCollectionPage />
            </ProtectedRoute>
            {/* ORDERS */}
            <ProtectedRoute exact path={`${path}/admin/orders`} roles={["admin"]}>
                <AdminOrdersPage />
            </ProtectedRoute>
        </Switch>
    );
};

export default AccountPage;
