import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginUser, registerUser } from "../../store/auth-actions";

import {
    SAuthForm,
    SButton,
    SForm,
    SFormContainer,
    SFormControl,
    SFormForgotPassword,
    SFormSwitch,
    SFormSwitchLink,
    SFormSwitchSpan,
    SFormTitle,
    SHideIcon,
    SInput,
    SLabel,
    SPasswordWrapper,
    SShowIcon,
} from "./styles";

const LoginForm = ({ input, onInputChange }) => {
    const [showPass, setShowPass] = useState(false);

    const { email, password } = input;
    return (
        <>
            <SFormControl>
                <SLabel htmlFor="login-email">Email Address:</SLabel>
                <SInput
                    id="login-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onInputChange}
                />
            </SFormControl>
            <SFormControl>
                <SLabel htmlFor="login-password">Password:</SLabel>
                <SPasswordWrapper>
                    <SInput
                        id="login-password"
                        name="password"
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={onInputChange}
                    />
                    {showPass ? (
                        <SShowIcon onClick={() => setShowPass((p) => !p)} />
                    ) : (
                        <SHideIcon onClick={() => setShowPass((p) => !p)} />
                    )}
                </SPasswordWrapper>
            </SFormControl>
            <SFormControl>
                <SButton>Log In</SButton>
            </SFormControl>
        </>
    );
};

const RegisterForm = ({ input, onInputChange }) => {
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);

    const { email, password, confirmPassword, firstName, lastName } = input;
    return (
        <>
            <SFormControl>
                <SLabel htmlFor="register-email">Email *</SLabel>
                <SInput
                    id="register-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={onInputChange}
                />
            </SFormControl>
            <SFormControl>
                <SLabel htmlFor="register-password">Password *</SLabel>
                <SPasswordWrapper>
                    <SInput
                        id="register-password"
                        name="password"
                        type={showPass ? "text" : "password"}
                        value={password}
                        onChange={onInputChange}
                    />
                    {showPass ? (
                        <SShowIcon onClick={() => setShowPass((p) => !p)} />
                    ) : (
                        <SHideIcon onClick={() => setShowPass((p) => !p)} />
                    )}
                </SPasswordWrapper>
            </SFormControl>
            <SFormControl>
                <SLabel htmlFor="register-confirm-password">Confirm Password *</SLabel>
                <SPasswordWrapper>
                    <SInput
                        id="register-confirm-password"
                        name="confirmPassword"
                        type={showConfirmPass ? "text" : "password"}
                        value={confirmPassword}
                        onChange={onInputChange}
                    />
                    {showConfirmPass ? (
                        <SShowIcon onClick={() => setShowConfirmPass((p) => !p)} />
                    ) : (
                        <SHideIcon onClick={() => setShowConfirmPass((p) => !p)} />
                    )}
                </SPasswordWrapper>
            </SFormControl>
            <SFormControl>
                <SLabel htmlFor="register-first-name">First Name *</SLabel>
                <SInput
                    id="register-first-name"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={onInputChange}
                />
            </SFormControl>
            <SFormControl>
                <SLabel htmlFor="register-last-name">Last Name *</SLabel>
                <SInput
                    id="register-last-name"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={onInputChange}
                />
            </SFormControl>
            <SFormControl>
                <SButton>Create Account</SButton>
            </SFormControl>
        </>
    );
};

const initialFormInput = (login) => {
    const obj = {
        email: "",
        password: "",
    };
    return login ? obj : { ...obj, confirmPassword: "", firstName: "", lastName: "" };
};

const AuthForm = ({ login }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState(initialFormInput(login));

    useEffect(() => {
        setFormInput(initialFormInput(login));
    }, [login]);

    const inputChangeHandler = (e) => {
        setFormInput((p) => ({ ...p, [e.target.name]: e.target.value }));
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(login ? loginUser(formInput, history) : registerUser(formInput, history));
    };

    return (
        <SAuthForm>
            <SFormContainer>
                <SFormTitle>{login ? <>Log Into My Ecom</> : <>Create Account</>}</SFormTitle>
                <SForm noValidate autoComplete="off" onSubmit={formSubmitHandler}>
                    {login ? (
                        <LoginForm input={formInput} onInputChange={inputChangeHandler} />
                    ) : (
                        <RegisterForm input={formInput} onInputChange={inputChangeHandler} />
                    )}
                </SForm>
                {!login && (
                    <SFormForgotPassword to="/">I've forgotten my password</SFormForgotPassword>
                )}
                <SFormSwitch>
                    <SFormSwitchSpan>
                        {login ? <>New to Ecom?</> : <>Already registered?</>}&nbsp;
                    </SFormSwitchSpan>
                    <SFormSwitchLink to={login ? "/account/register" : "/account/login"}>
                        {login ? <>Create An Account</> : <>Sign Into Your Account</>}
                    </SFormSwitchLink>
                </SFormSwitch>
            </SFormContainer>
        </SAuthForm>
    );
};

export default AuthForm;
