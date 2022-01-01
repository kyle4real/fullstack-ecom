import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/actions/auth-actions";
import AuthForm from "../components/UI/AuthForm/AuthForm";
import Form from "../components/UI/Form/Form";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const LoginPage = () => {
    const dispatch = useDispatch();

    const loginHandler = (form) => {
        dispatch(login(form));
    };

    return (
        <PageLayout
            layoutArr={[
                {
                    type: "contain",
                    component: (
                        <AuthForm
                            form={
                                <Form
                                    formArr={formArr}
                                    submitBtn={"Login"}
                                    onSubmit={loginHandler}
                                />
                            }
                            title={"Account Login"}
                            reroute={{
                                text: `Don't have an account?`,
                                label: `Create One`,
                                to: `/register`,
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
];

export default LoginPage;
