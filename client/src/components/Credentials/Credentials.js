import React from "react";
import { useSelector } from "react-redux";
import { SCardContainer } from "../UI/Containers/styles";
import { SInfoControl, SInfoLabelSpan, SInfoSpan } from "./styles";

const Credentials = () => {
    const { me } = useSelector((state) => state.auth);
    const role = me?.role;
    const isAdmin = role === "admin";
    return (
        <SCardContainer>
            <>
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
            </>
        </SCardContainer>
    );
};

export default Credentials;
