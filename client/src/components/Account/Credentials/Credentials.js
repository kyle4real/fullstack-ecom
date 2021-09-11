import React from "react";
import { useSelector } from "react-redux";
import { STitle } from "../styles";
import {
    SCredentials,
    SCredentialsInfo,
    SInfoControl,
    SInfoLabelSpan,
    SInfoSpan,
    SLockIcon,
} from "./styles";

const Credentials = () => {
    const { authData } = useSelector((state) => state.auth);
    return (
        <SCredentials>
            <SCredentialsInfo>
                <SLockIcon />
                <STitle>Credentials</STitle>
                <SInfoControl>
                    <SInfoLabelSpan>Name:</SInfoLabelSpan>
                    <SInfoSpan>{authData?.name}</SInfoSpan>
                </SInfoControl>
                <SInfoControl>
                    <SInfoLabelSpan>Email Address:</SInfoLabelSpan>
                    <SInfoSpan>{authData?.email}</SInfoSpan>
                </SInfoControl>
            </SCredentialsInfo>
        </SCredentials>
    );
};

export default Credentials;
