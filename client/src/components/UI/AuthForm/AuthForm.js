import React from "react";
import { SCardContainer, SFixedContainer, SFlexContainer } from "../Containers/styles";
import Form from "../Form/Form";
import { SAuthFormReroute, SAuthFormTitle, SRerouteLink, SRerouteText } from "./styles";

const AuthForm = ({ formArr, submitBtn, reroute, title }) => {
    return (
        <SFlexContainer>
            <SFixedContainer maxWidth={300}>
                <SCardContainer>
                    <SAuthFormTitle>{title}</SAuthFormTitle>
                    <Form formArr={formArr} submitBtn={submitBtn} />
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
