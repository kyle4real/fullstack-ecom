import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";

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

const Account = ({ buttons }) => {
    const { authData } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const { url } = useRouteMatch();
    const history = useHistory();

    const buttonClickHandler = (to) => {
        history.push(`${url}${to}`);
    };

    const logoutHandler = () => {
        dispatch(authActions.logoutUser());

        history.push("/");
    };

    return (
        <>
            <SAccount>
                <SAccountButtonsContainer>
                    <STitle>Welcome {authData?.name?.split(" ")?.[0]}</STitle>
                    <SDescription>Explore your account</SDescription>
                    <SAccountButtons>
                        {buttons.map(({ button, to }, index) => (
                            <SButtonContainer key={index}>
                                <Button onClick={() => buttonClickHandler(to)}>{button}</Button>
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

export default Account;
