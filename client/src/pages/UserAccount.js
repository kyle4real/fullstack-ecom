import React from "react";
import Account from "../components/Account/Account";

const userButtons = [
    {
        button: "Orders",
        to: "/orders",
    },
    {
        button: "Credentials",
        to: "/credentials",
    },
];

const UserAccount = () => {
    return (
        <>
            <Account buttons={userButtons} />
        </>
    );
};

export default UserAccount;
