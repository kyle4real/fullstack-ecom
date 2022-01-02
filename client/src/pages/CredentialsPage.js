import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMe } from "../app/actions/auth-actions";
import { authActions } from "../app/slices/auth-slice";
import Credentials from "../components/Credentials/Credentials";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const CredentialsPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getMe({ onComplete, onError }));
        return () => dispatch(authActions.resetMe());
    }, [dispatch]);

    return (
        <PageLayout
            loading={loading}
            error={error}
            head={{ title: "Your Credentials" }}
            layoutArr={[
                {
                    type: "contain",
                    customSize: "sm",
                    component: <Credentials />,
                },
            ]}
        />
    );
};

export default CredentialsPage;
