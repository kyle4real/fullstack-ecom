import React from "react";
import { Switch, Route, useLocation, useRouteMatch } from "react-router-dom";

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
    return (
        <>
            <SAccount>
                <SAccountButtonsContainer>
                    <STitle>Welcome Kyle</STitle>
                    <SDescription>Explore your account</SDescription>
                    <SAccountButtons>
                        {buttons.map(({ button, to }, index) => (
                            <SButtonContainer key={index}>
                                <Button>{button}</Button>
                            </SButtonContainer>
                        ))}
                    </SAccountButtons>
                </SAccountButtonsContainer>
            </SAccount>
        </>
    );
};

export default Account;
