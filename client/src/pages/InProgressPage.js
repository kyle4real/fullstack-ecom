import React from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const InProgressPage = () => {
    const { pathname } = useLocation();
    return (
        <PageLayout
            head={{ title: "Check Back Later", tagline: "Page In Progress", title2: pathname }}
            layoutArr={[]}
        />
    );
};

export default InProgressPage;
