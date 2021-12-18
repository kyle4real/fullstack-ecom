import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getCollection } from "../app/actions/collection-actions";
import { collectionActions } from "../app/slices/collection-slice";
import Collection from "../components/Collection/Collection";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const AdminCollectionPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getCollection(params.collection, { onComplete, onError }));
        return () => dispatch(collectionActions.resetCollection());
    }, [dispatch, params.collection]);

    return (
        <PageLayout
            loading={loading}
            error={error}
            layoutArr={[{ type: "contain", component: <Collection /> }]}
        />
    );
};

export default AdminCollectionPage;
