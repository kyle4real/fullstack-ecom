import React from "react";
import { SCardContainer, SFixedContainer, SFlexContainer } from "../Containers/styles";
import { SAuthFormReroute, SAuthFormTitle, SRerouteLink, SRerouteText } from "./styles";

const AuthForm = ({ form, reroute, title }) => {
    return (
        <SFlexContainer>
            <SFixedContainer maxWidth={300}>
                <SCardContainer>
                    <SAuthFormTitle>{title}</SAuthFormTitle>
                    {form}
                    <SAuthFormReroute>
                        <SRerouteText>{reroute.text}&nbsp;</SRerouteText>
                        <SRerouteLink to={reroute.to}>{reroute.label}</SRerouteLink>
                    </SAuthFormReroute>
                </SCardContainer>
            </SFixedContainer>
        </SFlexContainer>
    );
};

export default AuthForm;
