import React from "react";
import AuthForm from "../components/UI/AuthForm/AuthForm";
import Form from "../components/UI/Form/Form";

import PageLayout from "../components/UI/PageLayout/PageLayout";

const RegisterPage = () => {
    return (
        <PageLayout
            layoutArr={[
                {
                    type: "contain",
                    component: (
                        <AuthForm
                            form={<Form formArr={formArr} submitBtn={"Register"} />}
                            title={"Account Register"}
                            reroute={{
                                text: `Have an account already?`,
                                label: `Login`,
                                to: `/login`,
                            }}
                        />
                    ),
                },
            ]}
        />
    );
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
