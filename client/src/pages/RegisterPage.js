import React from "react";

import {
    SCardContainer,
    SFixedContainer,
    SFlexContainer,
} from "../components/UI/Containers/styles";
import Form from "../components/UI/Form/Form";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const RegisterPage = () => {
    const component = (
        <SFlexContainer>
            <SFixedContainer maxWidth={300}>
                <SCardContainer>
                    <Form formTitle={"Register"} formArr={formArr} submitBtn={"Register"} />
                </SCardContainer>
            </SFixedContainer>
        </SFlexContainer>
    );
    return <PageLayout layoutArr={[{ type: "contain", component }]} />;
};

const formArr = [
    {
        label: "Email Address",
        name: "email",
        type: "text",
        initialState: "",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        initialState: "",
    },
    {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
        initialState: "",
    },
    {
        label: "First Name",
        name: "firstName",
        type: "text",
        initialState: "",
    },
    {
        label: "Last Name",
        name: "lastName",
        type: "text",
        initialState: "",
    },
];

export default RegisterPage;
