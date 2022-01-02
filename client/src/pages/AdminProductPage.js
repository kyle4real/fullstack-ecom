import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../app/actions/product-actions_admin";
import { productActions } from "../app/slices/product-slice";

import AdminProduct from "../components/AdminProduct/AdminProduct";
import PageLayout from "../components/UI/PageLayout/PageLayout";

const AdminProductPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const onComplete = () => setLoading(false);
        const onError = (err) => setError(err);

        dispatch(getProduct(params.product, { onComplete, onError }));
        return () => dispatch(productActions.resetProduct());
    }, [dispatch, params.product]);

    return (
        <PageLayout
            loading={loading}
            error={error}
            head={{ backOnly: true }}
            layoutArr={[
                {
                    type: "contain",
                    component: <AdminProduct />,
                },
            ]}
        />
    );
};

export default AdminProductPage;
