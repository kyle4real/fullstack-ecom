import React from "react";
import { Switch, Route, useLocation, useRouteMatch, useHistory, Link } from "react-router-dom";

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
    const { url } = useRouteMatch();
    const history = useHistory();

    const buttonClickHandler = (to) => {
        history.push(`${url}${to}`);
    };

    return (
        <>
            <SAccount>
                <SAccountButtonsContainer>
                    <STitle>Welcome Kyle</STitle>
                    <SDescription>Explore your account</SDescription>
                    <SAccountButtons>
                        {buttons.map(({ button, to }, index) => (
                            <SButtonContainer key={index}>
                                <Button onClick={() => buttonClickHandler(to)}>{button}</Button>
                            </SButtonContainer>
                        ))}
                    </SAccountButtons>
                </SAccountButtonsContainer>
            </SAccount>
        </>
    );
};

export default Account;
