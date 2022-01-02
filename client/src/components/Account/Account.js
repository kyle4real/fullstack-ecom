import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { logout } from "../../app/actions/auth-actions";

import Button from "../UI/Button/Button";
import { SCardContainer } from "../UI/Containers/styles";
import { SButtonControl } from "./styles";

const Account = () => {
    const { role } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    const history = useHistory();

    const buttonClickHandler = (to) => {
        history.push(`${url}${to}`);
    };

    const logoutHandler = () => {
        dispatch(logout());
    };

    const buttons = role === "admin" ? adminButtons : userButtons;
    return (
        <SCardContainer>
            {buttons.map(({ label, to }, index) => (
                <SButtonControl key={index}>
                    <Button style={{ width: "100%" }} onClick={() => buttonClickHandler(to)}>
                        {label}
                    </Button>
                </SButtonControl>
            ))}
            <SButtonControl>
                <Button style={{ width: "100%" }} secondary onClick={logoutHandler}>
                    Logout
                </Button>
            </SButtonControl>
        </SCardContainer>
    );
};

const userButtons = [
    {
        label: "Credientials",
        to: "/credentials",
    },
];
const adminButtons = [
    ...userButtons,
    {
        label: "Products",
        to: "/admin/products",
    },
    {
        label: "Collections",
        to: "/admin/collections",
    },
];

export default Account;
