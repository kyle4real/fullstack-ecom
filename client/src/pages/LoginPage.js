import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/actions/auth-actions";

import {
    SCardContainer,
    SFixedContainer,
    SFlexContainer,
} from "../components/UI/Containers/styles";
import Form from "../components/UI/Form/Form";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const LoginPage = () => {
    const dispatch = useDispatch();

    const loginHandler = (form) => {
        dispatch(login(form));
    };

    const component = (
        <SFlexContainer>
            <SFixedContainer maxWidth={300}>
                <SCardContainer>
                    <Form
                        formTitle={"Login"}
                        formArr={formArr}
                        submitBtn={"Login"}
                        onSubmit={loginHandler}
                    />
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
];

export default LoginPage;
