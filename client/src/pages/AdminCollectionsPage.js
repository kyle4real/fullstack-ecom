import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCollections } from "../app/actions/collections-actions";
import { collectionsActions } from "../app/slices/collections-slice";
import Collections from "../components/Collections/Collections";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const AdminCollectionsPage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getCollections({ onComplete, onError }));
        return () => dispatch(collectionsActions.resetCollections());
    }, [dispatch]);

    return (
        <PageLayout
            loading={loading}
            error={error}
            layoutArr={[
                {
                    type: "contain",
                    component: <Collections />,
                },
            ]}
        />
    );
};

export default AdminCollectionsPage;
