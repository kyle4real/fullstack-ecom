import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../app/actions/auth-actions";
import AuthForm from "../components/UI/AuthForm/AuthForm";
import Form from "../components/UI/Form/Form";

import PageLayout from "../components/UI/PageLayout/PageLayout";

const RegisterPage = () => {
    const dispatch = useDispatch();

    const registerHandler = (form) => {
        dispatch(register(form));
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
                                    submitBtn={"Register"}
                                    onSubmit={registerHandler}
                                />
                            }
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
        validity: (value) => {
            if (value.length === 0) {
                return "Please provide an email";
            } else if (!value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                return "Please provide a valid email";
            } else return false;
        },
    },
    {
        label: "Password",
        name: "password",
        type: "password",
        validity: (value) => {
            if (value.length === 0) {
                return "Please provide a password";
            } else if (value.length < 6) {
                return "Password must be 6+ characters";
            } else return false;
        },
    },
    {
        label: "Confirm Password",
        name: "confirmPassword",
        type: "password",
        validity: (value, formInput) => {
            if (value.length === 0) {
                return "Please confirm password";
            } else if (value !== formInput["password"]) {
                return "Must match password";
            }
        },
    },
    {
        label: "First Name",
        name: "firstName",
        type: "text",
        validity: (value) => {
            if (value.length === 0) {
                return "Please provide your first name";
            }
        },
    },
    {
        label: "Last Name",
        name: "lastName",
        type: "text",
        validity: (value) => {
            if (value.length === 0) {
                return "Please provide your last name";
            }
        },
    },
];

export default RegisterPage;
