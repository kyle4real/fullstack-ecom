import React from "react";
import { useSelector } from "react-redux";
import {
    SCredentials,
    SCredentialsInfo,
    SInfoControl,
    SInfoLabelSpan,
    SInfoSpan,
    SLockIcon,
    STitle,
} from "./styles";

const Credentials = () => {
    const { me } = useSelector((state) => state.auth);
    const role = me.role;
    const isAdmin = role === "admin";
    return (
        <SCredentials>
            <SCredentialsInfo>
                <SLockIcon />
                <STitle>Credentials</STitle>
                <SInfoControl>
                    <SInfoLabelSpan>Name:</SInfoLabelSpan>
                    <SInfoSpan>{me?.name}</SInfoSpan>
                </SInfoControl>
                <SInfoControl>
                    <SInfoLabelSpan>Email Address:</SInfoLabelSpan>
                    <SInfoSpan>{me?.email}</SInfoSpan>
                </SInfoControl>
                {isAdmin && (
                    <SInfoControl>
                        <SInfoLabelSpan>Role:</SInfoLabelSpan>
                        <SInfoSpan>{me?.role}</SInfoSpan>
                    </SInfoControl>
                )}
            </SCredentialsInfo>
        </SCredentials>
    );
};

export default Credentials;
