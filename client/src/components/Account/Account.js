import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";
import { logout } from "../../app/actions/auth-actions";

import { authActions } from "../../app/slices/auth-slice";

import Button from "../UI/Button/Button";
import {
    SAccount,
    SAccountButtons,
    SAccountButtonsContainer,
    SButtonContainer,
    SDescription,
    STitle,
} from "./styles";

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
                    <STitle>Welcome {firstName}</STitle>
                    <SDescription>Explore your account</SDescription>
                    <SAccountButtons>
                        {buttons.map(({ label, to }, index) => (
                            <SButtonContainer key={index}>
                                <Button onClick={() => buttonClickHandler(to)}>{label}</Button>
                            </SButtonContainer>
                        ))}
                        <SButtonContainer>
                            <Button secondary onClick={logoutHandler}>
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
        to: "/products",
    },
    {
        label: "Orders",
        to: "/orders",
    },
];

export default Account;
