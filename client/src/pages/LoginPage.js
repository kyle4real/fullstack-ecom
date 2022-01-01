import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/actions/auth-actions";
import AuthForm from "../components/UI/AuthForm/AuthForm";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const LoginPage = () => {
    const dispatch = useDispatch();

    const loginHandler = (form) => {
        dispatch(login(form));
    };

    const component = (
        <AuthForm
            formArr={formArr}
            submitBtn={"Login"}
            title={"Account Login"}
            reroute={{ text: `Don't have an account?`, label: `Create One`, to: `/register` }}
        />
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
