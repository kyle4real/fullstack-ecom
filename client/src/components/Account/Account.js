import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { logout } from "../../app/actions/auth-actions";

import Button from "../UI/Button/Button";
import { SAccount, SAccountButtons, SAccountButtonsContainer, SButtonContainer } from "./styles";

const Account = () => {
    const { firstName, role } = useSelector((state) => state.auth);
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
        <>
            <SAccount>
                <SAccountButtonsContainer>
                    <SAccountButtons>
                        {buttons.map(({ label, to }, index) => (
                            <SButtonContainer key={index}>
                                <Button
                                    style={{ width: "100%" }}
                                    onClick={() => buttonClickHandler(to)}
                                >
                                    {label}
                                </Button>
                            </SButtonContainer>
                        ))}
                        <SButtonContainer>
                            <Button style={{ width: "100%" }} secondary onClick={logoutHandler}>
                                Logout
                            </Button>
                        </SButtonContainer>
                    </SAccountButtons>
                </SAccountButtonsContainer>
            </SAccount>
        </>
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
    {
        label: "Orders",
        to: "/admin/orders",
    },
];

export default Account;
