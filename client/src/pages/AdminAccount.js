import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Account from "../components/Account/Account";
import ProductTable from "../components/Admin/ProductTable/ProductTable";

const adminButtons = [
    {
        button: "Products",
        to: "/products",
    },
    {
        button: "Credentials",
        to: "/credentials",
    },
    {
        button: "Orders",
        to: "/orders",
    },
];

const AdminAccount = () => {
    const { path } = useRouteMatch();

    return (
        <>
            <Account buttons={adminButtons} />
        </>
    );
};

export default AdminAccount;
