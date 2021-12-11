import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const ProtectedRoute = ({ children, roles, ...restOfProps }) => {
    const { accessToken, role } = useSelector((state) => state.auth);

    let authorized = true;
    if (roles) {
        authorized = roles.includes(role);
    }

    const errPage = <PageLayout error={"Not authorized to access this page"} />;
    return (
        <Route {...restOfProps}>
            {(() => {
                if (!accessToken || !authorized) return <Redirect to="/login" />;
                if (!authorized) return errPage;
                return children;
            })()}
        </Route>
    );
};

export default ProtectedRoute;
